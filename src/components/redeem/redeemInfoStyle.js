import style from 'styled-components';

export const Container = style.div`
	align-self: flex-end;
	position: absolute;
	top: 0.5rem;
	right: 0.3rem;
	z-index: 300;
`;

export const RedeemInfoContainer = style.div`
	padding: 0.6rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-radius: 50px;
	background-color: ${props => props.theme.fonts.primaryColor};
	opacity: 0.8;
`;

export const RedeemText = style.p`
	font-size: 0.8em;
	color: #fff;
`;

export const RedeemCoin = style.img`
	padding: 0.18rem;
	width: 1.5rem;
`;

export const Bag = style.img`
	position: relative;
	right: -0.8rem;
	width: 65%;
`;
