import React, { Component } from 'react';
import axios  from 'axios';
import SideNavBar from './SideNavBar/sideNavBar';

class App extends Component {
    state = { 

    }
    componentDidMount(){
        this.getFlashCardsDB();
    }
    async getFlashCardsDB(){
        try{
        let response = await axios.get('http://localhost:5000/api/deck/');
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
            </div>
        );
    }
}

export default App;