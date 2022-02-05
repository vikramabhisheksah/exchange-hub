import { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home"

function App() {

  useEffect(()=>{
    
  })
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>

      </div>
    </div>
  );
}

export default App;
