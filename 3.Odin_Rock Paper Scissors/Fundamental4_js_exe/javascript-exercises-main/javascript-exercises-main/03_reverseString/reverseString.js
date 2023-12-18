const reverseString = function (string) {
  let characters = string.split("");
  let reverseCharacters = characters.reverse();
  let reversedString = reverseCharacters.join("");
  return reversedString;
};

reverseString("hello there");
// Do not edit below this line
module.exports = reverseString;
