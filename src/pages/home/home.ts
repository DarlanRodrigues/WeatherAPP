import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  location: {
    city: string,
    country: string
  }

  constructor(public navCtrl: NavController, public weatherProvider: WeatherProvider, private storage: Storage) {

  }

  ionViewWillEnter() {
    this.storage.get('location').then((val) => {
      if (val != null) {
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'Miami',
          country: 'US'
        }
      }

      this.weatherProvider.getWeather(this.location.city, this.location.country)
        .subscribe(weather => {
          this.weather = weather;
          console.log(weather);
        });
    });

  }
}
