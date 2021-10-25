import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />           {/* //todo el routing no lo escribimos aca por cuestiones de orden y claridad en el archivo */}
  </BrowserRouter>,
  document.getElementById('root')
);