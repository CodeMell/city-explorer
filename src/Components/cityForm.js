import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import React, { useState } from 'react';
import CityMap from './cityMap';
import Weather from './Weather';
import Movies from './Movies';

function CityForm() {
    const [searchQuery, setSearchQuery] = useState(0);
    const [location, setlocation] = useState(0);
    const [weatherData, setWeatherData] = useState([]);
    const [moviesData, setMoviesData] = useState({results:[]});

    // State = {searchQuery:'',location: {}}

    var getLocation = async () => {
        const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_ENV_VARIABLE}&q=${searchQuery}&format=json`;
        console.log(API)
        const res = await axios.get(API);
        console.log(res.data[0])
        setlocation(res.data[0]);
        let reW = await getWeatherData(res.data[0].lat, res.data[0].lon);
        console.log(reW);
        let reM = await getMoviesData(searchQuery);
        console.log(reM);

      }
    var  getWeatherData = async (lat,lon) =>{
        const API = `https://city-explorer-y1ao.onrender.com/weather?lat=${lat}&lon=${lon}`;
        console.log(API);
        try {
        const res = await axios.get(API);
        console.log(res);
        setWeatherData(res.data)
        return res;
        } catch (error) {
            console.error(error);
        }
    }

    var  getMoviesData = async (searchQuery) =>{
        const API = `https://city-explorer-y1ao.onrender.com/movies?searchQuery=${searchQuery}`;
        console.log(API);
        try {
        const res = await axios.get(API);
        console.log(res);
        setMoviesData(res.data)
        return res;
        } catch (error) {
            console.error(error);
        }
        
    }

    return (
        <div>
            <Form>
                <Form.Label> Find a City</Form.Label>
                <Form.Control onChange={(e) => setSearchQuery(e.target.value)} placeholder='enter city'/>
                <Button onClick={getLocation} >Explore!</Button>
            </Form>
            {location.place_id && <h2>The city is: {location.display_name} ,{location.lat}, {location.lon}</h2>}
            <CityMap location={location}/>
            <Weather weatherData={weatherData}/>
            <Movies moviesData={moviesData}/>

        </div>
    );
  }
  
  export default CityForm;