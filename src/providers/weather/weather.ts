import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {
  apiKey = 'fa039571f64102b6656e6c35b51f957a';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = "http://api.openweathermap.org/data/2.5/weather?";
  }

  getWeather(city, country) {
    return this.http.get(this.url + "q=" + city + "," + country + "&units=metric&appid=" + this.apiKey);
  }
}
