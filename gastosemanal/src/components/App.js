import React, { Component } from 'react';
import '../css/App.css';
import Header from '../components/Header'
import FormularioGasto from '../components/FormularioGasto'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      presupuesto:0,
      restante:0,
      gastos:{}
    }
  }

  //Agregar un nuevo gasto al state

  agregarGastos = (gasto) =>{
    //tomar una copiar del state actual
    const gastos = {...this.state.gastos}
    
    //agregar gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto

    //ponerla en el state
    this.setState({
      gastos
    })

    console.log(this.state.gastos);

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
              1
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
