// navigator.geolocation.getCurrentPosition()

const API_KEY = "8efe5e480ce62d6f328b02e8ce824bea";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        // const name = data.name;
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        weather.style.fontWeight = "bold";
        console.log(data.name, data.weather[0].main)
    });
}
function onGeoError(){
    alert("Can't find you. No weathher for you")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?lat=37.5407&lon=127.0934&appid=8efe5e480ce62d6f328b02e8ce824bea