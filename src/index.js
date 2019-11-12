import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
//import des composants
import Navbar_element from "./Components/Navbar_element";
import Profil from "./Components/Profil";
import Post from "./Components/Post";



//Fonction équivalente au main
class Index extends React.Component{
    constructor(props) {
        super(props);

        //constantes
        const colors = ['#3b987a', '#3b5998', '#983b59', '#987a3b'];
        const profils = [
            {
                nom: 'bob',
                prenom: 'leo',
                anniversary: '12/12/1998',
                lastComment: 'Jadore le fromage',
                selectCol: 0,
                img: 'profil_image0.jpeg',
                nbSuper: 0
            },
            {
                nom: 'martine',
                prenom: 'lulu',
                anniversary: '13/03/1996',
                lastComment: 'Moi je prefere le sauciflard',
                selectCol: 0,
                img: 'profil_image1.jpg',
                nbSuper: 0
            },
            {
                nom: 'camille',
                prenom: 'ben',
                anniversary: '21/11/1962',
                lastComment: 'Dans tous les cas Vin rouge !',
                selectCol: 0,
                img: 'profil_image2.jpeg',
                nbSuper: 0
            }
        ];

        //definition du state
        this.state = {
            pro: profils,
            activePro: 0,
            cols: colors,
        };
    }

    //gérer le click pour choisir le profil
    handleClick(i){
        this.setState({activePro: i});
    }

    //gérer le click pour changer la couleur du profil
    handleClickColor(){
        if(this.state.pro[this.state.activePro].selectCol==3){
            this.state.pro[this.state.activePro].selectCol = 0;
            this.forceUpdate()
        }else{
            this.state.pro[this.state.activePro].selectCol = this.state.pro[this.state.activePro].selectCol+1;
            this.forceUpdate()
        }
    }

    //gérer le click du "c'est super !"
    handleClickSuper(){
        this.state.pro[this.state.activePro].nbSuper++;
        this.forceUpdate()
    }

    render() {
        const proHtml = [];
        for (const [index, value] of this.state.pro.entries()) {
            proHtml.push(<Navbar_element name={value.nom} onClick={() => this.handleClick(index)}/>)
        }

        return (
            <body className="page">
                <header>
                    <nav>
                        {proHtml}
                    </nav>
                </header>
                <main >
                    <div style={{
                        backgroundColor: this.state.cols[this.state.pro[this.state.activePro].selectCol],
                    }}><Profil
                        name={this.state.pro[this.state.activePro].nom}
                        firstname={this.state.pro[this.state.activePro].prenom}
                        anniversary={this.state.pro[this.state.activePro].anniversary}
                        onClickColor={() => this.handleClickColor()}
                        img = {this.state.activePro}
                    /></div>
                    <Post
                        comment={this.state.pro[this.state.activePro].lastComment}
                        onClickSuper={() => this.handleClickSuper()}
                        nbSuper={this.state.pro[this.state.activePro].nbSuper}
                    />
                </main>
            </body>
        );
    }
}

//Commande pour lancer l'appli en react
ReactDOM.render(<Index />, document.getElementById('root'));

