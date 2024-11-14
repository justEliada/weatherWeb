import { Component, ViewChild } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { ModalComponentComponent } from '../modal-component/modal-component.component';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  @ViewChild(ModalComponentComponent) modal!: ModalComponentComponent;


  location: string = '';
  currentWeather: any = null;
  weeklyForecast: any[] = [];
  temperatureData: any[] = [];
  showGraph: boolean = false;

  constructor(
    private weatherService: WeatherServiceService,
    // private modalComponent: ModalComponentComponent
  ) {}
  
  openModal() {
    this.modal.open();
    console.log('openModal() called');
  }

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
