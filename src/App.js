import React, { useState } from 'react';
import AddUser from "./Components/AddUser/AddUser";
import UserList from "./Components/UserList/UserList";



function App() {

  const [userList, setUserList] = useState([]);

  const submitUserHandler = (userName, age) => {

    console.log(userName, age);

    setUserList( (prevState) => {
      return (
        [ ...userList, {Name: userName, Age: age, id: Math.random().toString()}]
      )
    });
  }

  // console.log(userList);


  return (
    <div>      
      <AddUser
        onSubmit={submitUserHandler} 
      />
      <UserList 
        userList={userList}
      />
    </div>
  );
}

export default App;
