// API AIzaSyCRvSKDvYpnIBscnGZeq-wrYQ2aEObCZa8;
let map;
const COORDS = { lat: 49.233236, lng: 28.411815 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: COORDS,
    zoom: 16,
  });
  getWeather().then((json) => {
    const weather = json.weather[0];
    const icon = `http://openweathermap.org/img/w/${weather.icon}.png`;
    new google.maps.Marker({
      position: COORDS,
      map: map,
      label: {
        text: weather.main,
        color: "red",
      },
      title: weather.description,
      icon: {
        url: icon,
        labelOrigin: new google.maps.Point(30, 40),
      },
    });
  });
}
function getWeather() {
  const API_KEY = "1b5ee5a1a74d624a74750350327ea372";
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${COORDS.lat}&lon=${COORDS.lng}&appid=${API_KEY}`;
  return fetch(url).then((response) => response.json());
}
