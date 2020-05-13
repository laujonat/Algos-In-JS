"use-strict";
let viewPanel = document.querySelector("#view-content");
let searchInput = document.getElementById("search-input");
let collection = document.querySelector(".collection");
let headers = new Headers();
headers.append("Content-Type", "text/plain");
headers.set("Content-Type", "application/json;charset=UTF-8");
let fileSync = [];

/**
 * Search Methods
 */
var xhttp = new XMLHttpRequest();
const sendGetRequest = async () => {
  xhttp.open("GET", "/syncFiles", true);
  xhttp.onloadend = function(e) {
    let res = xhttp.responseText;
    fileSync = Array.from(JSON.parse(res));
  };

  xhttp.send();
};

function isEmpty(str) {
  return !str || 0 === str.length;
}

const searchData = (searchText) => {
  const regex = new RegExp(searchText, "gi");
  fileSync.sort((a, b) => a.id - b.id);
  console.log(fileSync);
  return new Promise((resolve) =>
    resolve(fileSync.filter((m) => m.name.match(regex)))
  );
};

function handleChange(e) {
  if (!isEmpty(e.currentTarget.value)) {
    showSearchResults(e.currentTarget.value);
  }
  collection.innerHTML = "";
}

function handleListItemEvent(i) {
  viewPanel.appendChild(h1);
}

function showSearchResults(searchQuery) {
  searchData(searchQuery).then((res) => {
    const html = res.map((el, i) => {
      var li = document.createElement("li");
      var div = document.createElement("div");
      li.setAttribute("class", "collection-item");
      li.onclick = () => handleListItemEvent(i);
      div.setAttribute("class", "collection-item-wrap");
      li.appendChild(div);
      div.appendChild(document.createTextNode(el.name + el.id));
      collection.appendChild(li);
      return li;
    });
  });
}

window.addEventListener("load", () => sendGetRequest());

// Register for both events
searchInput.addEventListener("change", handleChange);
searchInput.addEventListener("keyup", handleChange);
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
