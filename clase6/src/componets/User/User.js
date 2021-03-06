import React from 'react';
import { Link } from 'react-router-dom';

export default class User extends React.Component {

    constructor(props){
        super(props)
    }

    handleBorrar = () => {
        console.log('Llamo el borrar del listado');
        this.props.borrarFn(this.props.id)
    };

    render(){
        return (
            <div>
                <h3> {this.props.id } - { this.props.username}</h3>
                <p> { this.props.name} </p>
                <p> { this.props.email} </p>
                <p> {this.props.website} </p>
                <hr/>
                <Link to={'/users/edit/' + this.props.id }>Editar</Link>
                <button onClick={this.handleBorrar}>Eliminar</button>
                <hr/>
            </div>
        )
    }
}