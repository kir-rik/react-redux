import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class User extends Component {

    constructor(props) {
        super(props);

        this.userName = this.props.name;
        this.handleChange = event => this.handleChange(event);
        this.onSearchBtnClick = () => this.props.getReposByUser(this.userName);
        this.handleKeyPress = (event) => {
            if (event.charCode === 13) {
                this.onSearchBtnClick();
            }
        };

        this.onSearchBtnClick();
    }

    render() {
        return (
            <div className='search-box'>
                <span>
                    <input type='text'
                        defaultValue={this.userName}
                        onChange={this.handleChange}
                         onKeyPress={this.handleKeyPress}
                    />
                    <input type="button"
                        value="Get repos!"
                        onClick={this.onSearchBtnClick.bind(this)}
                    />
                </span>
            </div>
        );
    }
}

User.propTypes = {
    getReposByUser: PropTypes.func.isRequired,
    name: PropTypes.string,
};
