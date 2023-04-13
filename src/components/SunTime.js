import React from "react";
import time from "../assets/time.svg";
import charSunTime from "../assets/sun-time-chart.svg";
import "./SunTime.css";

import HeadingBoxWeather from "./HeadingBoxWeather";

export default function SunTime() {
  return (
    <article className="box-weather sun-time">
      <HeadingBoxWeather
        img={time}
        altImg="Ilustração de um relógio"
        title="Horário do sol"
      />

      <section className="container-chart-sun-time">
        <TimeSunSection hour="16:01" className="current-time-sun-time" />

        <ChartSunTime />

        <div className="time-wrapper-sun-time">
          <TimeSunSection hour="06:12" className="time-sun-time" />
          <TimeSunSection hour="18:52" className="time-sun-time" />
        </div>
      </section>
    </article>
  );
}

function TimeSunSection({ hour, className }) {
  return <time className={className}>{hour}</time>;
}

function ChartSunTime() {
  return (
    <div className="chart-sun-time-wrapper">
      <div className="chart-sun-time">
        <div className="chart">
          <img
            src={charSunTime}
            alt="Gráfico representando os horários onde o sol está"
          />
        </div>
      </div>
    </div>
  );
}
