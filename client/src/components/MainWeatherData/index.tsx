import { useContext } from "react";
import { WiStrongWind, WiHumidity, WiRain } from "react-icons/wi";

import { formattedWeatherData } from "@/utils/formattedWeatherData";
import { DataContext } from "@/utils/dataTypes";

import { DataText, DataGroup, MainContainer } from "./styles";

interface DataProps {
	children: React.ReactNode;
}

export default function MainWeatherData(props: DataProps) {
	const contextData = useContext(DataContext);
	const data = new formattedWeatherData(contextData);

	return (
		<MainContainer>
			<DataText size={2.5}>{data.getTemperature()}</DataText>
			<DataGroup>
				<DataText size={1.25}>
					<WiStrongWind className="icon" />
					{data.getWindSpeed()}
				</DataText>
				<DataText size={1.25}>
					<WiHumidity className="icon" />
					{data.getHumidity()}
				</DataText>
				<DataText size={1.25}>
					<WiRain className="icon" />
					{data.getPrecipitationProbability()}
				</DataText>
			</DataGroup>
			{props.children}
		</MainContainer>
	);
}
