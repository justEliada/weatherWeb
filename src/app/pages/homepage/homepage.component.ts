import { Component } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  location: string = '';
  currentWeather: any = null;
  weeklyForecast: any[] = [];
  temperatureData: any[] = [];
  showGraph: boolean = false;

  constructor(private weatherService: WeatherServiceService) {}

  search() {
    if (this.location) {
      // this.weatherService.getWeather(this.location).subscribe(data => {
      //   this.currentWeather = data.current;
      //   this.weeklyForecast = data.forecast;
      //   this.temperatureData = data.temperatureTrend;
      //   this.showGraph = true;
      // });
    }
  }

}
