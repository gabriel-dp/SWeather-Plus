import { useState, useEffect } from "react";

import { StyledImage } from "./styles";

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

	function handleLoadImage() {
		setIsLoading(false);
	}

	return (
		<StyledImage
			src={props.src}
			alt={props.alt}
			onLoad={handleLoadImage}
			isLoading={isLoading}
			duration={props.duration}
		/>
	);
}
