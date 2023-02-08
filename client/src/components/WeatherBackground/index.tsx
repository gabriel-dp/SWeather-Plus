import styled from "styled-components";

const Background = styled.div`
	width: 100%;
	height: 100%;
	background-color: lightblue;
`;

interface BackgroundProps {
	children?: React.ReactNode;
}

export default function WeatherBackground(props: BackgroundProps) {
	return <Background>{props.children}</Background>;
}
