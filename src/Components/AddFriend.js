import React from 'react';

const AddFriend = () => {
    return ( 
        <div>
            ADD FRIEND
            <form action="">
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    id="username"
                />
                <label htmlFor="password">Age:</label>
                <input 
                    type="text"
                    id="age"
                />
                <label htmlFor="email">Email:</label>
                <input 
                    type="text"
                    id="email"
                />
                <button>Add friend</button>
            </form>
        </div>
     );
}
 
export default AddFriend;