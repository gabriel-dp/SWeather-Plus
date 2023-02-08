import styled from "styled-components";

const thumbStyle = `
	-webkit-appearance: none;
	height: 1.25rem;
	width: 1.25rem;
	background: #ffffff;
	cursor: ew-resize;
	border-radius: 25%;
	border: none;
	box-shadow: 0 0 1rem #ffffffaa;
	filter: drop-shadow(0 0 0.1rem #000000aa);
`;

export const CustomSlider = styled.input.attrs({
	type: "range",
})`
	-webkit-appearance: none;
	width: 80%;
	max-width: 13rem;
	height: 0.25rem;
	background-color: #ddd;
	border-radius: 0.35rem;
	margin: 1.5rem 0;
	::-webkit-slider-thumb {
		${thumbStyle}
	}
	::-moz-range-thumb {
		${thumbStyle}
	}
	::-ms-thumb {
		${thumbStyle}
	}
`;
