import React from "react";
import "./Footer.css";
function Footer(props) {
    return (
        <div class="footer">
            <div class="contact">
                <div>
                    <h4> 2023-2024 </h4>
                </div>
                <div class="alignement">
                    <div class="reseaux">
                        <p> Gregoire Arrabie-Aubiès</p>
                        <p> Kamalakorn Geerlings</p>
                        <p> Zachari Arnaud</p>
                        <p> Promo 2026</p>
                    </div>
                    <img class="titi" src="./IMG_3851.jpeg"></img>
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
