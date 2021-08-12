import React, { Component } from 'react';
import axios  from 'axios';
import SideNavBar from './SideNavBar/sideNavBar';
import Footer from './Footer/footer';
import './app.css';

class App extends Component {
    constructor(props){
    super(props);
    this.flashcards = [
        
    ]
    this.state = { 
        deck: []
    }
}
componentDidMount(){
    this.getFlashCardsDB();
}
async getFlashCardsDB(){
    try{
        let response = await axios.get('http://localhost:5000/api/deck/');
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
                <SideNavBar/>
        
                <Footer/>
            </div>
        );
    }
}

export default App;