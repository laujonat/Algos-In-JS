function validParenthesis(s) {
  const bracket_map = { "(": ")", "[": "]", "{": "}" };
  const open_par = new Set(["(", "[", "{"]);
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let op = s.charAt(i);
    console.log(op);
    if (open_par.has(op)) {
      stack.push(op);
    } else if (stack.length && op === bracket_map[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}
module.exports = validParenthesis;
