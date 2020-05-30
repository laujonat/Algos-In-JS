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

const searchData = function(fileSync, searchText) {
  fileSync.sortOn("name");
  let res = fileSync.filter((m) => {
    let regex = new RegExp(searchText, "gi");
    return m.name.match(regex);
  });

  return new Promise((resolve) => resolve(res));
};

// Filter result data by input query string
let showSearchResults = function(fileSync, searchQuery, successCallback) {
  let a = searchData(fileSync, searchQuery).then((res) => {
    successCallback(res);
  });
  return new Promise((resolve) => resolve(a));
};
showSearchResults = memoize(showSearchResults);
showSearchResults = debounce(showSearchResults, 200);
module.exports = {
  showSearchResults,
  postData,
};
