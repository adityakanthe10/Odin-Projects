const repeatString = function (string, num) {
  //  1 hey,2 heyhey,3 heyheyhey
  let result = "";
  for (i = 1; i <= num; i++) {
    result += string;
  }
  return result;
};
repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
