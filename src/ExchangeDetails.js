import { useParams} from 'react-router-dom'
const ExchangeDetails = (props) => {
    const params = useParams()

    // console.log(props.location.state)
    return ( 
        
        <div>
            <p>Exchange Page {params.Id}</p>
        </div>
     );
}
 
export default ExchangeDetails;