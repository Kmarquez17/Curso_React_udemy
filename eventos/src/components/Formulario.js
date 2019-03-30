import React, { Component } from 'react';

class Formulario extends Component {

    nombreEventoRef = React.createRef()
    categoriaRef = React.createRef()

	mostrarOpciones = key => {
		const categoria = this.props.categorias[key];
        const { id, name_localized } = categoria;
        
        if (!id || !name_localized) return null;
        
        return(
            <option key={id} value={id}>{name_localized}</option>
        )
    };
    
    buscarEvento = (e) => {
        e.preventDefault()

        //Crear objeto
        const datosBusqueda = {
            nombre: this.nombreEventoRef.current.value,
            categoria: this.categoriaRef.current.value
        }
        
        //Pasarlo por props
        this.props.obtenerEventos(datosBusqueda)
    }

	render() {
		const categorias = Object.keys(this.props.categorias);

		return (
			<form onSubmit={this.buscarEvento}>
				<fieldset className="uk-fieldset uk-margin">
					<legend className="uk-legend uk-text center">Busca tu evento por nombre o categoria</legend>
				</fieldset>
				<div className="uk-column-1-3@m uk-margin">
					<div className="uk-margin" uk-margin="true">
						<input ref={this.nombreEventoRef} type="text" className="uk-input" placeholder="Nombre de Eventos o Ciudad" />
					</div>
					<div className="uk-margin" uk-margin="true">
						<select ref={this.categoriaRef} className="uk-select">
                            {categorias.map(this.mostrarOpciones)}
                            {/* Otra forma de llenar el option */}
							{/* {this.props.categorias.map((categoria, i) => {
								return (
									<option key={categoria.id} value={categoria.id}>
										{categoria.name_localized}
									</option>
								);
							})} */}
						</select>
					</div>
					<div className="uk-margin" uk-margin="true">
						<button className="uk-button uk-button-danger">Buscar</button>
					</div>
				</div>
			</form>
		);
	}
}

export default Formulario;
