import "./Exchanges.css";
//Component for displaying the exchange item in the list. 
//Didnt include the exchange url to avoid nesting of links (not sure what are the best practices to handle that)
const Exchanges = (props) => {
  return (
    <div className="exchange-container">
      <div className="exchange-row">
        <div className="exchange">
          <img alt={props.name} src={props.logo} />
          <div>
            <h1>{props.name}</h1> 
          </div>
        </div>
        <div className="exchange-info">
          <p className="exchange-country">{props.country}</p>
          <p className="exchange-trust">{props.trust_rank}</p>
        </div>
      </div>
    </div>
  );
};

export default Exchanges;
