const weatherAPI = async () => {
    const searchInput = document.getElementById("search-input");
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=4d2d40c2a50766629683229653cff573`)
    const data = await res.json();
    displayTemperature(data);
    searchInput.value = "";
}
const displayTemperature = result => {
    console.log(result);
    const searchResult = document.getElementById('search-result');
    const weatherStatus = result.weather[0].main;
    let weatherImg;
    if(weatherStatus=="Clouds"){
        weatherImg = "https://image.pngaaa.com/479/991479-middle.png"
    }else if (weatherStatus=="Haze"){
        weatherImg = "https://image.flaticon.com/icons/png/512/1779/1779862.png"
    }else if (weatherStatus=="Clear"){
        weatherImg = "https://www.clipartmax.com/png/middle/129-1295160_weather-report-mostly-sunny-clip-art.png"
    }
    const kelvinTemp = result.main.temp;
    const celciusTemp = parseInt(kelvinTemp-273.15);
    searchResult.innerHTML = `
        <img src="${weatherImg}" alt="" style="width: 100px; height:100px">
        <h2>${result.name}</h2>
        <h3><span>${celciusTemp}</span>&deg;C</h3>
        <h1 class="lead">${result.weather[0].main}</h1>
    `;
}
