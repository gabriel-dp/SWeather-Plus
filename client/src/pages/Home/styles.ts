import styled from "styled-components";

export const Screen = styled.div`
	width: 100%;
	height: 100dvh;
`;

export const MainWeatherWrapper = styled.div`
	width: 100%;
	flex-grow: 1;
	padding: 1.5rem;
	padding-top: 3rem;
	overflow-y: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

export const WeatherImageContainer = styled.div`
	width: 75%;
`;
