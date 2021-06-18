import { useContext } from 'react';

import { postRedeemCoins } from './../../services/api';

import { UserContext } from '../../context/UserContext';

import {PagesContainer, CoinsContainer, Coin, Title} from './redeemCoinsStyle';
import coin from '../../assets/icons/coin.svg';

const RedeemCoins = () =>
{
    const [userInfo, setUserInfo] = useContext(UserContext);

    const handleGetCoins = async (amount) =>
    {
        await postRedeemCoins(amount);
        setUserInfo({ ...userInfo, points: userInfo.points + amount });
    }

    return (
        <PagesContainer>
            <Title>Get more coins</Title>
            <p>Choose the coins you want to add</p>

            <CoinsContainer>
                <Coin
                    onClick={() =>
                    {
                        handleGetCoins(1000);
                    }}
                >
                    <p>1000</p>
                    <img src={coin} alt="Illustration's coin" />
                </Coin>
                <Coin
                    onClick={() =>
                    {
                        handleGetCoins(5000);
                    }}
                >
                    <p>5000</p>
                    <img src={coin} alt="Illustration's coin" />
                </Coin>
                <Coin
                    onClick={() =>
                    {
                        handleGetCoins(7500);
                    }}
                >
                    <p>7500</p>
                    <img src={coin} alt="Illustration's coin" />
                </Coin>
            </CoinsContainer>
        </PagesContainer>
    );
};

export default RedeemCoins;
