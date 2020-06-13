"use-strict";
let viewpanel = document.querySelector("#view-content");
const createTableHeader = (...args) => {
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  for (const arg of args) {
    let th = document.createElement("th");
    th.appendChild(document.createTextNode(arg));
    tr.appendChild(th);
    thead.appendChild(tr);
  }
  return thead;
};
const createNestedParamCell = (...args) => {
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  for (const arg of args) {
    let th = document.createElement("th");
    th.appendChild(document.createTextNode(JSON.stringify(arg)));
    th.setAttribute("id", arg);
    tr.appendChild(th);
    th.style.whiteSpace = "pre-wrap";
    thead.appendChild(tr);
  }
  return thead;
};

const addTab = (title, content) => {};

const makeTabs = () => {
  const table = document.createElement("div");
  const header = document.createElement("div");
  table.classList.add("tabs");
  for (let i = 0; i < 2; i++) {}

  viewpanel.appendChild(table);
};

const createPrompt = (key, data) => {
  console.log(data);
  const { edges } = data;
  const table = document.createElement("table");
  table.classList.add("responsive-table");
  const tbody = document.createElement("tbody");
  if (edges.length !== 0) {
    edges.forEach(({ node }) => {
      tbody.append(createTableHeader("Input", node.input));
      tbody.append(createTableHeader("Output", node.output));
      tbody.append(createTableHeader("Entry", node.entry));
      tbody.append(createTableHeader("Constraints", node.constraints));
      node.inputparams.forEach((el) => {
        tbody.append(createTableHeader("Input Parameters", JSON.stringify(el)));
      });
      table.append(tbody);
    });

    viewpanel.appendChild(table);
  }
};
module.exports = {
  makeTabs,
  createPrompt,
  createTable: (key, data) => {
    const table = document.createElement("table");
    table.classList.add("responsive-table");
    const tbody = document.createElement("tbody");
    tr = document.createElement("tr");
    td = document.createElement("td");
    if (Array.isArray(data)) {
      td.appendChild(document.createTextNode(data.join(", ")));
    } else {
      td.appendChild(document.createTextNode(data));
    }
    tr.appendChild(td);
    tbody.append(tr);
    table.append(tbody);
    viewpanel.appendChild(table);
  },
};
