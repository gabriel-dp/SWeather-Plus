import ImageComponent from "@/components/ImageComponent";

import { FlagContainer } from "./styles";

interface FlagProps {
	country: string;
	size: number;
}

export default function CountryFlag(props: FlagProps) {
	const BASE_URL = "https://flagsapi.com";
	const url = `${BASE_URL}/${props.country}/shiny/64.png`;

	return (
		<FlagContainer size={props.size}>
			{props.country && <ImageComponent src={url} alt={props.country} duration={500} />}
		</FlagContainer>
	);
}
