import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isError, setIsError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsError({
        title: 'Invalid Input',
        message: 'Please Enter a valid Name and Age (non-empty values).'
      });
      return;
    }
    if (+enteredAge < 1) {
      setIsError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (> 0)'
      });
      return;
      
    }
    // console.log(enteredUsername, enteredAge)
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const errorHandler = () => {
    setIsError(null)
  }
  return (
    <>
      { isError && <ErrorModal title={isError.title} message={isError.message} onClickHAndler={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id='username'
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />

          <label htmlFor="age">Age (years)</label>
          <input
            id='age'
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />

          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser