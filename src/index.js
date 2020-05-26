"use-strict";
let viewpanel = document.querySelector("#view-content");
let searchInput = document.getElementById("search-input");
let searchInputSecondary = document.getElementById("search-input-secondary");
let collection = document.querySelector(".collection");
let colitem = document.querySelector(".collection-item");
let createSelection = document.querySelector(".browser-default");
const { createTable } = require("./table.js");
const { addInput, promptTextArea, typeSelection } = require("./prompt.js");
let headers = new Headers();
let colmap = new Map();
let fileSync = [];

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

const liDisplayOptions = (e, params) => {
  e.preventDefault();
  if (!showCreateForm()) {
    loadStruct(e, params.id);
  } else {
    const textarea = document.createElement("textarea");
    const addbtn = document.createElement("a");
    addbtn.appendChild(document.createTextNode("+"));
    addbtn.style.marginLeft = "5px";
    addbtn.classList.add(
      "btn-floating",
      "btn-small",
      "waves-effect",
      "waves-light",
      "blue-grey",
      "lighten-4"
    );
    addbtn.onclick = function() {
      addInput("Param", "Description");
      viewpanel.appendChild(addbtn);
    };
    promptTextArea();
    let span = document.createElement("span");
    let h3 = document.createElement("h3");
    h3.setAttribute("id", "view-content-header");
    h3.appendChild(document.createTextNode("Function Parameters"));
    span.appendChild(h3);
    viewpanel.appendChild(span);
    addInput("Param", "Description");
    viewpanel.appendChild(addbtn);
  }
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
      // if (el.category === "dsaa") {
      li.addEventListener("click", (e) => liDisplayOptions(e, el));
      // }
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
var showSearchResults = function(searchQuery, successCallback) {
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
  showSearchResults(e.currentTarget.value, successCallback);
};

function showCreateForm() {
  return (
    document.querySelector(".search-form-secondary").style.display !== "none"
  );
}

const handleSecondarySearch = function(e) {
  let colitem = document.querySelector(".collection-item");
  showSearchResults(e.currentTarget.value, successCallback);
};

const clearView = function() {
  viewpanel.innerHTML = "";
};

const clearInputs = function() {
  searchInput.value = "";
  searchInputSecondary.value = "";
};

let currentSelected = new Map();

const handleListItemEvent = function(edge) {
  currentSelected.set(edge.id, edge.name);
  searchInput.value = edge.name;
  searchInputSecondary.value = edge.name;
  clearView();
  var h1 = document.createElement("h1");
  h1.setAttribute("id", "view-content-header");
  h1.append(document.createTextNode(edge.name));
  viewpanel.appendChild(h1);
};
const sel = document.querySelector(".browser-default");
function getSelectedOption() {
  let opt;
  for (let i = 0, len = sel.options.length; i < len; i++) {
    opt = sel.options[i];
    if (opt.selected === true) {
      break;
    }
  }
  return opt;
}

function selectedControl() {
  clearInputs();
  const opt = getSelectedOption();
  switch (opt.value) {
    case "1":
      document.querySelector(".search-form-secondary").style.display = "none";
      break;
    case "2":
      document.querySelector(".search-form-secondary").style.display =
        "inline-block";
      break;
    default:
      break;
  }
}
sel.addEventListener("change", selectedControl);
searchInput.addEventListener("change", handleChange);
searchInput.addEventListener("keyup", handleChange);
searchInputSecondary.addEventListener("change", handleSecondarySearch);
searchInputSecondary.addEventListener("keyup", handleSecondarySearch);
createSelection.addEventListener("change", selectedControl);
const radios = document.getElementsByName("form-select");
const check = (e) => {
  let rcheck = e.target.id;
  clearInputs();
  switch (rcheck) {
    case "selA":
      document.querySelector(".search-form").style.display = "inline";
      document.querySelector(".search-form-secondary").style.display = "none";
      document.querySelector(".browser-default").style.display = "none";
      break;
    case "selB":
      document.querySelector(".search-form").style.display = "none";
      document.querySelector(".browser-default").style.display = "inline";
      break;
    default:
  }
};
radios[0].addEventListener("click", check, false);
radios[1].addEventListener("click", check, false);

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
});

if (document.readyState === "complete") {
} else if (document.readyState === "interactive") {
} else {
  document.addEventListener("DOMContentLoaded", function() {
    M.AutoInit();
  });

  window.addEventListener("load", () => {
    sendGetRequest(loadStruct);
  });
}
