import styled from "styled-components";

export const SearchContainer = styled.div`
	width: min(100%, 30rem);
	background-color: #ffffffaa;
	border: 1px solid #ffffff;
	border-radius: 1rem;
	padding: 1rem;

	display: flex;
	flex-direction: column;
`;

interface LocalContainerProps {
	hidden: boolean;
	size: number;
}

export const LocalInfoContainer = styled.div<LocalContainerProps>`
	width: 100%;
	height: ${(props) => (props.hidden ? props.size + 0.25 : "0")}rem;
	margin-bottom: ${(props) => (props.hidden ? "0.75rem" : "0")};
	overflow: hidden;
	transition: all 0.5s ease;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	.city {
		transition: opacity 1.5s ease;
		opacity: ${(props) => (props.hidden ? "1" : "0")};
		width: 100%;
		text-align: center;

		p {
			color: #444;
			font-size: 1.5rem;
			font-weight: bold;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
`;

const INPUT_HEIGHT = 2.25;

export const InputContainer = styled.div`
	width: 100%;
	height: ${INPUT_HEIGHT}rem;
	border-radius: 3rem;
	background-color: white;
	overflow: hidden;

	filter: drop-shadow(0 0 0.5rem #00000011);

	position: relative;
	display: flex;
	flex-direction: row;

	form {
		flex-grow: 1;
		height: 100%;
	}
`;

export const SearchIconContainer = styled.div`
	height: 100%;
	aspect-ratio: 1;
	font-size: 0.85rem;
	color: #666;
	pointer-events: none;

	position: absolute;
	left: 0;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SearchInput = styled.input.attrs({
	type: "text",
})`
	width: 100%;
	height: 100%;
	padding-left: ${INPUT_HEIGHT}rem;
	padding-right: ${INPUT_HEIGHT + 0.5}rem;
	background-color: transparent;
	border: none;
	text-overflow: ellipsis;
	z-index: 2;
`;

export const LocationButton = styled.button`
	aspect-ratio: 1;
	height: 100%;
	border: none;
	background-color: #666;
	color: #fff;
	border: 2px solid #fff;
	border-radius: 3rem;
	cursor: pointer;
	transition: background 0.25s ease;

	position: absolute;
	right: 0;

	:hover {
		background-color: #888;
	}
`;
