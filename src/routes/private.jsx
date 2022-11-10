import { useState, useEffect } from "react"


import { auth } from "../services/firebase"
import { onAuthStateChanged } from "firebase/auth"

import { Navigate } from "react-router-dom"
import { async } from "@firebase/util";

export default function Private({ children }) {

    const [loading, setLoading] = useState(true);
    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {

        async function checkloading(){
            const onsub = onAuthStateChanged(auth, (user) => {
                console.log(user)
                if (user) {
                    const usuario = {
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    };
                    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

                    setSignedIn(true);
                    setLoading(false);
                } else {
                    setSignedIn(false);
                    setLoading(false);
                }
            });
        }

        checkloading();

    }, []);


    if(loading) {
        return (
            <div></div>
        )
    }

    if(!signedIn) {
       return <Navigate to="/login" />
    }

    return children;

}
