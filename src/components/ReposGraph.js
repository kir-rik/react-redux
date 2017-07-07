import React, { Component } from 'react';
import PropTypes from 'prop-types';
import palette from '../customLibs/palette';

export default class ReposGraph extends Component {

    columnWidth = 60;
    columnSpaces = 10;

    getSizeRange(repos) {
        if (repos.length === 0) return { min: 0, max: 0 };
        const sizes = repos.map(repo => repo.size);
        return { min: Math.min(...sizes), max: Math.max(...sizes) };
    }

    getResizeFactor = range => (range.max - range.min) / this.props.columnsHeight

    getGraphData = function (data, resizeFactor) {
        const colors = this.getColors(data.length);
        return data.map((repo, index) => ({
            name: repo.name,
            size: repo.size,
            viewSize: repo.size / resizeFactor,
            color: `#${colors[index]}`,
        }));
    }

    getColumn(repo, index) {
        return (
            <rect
                x={(this.columnWidth + this.columnSpaces) * index}
                y={this.props.columnsHeight - repo.viewSize}
                width={this.columnWidth} height={repo.viewSize}
                fill={repo.color} key={index}>
                <title>{`${repo.name} : ${repo.size}`}</title>
            </rect>
        );
    }

    getColors(size) {
        return palette('tol-rainbow', size);
    }

    getWidth() {
        return (this.columnWidth + this.columnSpaces) * this.props.repos.length;
    }

    render() {
        const range = this.getSizeRange(this.props.repos);
        const data = this.getGraphData(this.props.repos, this.getResizeFactor(range));
        const columns = data.map((repo, index) => this.getColumn(repo, index));

        return (
            <div className='repos-graph'>
                <svg height={this.props.columnsHeight} width={this.getWidth()}>
                    {columns}
                </svg>
            </div>
        );
    }
}

ReposGraph.propTypes = {
    repos: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    columnsHeight: PropTypes.number.isRequired,
};
