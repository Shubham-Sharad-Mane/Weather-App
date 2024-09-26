import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'; // material ui icons
import AcUnitIcon from '@mui/icons-material/AcUnit';             // material ui icons
import WbSunnyIcon from '@mui/icons-material/WbSunny';           // material ui icons
export default function InfoBox({info}){ // now it contains the information from the props and display

  // we adde the following images which shows on screen up on the condition of weather tempratue 
    const INTIAL_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1647058865180-a8fbd81909a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
    <div className="InfoBox">
       
        <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}<span className="Icons">{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ?<WbSunnyIcon/>:<AcUnitIcon/>}</span>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
          <p>Temprature : {info.temp}&deg;C</p>
          <p>Humidity : {info.humidity}</p>
          <p>Min Temp : {info.tempMin}&deg;C</p>
          <p>Max Temp : {info.tempMax}&deg;C</p>
          <p>The weather can described as <b>{info.weather}</b> and feels Like : {info.feelLikes}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>);
}