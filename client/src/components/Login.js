import React, { useState, useHistory } from 'react';
import axios from 'axios';

const Login = (props) => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', user)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            // props.history.push('/users');
            console.log(response)
        })
        .catch(err => {
            console.log(err.response);
        })
    }

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={user.username} onChange={handleChanges} name='username' placeholder='Username' />
            <input type='password' value={user.password} onChange={handleChanges} name='password' placeholder='Password' />
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login;