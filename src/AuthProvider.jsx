import PropTypes from "prop-types";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    TwitterAuthProvider,
    updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider;
    const xProvider = new TwitterAuthProvider
    const handleSignUp = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    const handleX = () => {
        setLoader(true)
        return signInWithPopup(auth, xProvider)
    }
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }
    const handleSignIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const update = (url) => {
        setLoader(true)
        updateProfile(auth.currentUser, {
            photoURL: url
        })
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (curUser) => {
            setUser(curUser)
            setLoader(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authvalue = {
        user,
        loader,
        handleSignUp,
        setUser,
        handleGoogle,
        logOut,
        handleSignIn,
        update,
        handleX,


    }
    return (
        <AuthContext.Provider value={authvalue}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;