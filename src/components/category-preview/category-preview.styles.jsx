import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryTitle = styled(Link)`
	font-size: 28px;
	margin-bottom: 25px;
	cursor: pointer;
`;

export const CategoryPreviewList = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
`;

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;
