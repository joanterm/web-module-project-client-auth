import React, {useEffect}from 'react';
import axios from "axios"
import {useHistory} from "react-router-dom"

const Logout = () => {
    const history = useHistory()

    const handleLogout = () => {
        // e.preventDefault()
        axios
        .post("http://localhost:9000/api/logout", {}, {
            headers: {
                authorization: localStorage.getItem("token") //CAN ONLY ACCESS DATA IF AUTHORIZATION PASSED
            }
        })
        .then((response) => {
            console.log(response)
            localStorage.removeItem("token")
            history.push("/login")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        handleLogout()
    }, [])


    return ( 
        <div>logout</div>
     );
}
 
export default Logout;