import { useState, useEffect } from "react";
import "./App.css";
import MainComponent from "./components/mainComponent/MainComponent";
import { GeolocationProvider } from "./context/GeolocationContext";

function App() {

  const[start, setStart]=useState(false)

  const initApp =()=>{
    setStart(true)
  }

  useEffect(() => {
  }, [start])
  
  
  if(!start){
   return <button onClick={()=>{initApp()}}>Comenzar</button>
  }

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
