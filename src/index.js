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
                anniversary: '12/12/1998'
            },
            {
                nom: 'martine',
                prenom: 'lulu',
                anniversary: '13/03/1996'
            },
            {
                nom: 'camille',
                prenom: 'ben',
                anniversary: '21/11/1962'
            }
        ];

        this.state = profils;
    }

    render() {
        return (
            <body className="page">
                <header>
                    <nav>
                        <Navbar_element name={this.state[0].nom}/>
                        <Navbar_element name={this.state[1].nom}/>
                        <Navbar_element name={this.state[2].nom}/>
                    </nav>
                </header>
                <main>
                    <Profil
                        name={this.state[0].nom}
                        firstname={this.state[0].prenom}
                        anniversary={this.state[0].anniversary}
                    />
                    <Post/>
                </main>
            </body>
        );
    }
}

//Commande pour lancer l'appli en react
ReactDOM.render(<App />, document.getElementById('root'));

