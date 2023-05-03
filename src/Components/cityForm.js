import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import React, { useState } from 'react';
import CityMap from './cityMap';

function CityForm() {
    const [searchQuery, setSearchQuery] = useState(0);
    const [location, setlocation] = useState(0);

    // State = {searchQuery:'',location: {}}

    var getLocation = async () => {
        const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_ENV_VARIABLE}&q=${searchQuery}&format=json`;
        console.log(API)
        const res = await axios.get(API);
        console.log(res.data[0])
        setlocation(res.data[0]);
      }
    return (
        <div>
            <Form>
                <Form.Label> Find a City</Form.Label>
                <Form.Control onChange={(e) => setSearchQuery(e.target.value)} placeholder='enter city'/>
                <Button onClick={getLocation}>Explore!</Button>
            </Form>
            {location.place_id && <h2>The city is: {location.display_name} ,{location.lat}, {location.lon}</h2>}
            <CityMap location={location}/>
        </div>
    );
  }
  
  export default CityForm;