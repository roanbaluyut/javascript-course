'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

// Testing Workout Class
const testWorkout = new Workout([40.7128, -74.006], 5.2, 24);
console.log('Test workout:', testWorkout);
console.log('Workout ID:', testWorkout.id);
console.log('Workout Date:', testWorkout.date);

testWorkout.click();
testWorkout.click();
console.log('Workout count:', testWorkout.clicks);

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// Testing Running Class
const run1 = new Running([39.7391, -104.9903], 5.2, 24, 178);
console.log('Running workout:', run1);
console.log('Running pace:', run1.pace.toFixed(1), 'min/km');
console.log('Running description:', run1.description);

// Testing Cycling Class
const cycling1 = new Cycling([39.7392, -104.9003], 27, 95, 523);
console.log('Cycling workout:', cycling1);
console.log('Cycling speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('Cycling description:', cycling1.description);

run1.click();
cycling1.click();
console.log('Run clicks:', run1.clicks);
console.log('Cycling clicks:', cycling1.clicks);

// Function for position

('use strict');

// Add this after your existing Workout classes from Hour 1
// console.log('=== TESTING GEOLOCATION API ===');

// function getPosition() {
//   if (navigator.geolocation) {
//     console.log('🔍 Requesting user location...');
//     navigator.geolocation.getCurrentPosition(
//       loadMap,
//       function (error) {
//         console.error('Geolocation error:', error);

//         let message = 'Could not get your position. ';

//         switch (error.code) {
//           case error.PERMISSION_DENIED:
//             message +=
//               'Location access was denied. Please enable location services and refresh the page.';
//             break;
//           case error.POSITION_UNAVAILABLE:
//             message += 'Location information is unavailable.';
//             break;
//           case error.TIMEOUT:
//             message += 'Location request timed out.';
//             break;
//           default:
//             message += 'An unknown error occurred.';
//             break;
//         }

//         alert(`📍 ${message}`);
//         loadDefaultMap();
//       },
//       {
//         timeout: 10000,
//         enableHighAccuracy: true,
//         maximumAge: 600000,
//       }
//     );
//   } else {
//     alert('❌ Geolocation is not supported by this browser');
//     loadDefaultMap();
//   }
// }

// // Test the geolocation
// getPosition();

// // LEAFLET MAP INTEGRATION
// function loadMap(position) {
//   const { latitude, longitude } = position.coords;
//   console.log(`Loading map at coordinates: ${latitude}, ${longitude}`);

//   // array in leaflet format
//   const coords = [latitude, longitude];

//   const map = L.map('map').setView(coords, 13);

//   L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//   }).addTo(map);

//   L.marker(coords).addTo(map).bindPopup('You are here!').openPopup();

//   console.log('Map loaded successfully at user location');

//   map.on('click', function (mapEvent) {
//     console.log('Map Clicked at:', mapEvent.latlng);

//     const { lat, lng } = mapEvent.latlng;
//     console.log('Map Clicked at: $(lat.toFixed(4) )<br>Lng: $(lng.toFixed(4))');
//     console.openPopup();
//   });
//   console.log('Map loaded successfully at user location');
// }

// function loadDefaultMap() {
//   console.log('Loading default map location (London)');

//   // use the default coordinates
//   const defaultCoords = [51.5074, -0.1278];

//   const map = L.map('map').setView(defaultCoords, 13);

//   L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//   }).addTo(map);

//   console.log('Default map loaded successfully');

//   map.on('click', function (mapEvent) {
//     console.log('Map Clicked at:', mapEvent.latlng);

//     const { lat, lng } = mapEvent.latlng;
//     console.log('Map Clicked at: $(lat.toFixed(4) )<br>Lng: $(lng.toFixed(4))');

//     L.marker([lat, lng])
//       .addTo(map)
//       .bindPopup('Workout location<br>Lat: $(lat.toFixed(4) )<br>Lng')
//       .openPopup();
//   });
//   console.log('Map loaded successfully at user location');
// }

// function getPosition() {
//   if (navigator.geolocation) {
//     console.log('🔍 Requesting user location...');
//     navigator.geolocation.getCurrentPosition(
//       loadMap,
//       function (position) {
//         const { latitude } = position.coords;
//         const { longitude } = position.coords;
//         console.log(`Your current location: ${latitude}, ${longitude}`);

//         // Create a Google Maps link to verify the location
//         const googleMapsUrl = `https://www.google.pt/maps/@${latitude},${longitude}`;
//         console.log(`View on Google Maps: ${googleMapsUrl}`);
//       },
//       function (error) {
//         console.error('Geolocation error:', error);

//         let message = 'Could not get your position. ';

//         switch (error.code) {
//           case error.PERMISSION_DENIED:
//             message +=
//               'Location access was denied. Please enable location services and refresh the page.';
//             break;
//           case error.POSITION_UNAVAILABLE:
//             message += 'Location information is unavailable.';
//             break;
//           case error.TIMEOUT:
//             message += 'Location request timed out.';
//             break;
//           default:
//             message += 'An unknown error occurred.';
//             break;
//         }

//         alert(`📍 ${message}`);
//       },
//       {
//         timeout: 10000,
//         enableHighAccuracy: true,
//         maximumAge: 600000,
//       }
//     );
//   } else {
//     alert('❌ Geolocation is not supported by this browser');
//     loadDefaultMap();
//   }
// }

// // Test the geolocation
// getPosition();

// Creat Map
// LEAFLET MAP INTEGRATION

// function loadMap() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       function (position) {
//         const { latitude } = position.coords;
//         const { longitude } = position.coords;
//         const coords = [latitude, longitude];

//         console.log(`Creating map at user location: ${coords}`);

//         // Create map centered on user's location
//         const map = L.map('map').setView(coords, 13);

//         L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//           attribution:
//             '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//         }).addTo(map);

//         // Add marker at user's location
//         L.marker(coords).addTo(map).bindPopup('You are here!').openPopup();
//       },
//       function () {
//         alert('Could not get your position');
//       }
//     );
//   }
// }

// // Test user-centered map
// loadMap();

// Enhanced App class with better click handling
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Add click event listener
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    const { lat, lng } = mapE.latlng;

    console.log(`Map clicked at: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);

    // Add a temporary marker to show where user clicked
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(`Clicked here: ${lat.toFixed(4)}, ${lng.toFixed(4)}`)
      .openPopup();
  }
}

// Create the app
const app = new App();
