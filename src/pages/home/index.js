import { useEffect, useContext } from 'react';

import ProductsList from '../../components/product/ProductsList';
import { ProductsListContext } from '../../context/ProductsListContext';

function Home()
{
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts, isRedeemedProductList, setIsRedeemedProductList, loading, setLoading] = useContext(ProductsListContext);

    useEffect(() =>
    {
        setIsRedeemedProductList(isRedeemedProductList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ProductsList
            isRedeemedProductList={isRedeemedProductList}
            products={products}
            loading={loading}
            setLoading={setLoading} />
    )
};

export default Home;

