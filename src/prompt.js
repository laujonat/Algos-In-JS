let viewpanel = document.querySelector("#view-content");
const selection = document.querySelector(".browser-default");
let searchInput = document.getElementById("search-input");
let searchInputSecondary = document.getElementById("search-input-secondary");
const searchform = document.querySelector(".search-form");
const searchformsecondary = document.querySelector(".search-form-secondary");

const promptTextArea = (row, col, placeholder, id = null) => {
  const textarea = document.createElement("textarea");
  textarea.setAttribute("row", row.toString());
  textarea.setAttribute("col", col.toString());
  if (id) {
    textarea.setAttribute("id", id);
  }
  textarea.setAttribute("placeholder", placeholder);
  viewpanel.appendChild(textarea);
};

const typeSelection = () => {
  const select = document.createElement("select");
  select.classList.add("v2browser-default");
  const options = [
    "Arrays",
    "Dynamic Programming",
    "Graphs",
    "Recursion",
    "Sorting",
  ];
  for (const [i, opt] of options.entries()) {
    let o = document.createElement("option");
    o.setAttribute("value", i);
    o.appendChild(document.createTextNode(opt));
    select.appendChild(o);
  }
  select.options.setSelectedIndex = 0;
  viewpanel.appendChild(select);
};

const addExamples = () => {
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.justifyContent = "space-around";
  input.setAttribute("type", "text");
  input.setAttribute("id", "param3");
  input.setAttribute("placeholder", name);
  div.appendChild(input);
};

const addHeader = (text, size = "h3") => {
  let span = document.createElement("span");
  let h3 = document.createElement(size);
  h3.setAttribute("id", "view-content-header");
  h3.appendChild(document.createTextNode(text));
  span.appendChild(h3);
  viewpanel.appendChild(span);
};

const makeBtn = (text = null, onclick) => {
  const btn = document.createElement("a");
  btn.appendChild(document.createTextNode(text));

  btn.classList.add("waves-effect", "waves-light", "btn-small");
  btn.style.float = "right";
  btn.style.marginBottom = "10px";
  btn.style.marginRight = "5px";
  btn.onclick = onclick;
  viewpanel.appendChild(btn);
};

const addInput = (name, description) => {
  let input = document.createElement("input");
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.justifyContent = "space-around";
  input.setAttribute("type", "text");
  input.setAttribute("id", "input-param-name");
  input.setAttribute("placeholder", name);
  input.classList.add("input-field", "light");
  div.appendChild(input);
  input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "input-param-desc");
  input.setAttribute("placeholder", description);
  input.classList.add("input-field", "light");
  div.appendChild(input);
  viewpanel.appendChild(div);
};
const clearInputs = function() {
  searchInput.value = "";
  searchInputSecondary.value = "";
};
const createDropdownCheck = (e) => {
  let rcheck = e.target.id;
  clearInputs();
  switch (rcheck) {
    case "selA": // Create from new
      searchform.style.display = "inline";
      searchformsecondary.style.display = "none";
      selection.selectedIndex = 0;
      selection.style.display = "none";
      break;
    case "selB": // Edit/Update existing
      searchform.style.display = "none";
      selection.style.display = "inline";
      break;
    default:
  }
};
module.exports = {
  promptTextArea,
  typeSelection,
  addInput,
  addHeader,
  makeBtn,
  createDropdownCheck,
};
