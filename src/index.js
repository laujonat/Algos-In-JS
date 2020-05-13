"use-strict";
let viewpanel = document.querySelector("#view-content");
let searchInput = document.getElementById("search-input");
let collection = document.querySelector(".collection");
let colitem = document.querySelector(".collection-item");
let headers = new Headers();
let colmap = new Map();

let viewstart;
let fileSync = [];
const loadStruct = (e, dataid) => {
  e.preventDefault();
  console.log(arguments);
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(`/dsaa/${dataid}`, options)
    .then(function(response) {
      // The response is a Response instance.
      // You parse the data into a useable format using `.json()`
      return response.json();
    })
    .then(function(data) {
      // `data` is the parsed version of the JSON returned from the above endpoint.
      console.log(data); // { "userId": 1, "id": 1, "title": "...", "body": "..." }
    });
  // .then(renderView);
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
      li.addEventListener("click", (e) => loadStruct(e, el.id));
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

const renderView = (data) => {
  console.log(data);
};

const searchData = function(searchText) {
  const regex = new RegExp(searchText, "gi");
  fileSync.sort((a, b) => a.id - b.id);
  return new Promise((resolve) =>
    resolve(fileSync.filter((m) => m.name.match(regex)))
  );
};

// Filter result data by input query string
const showSearchResults = function(searchQuery) {
  searchData(searchQuery).then((res) => {
    res.map((el) => {
      collection.appendChild(colmap.get(el.id));
    });
  });
};

const handleChange = function(e) {
  let colitem = document.querySelector(".collection-item");
  if (!isEmpty(e.currentTarget.value)) {
    showSearchResults(e.currentTarget.value);
  }
  collection.innerHTML = "";
  if (colitem) {
    colitem.onblur = (e) => {
      e.currentTarget.value = "";
      collection.innerHTML = "";
    };
  }
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
  window.addEventListener("DOMContentLoaded", () => {});
  window.addEventListener("load", () => sendGetRequest(loadStruct));
}
