import styled from "styled-components";

export const SunMoonContainer = styled.div`
	width: 100%;
	aspect-ratio: 1;
	border-radius: 50%;
	overflow: hidden;

	position: relative;
`;

export const Sun = styled.div`
	width: 100%;
	height: 100%;
	background-color: yellow;
`;

export const Moon = styled.div`
	width: 100%;
	height: 100%;
	background-color: #ccc;
`;

interface MoonProps {
	moonPhasePercentage: number;
}

export const MoonDark = styled.div<MoonProps>`
	width: ${(props) => Math.max(Math.abs(4 * (props.moonPhasePercentage % 50) - 100), 10)}%;
	height: 100%;
	border-radius: 100%;
	background-color: ${(props) =>
		props.moonPhasePercentage <= 25 || props.moonPhasePercentage > 75 ? "black" : "#ccc"};
	transition: width 1s ease-in-out;

	position: absolute;
	left: 50%;
	transform: translateX(-50%);
`;

export const MoonDarkSide = styled.div<MoonProps>`
	width: 50%;
	height: 100%;
	background-color: black;

	position: absolute;
	${(props) => (props.moonPhasePercentage < 50 ? "left: 0" : "right: 0")};
`;
