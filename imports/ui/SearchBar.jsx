import React, { Component } from 'react';
import ReactDOM from 'react-dom';


 
export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    render(){
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search"
                    ref="searchBar"
                    onChange={this.onSearchChange}
                    value={this.state.value}
                />
            </form>
        );
    }

    onSearchChange(event){
        this.setState({value:event.target.value})
        this.props.onSearchChange(this.state.value);
    }
}
