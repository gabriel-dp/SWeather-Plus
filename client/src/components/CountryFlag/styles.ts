import styled from "styled-components";

interface ContainerProps {
	size: number;
}

export const FlagContainer = styled.div<ContainerProps>`
	height: ${(props) => props.size}rem;
	width: ${(props) => props.size}rem;
	overflow: hidden;
	user-select: none;
	pointer-events: none;

	img {
		height: ${(props) => props.size}rem;
		width: ${(props) => props.size}rem;
	}
`;
