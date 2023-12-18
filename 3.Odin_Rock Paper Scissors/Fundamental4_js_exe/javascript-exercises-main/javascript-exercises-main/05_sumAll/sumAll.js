const sumAll = function (int1, int2) {
  let sum = 0;

  if (
    typeof int1 !== "number" ||
    typeof int2 !== "number" ||
    isNaN(int1) ||
    isNaN(int2)
  ) {
    throw new Error("Error");
  }
  if (int1 > int2) {
    // if (int1 < 0 || int2 < 0) {
    //   throw new Error("Error");
    //   // return int1, int2;
    // }
    bigNum = int1;
    smallNum = int2;
  } else {
    bigNum = int2;
    smallNum = int1;
  }
  for (let i = smallNum; i <= bigNum; i++) {
    sum += i;
  }
  return sum;
};
// 1,5
// 1+2+3+4+5
// start int1
// int1 +int+1+ int+2 +int+3 + int+4...,int1<=int5
// Do not edit below this line
module.exports = sumAll;
