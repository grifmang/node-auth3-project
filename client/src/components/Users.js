import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "./axiosWithAuth";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/users')
            .then(response => {
                setUsers(response.data);
            })
    }, [])

    return (
        <div>
            {console.log(users)}
            {users 
            ? users.map((element, index) => {
                return <div key={index}>
                        <h2>{element.username}</h2>
                        <h5>{element.department}</h5>
                    </div>
            })
            : null}
        </div>
    )
}

export default Users;