import "./App.css";
import MainComponent from "./components/mainComponent/MainComponent";
import { GeolocationProvider } from "./context/GeolocationContext";

function App() {
  return (
    <div className="App" data-testid="app">
      <div className="mainContainer" data-testid="mainContainer">
        <GeolocationProvider>
          <MainComponent />
        </GeolocationProvider>
      </div>
    </div>
  );
}

export default App;
