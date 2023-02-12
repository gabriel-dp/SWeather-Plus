import styled from "styled-components";

export const SunMoonContainer = styled.div`
	width: 100%;
	aspect-ratio: 1;
	border-radius: 50%;
	overflow: hidden;
	transition: all 0.5s ease-in-out;
	position: relative;
	background: linear-gradient(${(props) => props.theme.moon.color1}, ${(props) => props.theme.moon.color2});
`;

interface SunMoonProps {
	isDay: boolean;
}

export const Sun = styled.div<SunMoonProps>`
	width: 100%;
	height: 100%;
	background: linear-gradient(135deg, ${(props) => props.theme.sun.color1}, ${(props) => props.theme.sun.color2});

	position: absolute;
	transition: opacity 0.5s ease-in-out;
	opacity: ${(props) => (props.isDay ? "1" : "0")};
	z-index: ${(props) => (props.isDay ? "1" : "0")};
`;

export const Moon = styled.div<SunMoonProps>`
	width: 100%;
	height: 100%;
	background: linear-gradient(${(props) => props.theme.moon.color1}, ${(props) => props.theme.moon.color2});

	position: absolute;
	transition: opacity 0.5s ease-in-out;
	opacity: ${(props) => (props.isDay ? "0" : "1")};
	z-index: ${(props) => (props.isDay ? "0" : "1")};
`;

interface MoonEffectProps {
	moonPhasePercentage: number;
}

const BLUR_MOON = 3;

const moonDarkWidth = (percentage: number) => Math.max(Math.abs(4 * (percentage % 50) - 100), 10);

export const MoonDark = styled.div<MoonEffectProps>`
	width: calc(${(props) => moonDarkWidth(props.moonPhasePercentage)}% + ${BLUR_MOON}px);
	border-radius: 100%;
	height: calc(100% + ${2 * BLUR_MOON}px);
	filter: blur(${BLUR_MOON}px);
	background: ${(props) =>
		props.moonPhasePercentage <= 25 || props.moonPhasePercentage > 75
			? `${props.theme.moon.dark}`
			: `linear-gradient(${props.theme.moon.color1}, ${props.theme.moon.color2})`};
	transition: width 1s ease-in-out;

	position: absolute;
	top: ${-BLUR_MOON}px;
	left: calc(50% - ${BLUR_MOON}px);
	transform: translateX(-50%);
`;

export const MoonDarkSide = styled.div<MoonEffectProps>`
	width: calc(50% + ${2 * BLUR_MOON}px);
	height: calc(100% + ${2 * BLUR_MOON}px);
	background-color: ${(props) => props.theme.moon.dark};
	filter: blur(${BLUR_MOON}px);

	position: absolute;
	top: ${-BLUR_MOON}px;
	${(props) => `${props.moonPhasePercentage < 50 ? "left:" : "right:"}${-BLUR_MOON}px`};
`;
