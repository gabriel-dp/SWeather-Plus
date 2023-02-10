import styled from "styled-components";

interface TextProps {
	size: number;
}

export const MainContainer = styled.div`
	width: min(100%, 15rem);
	padding: 0.5rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
`;

export const DataText = styled.span<TextProps>`
	color: #fff;
	font-size: ${(props) => props.size}rem;
	font-weight: lighter;
	white-space: nowrap;

	.icon {
		transform: translateY(${(props) => props.size / 7}rem);
		margin-right: ${(props) => props.size / 5}rem;
	}
`;

export const DataGroup = styled.div`
	transition: all 1s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	column-gap: 1rem;
`;
