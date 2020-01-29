# Angular Apple Maps (mapkit.js)
Apple maps example. For using clone this repo, provide JWT token into `app.component.ts` and run `ng serve`, project will started on http://localhost:4201
### Before you start
[Generating JWT token](https://developer.apple.com/documentation/mapkitjs/creating_and_using_tokens_with_mapkit_js?changes=latest_minor)
<br>
You can generate test token there: https://mapkitjs.rubeng.nl/<br>
<br>
For generating you need:<br>
- Team ID<br>
- Maps ID<br>
- MapKit key ID<br>
- MapKit Private key

### Get started
1. Add to the `index.html` script including<br>
`  <script src="https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js"></script>
`
2. Add `AppleMapsModule` to imports in your `app.module.ts`
3. In component import `AppleMapsService`
4. Create map using next code<br> 
```$xslt
<ngx-apple-maps [options]="options" [settings]="settings"></ngx-apple-maps>
```
Options including next params:
```$xslt
options:MapOptions = {
  centerLatitude: number;
  centerLongitude?: number;
  language?: string;
  JWT: string; // required
}
```
For default center of the map is user location.
#### Adding markers (annotations)
##### 1. One annotation
```$xslt
<ngx-apple-maps [options]="options">
  <ngx-apple-maps-annotation [options]="annotationOptions" [latitude]="annotationLatitude" [longitude]="annotationLongitude"></ngx-apple-maps-annotation>
</ngx-apple-maps>
```
##### 2. Few annotations
```$xslt
<ngx-apple-maps [options]="options">
  <ng-template *ngFor="let item of annotations">
    <ngx-apple-maps-annotation [options]="item.options" [latitude]="item.latitude" [longitude]="item.longitude"></ngx-apple-maps-annotation>
  </ng-template>
</ngx-apple-maps>
```
##### 3. Annotation custom content
```$xslt
<ng-template *ngFor="let item of annotations">
  <ngx-apple-maps-annotation [options]="item.options" [latitude]="item.latitude" [longitude]="item.longitude">
    <!-- Any component or element -->
    <div>
      Test
    </div>
  </ngx-apple-maps-annotation>
</ng-template>
```

### Settings
There are supported settings for the created map<br>
Description of them https://developer.apple.com/documentation/mapkitjs/mapkit/map

```$xslt
settings:MapSettings = {
  isRotationAvailable?: boolean;
  isRotationEnabled?: boolean;
  isScrollEnabled?: boolean;
  isZoomEnabled?: boolean;
  center?: {
    latitude: number;
    longitude: number;
  };
  setCenterAnimated?: {
    latitude: number;
    longitude: number;
  };
  region?: {
    center: {
      latitude: number;
      longitude: number;
    };
    span?: {
      from: number;
      to: number;
    };
  };
  setRegionAnimated?: {
    center: {
      latitude: number;
      longitude: number;
    };
    span?: {
      from: number;
      to: number;
    };
    animate?: boolean;
  };
  rotation?: number;
  setRotationAnimated?: {
    rotation?: number;
    animate?: boolean;
  };
  mapType?: 'mutedStandard' | 'standard' | 'satellite' | 'hybrid';
  padding?: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
  showsMapTypeControl?: boolean;
  showsZoomControl?: boolean;
  showsUserLocationControl?: boolean;
  showsPointsOfInterest?: boolean;
  tintColor?: string;
  showsUserLocation?: boolean;
  tracksUserLocation?: boolean;
}
```

## Other
#### Using mapkit api without map
1. Init mapkit js using `AppleMapsService`
```$xslt
appleMapsService.init({
  JWT: 'YOUR_TOKEN'
});
```
Created instance will available in `appleMapsService.map`
#### Search and autocomplete
Import `AppleMapsSearchService`

<b>Methods:</b>
#### 1. Search / Autocomplete
##### 1.1 Init search
```$xslt
appleMapsSearchService.initSearch(options);
```
##### 1.2 Using search
```$xslt
appleMapsSearchService.search(
  query, // search query
  (err, data) => {}, // callback
  options // 1.3 Search options
);
`options` - 1.5 Possible search options
```
`options` - 1.5 Possible search options
##### 1.3 Using autocomplete
```$xslt
appleMapsSearchService.autocomplete(
  query, // search query
  (err, data) => {}, // callback
  options // 1.3 Search options
);
```
`options` - 1.5 Possible search options
##### 1.4 Zoom
```$xslt
appleMapsService.zoom(NUMBER)
```
##### 1.5 Possible search options
```$xslt
const options = {
  getsUserLocation: !!appleMapsService.location,
  coordinate?: {
    latitude: number;
    longitude: number;
  },
  language?: string,
  region: {
    center: {
      latitude: number;
      longitude: number;
    };
    span?: {
      from: number;
      to: number;
    };
  };
};
```
For default map try to get user location, if user allow getting the position `appleMapsService.location` include user coordinates but when he disallow `getsUserLocation: true` give you error, so in current example `!!appleMapsService.location` we check is user coordinates exists.
<br>
## Other features
You can use another features allowed by mapkit using `appleMapsService.map` or `window.mapkit` variables.
Additional documentation https://developer.apple.com/documentation/mapkitjs/mapkit/map

## Other options
1. Annotation options
```$xslt
options = {
  title?: string;
  subtitle?: string;
  selected?: boolean;
  color?: string;
  glyphText?: string;
  glyphColor?: string;
  glyphImage?: string;
  selectedGlyphImage?: string;
  enabled?: boolean;
  calloutEnabled?: boolean;
  animates?: boolean;
  draggable?: boolean;
  visible?: boolean;
}
```
##### Bugs
Feel free to open new issues https://github.com/IhorVimmi/ngx-apple-maps/issues
