import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReposTable extends Component {

    onSearchBtnClick(e) {
        if (this.props.user) {
            this.props.getReposByUser(this.props.user);
        }
    }
    
    render() {
        const { repos, fetching } = this.props;
        const tbodyContent = repos.length > 0 ?
            repos.map((item, index) => this.getRow(item, index)) :
            <tr><td colSpan='3'>Нет данных :(</td></tr>;
        console.log(repos);
        console.log(tbodyContent);
        console.log(fetching);

        return (
            <table className='repos-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Descrition</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fetching ?
                        <tr><td colSpan='3'>Загрузка...</td></tr>
                        :
                        tbodyContent
                    }
                </tbody>
            </table>
        )
    }

    getRow(rowData, index) {
        return (
            <tr key={index}>
                <td>{rowData.name}</td>,
                <td>{rowData.language}</td>,
                <td>{rowData.description}</td>,
            </tr>
        );
    }
}

ReposTable.propTypes = {
    user: PropTypes.string,
    repos: PropTypes.array.isRequired,
    getReposByUser: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired
}