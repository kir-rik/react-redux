import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReposTable extends Component {
   
    render() {
        const { repos, fetching } = this.props;
        const tbodyContent = repos.length > 0 ?
            repos.map((item, index) => this.getRow(item, index)) :
            <tr><td colSpan='3'>Нет данных :(</td></tr>;

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
                <td>{rowData.name}</td>
                <td>{rowData.language}</td>
                <td>{rowData.description}</td>
            </tr>
        );
    }
}

ReposTable.propTypes = {
    repos: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired
}