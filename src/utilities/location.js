const asyncGetLocation = () => new Promise((resolve, reject) => {
  navigator.permissions.query({ name:'geolocation' }).then((result) => {

    // NOTE: Conditional render based on if permission granted or not...
    // can do some more logic / diff behavior here if you want
    if (result.state !== 'denied') {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    
    }
    else{
      reject("Error loading geolocation data");
    };
  });
});

export const getLocationDetails = async () => {
  try {
    const {coords: {latitude, longitude}} = await asyncGetLocation();

    const part = "minutely,hourly,daily,alerts";
    const API_key = "5319001b9d3129d9f66e7519f063a851";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=${part}&APPID=${API_key}`;

    const res = await fetch(url, { method: 'GET' });
    const response = await res.json();

    return response;
  } catch {
    return {};
  };
};
