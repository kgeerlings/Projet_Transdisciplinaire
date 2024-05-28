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
          <h3> Les fonctionnalités</h3>

          <div class="Para">
            <p> Quand nous avons pris ce projet en main, de nombreuses fonctionnalités étaient déjà mises en place </p>
            <ul>
              <li>Différents niveaux</li>
              <li>Système de récompense</li>
              <li>Interface des professeurs</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default Jeu;
