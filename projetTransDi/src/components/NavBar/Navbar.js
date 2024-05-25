import React from 'react';
import './Navbar.css';
import Bouton from '../Bouton/Bouton.js';
import { Link } from 'react-router-dom';
import List from '../ListeDeroulante/ListeDeroulante.js';
import Travaux from '../Travaux/Travaux.js'
import '../../fonts.css';

function Navbar(props) {
    return (
        <div className="Navbar">
            <div class="image">
                <h1> Jeu Dysc</h1>
            </div>
            <div class="nav">
                <List />
                <Bouton class="titre" nom="Attendus de la cliente" link="/Attendus" />
                <Travaux />
                <Bouton nom="Gestion de projet" link="/Gestion" />
            </div>
        </div>
    );
}

export default Navbar;