import React from 'react';
import './User.css';

const userInput = (props) => {
  return  (
    <div className="UserInput">
      <input type="text" onChange={props.change} value={props.username} />
    </div>
  )
}

export default userInput;