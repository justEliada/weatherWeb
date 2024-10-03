import { Component } from '@angular/core';

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

  constructor(private weatherService: WeatherService) {}

  search() {
    if (this.location) {
      this.weatherService.getWeather(this.location).subscribe(data => {
        this.currentWeather = data.current;
        this.weeklyForecast = data.forecast;
        this.temperatureData = data.temperatureTrend;
        this.showGraph = true;
      });
    }
  }

}
