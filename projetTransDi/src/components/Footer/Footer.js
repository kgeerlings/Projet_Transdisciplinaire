import React from 'react';
import './Footer.css';
function Footer(props) {
    console.log(props);
    return (
        <div class="footer">
            <div class="contact">
                <div class="annee">
                    <h4> 2023-2024 </h4>
                </div>
                <div class="alignement">
                    <div class="reseaux">
                        <p> Gregoire Arrabie-Aures</p>
                        <p> Kamalakorn Geerlings</p>
                        <p> Zachari Arnaud</p>
                        <p> Promo 2026</p>
                    </div>

                    <div class="autre">
                        <p> Tuteur: Baptiste Pesquet</p>
                        <p> Cliente: Lidija Mladenovic</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;