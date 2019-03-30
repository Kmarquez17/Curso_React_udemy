import React from 'react'

const Evento = (props) => {
    //Validamos que no venga nulo el nombre
    const {name} = props.info
    let desc = props.info.description.text

    //Validar cuando no traida datos, poner un spinner practica KM
    // const cant = props.info.length
    // console.log('+',cant)

    //validamos que la descripcion no pase a mas de 250 palabras
    if (!name || !desc) return null
    //declaramos una variable auxiliar
    
    if(desc.length > 250){
        desc = desc.substring(0,250)
    }

    return(
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {
                        // si la imagen no es nula se muestra, de caso contrario poner vacia
                        props.info.logo !== null
                        ? <img src={props.info.logo.url} alt={props.info.name.text}/>            
                        : ''
                    }
                </div>

                <div className="uk-card-body">
                    <h3 className="uk-card-title">{props.info.name.text}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Evento