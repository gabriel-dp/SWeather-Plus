import styled, { keyframes } from "styled-components";

export const PrecipitationContainer = styled.div`
	height: 100%;
	width: 100%;
	position: relative;

	display: flex;
	flex-direction: row;
	justify-content: center;
`;

interface ParticleProps {
	index: number;
	particleWidth: number;
	particleFallDuration: number;
	particleRandomDelay: number;
	particleDisplacement: number;
}

const particleAnimation = (translationX: number) => keyframes`
	0% {
		bottom: 100%
	}
	100% {
		bottom: -100%;
		transform: translateX(-${translationX}%) rotate(${translationX * 0.1}deg);
	}
`;

export const ParticleContainer = styled.div<ParticleProps>`
	width: 15%;
	aspect-ratio: 1;
	position: absolute;
	left: ${(props) => props.particleWidth * props.index + props.particleWidth / 2}%;
	bottom: 100%;

	animation: ${(props) => particleAnimation(props.particleDisplacement)} ${(props) => props.particleFallDuration}s
		ease-in infinite;
	animation-delay: ${(props) =>
		props.index % 2 === 0 ? props.particleFallDuration / 2 + props.particleRandomDelay : 0}s;

	* {
		max-height: 100%;
		max-width: 100%;
		object-fit: contain;

		fill: #ddd;
	}
`;
