import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import * as reposTableActions from '../actions/reposTableActions';

import User from '../components/User';
import ReposTable from '../components/ReposTable';
import ReposGraph from '../components/ReposGraph';

class Data extends Component {
    render() {
        const { user, repos } = this.props;
        const { getRepos } = this.props.reposTableActions;

        const ReposTableComponent = () => (
            <ReposTable repos={repos.repos} fetching={repos.fetching}/>
        );

        const ReposGraphComponent = () => (
            <ReposGraph repos={repos.repos} fetching={repos.fetching} columnsHeight={200}/>
        );

        return (
            <div>
                <User name={user.name} getReposByUser={getRepos} />
                <Switch>
                    <Route exact path='/data' component={ReposTableComponent}/>
                    <Route path='/data/graph' component={ReposGraphComponent}/>
                </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(Data);
