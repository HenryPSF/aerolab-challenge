import { RedeemInfoContainer, RedeemText, RedeemCoin, Bag, Container } from './redeemInfoStyle'
import bagBlue from '../../assets/icons/buy-blue.svg';
import bagWhite from '../../assets/icons/buy-white.svg';
import coin from '../../assets/icons/coin.svg';

const RedeemInfo = props =>
{
    const { productCost, userPoints } = props;
    const { overlay, enableToRedeem } = props;

    const setContent = (userPoints, productCost) =>
    {
        if (enableToRedeem) {
            return (
                <RedeemInfoContainer>
                    <RedeemText>You need {productCost - userPoints}</RedeemText>
                    <RedeemCoin
                        src={coin}
                        alt="coin's icon" />
                </RedeemInfoContainer>
            );
        } else {
            const bag = overlay ? bagWhite : bagBlue;
            return <Bag src={bag} alt="shopping bag's icon" />;
        }
    }

    return <Container>{setContent(userPoints, productCost)}</Container>;
};

export default RedeemInfo;
