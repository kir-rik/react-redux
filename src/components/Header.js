import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/data/'>Table</Link></li>
                        <li><Link to='/data/graph'>Graph</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
