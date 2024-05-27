import React from "react";
import "./Gestion.css";

import Navbar from "../../components/NavBar/Navbar";
import Subtitle from "../../components/Subtitle/Subtitle";
import Footer from "../../components/Footer/Footer";

function Gestion({ setPage }) {
  return (
    <div className="Gestion">
      <Navbar setPage={setPage} />
      <div className="gdp">
        <div class="orga">
          <div class="equipe">
            <div id="titreEquipre">
              <Subtitle nom="Notre équipe" />
            </div>
            <div class="photos">
              <div className="greg">
                <div class="greg"></div>
                Grégoire Arrabie-Aubiès
                <div>Pôle développement</div>
              </div>
              <div className="zach">
                <div class="zach"></div>
                Zachari Arnaud Pôle développement
              </div>
              <div className="kami">
                <div class="kami"></div>
                Kamalakorn Geerlings Pôle communication & développement
              </div>
            </div>
          </div>
          <div class="organisation">
            <div class="subOrg">
              <Subtitle nom="Notre organisation" />
            </div>
            <div class="com">
              <p>
                Pour les réunions, nous nous sommes mis d'accord sur une réunion
                par semaine entre équipe, une réunion par mois avec le client et
                avec notre tuteur{" "}
              </p>
              <div class="carre">
                <h4> Moyens de communication utlisés</h4>
                <div class="appli">
                  <div class="zoom"></div>
                  <div class="whatsapp"></div>
                </div>
              </div>
            </div>
            <div class="planning"></div>
            <div class="matriceDeRisque"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Gestion;
