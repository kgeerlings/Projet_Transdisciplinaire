import React from 'react';
import './Presentation.css';

import Navbar from '../../components/NavBar/Navbar';
import Subtitle from '../../components/Subtitle/Subtitle';
import Footer from '../../components/Footer/Footer';


function Presentation() {
    return (
        <div className="Presentation">
            <Navbar />
            <div className="pagePrincipale">
                <div class="informations">
                    <div class="texte">
                        <div className="align">
                            <div class="sub">
                                <h4>Qu'est-ce que la </h4>
                            </div>
                            <div class="dys">
                                <h3>dyscalculie?</h3>
                            </div>
                        </div>
                        <div class="para1">
                            <p>La dyscalculie est une altération de la capacité à comprendre et à utiliser les nombres. Ils affectent “les aspects procéduraux et conceptuels” du calcul et du comptage ainsi que la mémorisation des faits numériques.</p>
                        </div>

                    </div>
                    <div class="texte">
                        <div class="align">
                            <div class="sub">
                                <h4>Quels sont les difficultés majeures </h4>
                            </div>
                            <div class="dys">
                                <h4>des enfants dyscalculiques? </h4>
                            </div>
                        </div>

                        <div class="liste1">
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