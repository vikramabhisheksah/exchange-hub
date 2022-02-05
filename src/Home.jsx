import { useState } from "react";
import Exchanges from "./Exchanges";

const Home = (props) => {

    const [search_qry, setSearchQry] = useState('');
    const exchanges = props.exchanges

    const handleChange = (e) => {
        setSearchQry(e.target.value)
    }

    const filteredExchanges = search_qry?exchanges.filter((exchange) =>
        exchange.name.toLowerCase().includes(search_qry.toLowerCase())
    ):exchanges
    return ( 
        <div className="home">
            <div className = "exchange-search">
                <h2>Search an exchange</h2>
                <form>
                    <input
                    type='text'
                    placeholder='search'
                    onChange={handleChange}
                    className = 'exchange-input'/>
                </form>
                {/* {console.log(filteredExchanges)} */}
                {/* {filteredExchanges.map(exchange=>console.log(exchange.id))} */}
            </div>
            {filteredExchanges.map((exchange)=>
            {  console.log(exchange)
                return(
                    <Exchanges 
                    key={exchange.id}
                    name={exchange.name}
                    country = {exchange.country}
                    url = {exchange.url}
                    logo = {exchange.image}
                    trust_rank = {exchange.trust_score_rank} />
                )
            })}
        </div>
     );
}
 
export default Home;