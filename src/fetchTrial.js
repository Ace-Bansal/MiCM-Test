import React from 'react';
import UserList from './userList'

class FetchTrial extends React.Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(results => {
      return results.json();
    }).then(data => {
      let users = data.map(user => {
        return user
      })
      this.setState({users});
    })
  }

  render() {
    return (
      <div>
        <h1>Users {this.state.users.length == 0 ? '(loading)' : undefined}</h1>
        <UserList users={this.state.users}/>
      </div>
    )
  }
}

export default FetchTrial;
