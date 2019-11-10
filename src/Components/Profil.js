import React from 'react';
import '../index.css';
import profil_image0 from '../images/profil_image0.jpeg';
import profil_image1 from '../images/profil_image1.jpeg';
import profil_image2 from '../images/profil_image2.jpeg';


function Profil(props) {
    return(
        <div className="profilBox">
            <img className={"profilImage"} src={require("../images/profil_image"+ props.img+".jpeg")}/>
            <div className={"names"}>
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