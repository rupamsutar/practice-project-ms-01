import React from "react";
import "./Button.css";

const Button = (props) => {
    return <button className="button" onClick={props.onSubmit}>Add User</button>
}

export default Button;