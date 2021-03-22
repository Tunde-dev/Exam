import React, {useState} from 'react';
import Subscription from './Subscription';

const Hotel = ({hotel, key}) => {

    const [showMore, setShowMore] = useState(false)
    const [showSubscription, setShowSubscription] = useState(false)

    const showMoreInfoHandler = () => {
        setShowMore(!showMore)
    }
    

    return (
        <div key={key}>
            <h2>{hotel.name}</h2>
            <button onClick={showMoreInfoHandler}>{showMore ? "Show Less" : "Show More"}</button>
            {showMore && (<div>
                <p>{hotel.city}</p>
                <p>{hotel.stars}</p>
                <button onClick={() => setShowSubscription(true)}>Request more info</button>
                {showSubscription && <Subscription hotel={hotel.name}/>}
            </div>
            )}
        </div>

    )
}
export default Hotel;