import { createContext, useEffect, useState } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListner } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = () =>
            onAuthStateChangedListner((user) => {
                if (user) {
                    createUserDocumentFromAuth(user);
                }
                console.log(user);
                setCurrentUser(user);
            });
        unsubscribe();
    }, []);
    const value = { currentUser, setCurrentUser };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
