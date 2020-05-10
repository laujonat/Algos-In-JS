"use-strict";
let searchInput = document.getElementById("search-input");
let collection = document.querySelector(".collection");

let headers = new Headers();
headers.append("Content-Type", "text/plain");
headers.set("Content-Type", "application/json;charset=UTF-8");
const sendGetRequest = async () => {
  // xhr.open("GET", "syncFiles");
  // const data = JSON.parse(xhr.responseText);
  try {
    const res = await fetch("/syncFiles");
    console.log(res);
  } catch (e) {
    console.error(e);
  }
};

window.addEventListener("load", () => {
  sendGetRequest();
});
