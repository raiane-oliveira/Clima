import React from "react";
import time from "../assets/time.svg";

export default function SunTime() {
    return (
        <article className="box-weather sun-time">
            <section className="title-container-box-weather">
                <img src={time} alt="Ilustração relógio" />
                <h2 className="title-box-weather">Horário do sol</h2>
            </section>
            <section className="chart-sun-time">16:01</section>
        </article>
    );
}
