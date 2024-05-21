import React from 'react';
import './Footer.css';
function Footer(props) {
    console.log(props);
    return (
        <div id="footer">
            <div id="contact">
                <div>
                    <h4> Contact: </h4>
                </div>
                <div id="reseaux">
                    <p> Mail:</p>
                    <p> Téléphone:</p>
                    <p> Instagram:</p>
                </div>
            </div>
            <div id="autre">
                <p> Tuteur: Baptiste Pesquet</p>
                <p> Cliente: Lidija</p>
            </div>
        </div>
    );
}
export default Footer;