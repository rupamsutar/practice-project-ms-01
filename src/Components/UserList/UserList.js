import React from "react";
import "./UserList.css";

const UserList = (props) => {
    return <div>
        {props.userList.map(user => {
            return (
                
                <div key={user.id} className="list">
                    <p><strong>{user.Name} ( {user.Age} years old )</strong></p>
                </div>
            );
        })};
    </div>
}

export default UserList;