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

	form {
		width: 100%;
		height: 100%;
	}
`;

export const SearchInput = styled.input.attrs({
	type: "text",
})`
	width: 100%;
	height: 100%;
	background-color: transparent;
	border: none;
	padding: 0 1.5rem;
`;
