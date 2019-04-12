import React, { Component } from 'react';
import axios from 'axios'

import Criptomoneda  from './Criptomoneda'
import Error from './Error'
class Formulario extends Component {
	state = {
		monedas: [],
		criptomonedas: [],
		moneda: '',
		criptomoneda: '',
		error: false
	};

	async componentWillMount() {
		const URL = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`;

		await axios.get(URL)
		.then(res => {
			
			this.setState({
				criptomonedas: res.data.Data,
			});
		});

		this.setState({
			monedas: [
				{ value: 'USD', name: 'Dolar Estadounidense' },
				{ value: 'MXN', name: 'Peso Mexicano' },
				{ value: 'GBP', name: 'Libras' },
				{ value: 'EUR', name: 'Euros' },
			],
		});
	}
	
	// Se ejecuta cada vez que el usuario eliga unna opcion
	obtenerValor = e => {
		const {name, value} = e.target
		this.setState({
			[name]: value
		})
	}

	// Validar que el usuario elija la monedas
	cotizarMoneda = (e) => {
		e.preventDefault()
		const {moneda,criptomoneda} = this.state

		//Validar que hya algo en el state

		if(moneda === '' || criptomoneda === ''){
			this.setState({
				error: true
			}, () => {
				setTimeout(()=> {
					this.setState({
						error:false
					})
				},3000)
			})

			return
		}

		//Crear el objeto
		const cotizacion = {
			moneda,
			criptomoneda
		}

		//Enviar los datos al componente App.js para cotizar
		this.props.cotizarCriptomoneda(cotizacion)
	}

	render() {
		const mensaje = (this.state.error) ? <Error mensaje="Ambos Campos Obligatorio" /> : ' '
		return (
			<form onSubmit={this.cotizarMoneda}>
				{mensaje}
				<div className="row">
					<label>Elige tu Moneda</label>
					<select onChange={this.obtenerValor} name="moneda" className="u-full-width">
						<option value="">Elige tu moneda</option>
						{Object.keys(this.state.monedas).map(key => (
							<option key={key} value={this.state.monedas[key].value}>
								{this.state.monedas[key].name}
							</option>
						))}
					</select>
				</div>

				<div className="row">
					<div>
						<label>Elige tu Criptomoneda</label>
						<select onChange={this.obtenerValor} name="criptomoneda" className="u-full-width">
							<option value="">Elige tu Criptomoneda</option>
							{Object.keys(this.state.criptomonedas).map(key => (
								<Criptomoneda 
									key={key}
									criptomoneda={this.state.criptomonedas[key]}
								/>
							))}
						</select>
					</div>
				</div>
				<input className="button-primary u-full-width" type="submit" value="Cotizar" />
			</form>
		);
	}
}

export default Formulario;
