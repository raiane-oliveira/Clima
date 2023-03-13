import "./App.css";
import TemperatureNow from "./components/TemperatureNow";
import AirQuality from "./components/AirQuality";

function App() {
    return (
        <main className="App">
            <TemperatureNow />
            <AirQuality />
        </main>
    );
}

export default App;
