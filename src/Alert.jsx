import React from "react";

function Alert(props) {
  
  return (
    <div style={{height : "65px"}}>
    {props.alert && 
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong>{props.alert.type}</strong>: {props.alert.msg}
      </div>}
    </div>
  );
}

export default Alert;
