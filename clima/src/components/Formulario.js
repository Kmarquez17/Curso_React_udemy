import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
	state = {
		data: [],
	};

	componentWillMount() {
		const data = {
			options: [
                { value: 'NI', pais: 'Nicaragua' },
				{ value: 'AR', pais: 'Argentina' },
				{ value: 'CO', pais: 'Colombia' },
				{ value: 'CR', pais: 'Costa Rica' },
				{ value: 'ES', pais: 'España' },
				{ value: 'US', pais: 'Estados Unidos' },
				{ value: 'MX', pais: 'México' },
				{ value: 'PE', pais: 'Perú' },
			],
		};
		this.setState({
			data,
		});
    }
    //Crear los refs
    ciudadRef =  React.createRef()
    paisRef = React.createRef()

    handleBuscarClima = (e) => {
        e.preventDefault()

        //Leer los refs y crear el objeto
        const respuesta = {
            ciudad: this.ciudadRef.current.value,
            pais: this.paisRef.current.value
        }        
        
        //enviar props
        this.props.handleConsulta(respuesta)

        //Reiniciar Form
    }
	render() {
		return (
			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<form onSubmit={this.handleBuscarClima}>
							<div className="input-field col s12 m8 l4 offset-m2">
								<input id="ciudad"  ref={this.ciudadRef} type="text" />
								<label htmlFor="ciudad">Ciudad:</label>
							</div>
							<div className="input-field col s12 m8 l4 offset-m2">
								<select name="pais" id="pais" ref={this.paisRef} >
									<option value="" defaultValue>
										Elige un País
									</option>
									{this.state.data.options.map((opt, i) => {
										return (
											<option key={i} value={opt.value}>
												{opt.pais}
											</option>
										);
									})}
								</select>
								<label htmlFor="pais">Pais:</label>
							</div>
							<div className="input-field col s12 m8 l4 offset-m2">
								<input
									type="submit"
									className="waves-effect waves-light btn-large yellow accent-4"
									value="Buscar.."
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

Formulario.propTypes = {
	handleConsulta: PropTypes.func.isRequired
}

export default Formulario;
