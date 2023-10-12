import { Component, ViewEncapsulation } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';


@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: AnimationDefinitions
})

export class AppHomeComponent {

  countryName: string;
  timeStamp: string;

  constructor() {
    // this.timeStamp = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // this.getContry();
  }

  getContry() {
    fetch('https://api.ipregistry.co/?key=tryout')
      .then(function (response) {
        return response.json();
      })
      .then(function (payload) {
        console.log(payload.location.country.name + ', ' + payload.location.city);
      });
  }
}
