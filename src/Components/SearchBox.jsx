/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TextField  from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {useState} from 'react'
import ReactTypingEffect from 'react-typing-effect'

// API Used-> https://openweathermap.org/api


import "./SearchBox.css"

const SearchBox=({updateInfo})=>{

    let [city,setCity]=useState("")
    let [error,setError]=useState(false)

    const API_KEY="71e06f12bdadaa19d9f19199a0df99e3" ;
    const API_URL=`https://api.openweathermap.org/data/2.5/weather`
     

     const handleChange=(e)=>{
        setCity(e.target.value)
     }
     const getWeatherInfor=async()=>{
        try{
            let response=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`) // query string concept
            let jsonResponse= await response.json()
            console.log(jsonResponse)
    
            let result={
                city:city,
                temp:jsonResponse.main.temp ,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                feels_like:jsonResponse.main.feels_like,
                humidity:jsonResponse.main.humidity,
                weather:jsonResponse.weather[0].description
             }
             console.log(result)
             return result ;
        }catch(err){
            // setError('no such city exists in API  to show u weather',err)
            setError(true)
            // throw err 
        }
       
       }
     const handleSubmit=async (e)=>{
        try{
            e.preventDefault() 
            console.log(city)
            setCity("") ;// after searching  1 city set input to empty
            let newInfo=await getWeatherInfor();
            updateInfo(newInfo) ;
        }catch(err){
            setError('no such city exists in API  to show u weather', err)
        }
     
     }
 

    return (
        <>
          <div className='SearchBox'>
            {/* <h3>Search For the weather</h3> */}
            <ReactTypingEffect style={{color:'green',fontWeight:"bold"}} text={["Search For the weather", "Get Weather details of City!"]} />
            <form onSubmit={handleSubmit} style={{marginTop:'20px'}}>
                <TextField id='city' label='city-name' value={city} onChange={handleChange} variant='outlined' required/>
                <br/><br/>
                <Button variant='contained' type='submit'>Search</Button>
           
              {error && <p style={{color:'red'}}>No such city exists in API  to show u weather</p>}
            </form>

            </div>
        </>
    )
}

export default SearchBox