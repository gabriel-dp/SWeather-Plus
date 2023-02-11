import styled from "styled-components";

export const WeatherImageContainer = styled.div`
	width: 100%;
	aspect-ratio: 1;
	position: relative;
	// border: 1px solid red;
	overflow: hidden;

	* {
		transition: all 0.4s ease-in-out;
	}
`;

const inverseDistance = (value: number, coeff: number) => (value > 0 ? (100 / value) * coeff - coeff : 0);

interface ElementProps {
	size: number;
}

const MARGIN_BOTTOM_CLOUD = 15;

export const CloudContainer = styled.div<ElementProps>`
	width: ${(props) => props.size}%;
	aspect-ratio: 1;

	position: absolute;
	bottom: ${MARGIN_BOTTOM_CLOUD}%;
	// Cloud comes from mid
	right: ${(props) => (props.size > 0 ? inverseDistance(props.size, 15) : 50)}%;
`;

const MARGIN_BOTTOM_SUNMOON = 25;

export const SunMoonContainer = styled.div<ElementProps>`
	width: ${(props) => Math.max(0, props.size - MARGIN_BOTTOM_SUNMOON)}%;
	aspect-ratio: 1;

	position: absolute;
	// Sun/Moon disappears in back of Cloud
	left: ${(props) => (props.size > 0 ? (props.size * MARGIN_BOTTOM_SUNMOON) / 2 / 100 : 50)}%;
	bottom: ${(props) =>
		props.size < 100 ? inverseDistance(props.size, 15) + MARGIN_BOTTOM_SUNMOON : MARGIN_BOTTOM_SUNMOON / 2}%;
`;
