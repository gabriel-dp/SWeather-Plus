import styled from "styled-components";

export const Screen = styled.div`
	width: 100%;
	position: absolute;
	top: 0;
	bottom: 0;
`;

export const MainWeatherWrapper = styled.div`
	width: 100%;
	padding: 1rem;
	overflow-y: scroll;

	display: flex;
	flex-direction: column;
	align-items: center;

	scrollbar-width: none;
	::-webkit-scrollbar {
		width: 0;
		background-color: transparent;
	}
`;

export const WeatherImageContainer = styled.div`
	width: 80%;
`;
