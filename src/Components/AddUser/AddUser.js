import React, { useState } from "react";
import "./AddUser.css";
import Button from "../Button/Button";

const AddUser = (props) => {

    const [userName, setUserName] = useState("");
    const [age, setAge] = useState("");

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const submitHandler = () => {        
        props.onSubmit(userName, age);
    }


    return <div className="input">
            <label>User Name</label>
            <input type="text" onChange={userNameChangeHandler}></input>
            <label>Age</label>
            <input type="number" onChange={ageChangeHandler}></input>
            <Button onSubmit = {submitHandler}></Button>
    </div>
};

export default AddUser;