import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./Validation/ValidationComponent";
import CharComponent from './Char/CharComponent';

class App extends Component {
  state = {
    textCon: ""
  };

  changeLengthTextHandler = (event) => {
    const currState = {
      textCon: event.target.value
    }
    this.setState(currState);
  }

  deleteCharacterHandler = (index) => {
    const previousState = {...this.state};

    const previousText = previousState.textCon;
    
    let newText = previousText.split("");
    console.log(newText);
    newText.splice(index,1);
    newText = newText.join("");

    const currState = {
      textCon: newText
    }

    this.setState(currState);
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <input type="text" onChange={this.changeLengthTextHandler} value={this.state.textCon}/>
        <p>{this.state.textCon.length}</p>
        <ValidationComponent 
          textLength={this.state.textCon.length}
        />
        <div>
          {this.state.textCon.split("").map((text, index) => {
            return (
              <CharComponent 
                text={text}
                key={index}
                click={() => this.deleteCharacterHandler(index)}
            />);
          })}
        </div>
      </div>
    );
  }
}

// using hooks

/* const App = () => {

  const style = {
    backgroundColor: '#80DEEA',
    width: '40%',
    margin: '7px auto',
    boxShadow: '0px 0px 2px #acacac',
    padding: '8px'
  }

  const [userState, setUserState ] = useState({
    Users: [
      { username: "Abhishek" },
      { username: "Abhinav" },
      { username: "Anuj" },
    ],
  });

  const changeNameHandler = (event) => {
    setUserState({
      Users: [
        { username: "Panda" },
        { username: "Seth" },
        { username: event.target.value },
      ],
    });
  }

  return (
    <div className="App">
      <h1>React App</h1>
      <UserInput 
        change={changeNameHandler} 
        username={userState.Users[2].username} />
      <UserOutput 
        username={userState.Users[0].username} 
        style={style} />
      <UserOutput 
        username={userState.Users[1].username} 
        style={style} />
      <UserOutput 
        username={userState.Users[2].username} 
        style={style} />
    </div>
  );
} */

export default App;
