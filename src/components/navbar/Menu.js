import { useContext, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

import { ProductsListContext } from '../../context/ProductsListContext';

import {MenuLinks, MenuList, Hamburger} from './menuStyle';

function Menu()
{
    const [isOpen, setIsOpen] = useState(false);
    
    // eslint-disable-next-line no-unused-vars
    const [products,setProducts,isRedeemedProductList,setIsRedeemedProductList] = useContext(ProductsListContext);


    const handleHomeNavigate = () =>
    {
        setIsRedeemedProductList(false)
        return setIsOpen(false);
    }

    const handleRedeemNavigate = () =>
    {
        setIsRedeemedProductList(true)
        return setIsOpen(false);
    }

    const handleGetCoinsNavigate = () => {}

    return (
        <nav>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <FontAwesomeIcon
                        icon={faTimes}
                        size="lg"
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faBars}
                        size="lg"
                    />
                )}
            </Hamburger>
            <MenuList isOpen={isOpen}>
                <MenuLinks onClick={handleHomeNavigate} to='/'>
                    <li>Home</li>
                </MenuLinks>
                <MenuLinks onClick={handleRedeemNavigate} to="/">
                    <li>Redeems</li>
                </MenuLinks>
                <MenuLinks onClick={handleGetCoinsNavigate} to="/redeemcoins">
                    <li>Coins</li>
                </MenuLinks>
            </MenuList>
        </nav>
    );
}

export default Menu;
