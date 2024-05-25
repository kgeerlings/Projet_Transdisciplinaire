import React from "react";
import "./Jeu.css";

import Navbar from "../../components/NavBar/Navbar";
import Subtitle from "../../components/Subtitle/Subtitle";
import Footer from "../../components/Footer/Footer";

function Jeu({ setPage }) {
  return (
    <div id="dec">
      <Navbar setPage={setPage} />
      <div id="dev">
        <div class="Phase">
          <Subtitle nom="Le projet Ile aux fractions" />
          <div class="Para">
            <p>
              Ce projet, connu sous le nom de "Ile aux fractions" notamment, est
              un projet qui a été développé sur plusieurs années. Depuis 2020,
              des étudiants de l'ENSC on participé à l'amélioration de ce jeu.
              Au cours des années, de nouvelles fonctionnalités ont été ajoutés.
            </p>
          </div>
        </div>
        <div class="Phase">
          <Subtitle nom="Les travaux réalisées en amont" />
          <h3> La phase d'étude</h3>

          <div class="Para">
            <p>Pour la phase d'étude, nous pensions que ce serait intéressant de
              tester le jeu sur des enfants "normaux" mais aussi sur des enfants
              atteint de dycaculie. Notre objectif pour la phase d'étude était
              donc: </p>
            <ul>
              <li>Tester le jeu sur des enfants de profils divers</li>
              <li>Mieux comprendre ce qu'est la dyscalculie</li>
              <li>Avoir une vue globale du fonctionnement du jeu</li>
            </ul>
            <br></br>
            <h3> La phase de développement</h3>
            <p>
              {" "}
              Pour la phase de développement, nous savions d'avance que ce ne
              serait pas réalisable d'implémenter tout ce que souhaitait la
              cliente donc nous nous sommes focaliser sur:
            </p>
            <ul>
              <li>L'amélioration de l'interface des professeurs</li>
              <li>Questionnaire de ressenti de l'enfant</li>
              <li>Conception de nouveaux jeux</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Jeu;
