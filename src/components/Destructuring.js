import React from 'react'

export const Destructuring = (props) => {
    
    /*
    PRIMERA FORMA DE DESTRUCTURAR
    */
    const title = props.title;
    const content = props.content;
    

    /*
    SEGUNDA FORMA DE DESTRUCTURAR
    const { title, content } = props;
    */

/*
TERCERA FORMA DE DETRUCTURAR
const Destructuring = ({title, content}) => {*/
    return (
        <div>
            <h2>Hola soy el componente Destructuring</h2>
            <h3>{title}</h3>
            <h3>{content}</h3>
        </div>
    )
}
