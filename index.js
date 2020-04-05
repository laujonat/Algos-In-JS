
const {selectionSort} = require('./root/selectionSort.js');
const {bubbleSort} = require('./root/bubbleSort.js');
const {insertionSortV1, insertionSortV2} = require('./root/insertionSort.js');

function sort(a, b) {
  return a - b;
}

var playerA = {
  height: 1
}

var playerB = {
  height: 0
}
var teamA = new Array(7).fill(playerB).map((playerB, i) => ({ ...playerB, height: (i + 1) }));
var teamB = new Array(7).fill(playerA).map((playerA, i) => ({ ...playerA, height: (i) }))

teamB[0].height = 100;

var canTakeTeamPhoto = function(teamA, teamB, n) {

  var sortedTeamAHeights = teamA.sort(function(a, b) {
    return sort(a.height, b.height);
  });

  var sortedTeamBHeights = teamB.sort(function(a, b) {
    return sort(a.height, b.height);
  });

  var teamAInFront = sortedTeamAHeights.every((item, i) => item.height < sortedTeamBHeights[i].height);
  var teamBInFront = sortedTeamAHeights.every((item, i) => item.height > sortedTeamBHeights[i].height);

  return teamAInFront || teamBInFront;
}

var tA = [3,4,2, 9,2,4,5,3,12,45];
var tB = [2, 5, 1, 9, 10, 3, 4,12,541,23,13,1,51,131,56,34,12,67,45,8,12,34,7,234,0];
var tC = [1,2,3,4];

// console.assert(canTakeTeamPhoto(teamA, teamB, 7) === false);

// console.assert(selectionSort(tA, tA.length) === tA.sort(), "selectionSortA failed");

// console.assert(selectionSort(tB, tB.length) === tB.sort(function(a,b) { return a - b; }), "selectionSortB failed");

// console.assert(bubbleSort(tB, tB.length) === tB.sort(function(a,b) { return a - b; }), "bubbleSort failed");

console.assert(selectionSort(tC, tC.length) === tC.sort(function(a,b) { return a - b; }), "selectionSort failed");


// console.assert(insertionSortV1(tA, tA.length) === tA.sort(function(a,b) { return a - b; }), "insertionSortV1 failed for tA");

// console.assert(insertionSortV2(tB, tB.length) === tB.sort(function(a,b) { return a - b; }), "insertionSortV2 failed for tB");