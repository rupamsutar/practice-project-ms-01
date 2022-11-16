import React, { useState } from 'react';
import AddUser from "./Components/AddUser/AddUser";



function App() {

  const [userList, setUserList] = useState([]);

  const submitUserHandler = (userName, age) => {

    console.log(userName, age);

    setUserList( (prevState) => {
      return (
        [ ...userList, {Name: userName, age: age, id: Math.random().toString()}]
      )
    });
  }

  console.log(userList);


  return (
    <div>
      <AddUser
        onSubmit={submitUserHandler} 
      />
    </div>
  );
}

export default App;
