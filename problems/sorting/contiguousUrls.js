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
  let mlen = 0;
  let p1 = 0;
  j;
  let p2 = 0;
  let start = 0;
  let end = 0;
  // for(let i = 0; i < user1.length; i++) {

  // }
  // while (p1 < user1.length && p2 < user2.length) {
  //   if(user1[p1] === user2[p2]) {
  //     p1++;
  //     p2++;
  //   }
  // }
}
var user1 = ["/home", "/login", "/user", "/one", "/two"];
var user2 = ["/home", "/red", "/login", "/user", "/one", "/pink"];
console.log(contiguousUrls(user1, user2));
module.exports = contiguousUrls;
