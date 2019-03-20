import React, { Component } from 'react';

class Formulario extends Component {

    categoriaRef = React.createRef()

	state = {
		data: [],
    };
    


	componentWillMount() {
		const data =  [
				{ value: 'business', categoria: 'Negocios' },
				{ value: 'entertainment', categoria: 'Entretenimiento' },
				{ value: 'health', categoria: 'Salud' },
				{ value: 'science', categoria: 'Ciencia' },
				{ value: 'sports', categoria: 'Deportes' },
				{ value: 'technology', categoria: 'Tecnologias' },
            ]
            
		this.setState({
			data,
		});
    }
    
    cambiarCategoria = (e) => {
        e.preventDefault()

        console.log(this.categoriaRef.current.value)
        this.props.consultarNoticias(this.categoriaRef.current.value)

    }
	render() {
		return (
			<div className="buscador row">
				<div className="col s12 m8 offset-m2">
					<form onSubmit={this.cambiarCategoria}>
						<h2>Noticias por Categoria</h2>
						<div className="inpu-field col s12 m8">
							<select ref={this.categoriaRef}>
								<option value="general" defaultValue>General</option>
								{this.state.data.map((opt, i) => {
									return <option key={i} value={opt.value}>{opt.categoria}</option>
								})}
							</select>
						</div>
                        <div className="input-field col s12 m4 enviar">
                                <input type="submit" className="btn amber darken-2" value="Buscar"/>
                        </div>
					</form>
				</div>
			</div>
		);
	}
}

export default Formulario;
