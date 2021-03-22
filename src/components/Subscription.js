import React, {useState, useEffect} from 'react';
import LoadingMask from './LoadingMask';

const Subscription = ({hotel}) => {
    
    const [inputValue, setInputValue] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')

    const inputValueHandler = (e) => {
        setInputValue(e.target.value)
        setIsValidEmail(inputValue.includes("@") && inputValue.includes("."))
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const data = { 
            "email": inputValue,
            "hotel": hotel,
        };
        setIsLoading(true)
        fetch('api/hotels/subscribe', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if(inputValue === "a@b.c" && hotel === "Hotel Curabitur suscipit suscipit"){
                setMessage("Already Subscribed")
            }else {
                setMessage("Subscribed")
            }
            setIsLoading(false)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    
    return (
        <div>
            <h2>Request more info about</h2>
            {!isLoading && !message && (<form onSubmit={submitHandler}>
                <input type="email" id="mail" name="user_email" onChange={inputValueHandler} value={inputValue}></input>
                <button type="submit" disabled={!isValidEmail}>Send your message</button>
            </form>)}
            {isLoading && <LoadingMask/>}
            <p>{message}</p>
        </div>
    )
}

export default Subscription;