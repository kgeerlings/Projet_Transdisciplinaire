import React from 'react';
import './Footer.css';
function Footer(props) {
    console.log(props);
    return (
        <div id="footer">
            <div id="contact">
                <div>
                    <h4> 2023-2024 </h4>
                </div>
                <div id="reseaux">
                    <p> Gregoire Arrabie-Aures</p>
                    <p> Kamalakorn Geerlings</p>
                    <p> Zachari Arnaud</p>
                    <p> Promo 2026</p>
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