import React, { useEffect, useState } from "react";
import "./Developpement.css";

import Navbar from "../../components/NavBar/Navbar";
import Subtitle from "../../components/Subtitle/Subtitle";
import Footer from "../../components/Footer/Footer";

function Developpement({ setPage }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const targetValue = 8720; // Replace with your target value
    const duration = 2000; // Duration of the animation in milliseconds

    const startTime = Date.now();
    const updateCounter = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      setCounter(Math.floor(progress * targetValue));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, []);
  return (
    <div className="Developpement">
      <Navbar setPage={setPage} />
      <div id="dev">
        <div class="Phase">
          <Subtitle nom="Phase de développement 1" />
          <h3 id="petit">Compréhension de la structure</h3>{" "}
          <div class="Para">
            Il est évident que l'un des enjeu les plus important lorsqu'il
            s'agit de reprendre un projet informatique est de comprendre la
            structure de celui-ci. Pour cela nous avons commencé par analyser le
            code source du projet. Nous avons donc pu comprendre les différentes
            classes et fonctions qui composent le projet. Nous avons également
            pu comprendre les différentes fonctionnalités du projet. Ainsi que
            les formats de fichiers utilisés pour les niveaux et les éléments du
            jeu. Nous verrons par la suite comment nous avons utilisé ces
            informations pour la suite du développement.
          </div>
          <div className="chiffreImpressionant">{counter} Mo</div>
          de code source analysé
        </div>
        <div class="Phase">
          <Subtitle nom="Phase de développement 2" />
          <h3>Création de l'éditeur de jeu</h3>{" "}
          <div class="Para">
            {" "}
            Pour la création d'un étideur de niveau sur unity nous avons décider
            de partir sur un éditeur de niveau simple et intuitif. Mais avec le
            plus de modulatrié possible pour que l'éditeur soit le plus complet
            et s'adapte à tous les besoins. Pour cela nous avons décidé de
            partir sur un éditeur de niveau en 2D. En utilisant des images,
            étant le support le plus simple pour les utilisateur (enfants et
            enseignant).
            <p>
              {" "}
              Pour cela nous nous somme inspiré d'un site web de jeu avec des
              mécaniques de drag and drop d'éléments.
            </p>
          </div>
          <div class="titre">Video Demonstration</div>
          <iframe
            style={{
              padding: "1vw",
              width: "40vw",
              height: "25vw",
            }}
            src="https://www.youtube.com/embed/1YkGf_xTs0o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Developpement;
