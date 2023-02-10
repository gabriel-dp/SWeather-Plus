import styled from "styled-components";

interface TimeProps {
	size: number;
}

export const TimeText = styled.span<TimeProps>`
	color: #fff;
	font-size: ${(props) => props.size}rem;
	font-weight: lighter;
`;
