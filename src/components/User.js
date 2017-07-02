import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class User extends Component {

    constructor(props) {
        super(props);

        this.userName = this.props.name;
        this.handleChange = this.handleChange.bind(this);
        this.onSearchBtnClick = this.onSearchBtnClick.bind(this);
    }

    onSearchBtnClick(e) {
        if (this.userName) {
            this.props.getReposByUser(this.userName);
        }
    }

    handleChange(event) {
        this.userName = event.target.value;
    }

    render() {
        return (
            <div className='search-box'>
                <span>
                    <input type='text' 
                        defaultValue={this.userName} 
                        onChange={this.handleChange}
                    />
                    {/*onChange={this.handleChange}*/}
                    {/*ref={input => this.textInput = input}*/}
                    <input type="button"
                        value="Get repos!"
                        onClick={this.onSearchBtnClick.bind(this)}
                    />
                </span>
            </div>
        )
    }
}

User.propTypes = {
    getReposByUser: PropTypes.func.isRequired,
    name: PropTypes.string,
}