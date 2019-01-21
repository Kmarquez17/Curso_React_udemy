import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen'
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper';

class App extends Component {
	state = {
		resultado: '',
		datos: {},
	};

	cotizar = datos => {
		//Recibimos data del hijo (Componente Formulario)
    const { marca, plan, year } = datos;
    console.log(datos)

		//Agregar una base de 2mil
		let resultado = 2000;

		//Obtener la diferencia de años y por cada año menor al actual restale 3% al
		//valor del seguro
		const diferencia = obtenerDiferenciaAnio(year);

		resultado -= (diferencia * 3 * resultado) / 100;
		//Americano 15%, Asiatico 5%, Europeo 30%
		resultado = calcularMarca(marca) * resultado;

		//el plan del auto, el basico incrementa valor 20% y el completo incrementa 50%
		resultado = parseFloat(obtenerPlan(plan) * resultado).toFixed(2);
   
    //Tenempos resultado
		this.setState({
			resultado: "$ " + resultado,
			datos: datos
		});
	};

	render() {
		return (
			<div className="contenedor">
				<Header titulo="Contizador de seguros de Autos" />
				<div className="contenedor-formulario">
					<Formulario 
						cotizar={this.cotizar}
					 />
					 <Resumen 
						 datos={this.state.datos}
						 resultado={this.state.resultado}
					 />
				</div>
			</div>
		);
	}
}

export default App;
