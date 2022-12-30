import { createContext, useState } from 'react'

const UserContext = createContext()

const UserEnptyState = {
    email : '',
    password: '',
}

const UserProvider = ({children}) =>{
    const [user, setUser] = useState(UserEnptyState)

    return(
        <UserContext.Provider
            value={{user, setUser}}
        >
            {children}
        </UserContext.Provider>
    )
}

export {UserContext,UserProvider}