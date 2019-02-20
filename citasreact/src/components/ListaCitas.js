import React, { Component } from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types'

class ListaCitas extends Component {
	render() {
		const citas = this.props.citas;
		const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administrar tus citas Aquí';

		return (
			<div className="card mt-5">
				<div className="card-body">
					<h2 className="card-tittle text-center">{mensaje}</h2>

					<div className="lista-citas">
						{Object.keys(citas).map(cita => (
							<Cita key={cita} info={citas[cita]} eliminarCita={this.props.eliminarCita} />
						))}

						{/* {this.props.citas.map(cita => (
							<Cita key={cita.id} info={cita} eliminarCita={this.props.eliminarCita} />
						))} */}
					</div>
				</div>
			</div>
		);
	}
}

ListaCitas.propTypes = {
	citas: PropTypes.array.isRequired, 
	eliminarCita: PropTypes.func.isRequired
}
export default ListaCitas;
