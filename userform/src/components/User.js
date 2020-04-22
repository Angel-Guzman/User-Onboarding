import React from 'react'

function User ({ details }) {
    if (!details) {
        return <h3>Working on fetching your user details...</h3>
    }
    return(
        <div className='container'>
            <h2>User</h2>
            <h3>First Name: {details.firstname}</h3>
            <h3>Last Name: {details.lastname}</h3>
            <h3>Email: {details.email}</h3>
        </div>
    )
}

export default User;