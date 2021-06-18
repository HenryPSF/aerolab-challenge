import style from 'styled-components';

export const Button = style.button`
	padding: 0.5rem 2.2rem;
	border: none;
	border-radius: 20px;
	background-color: #f2f1f1;
	color: ${props => props.theme.fonts.primaryColor};
	font-size: 0.9em;
	outline: none;
	cursor: pointer;

	&:hover {
		background-color: #c7c5c5;
		color: #fff;
	}
`;

export const Title = style.h3`
font-size: 150%;
    color: ${props => props.theme.colors.primary}
`;

export const Text = style.p`
	display: none;
    font-size: 110%;
	@media ${props => props.theme.mediaQueries.above768} {
		display: block;
	}
`;