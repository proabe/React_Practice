import React, { Component } from "react";
import "./App.css";
import UserInput from "./User/UserInput";
import UserOutput from "./User/UserOutput";
import ValidationComponent from "./Validation/ValidationComponent";
import CharComponent from './Char/CharComponent';

class App extends Component {
  state = {
    Users: [
      { username: "Abhishek" },
      { username: "Abhinav" },
      { username: "Anuj" },
    ],
    textLength: 0,
    textCon: ""
  };

  changeLengthTextHandler = (event) => {
    const len = event.target.value.length;
    const currState = {
      ...this.state.Users,
      textLength: len,
      textCon: event.target.value
    }
    this.setState(currState);
  }

  changeTextHandler = (event, index) => {

    const previousState = {...this.state};

    const previousText = previousState.textCon;
    
    let newText = previousText.split("");
    newText.splice(index,1);
    newText = newText.join("");

    const currState = {
      ...this.state.Users,
      textLength: this.state.textLength - 1,
      textCon: newText
    }

    this.setState(currState);
  }

  changeNameHandler = (event) => {
    this.setState({
      Users: [
        { username: "Panda" },
        { username: "Seth" },
        { username: event.target.value },
      ],
    });
  };



  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <input type="text" onChange={this.changeLengthTextHandler} value={this.state.textCon}/>
        <p>{this.state.textLength}</p>
        <ValidationComponent 
          textLength={this.state.textLength}
        />
        <div>
          {this.state.textCon.split("").map((text, index) => {
            return (
              <CharComponent 
                text={text}
                key={index}
                index={index}
                click={this.changeTextHandler}
            />);
          })}
        </div>
        <UserInput 
          change={this.changeNameHandler} 
          username={this.state.Users[2].username} 
        />
        <UserOutput 
          username={this.state.Users[0].username} 
        />
        <UserOutput 
          username={this.state.Users[1].username} 
        />
        <UserOutput 
          username={this.state.Users[2].username} 
        />
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
