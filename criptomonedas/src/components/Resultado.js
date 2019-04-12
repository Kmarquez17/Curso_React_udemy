import React from 'react';

const Resultado = ({resultado}) => {

    if(Object.entries(resultado).length === 0) return null

	return (
        <div className="resultado">
            <h2>Resultado</h2>
            <p className="precio">El precio es: <span>{resultado.PRICE}</span></p>
            <p>Precio mas Alto del dia: <span>{resultado.HIGHDAY}</span></p>
            <p>Precio mas Bajo del dia: <span>{resultado.LOWDAY}</span></p>
            <p>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR} %</span></p>
            <p>última actualización <span>{resultado.LASTUPDATE}</span></p>
        </div>
    
    )
};

export default Resultado;
