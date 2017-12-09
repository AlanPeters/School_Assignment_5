import React, { Component } from 'react';
import ReactDOM from 'react-dom';


 
export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    ref="searchBar"
                    onChange={this.onSearchChange}
                    value={this.state.value}
                />
                <input type="submit" value="Search" />
            </form>
        );
    }

    onSearchChange(event){
        this.setState({value:event.target.value})
    }
    onSubmit(event){
        this.props.onSearchChange(this.state.value);
        event.preventDefault();
    }
}
