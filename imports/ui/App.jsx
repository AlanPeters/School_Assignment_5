import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';

import ReactDataGrid from 'react-data-grid';




// App component - represents the whole app
export default class App extends Component {
    constructor(props) {
        super(props);



        this.columns = [
            {key: 'id', name: 'ID' },
            {key: 'login', name: 'User Name'}
        ];



        this.state = {
            loaded: false,
            results: { items:[]},
        };
        this.getRow = this.getRow.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount(){

        this.search('AlanPeters');
    }

    search(query){
        const url = "https://api.github.com/search/users?q="+ query;
        fetch(url).then(results => {
            return results.json();
        }).then(data => {
            this.setState({
                results: data,
                loaded: true
            })
            console.log(data);
        })
    }


    onSearchChange(searchValue){
        this.search(searchValue);
    }


    getRow(rowNum){
        return this.state.results.items[rowNum];
    }

    render() {
        let length = this.state.results.items === undefined ? 0 : this.state.results.items.length;
        return (
            <div>
                <span> 
                    <h1>Test</h1>

                    <SearchBar onSearchChange={this.onSearchChange} />
                </span>
                <br/>
                <div>
                    <ReactDataGrid
                        columns={this.columns}
                        rowGetter={this.getRow}
                        rowsCount={length}
                    />
                </div>
            </div>
        );
    }
}

