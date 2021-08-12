import React, { Component } from 'react';
import axios  from 'axios';
import SideNavBar from './SideNavBar/sideNavBar';
import Footer from './Footer/footer';
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
                        <p className="card-info" key={deck.id}>
                           <p/>Card #{deck.name}: Category: <i>{deck.category}</i>
                          <p/> Question: {deck.question}  <p/>Answer: {deck.answer} 
                           <p/>Why? {deck.explanation}
                        </p>
                    )
                    )}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;