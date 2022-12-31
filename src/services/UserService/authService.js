import { auth } from "../../helpers/credentials";
import {
    createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,
    signOut, GoogleAuthProvider, signInWithPopup
} from "firebase/auth";

const UserEmptyState = {
    id: '',
    email: '',
    name: '',
}

export const singUpService = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const singOutService = () => {
    return signOut(auth)
}

export const loginService = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const loginWithGoogleService = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
}

export const userObserver = (setUser) => {
    return onAuthStateChanged(auth, currentUser => {
        if (!currentUser) {
            setUser(UserEmptyState)
        }
        if (currentUser) {
            const user = {
                id: currentUser.uid,
                name: currentUser.displayName,
                email: currentUser.email,
            }
            setUser(user);
        }

    });
}