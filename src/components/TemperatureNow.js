import React, { useState } from "react";
import location from "../assets/location.svg";
import wind from "../assets/wind.svg";
import humidity from "../assets/humidity.svg";
import cloudsPurple from "../assets/cloudsPurple.svg";

import "./TemperatureNow.css";

export default function TemperatureNow(props) {
  const {
    cityName,
    countryName,
    temp,
    weather,
    windSpeed,
    clouds,
    onSearchCity,
  } = props;

  const [city, setCity] = useState(cityName);

  return (
    <article className="box-weather temperature-now">
      <section className="location-temperature-now">
        <label htmlFor="search">
          <img src={location} alt="Location figure" />
        </label>
        <input
          id="search"
          onKeyDown={onSearchCity}
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          title="Digite aqui uma cidade"
        />
        <span>{countryName.country}</span>
      </section>

      <section className="temperature-temperature-now">
        <h1 className="title-temperature">
          {temp ? Math.round(temp.temp) : 0}
          <span className="degrees-title-temperature"> °C</span>
        </h1>
        <span className="first-degrees-box-weather">
          {weather &&
            weather.description.replace(/(?:^|\s)\S/g, (letter) =>
              letter.toUpperCase()
            )}
        </span>
      </section>

      <section className="statistics-temperature-now flex">
        <StatisticTemperatureNow
          img={wind}
          imgAlt="Ilustração vento"
          title="Vento"
          number={windSpeed && windSpeed.speed}
          symbol="m/s"
        />
        <StatisticTemperatureNow
          img={humidity}
          imgAlt="Ilustração umidade"
          title="Umidade"
          number={temp && temp.humidity}
          symbol="%"
        />
        <StatisticTemperatureNow
          img={cloudsPurple}
          imgAlt="Ilustração Chuva"
          title="Nebulosidade"
          number={clouds && clouds.all}
          symbol="%"
        />
      </section>
    </article>
  );
}

function StatisticTemperatureNow({ img, imgAlt, title, number, symbol }) {
  return (
    <div className="box-statistics">
      <img src={img} alt={imgAlt} />
      <p className="title-box-statistics">{title}</p>
      <p className="number-box-statistics">
        {number}
        <span className="symbol-box-statistics">{symbol}</span>
      </p>
    </div>
  );
}
