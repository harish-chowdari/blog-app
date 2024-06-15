import axios from "axios";
import React, { createContext, useState, useEffect } from "react";





export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
      JSON.parse(localStorage.getItem("user")) || null
    );

    const Login = async(inputs) => {
        const res = await axios.post("/auth/login", inputs)
        setCurrentUser(res.data)
    }

    const Logout = async() => {
        await axios.post("/auth/logout")
        setCurrentUser(null)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
      }, [currentUser]);

        return(
            <AuthContext.Provider value={{currentUser, Login, Logout}}>
                {children}
            </AuthContext.Provider>
        )
}
