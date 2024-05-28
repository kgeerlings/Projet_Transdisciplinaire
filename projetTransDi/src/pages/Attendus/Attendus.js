import React from "react";
import "./Attendus.css";

import Navbar from "../../components/NavBar/Navbar";
import Subtitle from "../../components/Subtitle/Subtitle";
import Footer from "../../components/Footer/Footer";

function Attendus() {
  return (
    <div className="Attendus">
      <Navbar />
      <div class="attendus">
        <div class="paragraphe">
          <Subtitle nom="Attendus de la cliente" />
          <p>
            Lors du premier rendez-vous avec la cliente, on lui a demandé
            particulièrement de nous présenter le projet et le jeu en lui-même.
            Ensuite, on lui a poser la question des choses qu'elle aimerait
            implémenter ou améliorer. Ce que l'on a conclut suite à cette
            première réunion sont les points suivantes:
          </p>
          <ul>
            <li>
              {" "}
              Une phase d'étude: particulièrement, tester le jeu sur des
              enfants.
            </li>
            <li>Une phase de développement</li>
          </ul>
          <p>
            {" "}
            Pour la phase de développement, elle nous avait donné plusieurs
            idées de ce qu'elle aimerait mettre en place, donc nous nous sommes
            fixés des objectifs à partir de cela.
          </p>
        </div>
        <div class="objectifs">
          <Subtitle nom="Nos objectifs" />
          <h3> La phase d'étude</h3>
          <p>
            {" "}
            Pour la phase d'étude, nous pensions que ce serait intéressant de
            tester le jeu sur des enfants non-dyscalculiques mais aussi sur des
            enfants atteint de dyscalculie. Notre objectif pour la phase d'étude
            était donc:
          </p>
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
            <li>
              Création d'un éditeur de niveaux (le plus versatile possible)
            </li>
            <li>Questionnaire de ressenti de l'enfant</li>
            <li>Conception de nouveaux jeux</li>
          </ul>
          <h3> Application du Plan Vert</h3>
          <p>
            {" "}
            Comme l'indique la LOI n° 2009-967 du 3 août 2009 de programmation
            relative à la mise en œuvre du Grenelle de l'environnement (1),
            extrait article 55 : "Les établissements d'enseignement supérieur
            élaboreront, pour la rentrée 2009, un « Plan vert » pour les campus.
            Les universités et grandes écoles pourront solliciter une
            labellisation sur le fondement de critères de développement durable.
            Les formations initiales et continues des membres des professions de
            santé et des professionnels de l'aménagement de l'espace
            comprendront des enseignements, adaptés aux métiers qu'ils
            concernent, relatifs aux enjeux de santé liés à l'environnement, à
            compter de la rentrée 2009."
          </p>
          <p>
            Notre site et projet on été dirigés en respectant le Plan Vert,
            s'applicant sur la mise en avant du respect de l'environnement afin
            de s'inserer dans les 9 défis clés de la Stratégie Nationale du
            Développement Durable.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Attendus;
