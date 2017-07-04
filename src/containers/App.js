import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../components/User';
import ReposTable from '../components/ReposTable';
import * as reposTableActions from '../actions/reposTableActions';

import logo from '../logo.svg';
import '../App.css';

class App extends Component {
    render() {
        const { user, repos } = this.props;
        const { getRepos } = this.props.reposTableActions;
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div>
                    <User name={user.name} getReposByUser={getRepos} />
                    <ReposTable repos={repos.repos} fetching={repos.fetching}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        repos: state.repos,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        reposTableActions: bindActionCreators(reposTableActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
