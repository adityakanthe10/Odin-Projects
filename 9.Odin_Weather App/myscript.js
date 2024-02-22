// Write the functions that hit the API. You’re going to want functions that can take a location and return the weather data for that location. For now, just console.log() the information.

function getWeather() {
  const city = document.getElementById("location").value;
}
function apiCall() {
  const apiKey = "3324f12afa838a7743b0d1202893cfda";
  let apiinfo = ` https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={3324f12afa838a7743b0d1202893cfda}`;

  async function getapi() {
    const response = await fetch("apiinfo.json");
    const 
  }
}
apiCall();
