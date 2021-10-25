import React from "react";

export default function Ciudad({city}) {
    if (city) {                             // este if esta por si lo que recibimos de 'city' (que enviamos desde <Route render={({match}) => <Ciudad city... que filtra el arreglo de ciudades}) ) es una ciudad o es null
        return (
            <div className="ciudad">
                    <div className="container">
                        <h2>{city.name}</h2>
                        <div className="info">
                            <div>Temperatura: {city.temp} ºC</div>
                            <div>Clima: {city.weather}</div>
                            <div>Viento: {city.wind} km/h</div>
                            <div>Cantidad de nubes: {city.clouds}</div>
                            <div>Latitud: {city.latitud}º</div>
                            <div>Longitud: {city.longitud}º</div>
                        </div>
                </div>
            </div>
        ) 
    } else {
        return (
            <div>
                'Esta ciudad no se encuentra en la lista'
            </div>
        )
    }
}