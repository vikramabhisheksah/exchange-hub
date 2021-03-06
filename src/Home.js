import { useState } from "react";
import { Link } from "react-router-dom";
import Exchanges from "./Exchanges";

//Home component, includes a search bar along with the exchange list
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
            id="exchange-search"
          />
        </form>
      </div>

      {filteredExchanges.map((exchange) => (
        <Link
          to={`/exchange/${exchange.id}`}
          state={{ exchange: exchange }}
          key={exchange.id}
          className={"links"}
        >
          <Exchanges
            key={exchange.id}
            name={exchange.name}
            country={exchange.country}
            url={exchange.url}
            logo={exchange.image}
            trust_rank={exchange.trust_score_rank}
          />
        </Link>
      ))}
    </div>
  );
};

export default Home;
