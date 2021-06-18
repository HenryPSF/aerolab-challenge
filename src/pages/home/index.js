import { useEffect, useState, useContext } from 'react';

import Spinner from '../../components/spinner/Spinner';
import ProductsList from '../../components/product/ProductsList';
import { ProductsListContext } from '../../context/ProductsListContext';

function Home()
{
    const [loading, setLoading] = useState(true);

    // eslint-disable-next-line no-unused-vars
    const [products, setProducts, isRedeemedProductList, setIsRedeemedProductList] = useContext(ProductsListContext);

    console.log(isRedeemedProductList)

    useEffect(() =>
    {
        setIsRedeemedProductList(isRedeemedProductList);
        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <> {
            loading ? <Spinner /> :
                <>
                    <ProductsList
                        isRedeemedProductList={isRedeemedProductList}
                        products={products}
                    />
                </>
        }
        </>
    )
};

export default Home;

