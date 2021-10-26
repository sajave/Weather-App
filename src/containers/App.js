import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import { Route } from 'react-router-dom';
import About from '../components/About';
import City from '../components/City';

const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=0831b50a1cb64731c530441f01785517&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  if (cities.length === 0) {
    return (
      <div className="App">
        <Route path='/' render={() => <Nav onSearch={onSearch} />} />
        <Route exact path='/about' component={About} />
        <h2 style={{ color: "grey", justifyContent: 'center', alignItems: 'center' }}>
          Start looking for any city...
        </h2>
      </div>
    )
  } else {
    return (
      <div className="App">
        <Route path='/' render={() => <Nav onSearch={onSearch} />} />
        <Route exact path='/' render={() => <Cards cities={cities} onClose={onClose} />} />
        <Route exact path='/about' component={About} />
        <Route exact path='/city/:ciudadId' render={({ match }) => <City city={onFilter(match.params.ciudadId)} />} />
      </div>
    );
  }
}

export default App;
