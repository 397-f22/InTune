import axios from "axios";

const asyncGetCurrentPosition = options => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
});

export const getLocationDetails = async () => {
  let {coords: {latitude, longitude}} = await asyncGetCurrentPosition();

  console.log(latitude, longitude);

  var part = "minutely,hourly,daily,alerts";
  const API_key = "5319001b9d3129d9f66e7519f063a851";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_key}`;

  const res = await fetch(url, { method: 'GET' });
  // Note: Missing a `res.ok` check here
  const response = await res.json();

  console.log("response:", response);
};



export const getLocation = async () => {
    if (navigator.geolocation) {
        navigator.permissions
        .query({ name: "geolocation" })
        .then(async function (result) {
            if (result.state === "granted") {
                const pos = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });
            
                console.log(pos.coords.latitude)
                return pos.coords.latitude, pos.coords.longitude
            
            } else {
                var geoLat = 42.05132;
                var geoLng = -87.68041;
                return geoLat, geoLng
            }
            
        })}

    
}
export const getWeather = async () => {
    var part = "minutely,hourly,daily,alerts";
    var API_key = "5319001b9d3129d9f66e7519f063a851";
    var data;

    await getLocation().then((lat, lon) => {
        console.log(lat, lon)
        data = axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_key}`)
            .then(function (response) {
                console.log(response.data);
                return response.data
            
    })})

    return data.then(resp => {return resp})

    
}