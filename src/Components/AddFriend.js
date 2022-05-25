import React, { useState} from 'react';
import axios from "axios"
import {useHistory} from "react-router-dom"

const AddFriend = () => {
    const history = useHistory()
    const [addFriend, setAddFriend] = useState({
        name: "",
        age: "",
        email: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setAddFriend({
            ...addFriend,
            [name]: value
        })
    }

    const handleAddFriend = (e) => {
        e.preventDefault()
        axios
        .post("http://localhost:9000/api/friends", addFriend, {
            headers: {
                authorization: localStorage.getItem("token") //CAN ONLY ACCESS DATA IF AUTHORIZATION PASSED
            }
        })
        .then((response) => {
            console.log(response.data);
            setAddFriend(response.data)
            history.push("/friendlist")          
        })
        .catch((error) => {
            console.log(error.response)
        })
    }
    return ( 
        <div>
            ADD FRIEND
            <form action="" onSubmit={handleAddFriend}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                />
                <label htmlFor="password">Age:</label>
                <input 
                    type="text"
                    id="age"
                    name="age"
                    onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input 
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleChange}
                />
                <button>Add friend</button>
            </form>
        </div>
     );
}
 
export default AddFriend;

//  {
//     id: 1
//     name: 'Joe',
//     age: 24,
//     email: 'joe@lambdaschool.com',
//   }