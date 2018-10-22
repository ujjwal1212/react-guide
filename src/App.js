import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {name: 'Ujjwal', age: 28},
      {name: 'Pooja', age: 27},
      {name: 'Shikha', age: 29}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        {name: newName, age: 28},
        {name: 'Pooja', age: 27},
        {name: 'Shikha', age:21}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> React Application Guide </h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, "Ujjwal Choudhary")}>Switch Name</button>
        <Person 
          name ={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name ={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click= {this.switchNameHandler.bind(this, "Ujjwal")}
          >My Hobbies: Swimming</Person>
        <Person name ={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
