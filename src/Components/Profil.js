import React from 'react';
import '../index.css';

function Profil(props) {
    return(
        <div>
            <img/>
            <div>
                <p>Nom : {props.name}</p>
                <p>Prenom : {props.firstname}</p>
            </div>
            <p>Date de naissance : {props.anniversary}</p>
            <button onClick={props.onClickColor}>
                Change style
            </button>
        </div>
        )
}

export default Profil;