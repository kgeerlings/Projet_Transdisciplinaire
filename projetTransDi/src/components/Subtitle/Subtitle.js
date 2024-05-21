import React from 'react';
import './Subtitle.css';
function Subtitle(props) {
    console.log(props);
    return (
        <div className="Subtitle">
            <h2>{props.nom}</h2>
        </div>
    );
}
export default Subtitle;