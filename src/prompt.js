let viewpanel = document.querySelector("#view-content");

const promptTextArea = () => {
  const textarea = document.createElement("textarea");
  textarea.setAttribute("row", "60");
  textarea.setAttribute("col", "100");
  textarea.setAttribute("id", "search-text-area-secondary");
  textarea.setAttribute("placeholder", "Enter prompt");
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
};
