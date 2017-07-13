import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../components/User';
import ReposTable from '../components/ReposTable';
import ReposGraph from '../components/ReposGraph';
import * as reposTableActions from '../actions/reposTableActions';

import '../App.css';

class Main extends Component {
    render() {
        const { user, repos } = this.props;
        const { getRepos } = this.props.reposTableActions;
        return (
            <div>
                <User name={user.name} getReposByUser={getRepos} />
                <ReposTable repos={repos.repos} fetching={repos.fetching}/>
                <ReposGraph repos={repos.repos} fetching={repos.fetching} columnsHeight={200}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);

