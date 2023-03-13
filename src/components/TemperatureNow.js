import React from "react";
import location from "../assets/location.svg";
import wind from "../assets/wind.svg";
import humidity from "../assets/humidity.svg";
import cloudsWithRain from "../assets/cloudsWithRain.svg";

export default function TemperatureNow() {
    return (
        <article className="box-weather temperature-now">
            <section className="location-temperature-now">
                <img src={location} alt="Location figure" />
                <p>Rio do Sul, SC</p>
            </section>

            <section className="temperature-temperature-now">
                <h1 className="title-temperature">18°C</h1>
                <span>22°</span>
                <span>16°</span>
            </section>

            <section className="statistics-temperature-now">
                <StatisticTemperatureNow
                    img={wind}
                    imgAlt="Ilustração vento"
                    title="Vento"
                    data="17 km/h"
                />
                <StatisticTemperatureNow
                    img={humidity}
                    imgAlt="Ilustração umidade"
                    title="Umidade"
                    data="31%"
                />
                <StatisticTemperatureNow
                    img={cloudsWithRain}
                    imgAlt="Ilustração Chuva"
                    title="Chuva"
                    data="10%"
                />
            </section>
        </article>
    );
}

function StatisticTemperatureNow({ img, imgAlt, title, data }) {
    return (
        <div className="box-statistics">
            <img src={img} alt={imgAlt} />
            <p className="title-box-statistics">{title}</p>
            <span className="data-box-statistics">{data}</span>
        </div>
    );
}
