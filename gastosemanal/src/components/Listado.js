import React, { Component } from 'react';
import Gastos from './Gastos';

class Listado extends Component {
	render() {
		return (
			<div>
				<div className="gastos-realizados">
					<h2>Listado</h2>
					{Object.keys(this.props.gastos).map(key => (
                        <Gastos 
                            key={key}
                            gasto={this.props.gastos[key]} 
                        />
					))}
				</div>
			</div>
		);
	}
}

export default Listado;
