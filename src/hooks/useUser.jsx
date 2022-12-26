import { useEffect, useState } from 'react'
const localUser = 'loggedSayniUser';

export const useUser = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem(localUser)
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            // service.setToken(user.token)
        }
    }, [])

    const logout = () =>{
        setUser(null)
        // service.setToken(user.token)
        window.localStorage.removeItem(localUser)
    }

    // const login = async({username, password}) => {
    //     const user = await loginService.login({
    //         username, password
    //     })

    //     window.localStorage.setItem(
    //         localUser, JSON.stringify(user)
    //     )
    //     // service.setToken(user.token)
    //     setUser(user)
    // }

    return { user, logout}
}
