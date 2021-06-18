import { useContext } from 'react';

import { HeaderContext } from "../../context/HeaderContext";

import {HeaderContainer, Image, Title} from './headerStyle';
import headerImage from '../../assets/header-x1.png';


const Header = () =>
{
	const [headerTitle] = useContext(HeaderContext);

	return (
		<HeaderContainer>
			<Image src={headerImage}
				alt="Electronics"
			/>
			<Title>{headerTitle.title}</Title>
		</HeaderContainer>
	);
};

export default Header;

