import { useContext, useEffect, useState } from 'react';

import { postRedeem } from '../../services/api';
import { UserContext } from '../../context/UserContext'

import RedeemInfo from '../redeem/RedeemInfo';
import RedeemProduct from '../redeem/RedeemProduct';

import { ProductContainer, ProductCategory, ProductName, Line, ProductImg, ProductInfo } from './productStyle';

const Product = (props) =>
{
    const [userData, setUserData] = useContext(UserContext)

    const [overlay, setOverlay] = useState(false);
    const [enableToRedeem, setEnableToRedeem] = useState();

    const { img: productImage, category: productCategory,
            name: productName, cost: productCost, _id: productId } = props;
    
    const {isRedeemedProductList: isRedeemedProduct} = props;

    useEffect(() =>
    {
        setEnableToRedeem((productCost >= userData.points));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData])
    return (
        <ProductContainer
            onMouseLeave={() => setOverlay(false)}
            onMouseOver={() => setOverlay(true)}>
            {overlay &&
                <RedeemProduct
                    {...props}
                    setOverlay={setOverlay}
                    postRedeem={() => postRedeem(productId)}
                    setUserData={setUserData}
                    userData={userData} 
                    enableToRedeem={!isRedeemedProduct}/>
            }
            {!isRedeemedProduct && <RedeemInfo
                overlay={overlay}
                enableToRedeem={enableToRedeem}
                userPoints={userData.points}
                productCost={productCost}
                setEnableToRedeem={setEnableToRedeem} />}
            <ProductImg src={productImage.url} alt={productName} />
            <Line />
            <ProductInfo>
                <ProductCategory
                    overlay={overlay}>
                    {productCategory}
                </ProductCategory>
                <ProductName
                    overlay={overlay}>
                    {productName}
                </ProductName>
            </ProductInfo>
        </ProductContainer>
    )
}

export default Product;