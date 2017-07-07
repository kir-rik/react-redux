import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReposTable extends Component {

    getRow(rowData, index) {
        return (
          <tr key={index}>
              <td><div>{rowData.name}</div></td>
              <td><div>{rowData.language}</div></td>
              <td><div>{rowData.description}</div></td>
              <td><div>{rowData.size}</div></td>
            </tr>
        );
    }

    render() {
        const { repos, fetching } = this.props;
        const tbodyContent = repos.length > 0 ?
            repos.map((item, index) => this.getRow(item, index)) :
            <tr><td colSpan="4">Нет данных :(</td></tr>;

        return (
          <table className="repos-table">
              <thead>
                  <tr>
                      <th><div>Name</div></th>
                      <th><div>Language</div></th>
                      <th><div>Descrition</div></th>
                      <th><div>Size</div></th>
                    </tr>
                </thead>
              <tbody>
                  {
                        fetching ?
                          <tr><td colSpan="4">Загрузка...</td></tr>
                        :
                        tbodyContent
                    }
                </tbody>
            </table>
        );
    }
}

ReposTable.propTypes = {
    repos: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
};
