import { createContext, useState } from 'react';

export const FilterContext = new createContext();

export const FilterProvider = ({ children }) =>
{
    const [filterOption, setFilterOption] = useState({price: 'all'});
    return (
        <FilterContext.Provider value={[filterOption, setFilterOption]}>
            {children}
        </FilterContext.Provider>
    )
}