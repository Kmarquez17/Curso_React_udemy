import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import Aplicacion from './components/Aplicacion'
import * as serviceWorker from './serviceWorker';

// const titulo = React.createElement(
//     'h1',
//     {id:'titulo',claseName:'encabezzado'},
//     'Hola Mundo'
// )

ReactDOM.render(<Aplicacion />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
