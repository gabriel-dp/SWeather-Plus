import styled from "styled-components";

export const SearchContainer = styled.div`
	width: min(100%, 30rem);
	background-color: #ffffffaa;
	border: 1px solid #ffffff;
	border-radius: 1rem;
	padding: 1.5rem;

	display: flex;
	flex-direction: column;
	gap: 1.25rem;
`;

export const LocalInfoContainer = styled.div`
	width: 100%;
	color: #444;

	p {
		font-size: 1.5rem;
		font-weight: bold;
	}

	span {
		font-size: 1rem;
	}

	display: flex;
	flex-direction: column;
	align-items: center;
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
		width: 100%;
		height: 100%;
	}
`;

export const SearchIconContainer = styled.div`
	height: 100%;
	aspect-ratio: 1;
	font-size: 0.85rem;
	color: #333;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SearchInput = styled.input.attrs({
	type: "text",
})`
	flex-grow: 1;
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

	position: absolute;
	right: 0;
`;
