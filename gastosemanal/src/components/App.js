import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import FormularioGasto from './FormularioGasto'
import Listado from './Listado'
import ControlPresupuesto from './ControlPresupuesto'
import {validarPresupuesto} from '../Helper'

class App extends Component {

  state = {
    presupuesto:0,
    restante:0,
    gastos:[]
  }

  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () =>{
    let presupuesto = prompt('Cuál es tu presupuesto?')
    let resultado = validarPresupuesto(presupuesto)
    if (resultado){
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      })
    }else{
      this.obtenerPresupuesto()
    }
  }

  //Agregar un nuevo gasto al state
  agregarGastos = (gasto) =>{
    //tomar una copiar del state actual
    const gastos = {...this.state.gastos}
    //agregar gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto
    //restar presupuesto
    this.restarPresupuesto(gasto.cantidadGasto)
    //ponerla en el state
    this.setState({
      gastos
    })
  }

  //Restar del presupuesto cuando el gasto se crea
  restarPresupuesto = (cantidad) => {
    let restar = Number(cantidad)
    //Tomar copia del state restante
    let restante = this.state.restante
    //Restamos
    restante-=restar
    //Agregamos el nuevo state
    this.setState({
      restante: restante
    })
  }

  render() {
    return (
      <div className="App container">
        <Header titulo="Gastos Semanal"/>

        <div className="contenido contenido-principal">
          <div className="row">
            <div className="one-half column">
              <FormularioGasto
                agregarGastos = {this.agregarGastos}
              />
            </div>
            <div className="one-half column">
              <Listado
                gastos={this.state.gastos}
               />
               <ControlPresupuesto
                  presupuesto={this.state.presupuesto}
                  restante={this.state.restante}
               />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
