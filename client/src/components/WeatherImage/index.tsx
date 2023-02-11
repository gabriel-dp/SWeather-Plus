import { useContext } from "react";

import { DataContext } from "@/utils/dataTypes";
import SunMoon from "./components/SunMoon";
import Cloud from "./components/Cloud";

import { WeatherImageContainer } from "./styles";

export default function WeatherImage() {
	const data = useContext(DataContext).intervalData;

	if (!data.status) {
		return (
			<WeatherImageContainer>
				<Cloud />
			</WeatherImageContainer>
		);
	}

	return (
		<WeatherImageContainer>
			<Cloud />
			<SunMoon />
		</WeatherImageContainer>
	);
}
