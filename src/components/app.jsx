import React, { Component } from 'react';
import axios  from 'axios';
import SideNavBar from './SideNavBar/sideNavBar';
import Footer from './Footer/footer';
import './app.css';
import CardViewer from './CardViewer/cardViewer';

class App extends Component {
    constructor(props){
    super(props);
    this.state = { 
        deck: [],
        flashcards: [],
        cardNumber: 0
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

addNewCard(card){
    this.flashcards.push(card);
    this.setState({
        cardNumber: this.flashcards.length - 1
    });
}

goToNextCard(){
    let tempCardNumber = this.state.cardNumber;
    tempCardNumber++;
    if(tempCardNumber === this.flashcards.length){
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
        tempCardNumber = this.flashcards.length -1;
    this.setState({
        cardNumber: tempCardNumber
    });
}

    handleChange(e){
        this.setState({
            userInput: e.target.value
        });
            console.log(e.target.value)
    }
    
    render() {
        const userInput = this.state.userInput;
        return (
            <div className="container-fluid">
                <SideNavBar/> <br/>
                <CardViewer card={this.flashcards[this.state.cardNumber]} nextCard={() => this.goToNextCard()} previousCard={() => this.goToPreviousCard()}/>
                <Footer/>
            </div>
        );
    }
}

export default App;