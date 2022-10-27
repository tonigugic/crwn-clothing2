import styled from "styled-components";

export const BaseButton = styled.button`
	min-width: 165px;
	width: auto;
	letter-spacing: 0.5px;
	line-height: 1.5;
	padding: 14px 16px;
	font-size: 15px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-family: "Open Sans Condensed";
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	border: 1px solid transparent;

	&:hover {
		background-color: white;
		color: black;
		border-color: black;
	}
`;

export const GoogleSignInButton = styled(BaseButton)`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
		border-color: transparent;
	}
`;
export const InvertedButton = styled(BaseButton)`
	background-color: white;
	color: black;
	border-color: black;

	&:hover {
		background-color: black;
		color: white;
		border-color: transparent;
	}
`;
