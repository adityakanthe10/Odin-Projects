const convertToCelsius = function (farh) {
  formulaCel = (farh - 32) * (5 / 9);
  resultDecOne = formulaCel.toFixed(1);
  resultCel = parseFloat(resultDecOne);
  return resultCel;
};

const convertToFahrenheit = function (Cel) {
  formulaFarhr = (Cel * 9) / 5 + 32;
  resultCelDecOne = formulaFarhr.toFixed(1);
  resultFarh = parseFloat(resultCelDecOne);
  return resultFarh;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
