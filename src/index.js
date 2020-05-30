"use-strict";
let viewpanel = document.querySelector("#view-content");
let viewpanelheader = document.querySelector("#view-content-header");
let resetbtn = document.getElementById("reset-btn");
let searchInput = document.getElementById("search-input");
let searchInputSecondary = document.getElementById("search-input-secondary");
let collection = document.querySelector(".collection");
let colitem = document.querySelector(".collection-item");
let createSelection = document.querySelector(".browser-default");
let controller = new AbortController();
let signal = controller.signal;

const { createTable } = require("./table.js");
const {
  addInput,
  addHeader,
  promptTextArea,
  typeSelection,
} = require("./prompt.js");
let headers = new Headers();
let colmap = new Map();
let fileSync = [];
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
    .then((res) => {
      const {
        data: { element },
      } = res;
      renderStruct(element);
    });
};

const saveEntry = (e) => {
  const entry = document.getElementById("search-text-area-secondary");
  const exinputP1 = document.getElementById("example-input-param1");
  const exinputP2 = document.getElementById("example-input-param2");
  const exinputCnts = document.getElementById("example-input-constraints");
  console.log(entry.value);
  console.log(exinputP1.value);
  console.log(exinputP2.value);
  console.log(exinputCnts.value);
};

const liDisplayOptions = (e, params) => {
  viewpanel.setAttribute("data-id", params._id);
  e.preventDefault();
  if (!showCreateForm()) {
    loadStruct(e, params.id);
  } else {
    /* Otherwise, we want to display a form so a user can enter in data for a question or class. */
    const savebtn = document.createElement("a");
    savebtn.appendChild(document.createTextNode("save"));

    savebtn.classList.add("waves-effect", "waves-light", "btn-small");
    savebtn.style.float = "right";
    savebtn.style.marginBottom = "10px";
    savebtn.style.marginRight = "5px";
    savebtn.onclick = saveEntry;
    viewpanel.appendChild(savebtn);

    const addbtn = document.createElement("a");
    addbtn.appendChild(document.createTextNode("+ Add"));
    addbtn.style.marginRight = "5px";
    addbtn.classList.add("waves-effect", "waves-light", "btn-small");
    addbtn.onclick = function() {
      addInput("Param", "Description");
      viewpanel.appendChild(addbtn);
    };
    addbtn.style.float = "right";
    if (params.category === "dsaa") {
      const textarea = document.createElement("section");
      const codediv = document.createElement("div");
      codediv.classList.add("code-div");
      const codestr = params.fn.join("\r\n\n");
      codestr.replace(/\n/g, "<br />");
      codediv.innerText = codestr;
      textarea.append(codediv);
      viewpanel.append(textarea);
    } else {
      promptTextArea(30, 40, "Enter Prompt", "search-text-area-secondary");
    }

    addHeader("Example Input");
    promptTextArea(30, 10, "Optional", "example-input-param1");

    addHeader("Example Output");
    promptTextArea(30, 10, "Optional", "example-input-param2");

    addHeader("Constraints");
    promptTextArea(30, 10, "Optional", "example-input-constraints");

    addHeader("Input Parameters");
    addInput("Param", "Description (Not supported)");
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
      li.addEventListener("click", (e) => liDisplayOptions(e, el));
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
    viewpanel.setAttribute("data-id", data._id);
    document.getElementById("view-content-header").innerHTML = data.name;
    for (const key of Object.keys(data)) {
      switch (key) {
        case "params":
          createTable(key, data[key]);
          break;
        case "properties":
          if (Object.values(data[key]).length === 0) {
            break;
          }
          createTable(key, data[key]);
          break;
        case "fn":
          const textarea = document.createElement("section");
          const codediv = document.createElement("div");
          codediv.classList.add("code-div");
          const codestr = data.fn.join("\r\n\n");
          codestr.replace(/\n/g, "<br />");
          codediv.innerText = data[key];
          textarea.append(codediv);
          viewpanel.append(textarea);
          break;
        default:
          break;
      }
    }
  }
};

const searchData = function(searchText) {
  fileSync.sortOn("name");
  let res = fileSync.filter((m) => {
    let regex = new RegExp(searchText, "gi");
    return m.name.match(regex);
  });

  return new Promise((resolve) => resolve(res));
};

function successCallback(res) {
  if (isHidden(resetbtn)) {
    resetbtn.style.display = "inline";
  }
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
// showSearchResults = memoizeResult(showSearchResults);
showSearchResults = debounce(showSearchResults, 200);

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
      if (!isHidden(resetbtn)) {
        resetbtn.style.display = "none";
      }
      document.querySelector(".search-form-secondary").style.display =
        "inline-block";
      break;
    default:
      break;
  }
}
function isHidden(el) {
  return el.offsetParent === null;
}
sel.addEventListener("change", selectedControl);
searchInput.addEventListener("change", handleChange);
searchInput.addEventListener("keyup", handleChange);
searchInputSecondary.addEventListener("change", handleSecondarySearch);
searchInputSecondary.addEventListener("keyup", handleSecondarySearch);
createSelection.addEventListener("change", selectedControl);
resetbtn.onclick = (e) => {
  if (!isHidden(resetbtn)) {
    resetbtn.style.display = "none";
  }
  clearInputs();
};
const radios = document.getElementsByName("form-select");
const check = (e) => {
  const selection = document.querySelector(".browser-default");
  const searchform = document.querySelector(".search-form");
  const searchformsecondary = document.querySelector(".search-form-secondary");
  let rcheck = e.target.id;
  clearInputs();
  switch (rcheck) {
    case "selA":
      if (!isHidden(resetbtn)) {
        resetbtn.style.display = "none";
      }
      searchform.style.display = "inline";
      searchformsecondary.style.display = "none";
      selection.selectedIndex = 0;
      selection.style.display = "none";
      break;
    case "selB":
      if (!isHidden(resetbtn)) {
        resetbtn.style.display = "none";
      }
      searchform.style.display = "none";
      selection.style.display = "inline";
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
    Array.prototype.sortOn = function(key) {
      this.sort(function(a, b) {
        if (a[key] < b[key]) {
          return -1;
        } else if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      });
    };
  });

  window.addEventListener("load", () => {
    sendGetRequest(loadStruct);
  });
}
