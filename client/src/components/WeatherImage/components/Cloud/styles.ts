import styled from "styled-components";

interface CloudProps {
	size: number;
}

export const CloudContainer = styled.div<CloudProps>`
	width: ${(props) => props.size}%;
	aspect-ratio: 1;
	transition: all 0.5s ease-in-out;

	z-index: 2;
	position: absolute;
	bottom: 15%;
	right: ${(props) => 15 * (100 / props.size) - 15}%;
`;
