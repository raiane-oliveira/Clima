import React from "react";

export default function HeadingBoxWeather({ img, altImg, title }) {
    return (
        <section className="title-container-box-weather">
            <img src={img} alt={altImg} />
            <h2 className="title-box-weather">{title}</h2>
        </section>
    );
}
