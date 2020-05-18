"use-strict";
const { createTable } = require("./table.js");
let viewpanel = document.querySelector("#view-content");
let searchInput = document.getElementById("search-input");
let collection = document.querySelector(".collection");
let colitem = document.querySelector(".collection-item");
let headers = new Headers();
let colmap = new Map();
let fileSync = [];
// Handle loading of data structure types in view panel
const loadStruct = (e, dataid) => {
  e.preventDefault();
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(`/dsaa/${dataid}`, options)
    .then(function(response) {
      return response.json();
    })
    .then(({ data: { struct } }) => renderStruct({ ...struct }));
};
headers.append("Content-Type", "text/plain");
headers.set("Content-Type", "application/json;charset=UTF-8");
const xhttp = new XMLHttpRequest();
const sendGetRequest = async (loadStruct) => {
  xhttp.open("GET", "/syncFiles", true);
  xhttp.onloadend = function(e) {
    let res = xhttp.responseText;
    fileSync = Array.from(JSON.parse(res));
    fileSync.forEach((el, i) => {
      const li = document.createElement("li");
      const div = document.createElement("div");
      li.setAttribute("class", "collection-item");
      li.onclick = (e) => handleListItemEvent(el);
      div.setAttribute("class", "collection-item-wrap");
      div.appendChild(document.createTextNode(el.name));
      li.appendChild(div);
      if (el.category === "dsaa") {
        li.addEventListener("click", (e) => loadStruct(e, el.id));
      }
      colmap.set(el.id, li);
      currentSelected.set(el.id, false);
      collection.appendChild(li);
    });
  };
  xhttp.send();
};

const isEmpty = function(str) {
  return !str || 0 === str.length;
};

const renderStruct = (data) => {
  if (data.name) {
    document.getElementById("view-content-header").innerHTML = data.name;
    for (const key of Object.keys(data)) {
      if (key === "params") {
        createTable(key, data[key]);
      } else if (key === "properties") {
        if (Object.values(data[key]).length === 0) {
          return;
        }
        createTable(key, data[key]);
      }
    }
  }
};
const searchData = function(searchText) {
  const regex = new RegExp(searchText, "gi");
  fileSync.sort((a, b) => a.id - b.id);
  return new Promise((resolve) =>
    resolve(fileSync.filter((m) => m.name.match(regex)))
  );
};

function successCallback(res) {
  res.map((el) => {
    collection.appendChild(colmap.get(el.id));
  });
  return res;
}
// Filter result data by input query string
var showSearchResults = function(searchQuery) {
  let a = searchData(searchQuery).then((res) => {
    return successCallback(res);
  });
  return new Promise((resolve) => resolve(a));
};

const memoizeResult = function(func) {
  const cache = new Map();
  return (...args) => {
    const key = args[0];
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const val = func.apply(this, arguments);
      cache.set(key, val);
      return val;
    }
  };
};

const debounce = function(fn, time) {
  let timeout;
  return function() {
    const _fn = () => {
      return fn.apply(this, arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(_fn, time);
  };
};
// showSearchResults = memoizeResult(showSearchResults);
showSearchResults = debounce(showSearchResults, 200);
const handleChange = function(e) {
  let colitem = document.querySelector(".collection-item");
  if (isEmpty(e.currentTarget.value)) {
    collection.innerHTML = "";
    if (colitem) {
      colitem.onblur = (e) => {
        e.currentTarget.value = "";
        collection.innerHTML = "";
      };
    }
  }
  showSearchResults(e.currentTarget.value);
};

const clearView = function() {
  viewpanel.innerHTML = "";
};

let currentSelected = new Map();
// Attach event listener to list items
const handleListItemEvent = function(edge) {
  currentSelected.set(edge.id, true);
  clearView();
  var h1 = document.createElement("h1");
  h1.setAttribute("id", "view-content-header");
  h1.append(document.createTextNode(edge.name));
  viewpanel.appendChild(h1);
  if (colmap.get(edge.id)) {
    colmap.get(edge.id).onblur = (e) => {
      e.currentTarget.value = edge.name;
      collection.innerHTML = "";
    };
  }
};

// Register for both events
searchInput.addEventListener("change", handleChange);
searchInput.addEventListener("keyup", handleChange);
searchInput.onclick = (e) => {};
document.addEventListener("click", (evt) => {
  let targetElement = evt.target; // clicked element
  do {
    if (targetElement == collection) {
      return;
    }
    targetElement = targetElement.parentNode;
  } while (targetElement);

  collection.innerHTML = "";
  searchInput.value = "";
});

if (document.readyState === "complete") {
} else if (document.readyState === "interactive") {
} else {
  document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded!");
  });

  window.addEventListener("load", () => {
    sendGetRequest(loadStruct);
  });
}
