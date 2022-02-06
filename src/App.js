import { useState, useEffect } from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import axios from "axios";
import Navbar from "./Navbar";
import Home from "./Home";
import ExchangeDetails from "./ExchangeDetails";

function App() {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/exchanges?per_page=10")
      .then((res) => {
        setExchanges(Object.values(res.data));
        // console.log(Object.values(res.data));
      })
      .catch((err) => {
        console.log(err);
        alert("Ooops! Looks like something is broken.");
      });
  }, []);

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home exchanges={exchanges}/>}/>
        <Route path="/exchange/:Id" element={<ExchangeDetails/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
