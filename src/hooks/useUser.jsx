import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext/UserContext';
import { loginService, loginWithGoogleService, singOutService, singUpService, userObserver } from '../services/UserService/authService';

export const useUser = () => {

    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const ErrorEmptyState = { errorCode: '', errorMessage: '' }
    const [error, setError] = useState(ErrorEmptyState)
    // if ()  throw new Error('There is not auth user-provider')

    useEffect(() => {
        userObserver(setUser);
        return () => userObserver(setUser);
    }, [])


    const logOut = async () => {
        setError(ErrorEmptyState)
        try {
            await singOutService()
            await setUser(null)
            navigate("/login")
        } catch (error) {
            const { code: errorCode, message: errorMessage } = error;
            setError({ errorCode, errorMessage })
        }
    }

    const logIn = async (email, password) => {
        setError(ErrorEmptyState)
        loginService(email, password)
            .then((userCredential) => {
                // Signed in 
                // const {user} = userCredential;
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError({ errorCode, errorMessage })
            });
    }

    const loginWithGoogle = async() => {
        setError(ErrorEmptyState)
        try {
            await loginWithGoogleService();
            navigate("/")
        } catch (error) {
            console.log(error);
            const { code: errorCode, message: errorMessage } = error;
            setError({ errorCode, errorMessage })
        }
    }


    const singUp = (email, password) => {
        setError(ErrorEmptyState)
        singUpService(email, password)
            .then((userCredential) => {
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError({ errorCode, errorMessage })
            });
    }

    return { user, setUser, logIn, loginWithGoogle, singUp, logOut, error }
}
