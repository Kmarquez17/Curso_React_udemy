import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clima extends Component {
	mostrarResultado = () => {
		// obtener los datos de la consulta
		const { name, weather, main } = this.props.resultados;
		if (!name || !weather || !main) return null;

        const kelvin = 273.15;
        const URLIcon = `http://openweathermap.org/img/w/${weather[0].icon}.png`

        return (
			<div className="row">
				<div className="resultado col s12 m8 l6 offset-m2 offset-l3">
					<div className="card-panel light-blue aling-center">
						<span className="white-text">
							<h2>Resultado Clima de: {name}</h2>
							<p className="temperatura">
                             Actual: {(main.temp - kelvin).toFixed(2)} &deg;C
                             <img src={URLIcon} alt={`Clima ${name}`}></img>
                            </p>
                            <p>Max. {(main.temp_max - kelvin).toFixed(2)} &deg;C</p>
                            <p>Min. {(main.temp_min - kelvin).toFixed(2)} &deg;C</p>
						</span>
					</div>
				</div>
			</div>
		);
	};
	render() {
		console.log(this.props.resultados);
		return <div className="container">{this.mostrarResultado()}</div>;
	}
}

Clima.propTypes = {
	resultados : PropTypes.object.isRequired
}

export default Clima;
