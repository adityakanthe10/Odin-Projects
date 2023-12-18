// divisible by 4and divisiblee by 400 but not by 100

const leapYears = function (Num) {
  const year = parseInt(Num);
  if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
