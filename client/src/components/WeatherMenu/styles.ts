import styled from "styled-components";

export const SearchContainer = styled.div`
	width: min(100%, 30rem);
	background-color: ${(props) => props.theme.ui.searchContainer}aa;
	border: 1px solid ${(props) => props.theme.ui.searchContainer};
	border-radius: 1rem;
	padding: 1rem;

	display: flex;
	flex-direction: column;
`;

interface HiddableContainerProps {
	hidden: boolean;
	size: number;
}

export const LocalInfoContainer = styled.div<HiddableContainerProps>`
	width: 100%;
	height: ${(props) => (props.hidden ? "0" : props.size + 0.25)}rem;
	margin-bottom: ${(props) => (props.hidden ? "0" : "0.75rem")};
	overflow: hidden;
	transition: all 0.5s ease;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	.city {
		transition: opacity 1.5s ease;
		opacity: ${(props) => (props.hidden ? "0" : "1")};
		width: 100%;
		text-align: center;

		p {
			color: ${(props) => props.theme.ui.cityText};
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
	background-color: ${(props) => props.theme.ui.inputContainer};
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
	color: ${(props) => props.theme.ui.button};
	pointer-events: none;

	position: absolute;
	left: 0;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SearchInput = styled.input.attrs({
	type: "text",
	id: "search",
	name: "city",
	autoComplete: "none",
})`
	width: 100%;
	height: 100%;
	padding-left: ${INPUT_HEIGHT}rem;
	padding-right: ${INPUT_HEIGHT + 0.5}rem;
	background-color: transparent;
	border: none;
	text-overflow: ellipsis;
	color: ${(props) => props.theme.ui.textDark};
	z-index: 2;
`;

export const LocationButton = styled.button`
	aspect-ratio: 1;
	height: 100%;
	border: none;
	background-color: ${(props) => props.theme.ui.button};
	color: ${(props) => props.theme.ui.textLight};
	border: 2px solid ${(props) => props.theme.ui.inputContainer};
	border-radius: 3rem;
	cursor: pointer;
	transition: background 0.25s ease;

	position: absolute;
	right: 0;

	:hover {
		background-color: ${(props) => props.theme.ui.buttonHover};
	}
`;

export const OptionsContainer = styled.div<HiddableContainerProps>`
	width: 100%;
	overflow: hidden;
	height: ${(props) => (props.hidden ? 0 : props.size)}rem;
	margin-top: ${(props) => (props.hidden ? "0" : "0.75rem")};
	opacity: ${(props) => (props.hidden ? 0 : 1)};
	color: ${(props) => props.theme.ui.cityText};
	transition: all 0.5s ease;

	display: flex;
	justify-content: center;
	align-items: center;

	.units {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		white-space: nowrap;

		label {
			margin-left: 0.5rem;
		}

		input {
			transform: translateY(0.1rem);
		}
	}
`;
