import React from 'react';
import { Link } from 'react-router-dom';
import './Bouton.css';

function Bouton(props) {
    console.log(props);
    return (
        <Link to={props.link}>
            <button className='bouton-navlink'>{props.nom}</button>
        </Link>
    );
}
export default Bouton;