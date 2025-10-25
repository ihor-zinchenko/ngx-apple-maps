import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppleMapsModule, MapSettings} from 'ngx-apple-maps';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, AppleMapsModule, CommonModule, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  // @ts-ignore
  options: MapKitInitOptions = {
    // tslint:disable-next-line:max-line-length
    JWT: '',
    language: 'en',
    callback: (data: any) => {
      console.log('data ', data);
      // console.log('data ', data);
    }
  };
  customAnnotation = {
    latitude: 37.8083396,
    longitude: -122.415727,
    options: {
      title: 'Custom marker callout',
      subtitle: 'subtitle 2',
      color: '#000',
      selected: false,
      glyphText: ''
    }
  };

  annotations = [
    {
      latitude: 37.8023553,
      longitude: -122.405742,
      options: {
        title: 'test 2',
        subtitle: 'subtitle 3',
        color: '#000',
        selected: false,
        glyphText: ''
      }
    },
    {
      latitude: 37.779267,
      longitude: -122.419269,
      options: {
        title: 'test 2',
        subtitle: 'subtitle 3',
        color: '#FF0000',
        selected: false,
        glyphText: '',
        calloutEnabled: true
      }
    }
  ];
  settings: MapSettings = {
    isZoomEnabled: true,
    showsZoomControl: true,
    showsUserLocationControl: true,
    showsMapTypeControl: true,
    showsUserLocation: false,
    tracksUserLocation: false,
    center: {
      latitude: 37.779267,
      longitude: -122.419269,
    }
  };
}
