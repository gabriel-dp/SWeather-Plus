import { FlagContainer } from "./styles";

interface FlagProps {
	country: string;
	size: number;
}

export default function CountryFlag(props: FlagProps) {
	const BASE_URL = "https://flagsapi.com";

	const url = `${BASE_URL}/${props.country}/shiny/32.png`;

	return <FlagContainer size={props.size}>{props.country && <img src={url} alt={props.country} />}</FlagContainer>;
}
