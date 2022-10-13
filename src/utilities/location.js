export const getLocation = () => {
    return navigator.geolocation.getCurrentPosition(function (pos) {
        //'pos' return object has many properties we can grab
        var geoLat = pos.coords.latitude.toFixed(5);
        var geoLng = pos.coords.longitude.toFixed(5);
        var geoAcc = pos.coords.accuracy.toFixed(1);
        console.log(geoLat)
        console.log(geoLng)
        console.log(geoAcc)
        console.log(pos)
        return pos.coords;
    });
}