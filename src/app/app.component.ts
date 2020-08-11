import { Component } from '@angular/core';
import {MapConstructorOptions, MapKitInitOptions} from 'ngx-apple-maps/lib/declarations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ts-ignore
  options: MapKitInitOptions = {
    // tslint:disable-next-line:max-line-length
    JWT: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjVGRkMyMzg3VFEifQ.eyJpc3MiOiJZNUJWRDVVSEFFIiwiaWF0IjoxNTc5MjY0OTA0LCJleHAiOjE2MTQwODQxMDR9.asjNUrfNlS1m_sWlN9U7YGaKRV8gkmbtIwN4lON659-s9PTiEpUF2mi93G2LEZAnWz5vfVeXdM0WiMmldGbJIw',
    language: 'en',
    callback: (data) => {
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
  settings: MapConstructorOptions = {
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
