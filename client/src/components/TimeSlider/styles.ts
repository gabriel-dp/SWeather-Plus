import styled from "styled-components";

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
	opacity: ${isActive ? "1" : "0.01"};
	transition: all 0.25s ease-in-out;

`;

interface SliderProps {
	isActive: boolean;
}

export const CustomSlider = styled.input.attrs({
	type: "range",
})<SliderProps>`
	-webkit-appearance: none;
	width: ${(props) => (props.isActive ? "min(100%, 15rem)" : "0")};
	height: 0.25rem;
	background-color: #ddd;
	border-radius: 0.35rem;
	margin: 1.5rem 0;
	transition: all 0.5s ease-in-out;
	transition-delay: 0.25s;

	::-webkit-slider-thumb {
		${(props) => thumbStyle(props.isActive)}
	}
	::-moz-range-thumb {
		${(props) => thumbStyle(props.isActive)}
	}
	::-ms-thumb {
		${(props) => thumbStyle(props.isActive)}
	}
`;
