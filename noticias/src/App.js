import React, { Component } from 'react';
import Header from './components/Header';
import Noticias from './components/Noticias';
class App extends Component {
	state = {
		noticias: [],
	};

	componentDidMount() {
		this.consultarNoticias();
	}

	consultarNoticias = () => {
		let url =
			`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4a7109eb2bc54b6a89cd9557a2803d7b`;

		fetch(url)
			.then(res => {
				return res.json();
			})
			.then(noticias => {
				this.setState({
					noticias: noticias.articles,
				});
			});
	};

	render() {
		return (
			<div className="contenedor-app">
				<Header titulo="Noticias" />
				<div className="container white contenedor-noticias">
					<Noticias noticias={this.state.noticias} />
				</div>
			</div>
		);
	}
}

export default App;
