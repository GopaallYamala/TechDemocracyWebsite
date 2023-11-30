import { Component } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';

@Component({
  selector: 'google-maps-comp',
  templateUrl: './google-maps-component.component.html',
  styleUrls: ['./google-maps-component.component.scss'],
  animations: [AnimationDefinitions]
})

export class GoogleMapsComponent {
  // display: any;
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12
  };
  zoom = 4;

  imageUrl = '../../assets/images/TechDemocracyBlackText.svg';
  imageBounds: google.maps.LatLngBoundsLiteral = {
    east: 4,
    north: 10,
    south: -10,
    west: -10,
};
  // moveMap(event: google.maps.MapMouseEvent) {
  //     if (event.latLng != null) this.center = (event.latLng.toJSON());
  // }
  // move(event: google.maps.MapMouseEvent) {
  //     if (event.latLng != null) this.display = event.latLng.toJSON();
  // }

  markerOptions: google.maps.MarkerOptions = {
    draggable: false
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }
}
