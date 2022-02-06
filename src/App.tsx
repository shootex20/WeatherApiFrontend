import React from 'react';
import { GeolocatedProps, geolocated } from "react-geolocated";
import './App.css';
import { fetchAddition } from './Api/ApiCall';

function App() {

  var c = fetchAddition("calgary", "C");
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default geolocated()(App);
