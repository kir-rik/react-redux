import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import Header from '../components/Header';
import Main from './Main';
// import * as reposTableActions from '../actions/reposTableActions';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Main/>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         user: state.user,
//         repos: state.repos,
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         reposTableActions: bindActionCreators(reposTableActions, dispatch),
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
