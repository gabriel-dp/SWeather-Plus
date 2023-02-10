import styled from "styled-components";

export const SunMoonContainer = styled.div`
	width: 100%;
	aspect-ratio: 1;
	border-radius: 50%;
	overflow: hidden;

	position: relative;
`;

interface MoonProps {
	isDay: boolean;
}

export const Sun = styled.div<MoonProps>`
	width: 100%;
	height: 100%;
	background: linear-gradient(#ff0, #ff8800);

	position: absolute;
	transition: opacity 0.5s ease-in-out;
	opacity: ${(props) => (props.isDay ? "1" : "0")};
	z-index: ${(props) => (props.isDay ? "1" : "0")};
`;

export const Moon = styled.div<MoonProps>`
	width: 100%;
	height: 100%;
	background: linear-gradient(#ccc, #aaa);

	position: absolute;
	transition: opacity 0.5s ease-in-out;
	opacity: ${(props) => (props.isDay ? "0" : "1")};
	z-index: ${(props) => (props.isDay ? "0" : "1")};
`;

interface MoonEffectProps {
	moonPhasePercentage: number;
}

export const MoonDark = styled.div<MoonEffectProps>`
	width: ${(props) => Math.max(Math.abs(4 * (props.moonPhasePercentage % 50) - 100), 10)}%;
	height: 100%;
	border-radius: 100%;
	background: ${(props) =>
		props.moonPhasePercentage <= 25 || props.moonPhasePercentage > 75 ? "#333" : "linear-gradient(#ccc, #aaa)"};
	transition: width 1s ease-in-out;

	position: absolute;
	left: 50%;
	transform: translateX(-50%);
`;

export const MoonDarkSide = styled.div<MoonEffectProps>`
	width: 50%;
	height: 100%;
	background-color: #333;

	position: absolute;
	${(props) => (props.moonPhasePercentage < 50 ? "left: 0" : "right: 0")};
`;
