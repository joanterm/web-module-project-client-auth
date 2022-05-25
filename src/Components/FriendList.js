import React, {useState, useEffect} from 'react';
import axios from "axios"

const FriendList = () => {
    const [allFriends, setAllFriends] = useState([])

    const getData = () => {
        axios
        .get("http://localhost:9000/api/friends", {
            headers: {
                authorization: localStorage.getItem("token") //CAN ONLY ACCESS DATA IF AUTHORIZATION PASSED
            }
        })
        .then((response) => {
            // console.log(response.data)
            setAllFriends(response.data)
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return ( 
        <div>
            Friend List
            {allFriends.map((item) => (
                <h1 key={item.id}>{item.name} - {item.age} - {item.email}</h1>
            ))}

        </div>
     );
}
 
export default FriendList;
