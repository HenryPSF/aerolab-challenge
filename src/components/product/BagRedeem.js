import {Bag, BagRedeemContainer} from './bagRedeemStyle';
import bagBlue from '../../assets/icons/buy-blue.svg';
import bagWhite from '../../assets/icons/buy-white.svg';

const BagRedeem = props =>
{
	const [overlay] = props;

	const bagImage = overlay ? bagWhite : bagBlue;

	return (
		<BagRedeemContainer>
			<Bag
				src={bagImage}
				alt="Bag redeem"
			/>
		</BagRedeemContainer>
	)
}

export default BagRedeem;
