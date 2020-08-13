import React, { Component } from "react";
import "./App.css";
import UserInput from "./User/UserInput";
import UserOutput from "./User/UserOutput";

class App extends Component {
  state = {
    Users: [
      { username: "Abhishek" },
      { username: "Abhinav" },
      { username: "Anuj" },
    ],
  };

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

    const style = {
      backgroundColor: '#80DEEA',
      width: '40%',
      margin: '7px auto',
      boxShadow: '0px 0px 2px #acacac',
      padding: '8px'
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <UserInput 
          change={this.changeNameHandler} 
          username={this.state.Users[2].username} />
        <UserOutput 
          username={this.state.Users[0].username} 
          style={style} />
        <UserOutput 
          username={this.state.Users[1].username} 
          style={style} />
        <UserOutput 
          username={this.state.Users[2].username} 
          style={style} />
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
