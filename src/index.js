"use-strict";
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
  console.log(regex, fileSync);
  return new Promise((resolve) =>
    resolve(fileSync.filter((m) => m.name.match(regex)))
  );
};

function handleChange(e) {
  if (!isEmpty(e.target.value)) {
    showSearchResults(this.value);
  }
  collection.innerHTML = "";
}

function showSearchResults(searchQuery) {
  searchData(searchQuery).then((res) => {
    const html = res.map(
      (el) => `
      <li class="collection-item">
        <div class="collection-item-wrap">${el.name}</div>
      </li>
    `
    );
    collection.innerHTML = html.join("");
  });
}

window.addEventListener("load", () => sendGetRequest());

// Register for both events
searchInput.addEventListener("change", handleChange);
searchInput.addEventListener("keyup", handleChange);
