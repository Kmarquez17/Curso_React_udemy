import React, { Component } from 'react';

class Formulario extends Component {
    //refs son para leer los campos de un formulario
	constructor(props) {
		super(props);
		this.state = {
			anio: [],
			marcas: [],
        };
        
        this.marcaRef = React.createRef()
        this.yearRef = React.createRef()
        this.planBasicoRef = React.createRef()
        this.planCompletoRef = React.createRef()
    }
    
    

	componentDidMount() {
		this.setState({
			anio: [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008],
			marcas: ['Americano', 'Europeo', 'Asiatico'],
		});
    }
    
    handleCotizar = (e) =>{
        e.preventDefault()


        //leer el plan
        const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo'

        // obtener los datos y crear objeto
        const infoAuto = {
            marca: this.marcaRef.current.value,
            year: this.yearRef.current.value,
            plan: plan
        }
        // enviarlo al componente principal (padre de este componente)
        this.props.cotizar(infoAuto)

        //Resetar el formulario (opcional)
        // e.currentTarget.reset()
    }

	render() {
		return (
			<form className="cotizar-auto" onSubmit={this.handleCotizar}>
				<div className="campo">
					<label>marcas</label>
					<select name="marcas" ref={this.marcaRef}>
						{
                            this.state.marcas.map((marca,key) => {
                                return  <option value={marca.toLowerCase()} key={key}>{marca}</option>;
                                
						    })}
						{/* <option value="americano">{marca}</option>; */}
					</select>
				</div>

				<div className="campo">
					<label>Año</label>
					<select name="year" ref={this.yearRef}>
                        {
                            this.state.anio.map((anio, key) => {
                                return <option value={anio} key={key}>{anio}</option>
                            })
                        }				
					</select>
				</div>
				<div className="campo">
					<label>Plan:</label>
					<input type="radio" name="plan" value="basico" ref={this.planBasicoRef}/> Básico
					<input type="radio" name="plan" value="completo" ref={this.planCompletoRef}/> Completo
				</div>

				<button type="submit" className="boton">
					Cotizar
				</button>
			</form>
		);
	}
}

export default Formulario;


// constructor (props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: ''
//     };
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange (e) {
//     const name = e.target.name;
//     const value = e.target.value;
//     this.setState({
//       [name]: value
//     })
//   };
//   render () {
//     return (
//       <form>
//         <input
//           type='text'
//           name='name'
//           value={this.state.name}
//           onChange={this.handleChange}
//         />
//         <input
//           type='text'
//           name='email'
//           value={this.state.email}
//           onChange={this.handleChange}
//         />
//       </form>
//     );
//   }
// }