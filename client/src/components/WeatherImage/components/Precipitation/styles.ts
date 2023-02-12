import styled from "styled-components";

export const PrecipitationContainer = styled.div`
	height: 100%;
	width: 100%;
	border: 1px solid yellow;

	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export const ParticleContainer = styled.div`
	width: 12%;
	aspect-ratio: 1;
	overflow: hidden;

	* {
		max-height: 100%;
		max-width: 100%;

		fill: #ddd;
	}
`;
