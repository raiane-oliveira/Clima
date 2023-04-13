import "./App.css";
import TemperatureNow from "./components/TemperatureNow";
import AirQuality from "./components/AirQuality";
import SunTime from "./components/SunTime";
import WeekWeather from "./components/WeekWeather";

import { API_URL } from "./api";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState();
  const [coords, setCoords] = useState();
  const [cityName, setCityName] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      setCoords(position.coords)
    );
  }, []);

  useEffect(() => {
    getWeatherData();
  }, [coords, cityName]);

  function getWeatherData() {
    let query = "";
    if (!coords && !cityName) {
      query = "q=Campina%20Grande";
    } else if (coords && !cityName) {
      query = `lat=${coords.latitude}&lon=${coords.longitude}`;
    } else if (cityName) {
      query = `q=${cityName.replace(" ", "%20")}`;
    }

    axios.get(`${API_URL}&${query}`).then((result) => {
      setWeather(result.data);
      setCityName(result.data.name);
    });
  }

  function searchCity(e) {
    if (e.key === "Enter") {
      setCityName(e.target.value);
    }
  }

  return weather ? (
    <main className="App">
      <TemperatureNow
        onSearchCity={searchCity}
        cityName={cityName}
        setCityName={setCityName}
        countryName={weather.sys}
        windSpeed={weather.wind}
        temp={weather.main}
        weather={weather.weather[0]}
        clouds={weather.clouds}
      />
      <AirQuality />
      <SunTime sunrise={weather.sys.sunrise} sunset={weather.sys.sunset} />
      <WeekWeather />
    </main>
  ) : (
    <main className="App">
      <h1>Carregando...</h1>
    </main>
  );
}

export default App;
