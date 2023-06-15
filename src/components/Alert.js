import React from 'react'

function Alert(props) {
    const capitalise = (word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
  return (
    <div style={{height: '40px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg} 
        </div>   }
    </div>
  )
}

export default Alert
