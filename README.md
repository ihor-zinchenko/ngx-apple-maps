# Angular Apple Maps (mapkit.js)

## Before you start
[Generating JWT token](https://developer.apple.com/documentation/mapkitjs/creating_and_using_tokens_with_mapkit_js?changes=latest_minor)

You can generate test token there: https://mapkitjs.rubeng.nl/

For generating you need:
- Team ID
- Maps ID
- MapKit key ID
- MapKit Private key

## Get started
1. Add to the `index.html` script including
`  <script src="https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js"></script>
`
2. Add `AppleMapsModule` to imports in your `app.module.ts`
 
## Map(s) creation
1. Define `options:MapKitInitOptions` in your `*.component.ts` file (have to look on [**MapKitInitOptions**](###mapkitinitoptions))
2. Define `settings:MapConstructorOptions` (optional) (have to loon on MapConstructorOptions)
3. Add `<ngx-apple-maps [options]="options" [settings]="settings"></ngx-apple-maps>` in your `*.component.html`

#### Annotations (markers)
Insert into `ngx-apple-maps` tag following code:
```
<ngx-apple-maps-annotation 
    [latitude]="latitude" 
    [longitude]="longitude"
></ngx-apple-maps-annotation>
```
**OR**
```
<ngx-apple-maps-annotation 
    *ngFor="const annotation of annotations"
    [latitude]="annotation.latitude" 
    [longitude]="annotation.longitude"
></ngx-apple-maps-annotation>
```
`latitude` and `longitude` is **required**.

You can provide additional `annotationOptions:AnnotationConstructorOptionsInterface` param for each annotation
```
<ngx-apple-maps-annotation 
    [latitude]="latitude" 
    [longitude]="longitude"
    [options]="annotationOptions"
></ngx-apple-maps-annotation>
```

You can pass elements or component into annotation
```
<ngx-apple-maps-annotation 
    [latitude]="latitude" 
    [longitude]="longitude"
    [options]="annotationOptions"
>
    <div>Styled div or component with any content</div>
</ngx-apple-maps-annotation>
```

### MapKitInitOptions
Description of them https://developer.apple.com/documentation/mapkitjs/mapkit/map

```$xslt
options:MapKitInitOptions = {
  language: 'en'; // default browser language
  callback: (data) => {
    // return map event
  },
  JWT: string; // Json Web token
}
```

### Created map changes
Created map getting from the `getting from options:MapKitInitOptions` **callback** response
```
<ngx-apple-maps-annotation 
    [latitude]="latitude" 
    [longitude]="longitude"
    (onLoaded)="onLoaded($event)"
></ngx-apple-maps-annotation>
```
In your `*.component.ts` file
```
onLoaded(e) {
  this.map = e;
}
```

After successfully initializatin of the map you are got map object with next methods and params:
```
  key: 1 // current map key identifier
  isRotationAvailable() // return boolean value
  isRotationEnabled() // return boolean value
  isScrollEnabled() // return boolean value
  isZoomEnabled() // return boolean value
  getCenter() // return object with coordinates of map center
  /*
    {
      latitude: 1,
      longitude: 1,
    }
  */
  setCenterAnimated(latitude: number, longitude: number, animate: boolean = true) // set center of the map
  
  getRegion() // return current map region
  setRegionAnimated(center, span = null, animate = true) //  set region for the current map, center is required param, its the object with latitude: number, longitude: number params
  getRotation() // return current rotation value in degrees
  setRotationAnimated(degrees, animate = true) // set rotation to passed value
  getCameraDistance() // return current camera distance
  setCameraDistanceAnimated(distance: number, animate: boolean = true)
  getCameraZoomRange() // return available zoom range for the current map
  // More about cameraZoomRange https://developer.apple.com/documentation/mapkitjs/mapkit/camerazoomrange?changes=latest_minor
  setCameraZoomRangeAnimated(minCameraDistance, maxCameraDistance, animate: boolean = true)
  getColorScheme() // return current color scheme (light or dark)
  setColorScheme: (scheme = 'light') // set color scheme (light or dark)
  getDistances()
  setDistances() // 'metric' | 'imperial' | 'adaptive'
  getMapType() // return 'standard' | 'mutedStandard' | 'hybrid' | 'satellite'
  setMapType() // 'standard' | 'mutedStandard' | 'hybrid' | 'satellite'
  getPadding() // return current padding
  setPadding(padding) // pass object {top: 0, left: 0, right: 0, bottom: 0}
  getShowsMapTypeControl() 
  setShowsMapTypeControl(value: boolean) // show or hide map type control
  getShowsZoomControl() 
  setShowsZoomControl(value: boolean) // show or hide map zoom controls
  getShowsUserLocationControl() 
  setShowsUserLocationControl(value: boolean) // show or hide Shows user location controls
  getShowsPointsOfInterest() 
  setShowsPointsOfInterest(value: boolean) // show or hide places on the map
  getShowsScale()
  setShowsScale()
  getTintColor()
  setTintColor(color: string)
  showItems(annotations, options)
  // Zoom to passed annotation, can be Array of annoations or single annotation
  // You can get created annotations from getAnnotations() function
  // options - object
  /*
    options = {
        animate: true, // optional, default true
        padding: {top: 20} // left right bottom, optional
        span: {from: 0, to: 1} // optional
    }
  */
  getAnnotations() // return Promise of annotations
  getSelectedAnnotations() // return selected annotations
  zoom // number, specify zoom for map
  showComass // 'hidden' | 'adaptive' | 'visible' defulat adaptive
```

### MapConstructorOptions
All options are optional
```
settings:MapConstructorOptions = {
  region: {
    center: {
      latitude: 37.3316850890998,
      longitude: -122.030067374026
    },
    span: { // https://developer.apple.com/documentation/mapkitjs/mapkit/coordinatespan/2973870-mapkit_coordinatespan
      from: 0,
      to: 1
    }
  },
  center: { // center of the map
    latitude: 37.3316850890998,
    longitude: -122.030067374026
  },
  rotation: 45, // degrees
  tintColor: '#000', // color of map controls
  colorScheme: 'light', // light or dark, for default it's the browser color cheme
  mapType: 'standart', // 'mutedStandard' | 'standard' | 'satellite' | 'hybrid'
  padding: { // map padding
    top: 10,
    right: 10,
    bottom: 0,
    left: 0
  },
  showsMapTypeControl: true, // is show mapType control on the map
  isRotationEnabled: true,
  showsCompass: 'adaptive', // 'adaptive' (showing always and on the touch screen devices hides if rotationElabled: false and rotation: 0) | 'hidden' | 'visible'
  isZoomEnabled: true, // is zoom available
  showsZoomControl: true,
  isScrollEnabled: true, // A Boolean value that determines whether the user may scroll the map with a pointing device or with gestures on a touchscreen.
  showsScale: 'adaptive', // 'adaptive' | 'hidden' | 'visible' https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973941-showsscale?changes=latest_minor
  showsUserLocation: false,
  tracksUserLocation: false,
  showsUserLocationControl: true
}
```
### AnnotationConstructorOptionsInterface
All params is optional
```
annotationOptions:AnnotationConstructorOptionsInterface = {
  data: { // object with your custom data 
    anyData: "anyValue"  
  },
  title: "Annotation Title",
  subtitle: "Annotation Subtitle",
  appearanceAnimation: "", // A CSS animation that runs when the annotation appears on the map.
  displayPriority: 1000, // A numeric hint the map uses to prioritize displaying annotations. From 0 to 1000
  padding: { // Spacing added around the annotation when showing items.
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
  size: { // The desired dimensions of the annotation, in CSS pixels.
    width: 30,
    height: 30
  },
  visible: true,
  animates: true, // A Boolean value that determines if the annotation should be animated.
  draggable: false,
  enabled: true,
  selected: false,
  calloutEnabled: true, // A Boolean value that determines whether an annotation's callout should be shown.
  clusteringIdentifier: null, // String - An identifer used for grouping annotations into the same cluster.
  // More about clusteringIdentifier - https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2991317-clusteringidentifier?changes=latest_minor
  collisionMode: 'rectangle', // 'rectangle' | 'circle'
  accessibilityLabel: '', // Accessibility text for the annotation.
  color: '#000', // Any CSS color
  glyphText: '$', // Annotation icon on the map
  glyphColor: '#000', // Any CSS color
  glyphImage: 'some/path/to/image.png',
  selectedGlyphImage: 'some/path/to/selected-annotation-image.png',
}
```
## Other
For using api without map you should initializate API using **AppleMapsService**
1. Init mapkit js using `AppleMapsService`
```$xslt
appleMapsService.init({
  JWT: 'YOUR_TOKEN'
});
```
#### Search and autocomplete
Import `AppleMapsSearchService`

Methods:
#### 1. Search / Autocomplete
##### 1.1 Init search
```$xslt
appleMapsSearchService.initSearch(options);
```
##### Using search
```$xslt
appleMapsSearchService.search(
  query, // search query
  (err, data) => {}, // callback
  options // SearchInterface
);
```
##### Using autocomplete
```$xslt
appleMapsSearchService.autocomplete(
  query, // search query
  (err, data) => {}, // callback
  options // SearchInterface
);
```
##### SearchInterface
```$xslt
const options = {  // optional
  getsUserLocation: false, // search near user
  coordinate: {
    latitude: number,
    longitude: number,
  },
  language: 'en', // default browser language
  region: {
    center: {
      latitude: number,
      longitude: number,
    };
    span: {
      from: number,
      to: number,
    };
  };
};
```
#### 2. User location
```
getUserLocation(timeout)
```
Return `Promise`<br>
`timeout` - `Promise.reject()` timeout, default `5000`
If `timeout` is 0 reject doesn't call

#### Geocoder
Import `AppleMapsGeocoderService`

Methods:
`reverseLookup(lat, lon, callback, options: GeocoderReverseLookupOptionsInterface)`

```
GeocoderReverseLookupOptionsInterface {
 language: string;
}
```


## Angular universal
Map don't rendering on the server side, all methods unavailable.
