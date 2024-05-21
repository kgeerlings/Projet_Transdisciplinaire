import React, { useState } from 'react';
import './Travaux.css'


function DropdownMenu() {
    return (
        <div className="dropdown">
            <button className="mainmenubtn">Nos travaux</button>
            <div className="dropdown-child">
                <div>
                    <a href="/Etude">La phase d'étude</a>
                    <a href="/Developpement">La phase de développement</a>
                </div>
            </div>
        </div>
    );
}

export default DropdownMenu;