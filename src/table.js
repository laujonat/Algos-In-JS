"use-strict";
let viewpanel = document.querySelector("#view-content");
const createTableHeader = (...args) => {
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  for (const arg of args) {
    let th = document.createElement("th");
    th.appendChild(document.createTextNode(arg));
    th.setAttribute("id", arg);
    tr.appendChild(th);
    th.style.width = "150px";
    thead.appendChild(tr);
  }
  return thead;
};
const createNestedParamCell = (...args) => {
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  for (const arg of args) {
    let th = document.createElement("th");
    th.appendChild(document.createTextNode(arg));
    th.setAttribute("id", arg);
    tr.appendChild(th);
    th.style.width = "150px";
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
module.exports = {
  makeTabs,
  createTable: (key, data) => {
    const table = document.createElement("table");
    table.classList.add("responsive-table");
    const tbody = document.createElement("tbody");
    let thead = createTableHeader(key, "", "description");
    table.append(thead);
    for (const [name, desc] of Object.entries(data)) {
      tr = document.createElement("tr");
      td = document.createElement("td");
      td.appendChild(document.createTextNode(name));
      tr.appendChild(td);
      if (typeof desc === "object") {
        for (const [fkey, params] of Object.entries(desc)) {
          td = document.createElement("td");
          td.setAttribute("colspan", 2);
          if (typeof params === "object") {
            if (Object.keys(params).length > 1) {
              td = document.createElement("td");
              for (const [fname, pname] of Object.entries(params)) {
                thead = createTableHeader(fname);
                const bold = document.createElement("h6");
                bold.setAttribute("id", "field-header");

                bold.innerHTML = `${fname}`;
                td.appendChild(bold);
                td.appendChild(document.createTextNode(`${pname}\r\n`));
                tr.appendChild(td);
              }
            }
          } else {
            td.append(document.createTextNode(params));
            tr.appendChild(td);
          }
        }
        tbody.append(tr);
      } else {
        td = document.createElement("td");
        td.appendChild(document.createTextNode(desc));
        td.setAttribute("colspan", 4);
        tr.appendChild(td);
      }
      tbody.append(tr);
    }
    table.append(tbody);

    viewpanel.appendChild(table);
  },
};
