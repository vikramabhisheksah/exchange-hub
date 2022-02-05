import { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "./Navbar";
import Home from "./Home"

function App() {
  const [exchanges, setExchanges] = useState([]);

  useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/exchanges?per_page=10")
    .then(res=>{
      console.log(Object.values(res.data))
      setExchanges(Object.values(res.data))
    })
    .catch(err=>{
      console.log(err)
      alert('Ooops! Looks like something is broken.')
    });
  },[])

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home exchanges= {exchanges}/>
      </div>
    </div>
  );
}

export default App;
