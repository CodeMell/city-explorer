function CityMap(props) {
    return (
      <div>
       <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_ENV_VARIABLE}&center=${props.location.lat},${props.location.lon}`}/>
      </div>
    );
  }
  
  export default CityMap;