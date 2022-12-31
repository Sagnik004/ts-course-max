import axios from 'axios';

import './app.css';

const GOOGLE_API_KEY = 'GIVE_YOUR_KEY';
type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
};

const mapEl = document.getElementById('map')! as HTMLDivElement;
const formEl = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  const uriCompatibleAddress = encodeURI(enteredAddress);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${uriCompatibleAddress}&key=${GOOGLE_API_KEY}`;
  axios
    .get<GoogleGeocodingResponse>(url)
    .then((response) => {
      if (response.data.status !== 'OK') {
        throw new Error('Could not fetch location!');
      }

      const coordinates = response.data.results[0].geometry.location;
      const map = new google.maps.Map(mapEl, {
        center: coordinates,
        zoom: 16,
      });
      new google.maps.Marker({
        position: coordinates,
        map
      });
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

formEl.addEventListener('submit', searchAddressHandler);
