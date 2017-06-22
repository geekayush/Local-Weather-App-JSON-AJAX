function weather() {

    var location = document.getElementById("location");
    var apiKey = '6730e02e2a3574dc0a2bfcf2f10c8b61';
    var url = 'https://api.forecast.io/forecast/';

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        var loc = [latitude.toFixed(2), longitude.toFixed(2)];

        location.innerHTML = 'Latitude is ' + loc[0] + '&deg;&nbsp;&nbsp;||&nbsp;&nbsp;Longitude is ' + loc[1] + '&deg;';

        $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function (data) {
            var temp = [((data.currently.temperature - 32) * 0.56).toFixed(0), ((data.currently.apparentTemperature - 32) * 0.56).toFixed(0)];
            var wind = [(data.currently.windSpeed * 1.6).toFixed(2)];
            $('#temp').html(temp[0] + '&deg;C');
            $('#sum').html(data.currently.summary);
            $('#apparent').html('Feels like ' + temp[1] + ' &deg;C');
            $('#wind').html(wind[0] + " Kmph");
        });
    }

    function error() {
        location.innerHTML = "Unable to retrieve your location";
    }

    location.innerHTML = "Locating...";
}

weather();
