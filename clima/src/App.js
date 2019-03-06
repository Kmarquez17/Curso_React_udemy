import React, { Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';
class App extends Component {
	state = {
		error: ' ',
		consulta: {},
		resultados: {},
	};

	componentDidMount() {
		console.log('componentDidMount');
		this.setState({
			error: false,
		});
	}

	consultarAPI = () => {
		const { ciudad, pais } = this.state.consulta;
		if (!ciudad || !pais) return null;

		//leer la url y agregar el API key
		const AppId = '7cd29710531e79b7750657a2efe9a383';
		let URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${AppId}`;

		//consultar fetch
		fetch(URL)
			.then(res => {
				return res.json();
			})
			.then(datos => {
				this.setState({
					resultados: datos,
				});
			})
			.catch(err => {
				console.log(err);
			});
	};

	componentWillUpdate() {
		console.log('componentWillUpdate');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate');
		if (prevState.consulta !== this.state.consulta) {
			this.consultarAPI();
		}
	}

	handleConsulta = res => {
		if (res.ciudad === '' || res.pais === ' ') {
			this.setState({
				error: true,
			});
		} else {
			this.setState({
				consulta: res,
				error: false,
			});
		}
	};

	render() {
		console.log('render');

		const error = this.state.error;
		let resultado;

		if (error) {
			resultado = <Error mensaje="Ambos campos son requeridos" />;
		} else if (this.state.resultados.cod === '404' && !error) {
			resultado = <Error mensaje="Ciudad no corresponde al pais" />;
		} else {
			resultado = <Clima resultados={this.state.resultados} />;
		}

		return (
			<div className="App">
				<Header titulo="Clima React" />
				<Formulario handleConsulta={this.handleConsulta} />
				{resultado}
			</div>
		);
	}
}

export default App;
