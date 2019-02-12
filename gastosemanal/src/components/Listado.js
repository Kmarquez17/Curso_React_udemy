import React, { Component } from 'react';
import Gastos from './Gastos';
import PropTypes from 'prop-types'

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

Listado.propTypes = {
    gastos: PropTypes.object.isRequired
}

export default Listado;
