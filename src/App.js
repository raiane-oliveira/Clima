import "./App.css";
import TemperatureNow from "./components/TemperatureNow";
import AirQuality from "./components/AirQuality";
import SunTime from "./components/SunTime";
import WeekWeather from "./components/WeekWeather";

function App() {
    return (
        <main className="App">
            <TemperatureNow />
            <AirQuality />
            <SunTime />
            <WeekWeather />
        </main>
    );
}

export default App;
