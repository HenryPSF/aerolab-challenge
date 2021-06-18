import style from 'styled-components';

export const HeaderContainer = style.div`
	position: relative;
`;

export const Image = style.img`
	max-width: 100%;
`;

export const Title = style.h1`
	width: 80%;
	color: ${props => props.theme.colors.background};
	position: relative;
	font-size: 1.3em;
	top: -3rem;
	left: 1.5rem;

	@media ${props => props.theme.mediaQueries.above480} {
		font-size: 1.8em;
		top: -4rem;
	}

	@media ${props => props.theme.mediaQueries.above600} {
		font-size: 2em;
		top: -5rem;
	}

	@media ${props => props.theme.mediaQueries.above768} {
		font-size: 2.3em;
		top: -6rem;
	}
	@media ${props => props.theme.mediaQueries.above900} {
		font-size: 2.5em;
		top: -7rem;
	}
	@media ${props => props.theme.mediaQueries.above1024} {
		font-size: 3em;
		top: -8rem;
	}
	@media ${props => props.theme.mediaQueries.above1200} {
		font-size: 4em;
		top: -10rem;
	}
`;

