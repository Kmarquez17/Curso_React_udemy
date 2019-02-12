import React, { Component } from 'react';
import PropTypes from 'prop-types'


class FormularioGasto extends Component {

	//refs para capturar datos

	nombreGasto = React.createRef();
	cantidadGasto = React.createRef();

	crearGasto = (e) =>{
		//Prevenir el default
		e.preventDefault();
		if (this.nombreGasto.current.value !== "" && this.cantidadGasto.current.value !== ""){
			//Crear objeto
			const gastos ={
				nombreGasto: this.nombreGasto.current.value,
				cantidadGasto: this.cantidadGasto.current.value
			}
			//Agregarlo y enviarlo por props
			this.props.agregarGastos(gastos);

			//Reset Formulario
			e.currentTarget.reset()
		}
	}

	render() {
		return (
			<form onSubmit={this.crearGasto}>
				<h2>Agrega tus gastos aqui</h2>
				<div className="campo">
					<label>Nombre Gasto</label>
					<input ref={this.nombreGasto} className="u-full-width" type="text" placeholder="Ej. Transporte" />
				</div>

				<div className="campo">
					<label>Cantidad</label>
					<input ref={this.cantidadGasto} className="u-full-width" type="number" placeholder="Ej. 300" min="0" max="1000"/>
				</div>

				<input className="button-primary u-full-width" type="submit" value="Agregar" />
			</form>
		);
	}
}

FormularioGasto.propTypes = {
	agregarGastos: PropTypes.func.isRequired
}

export default FormularioGasto;
