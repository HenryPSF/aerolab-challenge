import style from 'styled-components';

export const Container = style.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${props => props.theme.mediaQueries.above600} {
		flex-direction: row;
		justify-content: center;
	}


	@media ${props => props.theme.mediaQueries.above768}{
		justify-content: space-between;
		margin: 0 4% 0 4%
	})
`;

export const ProductListContainer = style.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${props => props.theme.mediaQueries.above600}{
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		max-width: 100%;
	})`;

export const FilterContainer = style.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${props => props.theme.mediaQueries.above600} {
		flex-direction: row;
		justify-content: center;
	}
`;

