import React from 'react';

const userOutput = (props) => {

  const style = {
    backgroundColor: '#80DEEA',
    width: '40%',
    margin: '7px auto',
    boxShadow: '0px 0px 2px #acacac',
    padding: '8px'
  }

  return (
    <div style={style}>
      <p>
        I am {props.username}
      </p>
      <p>
        I am para 2
      </p>
    </div>
  )
}

export default userOutput;