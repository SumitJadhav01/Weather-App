import Card from '@mui/material/Card';
 import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
 import Typography from '@mui/material/Typography';
 import AcUnitIcon from '@mui/icons-material/AcUnit';
 import WbSunnyIcon from '@mui/icons-material/WbSunny';
 import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./infoBox.css"

export default function InfoBox({info}){
    const img="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

     const Cold="https://images.unsplash.com/photo-1682922135312-10f2c6cac51a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHx3ZWF0aGVyJTIwY29sZHxlbnwwfHwwfHx8MA%3D%3D" 
    const hot="https://images.unsplash.com/photo-1702309292804-1b79828cd611?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TW9zdGx5JTIwU3Vubnl8ZW58MHx8MHx8fDA%3D" 
 const rain ="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs="
 return(
    <div className='infoBox'>
 <div className="cardcontainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80
        ? rain 
        : info.temp>15
        ? hot:
        Cold
      }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.City}
          &nbsp;{info.humidity>80
        ?  ( <ThunderstormIcon/>
        ): info.temp>15
        ? (   <WbSunnyIcon/>):
        ( <AcUnitIcon/>)
      }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temprature: {info.temp}</p>
         <p>Humidity: {info.humidity}</p>
         <p>Max Temp: {info.tempMax}</p>
         <p>Min Temp: {info.tempMin}</p>
         <p>
            the weather can be descripbed as <i>{info.Weather}</i> and feels like {info.feelsLike}&deg;C
         </p>
         </Typography>
      </CardContent>
       
    </Card>
    </div>
    </div>
 )
}