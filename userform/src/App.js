import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

import axios from 'axios'
import * as yup from 'yup'

// URL for POST/GET requests
const url = 'https://reqres.in/api/users'

const formSchema = yup.object().shape({
  first_name: yup 
  .string()
  .min(1, 'at least 1 letter for first name is required')
  .required('first name is required'),
  last_name: yup 
  .string()
  .min(1, 'at least 1 letter for last name is required')
  .required('last name is required'),
  email: yup 
  .string()
  .email('a valid email is required')
  .required('email is required'),
})



function App() {
  return (
    <Form />
  );
}

export default App;
