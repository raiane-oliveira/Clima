import React from "react";
import clouds from "../assets/clouds.svg";
import sun from "../assets/sun.svg";
import cloudsWithRain from "../assets/cloudsWithRain.svg";
import cloudsWithRays from "../assets/cloudsWithRays.svg";
import cloudsWithSun from "../assets/cloudsWithSun.svg";

import "./WeekWeather.css";

export default function WeekWeather() {
  return (
    <article className="box-weather week-weather flex">
      <DayWeekWeather
        day="Amanhã"
        img={clouds}
        imgAlt="Nuvens ilustração"
        firstDegrees={21}
        secondDegrees={16}
      />
      <DayWeekWeather
        day="Sexta-Feira"
        img={sun}
        imgAlt="Sol ilustração"
        firstDegrees={28}
        secondDegrees={20}
      />
      <DayWeekWeather
        day="Sábado"
        img={cloudsWithRain}
        imgAlt="Nuvens com chuva ilustração"
        firstDegrees={25}
        secondDegrees={21}
      />
      <DayWeekWeather
        day="Domingo"
        img={cloudsWithRays}
        imgAlt="Nuvens com raios ilustração"
        firstDegrees={20}
        secondDegrees={14}
      />
      <DayWeekWeather
        day="Segunda-Feira"
        img={cloudsWithSun}
        imgAlt="Nuvens ensolaradas ilustração"
        firstDegrees={24}
        secondDegrees={18}
      />
    </article>
  );
}

function DayWeekWeather({ day, img, imgAlt, firstDegrees, secondDegrees }) {
  return (
    <section className="day-week-weather">
      <h3 className="title-day-week-weather">{day}</h3>
      <img src={img} alt={imgAlt} />
      <div className="degrees-day-week-weather">
        <span className="first-degrees-box-weather">{firstDegrees}°</span>
        <span className="second-degrees-box-weather">{secondDegrees}°</span>
      </div>
    </section>
  );
}
