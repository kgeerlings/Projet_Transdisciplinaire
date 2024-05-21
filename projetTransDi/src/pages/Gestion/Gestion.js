import React from 'react';
import './Gestion.css';

import Navbar from '../../components/NavBar/Navbar';
import Subtitle from '../../components/Subtitle/Subtitle';
import Footer from '../../components/Footer/Footer';


function Gestion({ setPage }) {
    return (
        <div className="Gestion">
            <Navbar setPage={setPage} />
            <div className="gdp">
                <div id="orga">
                    <div id="equipe">
                        <div>
                            <h2> Notre équipe</h2>
                        </div>
                        <div id="photos">
                            <div id="greg"></div>
                            <div id="zach"></div>
                            <div id="kami"></div>
                        </div>
                    </div>
                    <div id="organisation">
                        <div id="para2">
                            <Subtitle nom="Notre organisation" />
                        </div>
                        <div id="com">
                            <p>Réunions hebdomadaires, mise au point, communication whatsapp, visio whatsapp, visio cliente zoom </p>
                            <div id="carre">
                                <h4> Moyens de communication utlisés</h4>
                                <div id="appli">
                                    <div id="zoom"></div>
                                    <div id="whatsapp"></div>
                                </div>
                            </div>
                        </div>
                        <div id="planning">

                        </div>
                        <div id="matriceDeRisque">

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Gestion;