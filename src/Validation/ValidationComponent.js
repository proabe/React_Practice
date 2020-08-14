import React from 'react';

const validate = (props) => {
  let message = "Text too short";
  if (props.textLength > 5) {
    message = "Text too long";
  }

  return (
    <div>
      <p>
        {message}
      </p>
    </div>
  )
}

export default validate;