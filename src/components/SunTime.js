import React from "react";
import time from "../assets/time.svg";
import charSunTime from "../assets/sun-time-chart.svg";

export default function SunTime() {
    return (
        <article className="box-weather sun-time">
            <section className="title-container-box-weather">
                <img src={time} alt="Ilustração relógio" />
                <h2 className="title-box-weather">Horário do sol</h2>
            </section>
            <section className="container-chart-sun-time">
                <TimeSunSection hour="16:01" />
                <ChartSunTime />
            </section>
            <div className="time-wrapper-sun-time">
                <TimeSunSection hour="06:12" />
                <TimeSunSection hour="18:52" />
            </div>
        </article>
    );
}

function TimeSunSection({ hour }) {
    return <time className="time-sun-time">{hour}</time>;
}

function ChartSunTime({ children }) {
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
