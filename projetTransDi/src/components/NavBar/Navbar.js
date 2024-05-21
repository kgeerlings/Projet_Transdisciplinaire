import React from 'react';
import './Navbar.css';
import Bouton from '../Bouton/Bouton.js';
import { Link } from 'react-router-dom';
import List from '../ListeDeroulante/ListeDeroulante.js';
import Travaux from '../Travaux/Travaux.js'

function Navbar(props) {
    return (
        <div className="Navbar">
            <div id="image">
                <h1> Jeu Dysc</h1>
            </div>
            <div id="nav">
                <List />
                <Bouton nom="Attendus de la cliente" link="/Attendus" />
                <Travaux />
                <Bouton nom="Gestion de projet" link="/Gestion" />
            </div>
        </div>
    );
}

export default Navbar;