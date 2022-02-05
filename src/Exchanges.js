const Exchanges = (props) => {
    return ( 
        <div className='exchange-container'>
            <div className='exchange-row'>
                <div className='exchange'>
                    <img alt={props.name} src={props.logo}/>
                    <h3><a href={props.url}>{props.name}</a></h3>
                    
                </div>
                <div className='exchange-info'>
                    <p className='exchange-country'>{props.country}</p>
                    <p className='exchange-trust'>{props.trust_rank}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Exchanges;