import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './home';
import Data from '../containers/Data';

export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={home}/>
                    <Route path='/data' component={Data}/>
                </Switch>
            </main>
        );
    }
}

