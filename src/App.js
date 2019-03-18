import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {name: "Larry", age: 42},
      {name: "Curly", age: 24},
      {name: "Moe", age: 56}
    ],
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    const person = this.state.persons;

  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
      {name: event.target.value, age: 42},
      {name: event.target.value, age: 24},
      {name: "Moe", age: 56}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow})

    // this.state.showPersons ? 
    //   this.setState({showPersons: true}) 
    //   :
    //   this.setState({showPersons: false})

    // if (this.state.showPersons === false) {
    //   this.setState({showPersons: true})
    // } else {
    //   this.setState({showPersons: false})
    // }
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
    // because the re-render works through the whole render() method, persons is repeatedly set to null. this.state.showPersons is not reset, so the following if statem,ent works perfectly, and effeciently, and is best practices
    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) =>  {
            return <Person 
              click = {() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age}
            />

          })}
          {/* <Person 
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changed={this.nameChangedHandler}
          />
          <Person 
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            // click={this.switchNameHandler.bind(this, "William")}
            changed={this.nameChangedHandler}>
            My hobby: Piano
          </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            // changed={this.nameChangedHandler}
          />  */}
        </div>
      );
    }
    return(
      <div className="App">
        <h1>This is the same React App</h1>
        <p>This is really working!!! 2</p>
        <button 
          style={styling}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div> 
    )
  }
}

export default App;
