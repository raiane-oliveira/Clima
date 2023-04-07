import "./App.css";
import TemperatureNow from "./components/TemperatureNow";
import AirQuality from "./components/AirQuality";
import SunTime from "./components/SunTime";
import WeekWeather from "./components/WeekWeather";

import { API_URL } from "./api";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState();

  async function getWeather() {
    try {
      const response = await axios
        .get(`${API_URL}&q=Campina%20Grande`)
        .then((result) => result.data);
      setWeather(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWeather();
  }, []);

  console.log(weather);

  return (
    <main className="App">
      <TemperatureNow
        cityName={weather && weather.name}
        countryName={weather && weather.sys}
        windSpeed={weather && weather.wind}
        temp={weather && weather.main}
        weather={weather && weather.weather[0]}
        clouds={weather && weather.clouds}
      />
      <AirQuality />
      <SunTime />
      <WeekWeather />
    </main>
  );
}

export default App;
