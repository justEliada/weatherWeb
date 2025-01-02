import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5';
  private apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

  constructor() { }

  getWeather(location: string) {
    const url = `${this.baseUrl}/weather?q=${location}&appid=${this.apiKey}&units=metric`;
    return fetch(url)
      .then(response => response.json());
  }

  getForecast(location: string, days: number) {
    const url = `${this.baseUrl}/forecast/daily?q=${location}&cnt=${days}&appid=${this.apiKey}&units=metric`;
    return fetch(url)
      .then(response => response.json());
  }
}