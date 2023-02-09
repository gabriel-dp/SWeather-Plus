import styled from "styled-components";

interface ContainerProps {
	size: number;
}

export const FlagContainer = styled.div<ContainerProps>`
	height: ${(props) => props.size}rem;
	overflow: hidden;
	aspect-ratio: 1;

	img {
		height: 100%;
	}
`;
