import React, { Component } from 'react';
import Header from './components/Header';
import AgregarCitas from './components/AgregarCitas';
import ListadoCitas from './components/ListaCitas';

class App extends Component {
	state = {
		citas: [],
	};

	componentDidMount() {
		const citasLS = localStorage.getItem('citas');
		if (citasLS) {
			this.setState({
				citas: JSON.parse(citasLS),
			});
		}
	}

	componentDidUpdate() {
		localStorage.setItem('citas', JSON.stringify(this.state.citas));
	}

	crearCita = nuevaCita => {
		const citas = [...this.state.citas, nuevaCita];
		this.setState({
			citas: citas,
		});
	};

	eliminarCita = id => {
		console.log(`Eliminando Cita... ${id}`);
		//obtener copia el state
		const citaActuales = [...this.state.citas];
		//borrar el elemento del state
		const citas = citaActuales.filter(cita => cita.id !== id);
		//actualizar al state
		this.setState({
			citas: citas,
		});
	};

	render() {
		return (
			<div className="container">
				<Header titulo="Administrador de Pacientes de Veterinaria" />
				<div className="row">
					<div className="col-md-7">
						<AgregarCitas crearCita={this.crearCita} />
					</div>
					<div className="col-md-5">
						<ListadoCitas citas={this.state.citas} eliminarCita={this.eliminarCita} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
