import React from "react";
import leaf from "../assets/leaf.svg";
import "./AirQuality.css";

import HeadingBoxWeather from "./HeadingBoxWeather";

export default function AirQuality() {
  return (
    <article className="box-weather air-quality">
      <HeadingBoxWeather
        img={leaf}
        altImg="Ilustração de uma folha"
        title="Qualidade do ar"
      />

      <section className="qualities-container-air-quality">
        <span className="quality-air-quality">Boa</span>
        <h3 className="quality-number-air-quality">21</h3>
      </section>

      <section className="statistics-air-quality flex">
        <StatisticAirQuality number={12.9} title="PM2.5" />
        <StatisticAirQuality number={12.9} title="PM10" />
        <StatisticAirQuality number={2.1} title="SO²" />
        <StatisticAirQuality number={1.4} title="NO²" />
        <StatisticAirQuality number={21.2} title="O³" />
        <StatisticAirQuality number={0.7} title="CO" />
      </section>
    </article>
  );
}

function StatisticAirQuality({ number, title }) {
  return (
    <div className="statistic-item-air-quality">
      <span>{number}</span>
      <p>{title}</p>
    </div>
  );
}
