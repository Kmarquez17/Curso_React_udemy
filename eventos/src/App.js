import React, { Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Eventos from './components/Eventos'
import Spinner from './components/Spinner'
class App extends Component {
	//Token de autorizacion
	token = 'WID7WHSHCZBW3DOBHGUZ';
	ordenar = 'date';

	//Estado
	state = {
		categorias: [],
		eventos: [],
	};
	componentDidMount() {
		this.ObtenerCategorias();
	}

	//metodo para mandara atraer datos de cualquier ruta
	fetchApi = async url => {

		const query = await fetch(url);
		const data = await query.json();
		return data;
	};

	ObtenerCategorias = async () => {
		let URL = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

		const { categories } = await this.fetchApi(URL);
		this.setState({
			categorias: categories,
		});
	};

	obtenerEventos = async busqueda => {
		let URL = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${
			busqueda.categoria
		}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;
		console.log(URL)
		const { events } = await this.fetchApi(URL);
		console.log(events)
		this.setState({
			eventos: events,
		});
		// console.log('Hola'+ events)
	};

	render() {
		console.log('len',this.state.eventos.length)
		return (
			<div>
				<Header />

				<div className="uk-container">
					<Formulario 
						categorias={this.state.categorias} 
						obtenerEventos={this.obtenerEventos} 
					/>
					{
						this.state.eventos.length === 0
						? <Spinner />
						: <Eventos eventos={this.state.eventos} /> 
					} 
					
				</div>
			</div>
		);
	}
}

export default App;
