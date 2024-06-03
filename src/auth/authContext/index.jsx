
import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
const AuthContext = createContext();
export function useAuth(){
    return useContext(AuthContext);
}
export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null, AuthContext);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, []);

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({...user});
            setUserLoggedIn(user);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }
    const value = {
        currentUser,
        userLoggedIn,
        loading
    }

    return ( 
        <AuthContext.Provider value = {value}>
            {!loading && children }
        </AuthContext.Provider>
    )
}