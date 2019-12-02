import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchText: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({users:users}))
  }

  handleChange = (e) => {
    this.setState({searchText:e.target.value});
    /*if(document.documentElement.offsetHeight<window.innerHeight) {
      document.documentElement.offsetHeight = window.innerHeight; // adjust the height after search
    }
    if(document.body.offsetHeight < window.innerHeight) {
      document.body.offsetHeight = window.innerHeight;
    }*/
  }

  render() {
    const {users, searchText} = this.state; // similar to const users = this.state.users;
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()));
    return (
      <div>
        <SearchBox placeholder="search users" handleChange={this.handleChange}/>
        <CardList users={filteredUsers}>
        </CardList>
      </div>
    );
  }
}

export default App;
