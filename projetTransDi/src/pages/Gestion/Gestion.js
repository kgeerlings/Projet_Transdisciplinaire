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
                            <div className='greg'>
                                <div id="greg"></div>
                                <h5> Grégoire Arrabie-Aures</h5>
                                <p> Pôle développement</p>
                            </div>
                            <div className='zach'>
                                <div id="zach"></div>
                                <h5>Zachari Arnaud</h5>
                                <p>Pôle développement</p>
                            </div>
                            <div className='kami'>
                                <div id="kami"></div>
                                <h5>Kamalakorn Geerlings</h5>
                                <p>Pôle communication & développement</p>
                            </div>

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