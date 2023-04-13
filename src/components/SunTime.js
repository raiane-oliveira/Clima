import React from "react";
import time from "../assets/time.svg";
import charSunTime from "../assets/sun-time-chart.svg";
import "./SunTime.css";

import HeadingBoxWeather from "./HeadingBoxWeather";

const CONVERT_TO_MILLISECONDS = 1000;

export default function SunTime({ sunrise, sunset }) {
  const sunriseHour = new Date(
    sunrise * CONVERT_TO_MILLISECONDS
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const sunsetHour = new Date(
    sunset * CONVERT_TO_MILLISECONDS
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const currentHour = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const totalSunDuration = (sunset - sunrise) * CONVERT_TO_MILLISECONDS;

  // Math.min garante that Date.now() always be lower than sunset
  const visibleDurationOfSun =
    Math.min(Date.now(), sunset * CONVERT_TO_MILLISECONDS) -
    sunrise * CONVERT_TO_MILLISECONDS;

  const visiblePercentageOfSun =
    (visibleDurationOfSun / totalSunDuration) * 100;

  return (
    <article className="box-weather sun-time">
      <HeadingBoxWeather
        img={time}
        altImg="Ilustração de um relógio"
        title="Horário do sol"
      />

      <section className="container-chart-sun-time">
        <TimeSunSection hour={currentHour} className="current-time-sun-time" />

        <ChartSunTime sunTimePercentage={visiblePercentageOfSun} />

        <div className="time-wrapper-sun-time">
          <TimeSunSection hour={sunriseHour} className="time-sun-time" />
          <TimeSunSection hour={sunsetHour} className="time-sun-time" />
        </div>
      </section>
    </article>
  );
}

function TimeSunSection({ hour, className }) {
  return <time className={className}>{hour}</time>;
}

function ChartSunTime({ sunTimePercentage }) {
  return (
    <div className="chart-sun-time-wrapper">
      <div className="chart-sun-time" style={{ "--pos-x": sunTimePercentage }}>
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
