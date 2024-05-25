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
                <div class="orga">
                    <div class="equipe">
                        <div>
                            <Subtitle nom="Notre équipe" />
                        </div>
                        <div class="photos">
                            <div className='greg'>
                                <div class="greg"></div>
                                <h5> Grégoire Arrabie-Aures</h5>
                                <p> Pôle développement</p>
                            </div>
                            <div className='zach'>
                                <div class="zach"></div>
                                <h5>Zachari Arnaud</h5>
                                <p>Pôle développement</p>
                            </div>
                            <div className='kami'>
                                <div class="kami"></div>
                                <h5>Kamalakorn Geerlings</h5>
                                <p>Pôle communication & développement</p>
                            </div>

                        </div>
                    </div>
                    <div class="organisation">
                        <div class="subOrg">
                            <Subtitle nom="Notre organisation" />
                        </div>
                        <div class="com">
                            <p>Pour les réunions, nous nous sommes mis d'accord sur une réunion par semaine entre équipe, une réunion par mois avec le client et avec notre tuteur </p>
                            <div class="carre">
                                <h4> Moyens de communication utlisés</h4>
                                <div class="appli">
                                    <div class="zoom"></div>
                                    <div class="whatsapp"></div>
                                </div>
                            </div>
                        </div>
                        <div class="planning">

                        </div>
                        <div class="matriceDeRisque">

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Gestion;