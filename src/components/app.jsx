import React, { Component } from 'react';
import SideNavBar from './SideNavBar/sideNavBar';

class App extends Component {
    state = { }
    render() {
        return (
            <div className="container-fluid">
                <SideNavBar/>
            </div>
        );
    }
}

export default App;