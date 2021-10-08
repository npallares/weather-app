import './App.css';
import MainComponent from './components/mainComponents/MainComponent';
import { GeolocationProvider } from './context/GeolocationContext';

function App() {
  return (
    <div className="App">

    <GeolocationProvider>
      <MainComponent/>
    </GeolocationProvider>



    </div>
  );
}

export default App;
