import React, { useState } from "react";
import "./AddUser.css";
import Button from "../Button/Button";

const AddUser = (props) => {

    const [userName, setUserName] = useState("");
    const [age, setAge] = useState("");
    const [formValid, setFormValid] = useState(true);

    const userNameChangeHandler = (event) => {
        setFormValid(true);
        setUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setFormValid(true);
        setAge(event.target.value);
    }

    const submitHandler = () => {
        if(userName.trim() === "" || age.trim()=== "") {
            setFormValid(false);
            return;
        }
        
        props.onSubmit(userName, age);
        setUserName("");
        setAge("");
    }

    if(!formValid) {console.log("Enter Complete information !")};


    return <div className="input">
            <label>User Name</label>
            <input value={userName} type="text" onChange={userNameChangeHandler}></input>
            <label>Age</label>
            <input value={age} type="number" onChange={ageChangeHandler}></input>
            <Button onSubmit = {submitHandler}></Button>
    </div>
};

export default AddUser;