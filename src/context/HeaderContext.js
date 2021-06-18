import { createContext, useState } from 'react';

export const HeaderContext = new createContext();

export const HeaderProvider = ({ children }) =>
{
    const [headerTitle, setHeaderTitle] = useState({title: "Electronics Store"});
    return (
        <HeaderContext.Provider value={[headerTitle, setHeaderTitle]}>
            {children}
        </HeaderContext.Provider>
    )
}