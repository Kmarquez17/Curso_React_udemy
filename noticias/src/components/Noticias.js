import React, { Component } from 'react';
import Noticia from './Noticia';

class Noticias extends Component {
	render() {
		return (
			<div>
				<div className="row">
					{
                        this.props.noticias.map((noticia,i) => (
                            <Noticia key={noticia.url} noticia={noticia}/>
                        ))
                    }
				</div>
			</div>
		);
	}
}

export default Noticias;
