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

  navigator.geolocation.getCurrentPosition((position) =>
    setCoords(position.coords)
  );

  async function getWeather() {
    try {
      const response = await axios
        .get(
          `${API_URL}&${
            !coords
              ? "q=Campina%20Grande"
              : `lat=${coords.latitude}&lon=${coords.longitude}`
          }`
        )
        .then((result) => result.data);
      setWeather(response);
    } catch (error) {
      return <h1>Error: {error.message}</h1>;
    }
  }

  useEffect(() => {
    getWeather();
  });

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
