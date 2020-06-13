"use-strict";
const { debounce, memoize } = require("./perf.js");
const { postData, showSearchResults } = require("./api");
let viewpanel = document.querySelector("#view-content");
let viewpanelheader = document.querySelector("#view-content-header");
let resetbtn = document.getElementById("reset-btn");
let searchInput = document.getElementById("search-input");
let searchInputSecondary = document.getElementById("search-input-secondary");
let collection = document.querySelector(".collection");
let colitem = document.querySelector(".collection-item");
let createSelection = document.querySelector(".browser-default");
let progress = document.querySelector(".progress");
let controller = new AbortController();
let signal = controller.signal;

const { createPrompt, createTable, makeTabs } = require("./table.js");
const {
  addInput,
  addHeader,
  makeBtn,
  promptTextArea,
  createDropdownCheck,
} = require("./prompt.js");
let headers = new Headers();
let colmap = new Map();
let fileSync = [];

const loadStruct = (e, data) => {
  console.log(data);
  e.preventDefault();
  document.getElementById("view-content-header").innerHTML = data.name;
  const textarea = document.createElement("section");
  const codediv = document.createElement("div");
  codediv.classList.add("code-div");
  const codestr = data.fn.join("\r\n\n");
  codestr.replace(/\n/g, "<br />");
  codediv.innerText = data.fn;
  textarea.append(codediv);
  addHeader("Code");
  viewpanel.append(textarea);
  addHeader("Params");
  createTable("param", data.param);
  addHeader("Category");
  createTable("category", data.category);
  addHeader("Prototypes");
  createTable("proto", data.proto);
  addHeader("Prompt");
  createPrompt("prompt", data.prompt);
};

const saveEntry = async (e) => {
  const formData = new FormData();
  const entrytext = document.getElementById("entry-textarea");
  if (!entrytext) {
    alert("Datastructures not supported yet");
    return;
  }
  const entry = entrytext.value;
  const input = document.getElementById("example-input-param1").value;
  const output = document.getElementById("example-input-param2").value;
  const constraints = document.getElementById("example-input-constraints")
    .value;
  const inputparams = document.querySelectorAll("#input-param-name");
  const inputdesc = document.querySelectorAll("#input-param-desc");
  let _id = parseInt(viewpanel.getAttribute("data-id"), 10);
  formData.append("entry", entry);
  formData.append("input", input);
  formData.append("output", output);
  formData.append("elementid", _id);
  const inputsList = [];
  let inputs = {};
  for (var i = 0; i < inputparams.length; i++) {
    inputs["name"] = inputparams[i].value;
    inputs["desc"] = inputdesc[i].value;
    inputsList.push(JSON.stringify(inputs));
    inputs = {};
  }
  formData.append("inputparams", inputsList);
  try {
    const res = await postData(`/updateEntry`, formData);
  } catch (e) {
    console.error(e);
  }
};

const liDisplayOptions = (e, params) => {
  viewpanel.setAttribute("data-id", params.id);
  e.preventDefault();
  if (!showCreateForm()) {
    loadStruct(e, params);
  } else {
    makeBtn("save", saveEntry);

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
      promptTextArea(30, 40, "Enter Prompt", "entry-textarea");
    }

    addHeader("Example Input");
    promptTextArea(30, 10, "Optional", "example-input-param1");

    addHeader("Example Output");
    promptTextArea(30, 10, "Optional", "example-input-param2");

    addHeader("Constraints");
    promptTextArea(30, 10, "Optional", "example-input-constraints");

    makeBtn("+ Add", function() {
      addInput("Param", "Description");
    });
    addHeader("Input Parameters");
    addInput("Param", "Description");
  }
};

headers.append("Content-Type", "text/plain");
headers.set("Content-Type", "application/json;charset=UTF-8");
const xhttp = new XMLHttpRequest();
xhttp.open("GET", "/syncFiles", true);
function addListeners(xhr) {
  xhttp.addEventListener("progress", updateProgress);
  xhttp.addEventListener("load", transferComplete);
  xhttp.addEventListener("error", transferFailed);
  xhttp.addEventListener("abort", transferCanceled);
}

function updateProgress(evt) {
  progress.style.display = "inline";
}

function transferComplete(evt) {
  console.log("The transfer is complete.");
  let res = xhttp.responseText;
  fileSync = JSON.parse(res).data;

  if (fileSync.hasOwnProperty("elements")) {
    const { elements } = fileSync;
    searchInput.addEventListener("change", handleChange);
    searchInput.addEventListener("keyup", handleChange);
    searchInputSecondary.addEventListener("change", handleSecondarySearch);
    searchInputSecondary.addEventListener("keyup", handleSecondarySearch);
    elements &&
      elements.forEach((el, i) => {
        const li = document.createElement("li");
        const div = document.createElement("div");
        li.setAttribute("class", "collection-item");
        li.onclick = (e) => handleListItemEvent(el);
        div.setAttribute("class", "collection-item-wrap");
        div.appendChild(document.createTextNode(el.name));
        li.appendChild(div);
        li.addEventListener("click", (e) => liDisplayOptions(e, el));
        colmap.set(el.id, li);
        collection.appendChild(li);
      });
  }
}

function transferFailed(evt) {
  console.log("An error occurred while loading the file.");
}

function transferCanceled(evt) {
  console.log("The transfer has been canceled by the user.");
}
const sendGetRequest = async () => {
  progress.style.display = "inline";
  addListeners(xhttp);
  xhttp.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      if (!isHidden(resetbtn)) {
        resetbtn.style.display = "none";
      }
    }
  };
  xhttp.send();
};

const isEmpty = function(str) {
  return !str || 0 === str.length;
};

const searchData = function(searchText) {
  if (!Array.isArray(fileSync)) {
    return;
  } else {
    fileSync.sortOn("name");
    let res = fileSync.filter((m) => {
      let regex = new RegExp(searchText, "gi");
      return m.name.match(regex);
    });
  }

  return new Promise((resolve) => resolve(res));
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
  if (fileSync.length !== 0) {
    showSearchResults(fileSync.elements, e.currentTarget.value, function(
      result
    ) {
      collection.innerHTML = "";
      result.map((el) => {
        collection.appendChild(colmap.get(el.id));
      });
    });
  }
};

function showCreateForm() {
  return (
    document.querySelector(".search-form-secondary").style.display !== "none"
  );
}

const handleSecondarySearch = function(e) {
  let colitem = document.querySelector(".collection-item");
  showSearchResults(fileSync.elements, e.currentTarget.value, function(result) {
    collection.innerHTML = "";
    result.map((el) => {
      collection.appendChild(colmap.get(el.id));
    });
  });
};

const clearView = function() {
  viewpanel.innerHTML = "";
};

const clearInputs = function() {
  searchInput.value = "";
  searchInputSecondary.value = "";
};

const handleListItemEvent = function(edge) {
  resetbtn.style.display = "inline";

  searchInput.value = edge.name;
  searchInputSecondary.value = edge.name;
  clearView();
  addHeader(edge.name, "h1");
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

createSelection.addEventListener("change", selectedControl);
resetbtn.onclick = (e) => {
  if (!isHidden(resetbtn)) {
    resetbtn.style.display = "none";
  }
  clearInputs();
};
const currentDocument = document.currentScript.ownerDocument;
const radios = document.getElementsByName("form-select");
radios[0].addEventListener("click", createDropdownCheck, false);
radios[1].addEventListener("click", createDropdownCheck, false);

searchInput.onclick = (e) => {};
document.addEventListener("click", (evt) => {
  let targetElement = evt.target; // clicked element
  do {
    if (targetElement == collection) {
      return;
    }
    targetElement = targetElement.parentNode;
  } while (targetElement);
  resetbtn.style.display = "none";
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
  window.addEventListener("WebComponentsReady", async function() {
    document.body.style.opacity = 1;
  });
  window.addEventListener("load", async () => {
    makeTabs();
    try {
      controller.abort();
      sendGetRequest();
    } catch (e) {
      console.error(e);
    }
  });
}
