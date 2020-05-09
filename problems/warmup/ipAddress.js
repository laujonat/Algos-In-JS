/*
Validate IP Address
Validate an IP address (IPv4). An address is valid if and only if it is in the form "X.X.X.X", where each X is a number from 0 to 255.

For example, "12.34.5.6", "0.23.25.0", and "255.255.255.255" are valid IP addresses, while "12.34.56.oops", "1.2.3.4.5", and "123.235.153.425" are invalid IP addresses.
*/

function validateIP(ip) {
  /**
    @param ip: string
    @return: boolean
    */
  const arr = ip.split("."); // array of length 4 ["12asdad", 34, 5, 6]
  if (arr.length !== 4) {
    return false;
  }
  function hasChars(str) {
    let check = str.match(/[a-z]/gi);
    return check;
  }
  for (let i = 0; i < arr.length; i++) {
    if (hasChars(arr[i])) {
      return false;
    }
    let num = parseInt(arr[i], 10);
    if (isNaN(num) || num < 0 || num > 255) {
      return false;
    }
  }

  return true;
}
// console.log(validateIP("192.44.0.1"));
// console.log(validateIP("192xxx.44.0.1"));
