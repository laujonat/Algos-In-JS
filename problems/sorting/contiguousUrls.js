/*
We have some historical clickstream data gathered from our site anonymously using cookies. The histories contain URLs that users have visited in chronological order.

Write a function that takes two users' browsing histories as input and returns the longest contiguous sequence of URLs that appear in both.

For example, given the following two users' histories:

user1 = ['/home', '/register', .. , .. ,'/login', '/user', '/one', '/two']
user2 = ['/home', '/red', '/login', '/user', '/one', '/pink']
You should return the following:
['/login', '/user', '/one']
*/
// n * m
type H = Array<string>;
function contiguousUrls(user1: H, user2: H): H {
  // check if either lists are empty
  let res = [];
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < user1.length; i++) {
    let current = user1[i];
    let ptr = user2.indexOf(current);
    let start = i;
    let scout = i;
    let tempstack = [];
    while (user1[scout] === user2[ptr]) {
      tempstack.push(user1[scout]);
      console.log(tempstack);
      ptr++;
      scout++;
    }
    if (tempstack.length > max) {
      max = tempstack.length;
      res = tempstack.slice();
    }
  }
  return res;
}
var user1 = ["/home", "/login", "/user", "/one", "/two"];
var user2 = ["/home", "/red", "/login", "/user", "/one", "/pink"];
module.exports = contiguousUrls;
