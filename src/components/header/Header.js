import {HeaderContainer, Image, Title} from './headerStyle';
import headerImage from '../../assets/header-x1.png';

const Header = () =>
{
	return (
		<HeaderContainer>
			<Image src={headerImage}
				alt="Electronics"
			/>
			<Title>Electronics Store</Title>
		</HeaderContainer>
	);
};

export default Header;

