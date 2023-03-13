import React from "react";
import leaf from "../assets/leaf.svg";

export default function AirQuality() {
    return (
        <article className="box-weather air-quality">
            <section>
                <img src={leaf} alt="Ilustração folha" />
                <h2 className="title-air-quality">Qualidade do ar</h2>
            </section>

            <section>
                <span className="quality-air-quality">Boa</span>
                <h3 className="quality-number-air-quality">21</h3>
            </section>

            <section className="statistics-air-quality">
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
