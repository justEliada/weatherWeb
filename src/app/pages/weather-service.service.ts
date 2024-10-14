import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor() { }

  getWeather(location: string) {
    return fetch(`https://api.weatherapi.com/v1/forecast.json?key`);
  }
}
