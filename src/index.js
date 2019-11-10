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

        const colors = ['white', 'red', 'blue', 'orange'];

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

        this.state = {
            pro: profils,
            activePro: 0,
            cols: colors,
        };
    }

    handleClick(i){
        this.setState({activePro: i});
    }

    handleClickColor(){
        if(this.state.pro[this.state.activePro].selectCol==3){
            this.state.pro[this.state.activePro].selectCol = 0;
            this.forceUpdate()
        }else{
            this.state.pro[this.state.activePro].selectCol = this.state.pro[this.state.activePro].selectCol+1;
            this.forceUpdate()
        }
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
                        nbSuper={this.state.pro[this.state.activePro].nbSuper}
                    />
                </main>
            </body>
        );
    }
}

//Commande pour lancer l'appli en react
ReactDOM.render(<App />, document.getElementById('root'));

