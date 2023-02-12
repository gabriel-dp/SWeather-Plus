import { particles } from "@/utils/dataTypes";
import RainSvg from "@/assets/rain.svg";
import FreezingRainSvg from "@/assets/freezing-rain.svg";
import SleetSvg from "@/assets/sleet.svg";
import SnowSvg from "@/assets/snow.svg";

import { PrecipitationContainer, ParticleContainer } from "./styles";

interface ParticleProps {
	precipitationType: number;
}

const Particle = (props: ParticleProps) => {
	switch (props.precipitationType) {
		case particles.freezingRain:
			return <FreezingRainSvg />;
		case particles.sleet:
			return <SleetSvg />;
		case particles.snow:
			return <SnowSvg />;
		default:
			return <RainSvg />;
	}
};

export default function Precipitation() {
	return (
		<PrecipitationContainer>
			<ParticleContainer>
				<Particle precipitationType={0} />
			</ParticleContainer>
			<ParticleContainer>
				<Particle precipitationType={1} />
			</ParticleContainer>
			<ParticleContainer>
				<Particle precipitationType={2} />
			</ParticleContainer>
			<ParticleContainer>
				<Particle precipitationType={3} />
			</ParticleContainer>
		</PrecipitationContainer>
	);
}
