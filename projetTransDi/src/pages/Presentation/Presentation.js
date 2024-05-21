import React from 'react';
import './Presentation.css';

import Navbar from '../../components/NavBar/Navbar';
import Subtitle from '../../components/Subtitle/Subtitle';
import Footer from '../../components/Footer/Footer';


function Presentation({ setPage }) {
    return (
        <div className="Presentation">
            <Navbar setPage={setPage} />
            <div className="pagePrincipale">

                <div id="informations">
                    <div id="texte">
                        <div id="presentation">
                            <div id="align">
                                <div id="sub">
                                    <Subtitle nom="Qu'est-ce que la" />
                                </div>
                                <div id="dys">
                                    <h3>dyscalculie?</h3>
                                </div>
                            </div>

                        </div>
                        <div id="para1">
                            <p>La dyscalculie est une altération de la capacité à comprendre et à utiliser les nombres. Ils affectent “les aspects procéduraux et conceptuels” du calcul et du comptage ainsi que la mémorisation des faits numériques.</p>
                        </div>

                    </div>
                    <div id="texte2">
                        <div id="para2">
                            <div id="sub3">
                                <Subtitle nom="Quels sont les difficultés majeurs" />
                            </div>
                            <div id="dys">
                                <h3>des enfants dyscalculiques?</h3>
                            </div>
                        </div>

                        <div id="liste1">
                            <p> La dyscalculie est une condition qui affecte fortement les personnes au quotidien car des tâches qui nous paraitrait évident ne le sont absolument pas pour eux. Voici une liste d'exemples de chsoes qui pourrait leur poser problème: </p>
                            <ul>
                                <li> Lire l'heure</li>
                                <li> Rendre la monnaie</li>
                                <li> Adapter les recettes de cuisine à un certain de nombre de personnes (recalculer les quantités)</li>
                                <li> Faire les courses</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Presentation;