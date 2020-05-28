let viewpanel = document.querySelector("#view-content");

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

const addHeader = (text) => {
  let span = document.createElement("span");
  let h3 = document.createElement("h3");
  h3.setAttribute("id", "view-content-header");
  h3.appendChild(document.createTextNode(text));
  span.appendChild(h3);
  viewpanel.appendChild(span);
};

const addInput = (name, description) => {
  let input = document.createElement("input");
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.justifyContent = "space-around";
  input.setAttribute("type", "text");
  input.setAttribute("id", "param1");
  input.classList.add("input-field", "light");
  input.setAttribute("placeholder", name);
  div.appendChild(input);
  input = document.createElement("input");
  input.setAttribute("type", "text");
  input.classList.add("input-field", "light");
  input.setAttribute("id", "param2");
  input.setAttribute("placeholder", description);
  div.appendChild(input);
  viewpanel.appendChild(div);
};

module.exports = {
  promptTextArea,
  typeSelection,
  addInput,
  addHeader,
};
