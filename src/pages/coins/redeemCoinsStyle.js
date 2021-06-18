import style from 'styled-components';

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

export const PagesContainer = style.section`
	margin: 3rem;
	text-align: center;
	color: ${props => props.theme.fonts.primaryColor};
`;

export const Title = style.h2`
	color: ${props => props.theme.colors.primary};
`;
;

export const CoinsContainer = style.div`
	margin: 0 auto;
	width: 80%;

	@media ${props => props.theme.mediaQueries.above600}{
		display: flex;
		justify-content: center;
	}`;

export const Coin = style(Coins)`
	margin: 1rem;
	cursor: pointer;

	&:hover {
		background-color: ${props => props.theme.colors.background};
	}

	@media ${props => props.theme.mediaQueries.above600} {
		width: 100%;
	}

	@media ${props => props.theme.mediaQueries.above1200} {
		width: 50%;
	}
`;