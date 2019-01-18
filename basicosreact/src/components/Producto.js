import React, { Component } from 'react';

class Producto extends Component {
	render() {
		const { nombre, precio } = this.props.producto;
		return (
			<div>
				<h4>{nombre}</h4>
				<p>Precio: {precio}</p>
			</div>
		);
	}
}

export default Producto;
