import { createContext, useState } from 'react'

const UserContext = createContext()

const UserEmptyState = {
    id: '',
    email : '',
    name: ''
}

const UserProvider = ({children}) =>{
    const [user, setUser] = useState(UserEmptyState)

    return(
        <UserContext.Provider
            value={{user, setUser}}
        >
            {children}
        </UserContext.Provider>
    )
}

export {UserContext,UserProvider}