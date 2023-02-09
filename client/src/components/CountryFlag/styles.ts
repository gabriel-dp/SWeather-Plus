import styled from "styled-components";

interface ContainerProps {
	size: number;
}

export const FlagContainer = styled.div<ContainerProps>`
	height: ${(props) => props.size}rem;

	img {
		height: 100%;
	}
`;
