import { useLocation, useNavigate } from "react-router-dom";
import "./ExchangeDetails.css";

//Component for rendering details for each exchange
const ExchangeDetails = () => {
  const location = useLocation();
  const exchange = location.state.exchange;

  let navigate = useNavigate();

  return (
    <div className="content">
      <div className="exchange-logo">
        <img alt={exchange.name} src={exchange.image} />
      </div>

      <div className="exchange-name">
        <h1>
          <a href={exchange.url}>{exchange.name}</a>
        </h1>
      </div>

      <div className="exchange-details">
        <p className="trade-vol">
          Trade Volume:{" "}
          {exchange.trade_volume_24h_btc.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </p>
        <p className="trust-score">Trust Score: {exchange.trust_score}</p>
        <p className="trust-score-rank">
          Trust Score Rank: {exchange.trust_score_rank}
        </p>
        <p className="exchange-country">Country: {exchange.country}</p>
        <p className="exchange-year">Year: {exchange.year_established}</p>
      </div>

      <button className="button-back" onClick={() => navigate("/")}>
        Back To Home
      </button>
    </div>
  );
};

export default ExchangeDetails;
