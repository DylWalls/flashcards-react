import React, { Component } from 'react';
import axios  from 'axios';
import SideNavBar from './SideNavBar/sideNavBar';

import './app.css';

class App extends Component {
    state = { 
        deck: []
    }
    componentDidMount(){
        this.getFlashCardsDB();
    }
    async getFlashCardsDB(){
        try{
            let response = await axios.get('http://localhost:5000/api/deck/');
            console.log(response.data);
            this.setState({
                deck: response.data
            });
        }
        catch(ex) {
            console.log('Error in API call!');
        }
    }
    
    render() {
        return (
            <div className="container-fluid">
                <SideNavBar/>
                <div>
                    {this.state.deck.map((deck, index) => (
                        <p key={index}>
                           {deck.name}: <i>{deck.category}</i> {deck.description}
                        </p>
                    )
                    )}
                </div>
            </div>
        );
    }
}

export default App;