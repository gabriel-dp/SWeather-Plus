import { useState, useEffect } from "react";
import styled from "styled-components";

interface ComponentProps {
	isLoading: boolean;
	duration?: number;
}

const StyledImage = styled.img<ComponentProps>`
	opacity: ${(props) => (props.isLoading ? "0.01" : "0")};
	transition: opacity ${(props) => props.duration ?? "1000"}ms ease;
`;

interface ImageProps {
	src: string;
	alt: string;
	duration?: number;
}

export default function ImageComponent(props: ImageProps) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
	}, [props.src]);

	return <StyledImage src={props.src} alt={props.alt} isLoading={isLoading} duration={props.duration} />;
}
