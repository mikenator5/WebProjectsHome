import React from 'react';
import NavBar from './NavBar.js';
import Header from './Header.js';
import PageContent from './PageContent.js';


import './App.css';

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="d-flex" id="wrapper">
                    <NavBar />
                    <PageContent />
                </div>
            </React.Fragment>
        )
    }
}

export default App;