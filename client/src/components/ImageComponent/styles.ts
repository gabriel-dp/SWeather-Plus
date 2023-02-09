import styled from "styled-components";

interface ComponentProps {
	src: string;
	alt: string;
	onLoad: () => void;
	isLoading: boolean;
	duration?: number;
}

export const StyledImage = styled.img.attrs<ComponentProps>((props) => ({
	src: props.src,
	alt: props.alt,
	onload: props.onLoad,
}))<ComponentProps>`
	opacity: ${(props) => (props.isLoading ? "0.01" : "1")};
	transition: opacity ${(props) => props.duration ?? "1000"}ms ease;
`;
