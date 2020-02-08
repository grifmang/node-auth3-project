import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {

    const [user, setUser] = useState({
        username: '',
        password: '',
        department: ''
    })

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/register', user)
        .then(response => {
            localStorage.setItem('token', response.data.token);
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='username' value={user.username} placeholder='Username' onChange={handleChanges} />
            <input type='password' name='password' value={user.password} placeholder='Password' onChange={handleChanges} />
            <input type='text' name='department' value={user.department} onChange={handleChanges} placeholder='Department' />
            <button type='submit'>Register</button>
        </form>
    )
}

export default Register;