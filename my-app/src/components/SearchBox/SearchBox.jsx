import React, { Component } from "react";
import './SearchBox.css'

export default class SearchBox extends Component {

    render() {

        // Destructuring
        const { onSearchChange } = this.props

        return (
        <div>
            <input
            className="search-box"
            type="search"
            placeholder="Search Pokemon"
            onChange={onSearchChange}
            />
        </div>
        );
    }
}
