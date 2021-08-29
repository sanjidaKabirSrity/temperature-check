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
    searchResult.innerHTML = `
        <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
        <h2>${result.name}</h2>
        <h3><span>${result.main.temp}</span>&deg;C</h3>
        <h1 class="lead">${result.weather[0].main}</h1>
    `;
}