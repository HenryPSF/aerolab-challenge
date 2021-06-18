import { useContext } from 'react';

import { UserContext } from '../../context/UserContext';

import { UserInfoContainer, Coins, Coin } from './userInfoStyle'
import coinImage from '../../assets/icons/coin.svg';


const UserInfo = () =>
{
	const [userInfo] = useContext(UserContext);

	return (
		<UserInfoContainer>
			<p>{userInfo.name}</p>
			<Coins>
				<p>{userInfo.points}</p>
				<Coin 
				src={coinImage} 
				alt="User's Coins" />
			</Coins>
		</UserInfoContainer>
	);
};

export default UserInfo;
