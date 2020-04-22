import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Form from './components/Form'
import User from './components/User'

import axios from 'axios'
import * as yup from 'yup'

// URL for POST/GET requests
const url = 'https://reqres.in/api/users'

const initialFormValues = {
  id: uuid(),
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  tos: false,
}

const initialFormErrors = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  tos: false,
}

const formSchema = yup.object().shape({
  firstname: yup 
  .string()
  .min(2, 'at least 2 letters for first name is required')
  .required('first name is required'),
  lastname: yup 
  .string()
  .min(2, 'at least 2 letters for last name is required')
  .required('last name is required'),
  email: yup 
  .string()
  .email('a valid email is required')
  .required('email is required'),
  password: yup
  .string()
  .min(5, 'at least 5 characters for password')
  .required('password is required'),
  tos: yup
  .boolean()
  .oneOf([true], 'Agreement to Terms and Conditions is required')
})

function App() {

// STATE
const [users, setUsers] = useState([])

const [formValues, setFormValues] = useState(initialFormValues)

const [formDisabled, setFormDisabled] = useState(true)

const [formErrors, setFormErrors] = useState(initialFormErrors)

// // GET REQUEST FOR USERS
// const getUsers = () => {
//   axios.get(url)
//   .then(res => {
//     setUsers([res.data.data])
//     // console.log(res.data.data)
//   })
//   .catch(err => {
//     debugger
//   })
// }

// // Get users from API
// useEffect(() => {
//   getUsers()
// }, [])

// POST REQUEST FOR USERS
const postUsers = user => {
  axios.post(url, user)
  .then(res => {
    setUsers([...users, res.data])
  })
  .catch(err => {
    debugger
  })
}

// Validation, if form values change
useEffect(() => {
  formSchema.isValid(formValues).then(valid => {
    setFormDisabled(!valid)
  })
}, [formValues])

const onSubmit = evt => {
  evt.preventDefault()

  const newUser = {
    firstname: formValues.firstname,
    lastname: formValues.lastname,
    email: formValues.email,
    password: formValues.password,
    tos: formValues.tos,
  }

  // POST OUR NEW USER TO THE API!
  postUsers(newUser)
  setFormValues(initialFormValues)
}

// Text input handler
const onInputChange = evt => {

  const name = evt.target.name
  const value = evt.target.value

  yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: '',
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })

  setFormValues({
    ...formValues,
    [name]: value,
  })
}

// Checkbox handler
const onCheckboxChange = evt => {
  const { name } = evt.target
  const isChecked = evt.target.checked

  setFormValues({
    ...formValues,
      [name]: isChecked,
  })
}


  return (
    <div className='container'>
      <Form 
      values={formValues} 
      onInputChange={onInputChange}
      onCheckboxChange={onCheckboxChange} 
      onSubmit={onSubmit} 
      disabled={formDisabled}
      errors={formErrors}
      />

    {
      users.map(user => {
        return (
          <User key={user.id} details={user} />
        )
      })
    } 
    </div>
  )
}

export default App;
