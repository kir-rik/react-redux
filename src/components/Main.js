import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './home';
import Data from '../containers/Data';
import TestComponent from './testComponent';

export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={home}/>
                    <Route path='/data' component={Data}/>
                    <Route path='/routewithparam/:param' component={TestComponent}/>
                </Switch>
            </main>
        );
    }
}

