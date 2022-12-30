import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext/UserContext';
import { loginService, loginWithGoogleService, singOutService, singUpService, userObserver } from '../services/UserService/authService';

const localUser = 'loggedSayniUser';

export const useUser = () => {

    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const ErrorEnptyState = { errorCode: '', errorMessage : ''}
    const [error, setError] = useState(ErrorEnptyState)
    // if ()  throw new Error('There is not auth user-provider')

    // useEffect(() => {
    //     const loggedUserJSON = window.localStorage.getItem(localUser)
    //     if (loggedUserJSON) {
    //         const user = JSON.parse(loggedUserJSON)
    //         setUser(user)
    //         // service.setToken(user.token)
    //     }
    // }, [])
    useEffect(() => { 
        userObserver(setUser); 
        console.log(user,"observer"); 
        // return () => userObserver();
    }, [])
    

    const logOut = async() => {
        setError(ErrorEnptyState)
        try {
            await singOutService()
            await setUser(null)
            navigate("/login")
        } catch (error) {
            const {code: errorCode, message: errorMessage} = error;
            setError({errorCode,errorMessage})
        }
        // window.localStorage.removeItem(localUser)
    }

    const logIn = async (email, password ) => {
        setError(ErrorEnptyState)
        loginService(email, password) 
            .then((userCredential) => {
                // Signed in 
                // const {user} = userCredential;
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError({errorCode,errorMessage})
            });

        //  window.localStorage.setItem(
        //      localUser, JSON.stringify(user)
        //  )
        //  // service.setToken(user.token)
        //  setUser(user)
    }

    const loginWithGoogle = async () => {
        setError(ErrorEnptyState)
        try {
            await loginWithGoogleService();
            navigate("/")
        } catch (error) {
            console.log(error);
            const {code: errorCode, message: errorMessage} = error;
            setError({errorCode,errorMessage})
        }
        
    }


    const singUp = (email, password) => {
        setError(ErrorEnptyState)
        singUpService(email, password) 
            .then((userCredential) => {
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError({errorCode,errorMessage})
            });
        
    }

    return { user,setUser, logIn, loginWithGoogle, singUp, logOut, error }
}
