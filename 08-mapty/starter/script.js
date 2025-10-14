'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // lat and long
    this.distance = distance; // km
    this.duration = duration; // min
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

    // Generate a description using the workout type and current date
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

// === Running ===
class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance; // min/km
    return this.pace;
  }
}

// === Cycling ===
class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60); // km/h
    return this.speed;
  }
}

// === Running workout test ===
const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);

console.log('=== Running Workout ===');
console.log('distance:', run1.distance, 'km');
console.log('duration:', run1.duration, 'min');
console.log('cadence:', run1.cadence, 'steps/min');
console.log('pace:', run1.pace.toFixed(1), 'min/km');
console.log('description:', run1.description);
console.log('id:', run1.id);

// === Cycling workout test ===
const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);

console.log('=== Cycling Workout ===');
console.log('distance:', cycling1.distance, 'km');
console.log('duration:', cycling1.duration, 'min');
console.log('elevation gain:', cycling1.elevationGain, 'm');
console.log('speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('description:', cycling1.description);
console.log('id:', cycling1.id);

// === Inheritance test ===
run1.click();
cycling1.click();

console.log('=== Inheritance Test ===');
console.log('Run clicks:', run1.clicks);
console.log('Cycling clicks:', cycling1.clicks);

// DOM ELEMENTS
// main form element
const form = document.querySelector('.form');

// container workout list
const containerWorkouts = document.querySelector('.workouts');

// input type
const inputType = document.querySelector('.form__input--type');

//input distance
const inputDistance = document.querySelector('.form__input--distance');

// input duration
const inputDuration = document.querySelector('.form__input--duration');

// input cadence
const inputCadence = document.querySelector('.form__input--cadence');

// input elevation
const inputElevation = document.querySelector('.form__input--elevation');

//Enhanced App class with better click handling
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    console.log('App started...');

    this._getlocalStorage();
    this._getPosition();

    //  attach event handler for form submission
    form.addEventListener('submit', this._newWorkout.bind(this));
    // attach event handler for workout type change
    inputType.addEventListener('change', this._toggleElevationField);

    //add click handling for workout list items

    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));

    document.addEventListener(`keydown`, this._handleKeydown.bind(this));
  }
  _handleKeydown(e) {
    if (e.key === 'Escape' && !form.classList.contains('hidden')) {
      const workoutEl = document.querySelector('.workout');
      if (!workoutEl) return;

      // === Hide form and clear input fields ===
      form.classList.add('hidden');
      inputDistance.value =
        inputDuration.value =
        inputCadence.value =
        inputElevation.value =
          '';

      console.log('Form closed with Escape key');
    }
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    console.log(workout);

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
    console.log(`Navigated to workout: ${workout.description}`);

    // using the public interface
    // workout.click();
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
  _loadDefaultMap() {
    const defaultCoords = [51.5074, -0.1278];
    this.#map = L.map('map').setView(defaultCoords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Add click event listener
    this.#map.on('click', this._showForm.bind(this));
    this._renderStoredWorkouts();
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
    this._renderStoredWorkouts();
  }

  _renderStoredWorkouts() {
    this.#workouts.forEach(workout => {
      this._renderWorkoutMarker(workout);
      this._renderWorkout(workout);
    });

    if (this.#workouts.length > 0) {
      console.log(`Rendering ${this.#workouts.length} stored workouts...`);
    }
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    // turn on or display the elevation
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    // turn off or hide the input cadence
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _hideForm() {
    // Empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    //add hiding animation

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _newWorkout(e) {
    //helper functiomn
    //validate input that they are actual numbers that make sense
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    //validate that all numbers are positive
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    //prevent the default form submission behavior
    e.preventDefault();

    //store data or extract data
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    console.log(`Creating ${type} workout: `, { distance, duration, lat, lng });

    // handle running workout
    if (type === `running`) {
      const cadence = +inputCadence.value;

      // validate all input elements are finite, positive, working
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

      // create the running objecr with the map coordinates and form data
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // handle cycling workout
    if (type === `cycling`) {
      const elevation = +inputElevation.value;

      // validate all input elements are finite, positive, working
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration, elevation)
      )
        return alert('Inputs have to be positive numbers!');

      // create the cycling object with the map coordinates and form data
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    console.log(`workout object created:`, workout);

    this.#workouts.push(workout);

    this._renderWorkoutMarker(workout);
    this._renderWorkout(workout);
    this._setlocalStorage();
    this._hideForm();

    console.log('Workout added successfully!');
  }

  _renderWorkout(workout) {
    // create base html

    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>
    `;

    if (workout.type === 'running')
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>
    `;
    if (workout.type === 'cycling')
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
    </li>
    `;

    form.insertAdjacentHTML('afterend', html);
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _setlocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    console.log('Workout saved to local storage');
  }

  _getlocalStorage() {
    const data = localStorage.getItem('workouts');
    if (!data) return;
    const storedWorkouts = JSON.parse(data);
    console.log('Retrieved workouts from local storage:', storedWorkouts);

    // restore proper workout objects
    this.#workouts = storedWorkouts.map(workoutData => {
      let workout;
      if (workoutData.type === 'running') {
        workout = new Running(
          workoutData.coords,
          workoutData.distance,
          workoutData.duration,
          workoutData.cadence
        );
      }
      if (workoutData.type === 'cycling') {
        workout = new Cycling(
          workoutData.coords,
          workoutData.distance,
          workoutData.duration,
          workoutData.elevationGain
        );
      }
      // restore original date and id to maintain data oncsistency
      workout.date = new Date(workoutData.date);
      workout.id = workoutData.id;
      workout.clicks = workoutData.clicks;
      return workout;
    });

    console.log(`workout restored as prioper objects:`, this.#workouts);
  }
}
// Create the app
const app = new App();
