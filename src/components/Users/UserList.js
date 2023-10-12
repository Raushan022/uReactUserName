import React from 'react';
import Card from '../UI/Card';
import classes from './UserList.module.css'


const UserList = (props) => {
  return (
    // <Card className={classes.users}>
    //   <ul>
    //     {props.users.map((user) => {    //use () or return () as used, directly{} will not work.
    //       return (
    //         <li key={props.id}>
    //           {user.name} ({user.age} years old)
    //         </li>
    //       )
    //     })}
    //   </ul>
    // </Card>
    
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UserList