import React, { useState } from 'react';
import './ListeDeroulante.css'


function DropdownMenu() {
    return (
        <div className="dropdown">
            <button className="mainmenubtn">Présentation</button>
            <div className="dropdown-child">
                <div>
                    <a href="/Presentation">La dyscalculie</a>
                    <a href="/Jeu">Le jeu dysc</a>
                </div>
            </div>
        </div>
    );
}

export default DropdownMenu;

