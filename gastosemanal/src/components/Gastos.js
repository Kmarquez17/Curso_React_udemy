import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Gastos extends Component {
    render() {
        const {nombreGasto,cantidadGasto} = this.props.gasto
        return (
            <div>
                <li className="gasto">
                    <p>
                        {nombreGasto}
                        <span className="gasto"> $ {cantidadGasto}</span>
                    </p>
                </li>
            </div>
        );
    }
}

Gastos.propTypes = {
    gasto: PropTypes.object.isRequired
}
export default Gastos;