// https://api.openweathermap.org/data/2.5/weather?q=surat&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric
const uiMaker = (data) => {
    let temp = `<div class="weather__header">
              <form class="weather__search">
                  
              </form> 
              <div class="weather__units">
                  <span class="weather_unit_celsius">&#176C</span>
                  <span class="weather_unit_farenheit">&#176F</span>
              </div>
          </div>
          <div class="weather__body">   
     
              <p class="weather__temperature">
              ${data.main.temp}
              </p>
              <div class="weather__minmax">
                  <p>Min: 12&#176</p>
                  <p>Max: 16&#176</p>
              </div>
          </div>       
          </div>`;
    document.getElementById("output").innerHTML = temp;
};
const getWeather = async (cityName) => {
    let req = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`
    );
    let res = await req.json();
    console.log(res);
    uiMaker(res);
};

document.getElementById("search").addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        let cityName = e.target.value;
        console.log(cityName);
        getWeather(cityName);
    }
});