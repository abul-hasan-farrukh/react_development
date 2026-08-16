import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => { //children is a prop
    const [user, setUser] = useState(null)
    return (
        //providing access of user, setUser to the components wrapped inside UserContext.Provider
        <UserContext.Provider value={{user, setUser}}> 
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;