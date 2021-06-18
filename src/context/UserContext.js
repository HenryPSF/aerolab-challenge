import { useState, useEffect, createContext } from 'react';

import { getUserInfo } from "../services/api";

export const UserContext = createContext();

export const UserProvider = ({children}) =>
{
    const [userInfo, setUserInfo] = useState({ name: '', points: 0 });

    useEffect(() =>
    {
        getUserInfo().then(result => setUserInfo(result))
    }, []);

    return (
        <UserContext.Provider value={[userInfo, setUserInfo]}>
            {children}
        </UserContext.Provider>
    )
}