import React, { Component } from 'react';
import logo from './cryptomonedas.png';

import Formulario from './components/Formulario';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="one-half column">
						<img src={logo} alt="imagen" className="logotipo" />
					</div>
					<div className="one-half column">
						<Formulario />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
