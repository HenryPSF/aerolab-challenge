import { createContext, useEffect, useState } from 'react';

import { getProducts, getRedeemedProducts } from '../services/api'

export const ProductsListContext = new createContext();

export const ProductsListProvider = ({ children }) =>
{
    const [products, setProducts] = useState([]);
    const [isRedeemedProductList, setIsRedeemedProductList] = useState(false)
    const [loading, setLoading] = useState(true);

    useEffect(() =>
    {
        const fetchProducts = async () =>
        {
            await getProducts().then(result =>
            {
                setProducts(result);
                //setLoading(false);
            })
        }

        const fetchRedeemedProduct = async () =>
        {
            await getRedeemedProducts().then(result =>
            {
                setProducts(result);
                //setLoading(false);
            })
        }

        if(!isRedeemedProductList){
            fetchProducts();
        }else{
            fetchRedeemedProduct();
        }
        
    }, [isRedeemedProductList]);

    return <ProductsListContext.Provider
        value={[
            products,
            setProducts,
            isRedeemedProductList,
            setIsRedeemedProductList
        ]}>
        {children}
    </ProductsListContext.Provider>
}