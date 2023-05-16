import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function Weather(props) {
console.log(props.weatherData);
    return (
      <div>
        <h3>Weather Report</h3>
        <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Title>{props.weatherData[0]?.valid_date}</Card.Title>
          <Card.Text>{props.weatherData[0]?.description}</Card.Text>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Title>{props.weatherData[1]?.valid_date}</Card.Title>
          <Card.Text>{props.weatherData[1]?.description}</Card.Text>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Title>{props.weatherData[2]?.valid_date}</Card.Title>
          <Card.Text>{props.weatherData[2]?.description}</Card.Text>
        </Card>
        </CardGroup>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
  
  export default Weather;