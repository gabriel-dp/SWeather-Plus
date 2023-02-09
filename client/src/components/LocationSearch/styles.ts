import styled from "styled-components";

export const SearchContainer = styled.div`
	width: min(100%, 30rem);
	background-color: #ffffffaa;
	border: 1px solid #ffffff;
	border-radius: 1rem;
	padding: 1.5rem;

	display: flex;
	flex-direction: column;
`;

interface LocalContainerProps {
	hidden: boolean;
	size: number;
}

export const LocalInfoContainer = styled.div<LocalContainerProps>`
	width: 100%;
	transition: all 0.5s ease-in-out;
	height: ${(props) => (props.hidden ? props.size : "0")}rem;
	margin-bottom: ${(props) => (props.hidden ? "1rem" : "0")};
	overflow: hidden;

	display: flex;
	flex-direction: column;
	align-items: center;

	* {
		transition: opacity 1s ease;
		opacity: ${(props) => (props.hidden ? "1" : "0")};
	}

	.city {
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

	span {
		font-size: 1rem;
	}
`;

export const InputContainer = styled.div`
	width: 100%;
	height: 2.25rem;
	border-radius: 3rem;
	background-color: white;
	overflow: hidden;

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

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SearchInput = styled.input.attrs({
	type: "text",
})`
	width: 100%;
	height: 100%;
	background-color: transparent;
	border: none;
`;

export const LocationButton = styled.button`
	aspect-ratio: 1;
	height: 100%;
	border: none;
	background-color: #666;
	color: #fff;
	border-radius: 3rem;
	cursor: pointer;
	transition: background 0.25s ease;

	position: absolute;
	right: 0;

	:hover {
		background-color: #888;
	}
`;
