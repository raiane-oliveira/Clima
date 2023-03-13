import "./App.css";
import TemperatureNow from "./components/TemperatureNow";
import AirQuality from "./components/AirQuality";
import SunTime from "./components/SunTime";

function App() {
    return (
        <main className="App">
            <TemperatureNow />
            <AirQuality />
            <SunTime />
        </main>
    );
}

export default App;
