import React from "react";
import location from "../assets/location.svg";
import wind from "../assets/wind.svg";
import humidity from "../assets/humidity.svg";
import cloudsPurple from "../assets/cloudsPurple.svg";

export default function TemperatureNow() {
    return (
        <article className="box-weather temperature-now">
            <section className="location-temperature-now">
                <img src={location} alt="Location figure" />
                <p>Rio do Sul, SC</p>
            </section>

            <section className="temperature-temperature-now">
                <h1 className="title-temperature">
                    18
                    <span className="degrees-title-temperature"> °C</span>
                </h1>
                <span className="first-degrees-box-weather">22°</span>
                <span className="second-degrees-box-weather">16°</span>
            </section>

            <section className="statistics-temperature-now flex">
                <StatisticTemperatureNow
                    img={wind}
                    imgAlt="Ilustração vento"
                    title="Vento"
                    number={17}
                    symbol="km/h"
                />
                <StatisticTemperatureNow
                    img={humidity}
                    imgAlt="Ilustração umidade"
                    title="Umidade"
                    number={31}
                    symbol="%"
                />
                <StatisticTemperatureNow
                    img={cloudsPurple}
                    imgAlt="Ilustração Chuva"
                    title="Chuva"
                    number={10}
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
