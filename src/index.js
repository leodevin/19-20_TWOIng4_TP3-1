import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
//import des composants
import Navbar_element from "./Components/Navbar_element";



//Fonction équivalente au main
class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            users : ['Leo', 'lulu', 'ben']
        };
    }

    render() {
        return (
            <div className="page">
                <header>
                    <nav>
                        <Navbar_element name={this.state.users[0]}/>
                        <Navbar_element name={this.state.users[1]}/>
                        <Navbar_element name={this.state.users[2]}/>
                    </nav>
                </header>
                <p>Test de ma premiere page react native</p>
                <p>Si ca marche je suis vraiment chaud 😍</p>
            </div>
        );
    }
}

//Commande pour lancer l'appli en react
ReactDOM.render(<App />, document.getElementById('root'));

