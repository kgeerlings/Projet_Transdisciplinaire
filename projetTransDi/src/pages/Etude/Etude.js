import React from "react";
import "./Etude.css";

import Navbar from "../../components/NavBar/Navbar";
import Subtitle from "../../components/Subtitle/Subtitle";
import Footer from "../../components/Footer/Footer";

function Etude({ setPage }) {
  return (
    <div className="Etude">
      <Navbar setPage={setPage} />
      <div class="etude">
        <div class="para2">
          <Subtitle nom="Etude sur les enfants de l'école primaire de Talence" />
          <p>
            Dans l'école primaire classique nous avons testé le jeu sur une
            classe de CM2 et une classe de CM1/CM2.Nous avons observé 30 élèves
            ont joué au jeu pendant 5 minutes. A la fin de ces 5 minutes, nous
            avons posé quelques questions afin dávoir leur avis sur le jeu: leur
            ressenti, si ils ont bien aimé, si c'était facile ou compliqué. Le
            questionnaire est affiché ci-dessous. La globalité des enfants ont
            trouvé cela facile, les fractions étaient basiques et le niveau
            était trop bas selon eux. Malgré le niveau du jeu qui était
            considéré comme bas, ils ont bien aimé et disaient vouloir y jouer à
            la maison.
          </p>
        </div>
        <div class="questionnaire">
          <h4>Questionnaire: </h4>
          <ol>
            <li>Est- ce que tu as bien aimé le jeu? </li>
            <li>Y-a-t-il des choses que tu n'as pas aimé?</li>
            <li>Est- ce que tu as trouvé le jeu amusant?</li>
            <li>Est- ce que tu t'es ennuyé à un moment?</li>
            <li>Est- ce que tu as appris quelque chose?</li>
            <li>Est- ce que tu as trouvé ça long?</li>
            <li>Est- ce que tu as trouvé ça compliqué?</li>
            <li>Comment peut- on améliorer le jeu ou le rendre plus amusant</li>
          </ol>
        </div>
        <div class="resultats">
          <div class="graphique">
            <div class="titreGraphique">
              <h4>Résultats questions posé suite à l'observation (CM2)</h4>
            </div>
            <div class="images">
              <div class="im">
                <img
                  src="./Compliqué (CM2).png"
                  alt="graphique des CM2 pour savoir s'ils trouvaient cela difficile"
                />
              </div>
              <div class="im">
                <img
                  src="./Comprends ce qu'il faut faire (CM2).png"
                  alt="graphique des CM2 pour savoir s'ils comprenaient ce qu'il faut faire"
                />
              </div>
              <div class="im">
                <img
                  src="./Appris(CM2).png"
                  alt="graphique des CM2 pour savoir s'ils appris quelque chose"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="resultats">
          <div class="graphique">
            <div class="titreGraphique">
              <h4>Résultats questions posé suite à l'observation (CM1-CM2)</h4>
            </div>
            <div class="images">
              <div class="im">
                <img
                  src="./Compliqué (CM1_CM2).png "
                  alt="graphique des CM1/CM2 pour savoir s'ils trouvaient cela difficile"
                />
              </div>
              <div class="im">
                <img
                  src="./Comprendscequilfautfaire(CM1_CM2).png"
                  alt="graphique des CM1/CM2 pour savoir s'ils comprenaient ce qu'il faut faire"
                />
              </div>
              <div class="im">
                <img
                  src="./Appris(CM1_CM2).png"
                  alt="graphique des CM1/CM2 pour savoir s'ils appris quelque chose"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="edys">
          <Subtitle nom="Etude sur les enfants dyscalculiques de Edys" />
          <p>
            {" "}
            A Edys, l'étude s'est passée différemment. Nous avons d'abord
            rencontré l'équipe pédagogique afin d'expliquer le projet et son
            contexte. Directement, la direction et les professeurs étaient très
            motivés à travailler et participer sur ce projet avec nous. Tout
            d'abord ils ont commencé par mieux nous expliquer ce qu'était la
            dyscalculie. Cela nous a permis d'avoir une compréhension plus
            approfondie des difficultés que rencontrent les enfants
            dyscalculiques notamment dans la vie de tous les jours. Nous avons
            donc décidé de d'abord assister à des cours de mathématiques en
            4e/5e et 3e pour voir comment les enseignants s'adaptent aux enfants
            dyscalculiques et comment ils leur expliquent les choses. Beaucoup
            d'illustrations ont été utilisées, et la calculatrice était
            autorisée. Cette observation nous a permis de vraiment comprendre la
            dyscalculie et les difficultés qui sont liés à cette condition.
          </p>
          <div class="legende">
            <img
              class="exo"
              src="./IMG_3899 2.jpeg"
              alt="exercice réalisé par les enfatns lors du cours "
            ></img>
            <p>Exercice réalisé lors d'un cours de mathématiques</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Etude;
