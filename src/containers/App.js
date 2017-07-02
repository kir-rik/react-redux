import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
    render() {
        const { name, surname, age } = this.props.user
        return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Welcome to React</h2>
                    </div>
                    <div className="App-intro">
                        <p>Привет из App, {name} {surname}!</p>
                        <p>Тебе уже {age} ?</p>
                    </div>
                </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state
    }
}

export default connect(mapStateToProps)(App)