import styled from "styled-components";

export const Screen = styled.div`
	width: 100%;
	height: 100dvh;
`;

export const MainWeatherWrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 1.5rem;
	padding-top: 3rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	overflow-y: scroll;
	scrollbar-width: none;
	::-webkit-scrollbar {
		width: 0;
		background-color: transparent;
	}
`;

export const WeatherImageContainer = styled.div`
	width: 75%;
`;
