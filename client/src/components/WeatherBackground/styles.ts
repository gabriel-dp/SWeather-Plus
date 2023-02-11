import styled from "styled-components";

interface BackgroundProps {
	brightness: number;
	grayscale: number;
}

export const Background = styled.div<BackgroundProps>`
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	* {
		z-index: 1;
	}

	::before {
		content: "";
		width: 100%;
		position: absolute;
		left: 0;
		z-index: 1;

		height: 200%;
		top: ${(props) => (props.brightness === 100 ? "0" : "-100%")};
		background: linear-gradient(
			${(props) => props.theme.sky.color1},
			${(props) => props.theme.sky.color2},
			${(props) => props.theme.sky.color3}
		);

		transition: all 0.5s ease-in-out;
		filter: grayscale(${(props) => props.grayscale}%) brightness(${(props) => props.brightness}%);
	}
`;
