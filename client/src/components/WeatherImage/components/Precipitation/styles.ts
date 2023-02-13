import styled, { keyframes } from "styled-components";

export const PrecipitationContainer = styled.div`
	height: 100%;
	width: 100%;
	//border: 1px solid yellow;
	position: relative;

	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const particleAnimation = keyframes`
	0% {
		bottom: 100%
	}
	100% {
		bottom: -100%;
	}
`;

interface ParticleProps {
	index: number;
	particleWidth: number;
	particleFallDuration: number;
	particleRandomDelay: number;
}

export const ParticleContainer = styled.div<ParticleProps>`
	height: 1rem;
	width: ${(props) => props.particleWidth}%;
	overflow: hidden;
	position: absolute;
	left: ${(props) => props.particleWidth * props.index}%;
	bottom: 100%;

	animation: ${particleAnimation} ${(props) => props.particleFallDuration}s ease-in infinite;
	animation-delay: ${(props) =>
		props.index % 2 === 0 ? props.particleFallDuration / 2 + props.particleRandomDelay : 0}s;

	* {
		max-height: 100%;
		max-width: 100%;

		fill: #ddd;
	}
`;
