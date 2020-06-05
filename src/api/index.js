const { debounce, memoize } = require("../perf.js");
let headers = new Headers();

headers.set("Content-Type", "application/json;charset=UTF-8");
async function postData(url = "", data = {}) {
  let object = {};
  data.forEach((value, key) => {
    object[key] = value;
  });
  let json = JSON.stringify(object);
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers,
    body: json, // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const searchData = function(data, searchText) {
  if (!Array.isArray(data)) {
    return null;
  }
  let res;
  // if (data.elements) {
  res = data.filter((m) => {
    let regex = new RegExp(searchText, "gi");
    return m.name.match(regex);
  });
  // }
  return new Promise((resolve, reject) => {
    try {
      resolve(res);
    } catch (e) {
      reject(res);
    }
  });
};

// Filter result data by input query string
let showSearchResults = async function(fileSync, searchQuery, successCallback) {
  // if (fileSync.data) {
  let res = null;
  try {
    res = await searchData(fileSync, searchQuery);
    console.log("RES", res);
    if (res) {
      return new Promise((resolve) => resolve(successCallback(res)));
    }
  } catch (e) {
    console.error(e);
  }

  return res;
};
showSearchResults = memoize(showSearchResults);
showSearchResults = debounce(showSearchResults, 200);
module.exports = {
  showSearchResults,
  postData,
};
