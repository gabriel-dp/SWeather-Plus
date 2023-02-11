import styled from "styled-components";

interface TimeProps {
	size: number;
}

export const TimeText = styled.span<TimeProps>`
	color: ${(props) => props.theme.ui.textLight};
	font-size: ${(props) => props.size}rem;
	font-weight: lighter;
	white-space: nowrap;
	user-select: none;
`;
