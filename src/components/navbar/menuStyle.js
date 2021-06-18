import style from 'styled-components';
import { Link } from 'react-router-dom';

export const Hamburger = style.div`
	margin: 0.2rem;
	width: 1rem;
	cursor: pointer;

	@media ${props => props.theme.mediaQueries.above600}{
		display: none
	}
`;

export const MenuList = style.ul`
	width: 100%;
	height: ${({ isOpen }) => (isOpen ? '95%' : '0')};
	transition: ${({ isOpen }) => (isOpen ? 'height 0.3s ease-in' : 'none')};
	position: absolute;
	top: 4rem;
	left: 0;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	background-color: ${props => props.theme.colors.primary};

	@media ${props => props.theme.mediaQueries.above600} {
		width: fit-content;
		height: 100%;
		flex-direction: row;
		position: relative;
		top: 0;
		background-color: transparent;
	}
`;

export const MenuLinks = style(Link)`
	padding: 0.5rem;
	border-radius: 30px;
	text-decoration: none;
	color: #fff;
	text-align: center;
	list-style: none;
	transition: all 0.3s ease-in;

	&:hover {
		color: ${props => props.theme.fonts.primaryColor};
	}

	@media ${props => props.theme.mediaQueries.above600} {
		color: ${props => props.theme.colors.primary};

		&:hover {
			background-color: ${props => props.theme.colors.primary};
			color: white;
		}
	}
`;
