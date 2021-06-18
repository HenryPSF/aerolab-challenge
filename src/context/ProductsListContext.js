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
            })
        }

        const fetchRedeemedProduct = async () =>
        {
            await getRedeemedProducts().then(result =>
            {
                setProducts(result);
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
            setIsRedeemedProductList,
            loading,
            setLoading
        ]}>
        {children}
    </ProductsListContext.Provider>
}