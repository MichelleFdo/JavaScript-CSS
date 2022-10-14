import { Component, OnInit } from '@angular/core';
import { DailyWeather, WeatherData } from 'src/app/WeatherData';
import { MyWeatherService } from '../../services/my-weather.service';


@Component({
  selector: 'app-my-weather',
  templateUrl: './my-weather.component.html',
  styleUrls: ['./my-weather.component.css']
})
export class MyWeatherComponent implements OnInit {
  coordinates={'lat': 0, 'lng': 0};
  
  weatherType: number=0;
  cityCode!: string;
  dailyArray: DailyWeather[]=[];
  gotData=false;
  WeatherData!: WeatherData;
  currentDate!: Date;
  imgURL!: string;
  
  constructor(private myWeatherService: MyWeatherService) { }

  ngOnInit(): void {
    var out =navigator.geolocation.getCurrentPosition((position)=>{
      if(position){
        this.coordinates={
          'lat': position.coords.latitude,
          'lng': position.coords.longitude
        };
        console.log(this.coordinates);
        this.myWeatherService.getMyWeatherDetails(this.coordinates.lat, this.coordinates.lng)
          .subscribe((response)=>{
            console.log(response);
            this.dailyArray=response.daily;
            this.WeatherData=response;
            this.currentDate=new Date(this.WeatherData.current.dt*1000);
            this.imgURL=`http://openweathermap.org/img/wn/${response.current.weather[0].icon}@2x.png`;
          });
      }else{
        alert('location was not accessible');
      }
    });

    this.myWeatherService.weatherType.subscribe((wType: number)=>{
      this.weatherType=wType;
      console.log(`wtype recieved through subscription: ${wType}`);
    });
    this.myWeatherService.cityCode.subscribe((code: string)=>{
      this.cityCode=code;
      console.log(`city code recieved through subscription: ${code}`);
    })

    
    
  }

  kelvinToCelcius(temp: number): number{
    return temp-273.15;
  }


}
