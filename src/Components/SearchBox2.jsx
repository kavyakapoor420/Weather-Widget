/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';

// API Used-> https://openweathermap.org/api

import './SearchBox.css';

const SearchBox2 = ({ updateInfo }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const API_KEY =import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const handleChange = (e) => {
    setCity(e.target.value);
    setError(''); // Clear error when user types a new city
  };

  const getWeatherInfor = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        // Handle non-2xx HTTP responses
        if (response.status === 404) {
          throw new Error('City not found. Please check the city name.');
        } else {
          throw new Error('Unable to fetch weather data. Try again later.');
        }
      }

      const jsonResponse = await response.json();

      const result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        feels_like: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (err) {
      // Log the error and return nothing
      console.error('Error fetching weather information:', err);
      throw err; // Re-throw error to be handled in the submit function
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(city);
      const newInfo = await getWeatherInfor();
      updateInfo(newInfo);
      setCity(''); // Reset input field after successful fetch
      setError(''); // Clear any previous error messages
    } catch (err) {
      setError(err.message); // Display user-friendly error message
    }
  };

  return (
    <>
      <div className="SearchBox">
        <ReactTypingEffect
          style={{ color: 'green', fontWeight: 'bold' }}
          text={['Search For the weather', 'Get Weather details of City!']}
        />
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <TextField
            id="city"
            label="City Name"
            value={city}
            onChange={handleChange}
            variant="outlined"
            required
          />
          <br />
          <br />
          <Button variant="contained" type="submit">
            Search
          </Button>

          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </form>
      </div>
    </>
  );
};

export default SearchBox2;





























// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useState } from 'react';
// import ReactTypingEffect from 'react-typing-effect';
// import "./SearchBox.css";

// const SearchBox = ({ updateInfo }) => {
//     const [city, setCity] = useState("");
//     const [error, setError] = useState(false);

//     // const API_KEY = process.env.REACT_APP_API_KEY;
//     const API_KEY = import.meta.env.VITE_API_KEY;
//     const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

//     const handleChange = (e) => {
//         setCity(e.target.value);
//     };

//     const getWeatherInfor = async () => {
//         try {
//             const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//             const jsonResponse = await response.json();

//             if (response.ok) {
//                 // Process the response if it's successful
//                 const result = {
//                     city: city,
//                     temp: jsonResponse.main.temp,
//                     tempMin: jsonResponse.main.temp_min,
//                     tempMax: jsonResponse.main.temp_max,
//                     feels_like: jsonResponse.main.feels_like,
//                     humidity: jsonResponse.main.humidity,
//                     weather: jsonResponse.weather[0].description,
//                 };
//                 console.log(result);
//                 setError(false); // Reset the error state on success
//                 return result;
//             } else {
//                 // If the API returns an error status
//                 throw new Error(jsonResponse.message || "City not found");
//             }
//         } catch (err) {
//             console.error("Error fetching weather information:", err);
//             setError(true);
//             return null;
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!city.trim()) return; // Avoid submitting empty input
//         const newInfo = await getWeatherInfor();
//         if (newInfo) {
//             updateInfo(newInfo);
//         }
//         setCity(""); // Clear input after submission
//     };

//     return (
//         <div className="SearchBox">
//             <ReactTypingEffect
//                 style={{ color: 'green', fontWeight: "bold" }}
//                 text={["Search For the weather", "Get Weather details of City!"]}
//             />
//             <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
//                 <TextField
//                     id="city"
//                     label="City Name"
//                     value={city}
//                     onChange={handleChange}
//                     variant="outlined"
//                     required
//                 />
//                 <br /><br />
//                 <Button variant="contained" type="submit">
//                     Search
//                 </Button>
//                 {error && (
//                     <p style={{ color: 'red', marginTop: '10px' }}>
//                         No such city exists in the API to show the weather. Please try again.
//                     </p>
//                 )}
//             </form>
//         </div>
//     );
// };

// export default SearchBox;
