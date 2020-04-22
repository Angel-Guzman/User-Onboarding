import React from 'react'

function Form () {
    return (
        <form>
            <h2>User Form</h2>

            {/* ERRORS */}
            
            {/* TEXT INPUTS */}
            <label>First Name:
                <input type='text' />
            </label><br />
            <label>Last Name:
                <input type='text' />
            </label><br />
            <label>Email:
                <input type='text' />
            </label><br />
            <label>Password:
                <input type='text' />
            </label><br />
            {/* CHECKBOX */}
            <label>Agree to TOS:
                <input type='checkbox' />
            </label><br />
            {/* SUBMIT BUTTON */}
            <button>Submit</button>
        </form>
    )
}

export default Form;