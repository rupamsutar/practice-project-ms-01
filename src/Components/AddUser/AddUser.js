import React from "react";
import "./AddUser.css";

const AddUser = () => {
    return <div className="input">
            <label>User Name</label>
            <input type="text"></input>
            <label>Age</label>
            <input type="number"></input>
    </div>
};

export default AddUser;