import style from 'styled-components';

export const ProductContainer = style.div`
	margin: 0.5rem;
	padding: 0.8rem;
	width: 70%;
	border: 0.5px solid #e4e1e1;
	border-radius: 5px;
	box-shadow: ${props => props.theme.colors.boxShadow};
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	z-index: 5;

	@media ${props => props.theme.mediaQueries.above600} {
		width: 40%;
	}

	@media ${props => props.theme.mediaQueries.above768} {
		width: 20%;
	}
`;

export const ProductInfo = style.div`
	padding-top: 0.5rem;
	align-self: flex-start;
`;

export const ProductCategory = style.p`
	color: ${props => props.theme.fonts.secondaryColor};
	font-size: 0.8em;
`;

export const ProductName = style.p`
	font-size: 0.8em;
`;

export const ProductImg = style.img`
	width: 100%;
`;

export const Line = style.hr`
	margin: 0.5rem;
	width: 100%;
	height: 1px;
	background-color: #ebe3e3;
	border: #ebe3e3;
`;

export const OverLay = style.div`
background-color: ${props => props.theme.colors.primary};
position: absolute;
top: 0;
left: 0;
bottom: 0;
width: 100%;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 100;
background: linear-gradient(
	180deg,
	rgba(10, 212, 250, 0.86) 0%,
	rgba(37, 187, 241, 0.86) 100%
);
`;