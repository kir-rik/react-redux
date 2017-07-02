import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import ReposTable from '../components/ReposTable';
import * as pageActions from '../actions/PageActions';
import * as reposTableActions from '../actions/ReposTableActions';

import logo from '../logo.svg';
import '../App.css';

class App extends Component {
    render() {
        const { user, page, repos } = this.props;
        const { getPhotos } = this.props.pageActions;
        const { getRepos } = this.props.reposTableActions;
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div>
                    <User name={user.name} />
                    <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching}/>
                    <ReposTable repos={repos.repos} user={repos.user} getReposByUser={getRepos} fetching={repos.fetching}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.user, // (1)
        page: state.page, // (2)
        repos: state.repos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch),
        reposTableActions: bindActionCreators(reposTableActions, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)