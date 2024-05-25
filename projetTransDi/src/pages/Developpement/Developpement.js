import React, { useEffect, useState } from "react";
import "./Developpement.css";

import Navbar from "../../components/NavBar/Navbar";
import Subtitle from "../../components/Subtitle/Subtitle";
import Footer from "../../components/Footer/Footer";

function Developpement({ setPage }) {
  const [counter, setCounter] = useState(0);
  const [showDescription, setShowDescription] = useState(false); // Moved inside the component

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
            enseignant). Pour cela nous nous somme inspiré d'un site web de jeu
            avec des mécaniques de drag and drop d'éléments (
            <a href="https://www.cokojeux.com/drag-and-drop-pour-les-enfants/">
              source
            </a>
            ).
          </div>
          <div class="Para">
            {" "}
            Nous avons commencé par chercher comment importer des images depuis
            l'ordinateur hôte du jeu. Cette recherche fus fructueuse et une
            librairie crée par un développeur de la communauté unity nous a
            permis de réaliser cette fonctionnalité. Il nous restait plus qu'a
            écrire un script pour gérer les intéractions entre les éléments du
            jeu et l'éditeur. Enfin notre version test était prête. Voici une
            vidéo de présentation qui montre le fonctionnement des prémices
            l'éditeur de niveau.
          </div>
          <div class="titre">Video Demonstration (Open File)</div>
          <video
            style={{
              padding: "1vw",
              width: "40vw",
              height: "25vw",
            }}
            controls
          >
            <source src="/Scenetest.mp4" type="video/mp4" />
            Votre moteur de recherche ne supporte pas les vidéos. Mais Voici un
            descriptif de la vidéo : une démonstration de l'éditeur de niveau
            avec un fichier qui remplace une image par une autre.
          </video>
          <button
            class="Bouton"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription
              ? "cacher description de la vidéo"
              : "Montrer description de la vidéo"}
          </button>
          {showDescription && (
            <div>
              Description détaillée de la vidéo : La vidéo commence par montrer
              l'interface de l'éditeur de niveau. Ensuite, l'utilisateur
              sélectionne une image sur son ordinateur et la glisse dans
              l'éditeur. L'image est alors remplacée par une autre image. La
              vidéo se termine lorsque le niveau est édité.
            </div>
          )}
          <div class="Para">
            {" "}
            Nous avons chercher à mettre en place la fonction de drag and drop.
            En fouillant dans les scripts du jeu nous avons trouvé un script qui
            permet de gérer les intéractions entre les éléments du jeu et
            l'éditeur. Nous avons donc pu l'adapter pour notre éditeur de
            niveau. L'ajout des plusieurs éléments et d'un bouton de sauvegarde
            afin de permettre une vrai intéraction. Enfin notre version test
            était prête. Voici une vidéo de présentation qui montre le
            fonctionnement l'avencement avec une structure qui permet plus
            d'intéractions.
          </div>
          <div class="titre">Video Demonstration (structure)</div>
          <video
            style={{
              padding: "1vw",
              width: "40vw",
              height: "25vw",
            }}
            controls
          >
            <source
              src={process.env.PUBLIC_URL + "/EditeurTest.mp4"}
              type="video/mp4"
            />
            Votre moteur de recherche ne supporte pas les vidéos. Mais Voici un
            descriptif de la vidéo : une démonstration de l'éditeur de niveau
            avec la fonction de glisser déposer.
          </video>
          <button
            class="Bouton"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription
              ? "cacher description de la vidéo"
              : "Montrer description de la vidéo"}
          </button>
          {showDescription && (
            <div>
              Description détaillée de la vidéo : La vidéo commence par montrer
              l'interface de l'éditeur de niveau. Ensuite, l'utilisateur
              sélectionne une image sur son ordinateur et la glisse dans
              l'éditeur. il vient faire avec 3 images différentes afin de créer
              un niveau. La vidéo se termine lorsque le niveau est édité.
            </div>
          )}
        </div>
        <div class="Phase">
          <div class="titre">Phase de développement 3</div>
          <h3>Ajout de fonctionnalités diverses</h3>{" "}
          <div class="Para">
            {" "}
            Une des fonctionnalités qui nous été demandé et qui a tout son sens
            au vu des résultats de la phase d'étude :Un moyen d'avoir un retour
            ou feedback sur les niveaux créés. Pour cela nous avons décidé de
            mettre en place un système de notation des niveaux. A la fin de
            chaque niveau, les élèves sont ivité à indiquer leur niveau
            d'attention sous forme de pictogramme, afin de permettre à
            l'enseignant de voir si le niveau est adapté à la classe.
          </div>
          <video
            style={{
              padding: "1vw",
              width: "40vw",
              height: "25vw",
            }}
            controls
          >
            <source
              src={process.env.PUBLIC_URL + "/PictoTest.mp4"}
              type="video/mp4"
            />
            Votre moteur de recherche ne supporte pas les vidéos. Mais Voici un
            descriptif de la vidéo : une démonstration qui montre à la fin d'un
            niveau, plusieurs pictogrammes apparaissent pour que l'utilisateur
            puisse donner son avis.
          </video>
          <button
            class="Bouton"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription
              ? "cacher description de la vidéo"
              : "Montrer description de la vidéo"}
          </button>
          {showDescription && (
            <div>
              Description détaillée de la vidéo : La vidéo commence par montrer
              l'interface d'un niveau. Ensuite, l'utilisateur joue le niveau et
              à la fin de celui-ci, plusieurs pictogrammes apparaissent pour que
              l'utilisateur puisse donner son avis. La vidéo se termine lorsque
              l'utilisateur a donné son avis.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Developpement;
