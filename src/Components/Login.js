import React, {useState} from 'react';
import {useHistory} from "react-router-dom"
import axios from "axios"

const Login = () => {
    const history = useHistory()
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        axios
        .post("http://localhost:9000/api/login", credentials)
        .then((response) => {
            console.log(response.data);
            localStorage.setItem("token", response.data.token)
            history.push("/friendlist")
        })
        .catch((error) => {
            console.log(error.response)
            // console.log(error.response.data.error)
        })
    }

    return ( 
        <div>
            LOGIN
            <form action="#" onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    id="username"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default Login;

// {
//     id: 1
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com',
//   }

// [POST] * to /api/login: returns a token to be added to the header of all other requests. 
//Pass in the following credentials as the body of the request: 
//{ username: 'Bloom', password: 'Tech' }