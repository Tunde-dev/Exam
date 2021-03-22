import React, {useState, useEffect} from 'react';
import './App.css'
import LoadingMask from './components/LoadingMask';
import Hotel from './components/Hotel'


const App = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hotels, setHotels] = useState([]);


  useEffect(() => {
    fetch("api/hotels")
      .then(res => res.json())
      .then(
        (result) => {
          setHotels(result);
          setIsLoaded(true);
          console.log(result)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  return (
    <div className="App">
      <h1>Hotels</h1>
      {isLoaded === false ? <LoadingMask/> : hotels.map((hotel, index) => <Hotel hotel={hotel} key={index}/>)}
    </div>
  )
}

export default App;
