import './App.css';
import MainComponent from './components/mainComponent/MainComponent';
import { GeolocationProvider } from './context/GeolocationContext';

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <GeolocationProvider>
          <MainComponent/>
        </GeolocationProvider>
      </div>
    </div>
  );
}

export default App;
