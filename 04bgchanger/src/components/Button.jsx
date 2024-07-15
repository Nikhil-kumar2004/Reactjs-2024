import React from 'react';

function Button(props) {
  let color=props.color
    return (
      <>
        <button className="rounded-xl" style={{backgroundColor:color}}>{color}</button>
      </>
    )
  }
  
  export default Button