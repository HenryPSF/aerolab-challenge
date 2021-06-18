import style from 'styled-components';

export const Container = style.div`
	display: flex;
	align-items: center;
	color: rgb(97, 97, 97);
	font-size: 0.7em;

	@media (min-width: 350px) {
		font-size: 1em;
	}

`;

export const Text = style.p`
	display: none;

	@media ${props => props.theme.mediaQueries.above768} {
		display: block;
	}
`;

export const ButtonsContainer = style.div`
	margin: 0.5rem;
	display: flex;
`;

export const Label = style.label`
	margin: 2px;
	border-radius: 2rem;
	padding: 0.4rem;
	cursor: pointer;
	background-color: ${props => props.theme.colors.buttonBackground};
	text-align: center;

	&.active {
		background: linear-gradient(
			180deg,
			rgba(10, 212, 250, 0.86) 0%,
			rgba(37, 187, 241, 0.86) 100%
		);
		color: #fff;
		pointer-events: none;
	}

	&:hover {
		background-color: #c7c5c5;
		color: #fff;
	}

	.for-check:checked ~ label {
		background-color: pink;
	}

	input[type="radio"] {
		display: none;
	}
`;
