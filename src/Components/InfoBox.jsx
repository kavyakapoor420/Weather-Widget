/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


import "./InfoBox.css"

const InfoBox=({info})=>{

   //  const Image_Init_URL="https://cdn.zeebiz.com/sites/default/files/2023/12/09/272057-delhi-pollution-reuters.jpg"
   //feature 
    const HOT_IMAGE_URL="https://c8.alamy.com/comp/M7YR0T/design-vector-of-illustration-hot-summer-season-M7YR0T.jpg" ;   
    const COLD_IMAGE_URL="https://static.independent.co.uk/2022/12/13/11/13105629-3eba5ac1-95e4-4227-b517-1fe172776a70.jpg" ;
    // value of Humidity >80 rainy image should be displayed
    const RAIN_URL="https://tse1.mm.bing.net/th?id=OIP.zSAPrYvsLm-l9Lfeh2xnYQHaFc&pid=Api&P=0&h=180" ;   

    // let info={
    //     city:"Delhi",
    //     temp:23 ,
    //     tempMin:"",
    //     tempMax:"",
    //     feels_like:"",
    //     humidity:"",
    //     weather:""
    // }

    return (
        <>
             <div className="InfoBox">
                <h1>Weather Information Of The Searched City {info.city}</h1>
             <div className='card-container'>
             <Card sx={{ maxWidth: 700,width:650 }}>
      <CardMedia
        sx={{ height: 140 }}
      //   image={Image_Init_URL}
           image={info.humidity>80?  RAIN_URL: info.temp>15 ? HOT_IMAGE_URL:  COLD_IMAGE_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
             <div>
                <p>Temperature : {info.temp} &deg;C</p>
                <p>Humidity : {info.humidity}</p>
                <p> The weather can be described as <i>{info.weather}</i> and  Feels Like : {info.feels_like}</p>
                <p>Humidity : {info.humidity}</p>
                <p>Min Temp : {info.tempMin}</p>
                <p>Max Temp: {info.tempMax}</p>
             </div>
                </Typography>
                </CardContent>

        </Card>
        </div>

    </div>
       </>
    )
}

export default InfoBox