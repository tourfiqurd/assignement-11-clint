import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import initialigeAuthentiaction from './../components/Firebage/initialigeAuthentication';











const useFirebage = () => {


    initialigeAuthentiaction()
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState("")
    const [isLoading, setIsloading] = useState(true)
    const googleSignIn = () => {
        setIsloading(true)

        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                console.log(user);

                setUser(user)


            })
            .finally(() => {
                setIsloading(false)
            })

    }
    const createAccount = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
            })

    }
    const signInUsers = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .finally(() => {
                setIsloading(false)
            })

    }
    const signOutGoogle = () => {
        setIsloading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => {
                setIsloading(false)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsloading(false)
        });


    }, [])
    return {
        isLoading,
        signOutGoogle,
        googleSignIn,
        user,
        createAccount,
        signInUsers
    }

};

export default useFirebage;
