import React, { Component } from 'react';

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

export default Gastos;