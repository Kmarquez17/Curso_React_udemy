import React, { Component } from 'react';
import Header from './Header';
import Productos from './Productos';
import Footer from './Footer';

class Aplicacion extends Component {
	constructor(props) {
		super();
		this.state = {
			productos: [],
		};
	}

	componentDidMount() {
		this.setState({
			productos:[
				{nombre: 'Ps4', precio: 400},
				{nombre: 'Xbox One', precio: 280},
				{nombre: 'Switch', precio: 380},
				{nombre: 'PC', precio: 1550}				
			]
		})
	}

	render() {
		return (
			<div>
				<Header titulo="Nuestra tienda virtual" />
				<Productos productos={this.state.productos} />
				<Footer />
			</div>
		);
	}
}

export default Aplicacion;
