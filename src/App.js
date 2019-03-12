import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {name: "Larry", age: 42},
      {name: "Curly", age: 24},
      {name: "Moe", age: 56}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log("was clicked")
    // don't directly change tyhe state, like in below
    // this.state.persons[0].name = "Maximillian";
    this.setState({
      persons:[
      {name: newName, age: 42},
      {name: "Curly", age: 24},
      {name: "Moe", age: 56}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
      {name: "Larry", age: 42},
      {name: event.target.value, age: 24},
      {name: "Moe", age: 56}
      ]
    })
  }

  render() {

  const styling = {
    backgroundColor: '#ccc',
    font: 'inherit',
    border: '1px solid blue',
    padding: '0.5px',
    borderRadius: '3px',
    cursor: 'pointer'
  }
    return (
      <div className="App">
      <h1>This is the same React App</h1>
      <p>This is really working!!! 2</p>
      <button 
      style={styling}
      onClick={() => this.switchNameHandler("Jose")}>Switch Name</button>
          {/* {this.state.persons.map(person => {
            return (
              <Person 
              name= {person.name}
            )}
          )} */}
        
          <Person 
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "William")}
            changed={this.nameChangedHandler}>
            My hobby: Piano</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
