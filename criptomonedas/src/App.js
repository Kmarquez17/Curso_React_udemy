import React, { Component } from 'react';
import axios from 'axios'

import logo from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner'

class App extends Component {
	state = {
		resultado: {},
		monedaSeleccionada: '',
		criptoSeleccionada: '',
		cargando: false
	}


	cotizarCriptomoneda = async (cotizacion) => {
		const {moneda, criptomoneda} = cotizacion
		const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`		
		
		await axios.get(URL)
		.then(res => {
			this.setState({
				resultado: res.data.DISPLAY[criptomoneda][moneda],
				cargando: true
			}, () => {
				// 3 Segundos despues cambia a false
				setTimeout(() => {
					this.setState({
						cargando: false
					})
				}, 3000)
			})
		})

		
	}

	render() {
		const resultado = (this.state.cargando) ?  <Spinner/> : <Resultado resultado={this.state.resultado}/>
		return (
			<div className="container">
				<div className="row">
					<div className="one-half column">
						<img src={logo} alt="imagen" className="logotipo" />
					</div>
					<div className="one-half column">
						<h1>Cotiza Criptomonedas al Instante</h1>
						<Formulario cotizarCriptomoneda={this.cotizarCriptomoneda}/>
						{resultado}						
					</div>
				</div>
			</div>
		);
	}
}

export default App;
