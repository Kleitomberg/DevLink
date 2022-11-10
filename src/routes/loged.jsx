import { useState, useEffect } from "react"


import { auth } from "../services/firebase"
import { onAuthStateChanged } from "firebase/auth"

import { Navigate } from "react-router-dom"


export default function Loged({ children }) {

    const [loading, setLoading] = useState(true);
    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {

        async function checkloading(){
            const onsub = onAuthStateChanged(auth, (user) => {

                if (user) {
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


    if(signedIn) {
       return <Navigate to="/admin" />
    }else{
        return children;
    }



}
