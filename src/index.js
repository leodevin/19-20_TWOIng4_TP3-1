import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
//import des composants
import Navbar_element from "./Components/Navbar_element";
import Profil from "./Components/Profil";
import Post from "./Components/Post";



//Fonction équivalente au main
class App extends React.Component{
    constructor(props) {
        super(props);

        const profils = [
            {
                nom: 'bob',
                prenom: 'leo',
                anniversary: '12/12/1998',
                lastComment: 'Jadore le fromage'
            },
            {
                nom: 'martine',
                prenom: 'lulu',
                anniversary: '13/03/1996',
                lastComment: 'Moi je prefere le sauciflard'
            },
            {
                nom: 'camille',
                prenom: 'ben',
                anniversary: '21/11/1962',
                lastComment: 'Dans tous les cas Vin rouge !'
            }
        ];
        var activeProfil = 0;

        this.state = {
            pro: profils,
            activePro: activeProfil
        };
    }

    handleClick(i){
        this.setState({activePro: i});
    }

    render() {
        return (
            <body className="page">
                <header>
                    <nav>
                        <Navbar_element name={this.state.pro[0].nom} onClick={() => this.handleClick(0)}/>
                        <Navbar_element name={this.state.pro[1].nom } onClick={() => this.handleClick(1)}/>
                        <Navbar_element name={this.state.pro[2].nom} onClick={() => this.handleClick(2)}/>
                    </nav>
                </header>
                <main>
                    <Profil
                        name={this.state.pro[this.state.activePro].nom}
                        firstname={this.state.pro[this.state.activePro].prenom}
                        anniversary={this.state.pro[this.state.activePro].anniversary}
                    />
                    <Post/>
                </main>
            </body>
        );
    }
}

//Commande pour lancer l'appli en react
ReactDOM.render(<App />, document.getElementById('root'));

