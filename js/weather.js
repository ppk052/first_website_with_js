function onGeoOk(position)
{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const api_key="df96b01c6f724f0aed31b87e0105ad17";
    const url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+api_key+"&units=metric&lang=kr";
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const location = document.querySelector("#weather span:last-child");
        weather.innerText = data.weather[0].main;
        location.innerText = data.name;  
    });
    
}

function onGeoError()
{
    alert("Can't find you. No weather");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);