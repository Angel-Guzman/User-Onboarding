import React from 'react'

function Form (props) {

    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return (
        <form className='container'>
            <h2>User Form</h2>

            {/* ERRORS */}
            <div>{errors.firstname}</div>
            <div>{errors.lastname}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.tos}</div>
            {/* TEXT INPUTS */}
            <label>First Name:
                <input
                value={values.firstname}
                onChange={onInputChange} 
                name='firstname'
                type='text' />
            </label><br />
            <label>Last Name:
                <input
                value={values.lastname}
                onChange={onInputChange}  
                name='lastname'
                type='text' />
            </label><br />
            <label>Email:
                <input 
                value={values.email}
                onChange={onInputChange}
                name='email'  
                type='text' />
            </label><br />
            <label>Password:
                <input 
                value={values.password}
                onChange={onInputChange}
                name='password'
                type='password' />
            </label><br />
            {/* CHECKBOX */}
            <label>Agree to TOS:
                <input
                checked={values.tos}
                onChange={onCheckboxChange} 
                name='tos'
                type='checkbox' />
            </label><br />
            {/* SUBMIT BUTTON */}
            <button onClick={onSubmit} disabled={disabled}>Submit</button>
        </form>
    )
}

export default Form;