import axios from "axios";

function Weather(props) {
    getWeather = async () =>{
        const API = 'http://localhost:3001';
        const response = await axios.get(`${API}/weather`);
    }
    return (
      <div>

      </div>
    );
  }
  
  export default Weather;