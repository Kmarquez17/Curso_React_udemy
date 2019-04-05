import React, { Component } from 'react';

class Formulario extends Component {
	state = {
		monedas: [],
	};

	componentWillMount() {
		this.setState({
			monedas: [
				{value: 'USD',name: 'Dolar Estadounidense',},
				{value: 'MXN',name: 'Peso Mexicano',},
				{value: 'GBP',name: 'Libras',},
				{value: 'EUR',name: 'Euros',},
			],
		});
	}
	render() {
        console.log(Object.keys(this.state.monedas))
		return (
			<form>
				<div className="row">
					<label>Elige tu Moneda</label>
					<select className="u-full-width">
                    <option value="">Elige tu moneda</option>
						{Object.keys(this.state.monedas).map(key => (
							<option  key={key} value={this.state.monedas[key].value}>{this.state.monedas[key].name}</option>
						))}

                        {/* 						
						<option value="USD">Dolar Estadounidense</option>
						<option value="MXN">Peso Mexicano</option>
						<option value="GBP">Libras</option>
						<option value="EUR">Euros</option> */}
					</select>
				</div>

				<div className="row">
					<div>
						<label>Elige tu Criptomoneda</label>
						<select className="u-full-width">
							<option value="">Elige tu Criptomoneda</option>
						</select>
					</div>
				</div>
				<input className="button-primary u-full-width" type="submit" value="Cotizar" />
			</form>
		);
	}
}

export default Formulario;
