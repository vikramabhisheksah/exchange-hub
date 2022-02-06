import { useState } from "react";
import { Link} from 'react-router-dom'
import Exchanges from "./Exchanges";
// import ExchangeDetails from "./ExchangeDetails";

const Home = (props) => {
    const [search_qry, setSearchQry] = useState("");

  const handleChange = (e) => {
    setSearchQry(e.target.value);
  };

  const filteredExchanges = search_qry
    ? props.exchanges.filter((exchange) =>
    exchange.name.toLowerCase().includes(search_qry.toLowerCase())
      )
    : props.exchanges;
    return ( 
        <div className="content">
        <div className="exchange-search">
          <h2>Search an exchange</h2>
          <form>
            <input
              type="text"
              placeholder="search"
              onChange={handleChange}
              className="exchange-input"
            />
          </form>
          {/* {console.log(filteredExchanges)} */}
          {/* {console.log(props.exchanges)} */}
          {/* {filteredExchanges.map(exchange=>console.log(exchange.id))} */}
        </div>
       
        {filteredExchanges.map((exchange) => 
            // <Link to={`/exchange/${exchange.id}`}>
            <Link to={{
                pathname:`/exchange/${exchange.id}`,
                state:exchange
                }}>
            <Exchanges
              key={exchange.id}
              name={exchange.name}
              country={exchange.country}
              url={exchange.url}
              logo={exchange.image}
              trust_rank={exchange.trust_score_rank}
            //   onClick = {(e)=>{navigate("/exchange/"${exchange.id})}}
            />
            </Link> 
          
        )}
        </div>
     );
}
 
export default Home;