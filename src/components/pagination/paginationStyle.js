import style from 'styled-components';

export const PaginationContainer = style.div`
	display: flex;
	align-items: center;
	margin: 0.5rem 0 0.5rem 0;
    color: "#616161"
`;

export const PaginationText = style.p`
	display: none;
	margin: 0 4px 0 4px;

	@media ${props => props.theme.mediaQueries.above768} {
		display: block;
	}
`;

export const PaginationBottomContainer = style(PaginationContainer)`
	justify-content: center;

	@media ${props => props.theme.mediaQueries.above768}{
		justify-content: space-between;
		margin: 2% 4% 2% 4%
	})
`;

export const Line = style.hr`
	display: none;

	@media (min-width: 400px) {
		display: block;
		margin: 0.5rem auto;
		width: 95%;
		height: 1px;
		background-color: #ebe3e3;
		border: #ebe3e3;
	}
`;