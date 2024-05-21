import React from 'react';
import './Attendus.css';

import Navbar from '../../components/NavBar/Navbar';
import Subtitle from '../../components/Subtitle/Subtitle';
import Footer from '../../components/Footer/Footer';


function Attendus({ setPage }) {
    return (
        <div className="Attendus">
            <Navbar setPage={setPage} />
            <div id="attendus">
                <div id="para">
                    <Subtitle nom="Attendus de la cliente" />
                    <p>Lors du premier rendez-vous avec la cliente, on lui a demandé particulièrement de nous présenter le projet et le jeu en lui-même. Ensuite, on lui a poser la question des choses qu'elle aimerait implémenter ou améliorer. Ce que l'on a conclut suite à cette première réunion sont les points suivantes:</p>
                    <ul>
                        <li> Une phase d'étude: particulièrement, tester le jeu sur des enfants.</li>
                        <li>Une phase de développement</li>
                    </ul>
                    <p> Pour la phase de développement, elle nous avait donné plusieurs idées de ce qu'elle aimerait mettre en place, donc nous nous sommes fixés des objectifs à partir de cela.</p>
                </div>
                <div id="objectifs">
                    <Subtitle nom="Nos objectifs" />
                    <h3> La phase d'étude</h3>
                    <p> Pour la phase d'étude, nous pensions que ce serait intéressant de tester le jeu sur des enfants "normaux" mais aussi sur des enfants atteint de dycaculie. Notre objectif pour la phase d'étude était donc:</p>
                    <ul>
                        <li>Tester le jeu sur des enfants de profils divers</li>
                        <li>Mieux comprendre ce qu'est la dyscalculie</li>
                        <li>Avoir une vue globale du fonctionnement du jeu</li>
                    </ul>
                    <br></br>
                    <h3> La phase de développement</h3>
                    <p> Pour la phase de développement, nous savions d'avance que ce ne serait pas réalisable d'implémenter tout ce que souhaitait la cliente donc nous nous sommes focaliser sur:</p>
                    <ul>
                        <li>L'amélioration de l'interface des professeurs</li>
                        <li>Questionnaire de ressenti de l'enfant</li>
                        <li>Conception de nouveaux jeux</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Attendus;