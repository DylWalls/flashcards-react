import React, { Component } from 'react';
import axios  from 'axios';
import DeckViewer from './DeckViewer/deckViewer';
import Footer from './Footer/footer';
import './app.css';
import CardViewer from './CardViewer/cardViewer';

class App extends Component {
    constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        collection: [],
        deck: [],
        flashcards: [],
        cardNumber: 0,
        deckNumber: 0
    }
}
componentDidMount(){
    this.getFlashCardsDB();
}
async getFlashCardsDB(){
    try{
        let response = await axios.get('http://localhost:5000/api/decks/');
        console.log(response.data);
        console.log(response.data[0])
        this.setState({
            deck: response.data
        });
    }
    catch(ex) {
        console.log('Error in API call!');
    }
}

addNewDeck(deck){
    this.collection.push(deck);
    this.setState({
        deckNumber: this.collection.length - 1
    });
}
goToNextDeck(){
    let tempDeckNumber = this.state.deckNumber;
    tempDeckNumber++;
    if(tempDeckNumber === this.state.collection.length){
        tempDeckNumber = 0;
    }
    this.setState({
        deckNumber: tempDeckNumber
    });
}
goToPreviousDeck(){
    let tempDeckNumber = this.state.deckNumber;
    tempDeckNumber--;
    if(tempDeckNumber < 0)
        tempDeckNumber = this.state.collection.length -1;
    this.setState({
        deckNumber: tempDeckNumber
    });
}

addNewCard(card){
    this.flashcards.push(card);
    this.setState({
        cardNumber: this.flashcards.length - 1
    });
}

goToNextCard(){
    let tempCardNumber = this.state.cardNumber;
    tempCardNumber++;
    if(tempCardNumber === this.state.flashcards.length){
        tempCardNumber = 0;
    }
    this.setState({
        cardNumber: tempCardNumber
    });
}

goToPreviousCard(){
    let tempCardNumber = this.state.cardNumber;
    tempCardNumber--;
    if(tempCardNumber < 0)
        tempCardNumber = this.state.flashcards.length -1;
    this.setState({
        cardNumber: tempCardNumber
    });
}

handleChange(e){
    this.setState({
            userInput: e.target.value
    });
            console.log(this.target.value)
    }
    
    render() {
        // const userInput = this.state.userInput;
        return (
            <div className="container-fluid">
                <CardViewer
                    Card={this.state.deck[this.state.cardNumber]} nextCard={() => this.goToNextCard()} previousCard={() => this.goToPreviousCard()}/>
                <DeckViewer
                    Deck={this.state.collection[this.state.deckNumber]} nextDeck={() => this.goToNextDeck()} previousDeck={() => this.goToPreviousDeck()}/>
                <Footer/>
            </div>
        );
    }
}

export default App;