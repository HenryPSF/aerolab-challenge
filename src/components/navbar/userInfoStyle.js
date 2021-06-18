import style from 'styled-components';


export const UserInfoContainer = style.div`
	width: 100%;
	display: flex;
	align-items: center;

	p {
		color: ${props => props.theme.fonts.primaryColor};
	}

	@media ${props => props.theme.mediaQueries.above600}{
		width: fit-content;
	}
`;

export const Coin = style.img`
	padding: 0.18rem;
	width: 1.5rem;
`;

export const Coins = style.div`
	margin: 0.5rem;
	padding: 0.3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 1.2rem;
	background-color: ${props => props.theme.colors.buttonBackground};

	p {
		margin: 0.1rem;
	}

	img {
		width: 1.6rem;
		margin: 0.1rem;
	}
`;