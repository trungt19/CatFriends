import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            cats: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => 
             response.json())
        .then(users => 
            {this.setState({ cats: users})});
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
       
    }
    render() {
        const filteredCats = this.state.cats.filter(cats => {
            return cats.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if(this.state.cats.length === 0) {
            return <h1>Loading</h1>
        } else {

        
        return (
        <div className='tc'>
            <h1 className='f1'>CatFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList cats={filteredCats} />
            </Scroll>
        </div>
        );
        }
    }
}

export default App;