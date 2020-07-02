/*
const items = [
  { type: "phone", name: "iPhone", color: "gold" },
  { type: "laptop", name: "Chromebook", color: "silver" },
  { type: "test", name: "test", color: "test" },
  { test: "test", test2: "test", test1: "test" },
];
const excludes = [
  { k: "color", v: "gold" },
  { k: "color", v: "silver" },
  { k: "type", v: "tv" },
];
*/

function applyFilters(items, excludes) {
  const filterMap = {};
  excludes.forEach((el) => {
    const { k, v } = el;
    if (!filterMap.hasOwnProperty(k)) {
      filterMap[k] = { [`${v}`]: true };
    } else {
      filterMap[k][v] = true;
    }
  });
  return items.filter(function(item) {
    for (const [k, v] of Object.entries(item)) {
      if (filterMap.hasOwnProperty(k)) {
        return filterMap[k][v];
      } else {
        return true;
      }
    }
  });
}

module.exports = applyFilters;
