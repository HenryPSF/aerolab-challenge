import { useContext, useEffect, useState } from 'react';

import { FilterContext } from '../../context/FilterContext';

import Paginator from './../pagination';
import Filter from '../filter';
import Product from './Product';


import { ProductListContainer, FilterContainer, Container } from './productListStyle';
import { PaginationBottomContainer, PaginationText, Line } from '../pagination/paginationStyle';

const ProductsList = ({ isRedeemedProductList, products }) =>
{
    const [filter] = useContext(FilterContext);

    const [productsToRender, setProductsToRender] = useState(products);
    const [currentPage, setCurrentPage] = useState(1);

    const [productsToPaginate, setProductsToPaginate] = useState([]);

    const productsPerPage = 16;
    const pagesToRender = Math.ceil(products.length / productsPerPage);
    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = (lastProductIndex - productsPerPage);

    const sortByPrice = (a, b) =>
    {
        if (filter.price === "low") {
            return a.cost - b.cost;
        } else if (filter.price === "high") {
            return b.cost - a.cost;
        }
        else if (filter.price === "all" && isRedeemedProductList) {
            return Date.parse(b.createDate) - Date.parse(a.createDate);
        }
        else {
            return 0;
        }
    }

    const handleFilters = () =>
    {
        const productsToOrder = [...products];
        const orderedProducts = productsToOrder.sort(sortByPrice);
        setProductsToPaginate(orderedProducts);
    }

    useEffect(() =>
    {
        setCurrentPage(1);
        // eslint-disable-next-line
    }, [isRedeemedProductList]);

    useEffect(() =>
    {
        handleFilters();
        // eslint-disable-next-line
    }, [filter, products]);

    useEffect(() =>
    {
        setProductsToRender(productsToPaginate.slice(firstProductIndex, lastProductIndex))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productsToPaginate, currentPage]);

    return (
        <>
            <Container>
                <FilterContainer>
                    <Filter filter={filter} />
                </FilterContainer>
                <Paginator
                    currentPage={currentPage}
                    pagesToRender={pagesToRender}
                    setCurrentPage={setCurrentPage}
                    isPaginationBottom={true} />
            </Container>
            <ProductListContainer>
                {

                    productsToRender.map(product =>
                        <Product
                            key={`${product._id}${product.createDate ? product.createDate : ''}`}
                            {...product}
                            isRedeemedProductList={isRedeemedProductList}
                        />)
                }
            </ProductListContainer>
            <Line />
            <PaginationBottomContainer>
                <PaginationText>
                    Page {currentPage} of {pagesToRender}
                </PaginationText>
                <Paginator
                    currentPage={currentPage}
                    pagesToRender={pagesToRender}
                    setCurrentPage={setCurrentPage}
                    isPaginationBottom={true} />
            </PaginationBottomContainer>
            <Line />
        </>
    )
};

export default ProductsList;
