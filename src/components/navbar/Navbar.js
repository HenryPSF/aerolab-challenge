import UserInfo from './UserInfo';
import Menu from './Menu';

import { NavbarContainer, FlexContainer } from './navbarStyle';
import logo from '../../assets/aerolab-logo.svg';

const Navbar = () =>
{
	return (
		<NavbarContainer>
			<img
				src={logo}
				alt="Aerolab's logo"
			/>
			<FlexContainer>
				<UserInfo />
				<Menu/>
			</FlexContainer>
		</NavbarContainer>
	);
};

export default Navbar;
