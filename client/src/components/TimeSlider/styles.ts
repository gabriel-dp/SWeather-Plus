import styled, { keyframes } from "styled-components";

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  6.25% {transform: translateX(0.15rem)}
  12.5% { transform: translateX(-0.15rem); }
  18.75% { transform: translateX(0.15rem); }
  25% { transform: translateX(0); }
`;

const thumbStyle = (isActive: boolean) => `
	-webkit-appearance: none;
	height: 1.25rem;
	width: 1.25rem;
	background: #ffffff;
	border-radius: 25%;
	border: none;
	box-shadow: 0 0 1rem #ffffffaa;
	filter: drop-shadow(0 0 0.1rem #000000aa);
	cursor: ${isActive ? "ew-resize" : "default"};
	opacity: ${isActive ? "1" : "0"};
	transition: all 0.25s ease-in-out;
	animation-delay: 2s;
`;

interface SliderProps {
	isActive: boolean;
}

export const CustomSlider = styled.input.attrs({
	type: "range",
})<SliderProps>`
	appearance: none;
	-webkit-appearance: none;
	width: ${(props) => (props.isActive ? "min(100%, 15rem)" : "1.5rem")};
	height: 0.25rem;
	background-color: #ddd;
	border-radius: 0.35rem;
	margin: 1.5rem 0;
	transition: all 0.5s ease-in-out;
	transition-delay: 0.25s;

	::-webkit-slider-thumb {
		${(props) => thumbStyle(props.isActive)}
		animation: ${shakeAnimation} 3s ease-in-out infinite;
	}
	::-moz-range-thumb {
		${(props) => thumbStyle(props.isActive)}
		animation: ${shakeAnimation} 3s ease-in-out infinite;
	}
	::-ms-thumb {
		${(props) => thumbStyle(props.isActive)}
		animation: ${shakeAnimation} 3s ease-in-out infinite;
	}
`;
