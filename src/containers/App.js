import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import * as pageActions from '../actions/PageActions';

import logo from '../logo.svg';
import '../App.css';

class App extends Component {
    render() {
        const { user, page } = this.props;
        const { getPhotos } = this.props.pageActions;
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div>
                    <User name={user.name} />
                    <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.user, // (1)
        page: state.page // (2)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)