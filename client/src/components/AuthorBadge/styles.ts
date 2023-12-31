import styled from "styled-components";

export const BadgeContainer = styled.label`
	height: 2rem;
	min-height: 2rem;
	font-size: 0.9rem;
	border-radius: 0.5rem;
	overflow: hidden;
	background-color: ${(props) => props.theme.ui.searchContainer}AA;
	border: 1px solid ${(props) => props.theme.ui.searchContainer};

	a {
		padding: 1rem;
		height: 100%;
		width: 100%;
		background-color: transparent;
		border: none;
		color: ${(props) => props.theme.ui.cityText};
		text-decoration: none;
		cursor: pointer;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.author {
		font-weight: bold;
		text-decoration: underline;
	}
`;
