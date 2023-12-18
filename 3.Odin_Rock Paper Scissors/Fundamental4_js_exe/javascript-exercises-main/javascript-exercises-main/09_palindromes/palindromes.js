const palindromes = function (string) {
  const processsedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return processsedString.split("").reverse().join("") == processsedString;
};

// Do not edit below this line
module.exports = palindromes;
