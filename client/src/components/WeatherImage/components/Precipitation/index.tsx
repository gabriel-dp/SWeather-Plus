import { particles } from "@/utils/dataTypes";
import RainSvg from "@/assets/rain.svg";
import FreezingRainSvg from "@/assets/freezing-rain.svg";
import SleetSvg from "@/assets/sleet.svg";
import SnowSvg from "@/assets/snow.svg";

import { PrecipitationContainer, ParticleContainer } from "./styles";

interface ParticleProps {
	type: number;
}

const Particle = (props: ParticleProps) => {
	switch (props.type) {
		case particles.rain:
			return <RainSvg />;
		case particles.freezingRain:
			return <FreezingRainSvg />;
		case particles.sleet:
			return <SleetSvg />;
		case particles.snow:
			return <SnowSvg />;
		default:
			return <></>;
	}
};

interface PrecipitationProps {
	type: number;
	intensity: number;
	windSpeed: number;
}

export default function Precipitation(props: PrecipitationProps) {
	// Define quantity - Each particle represents 1mm/h
	const particlesQuantity = Math.ceil(props.intensity);

	// Define width of each particle
	const particleWidth = particlesQuantity === 0 ? 0 : 100 / particlesQuantity;

	// Define fall duration in seconds
	const particleFallDuration = particlesQuantity === 0 ? 0 : 1 / Math.pow(particlesQuantity, 1 / 5);

	// Defines displacement based on windSpeed
	const particleDisplacement = Math.min(500, Math.round(props.windSpeed ** 2 * 5));

	return (
		<PrecipitationContainer>
			{Array.from({ length: particlesQuantity }).map((_, index) => {
				const particleRandomDelay = (Math.random() - 0.5) / 2;
				return (
					<ParticleContainer
						key={particleRandomDelay}
						particleWidth={particleWidth}
						particleFallDuration={particleFallDuration}
						particleRandomDelay={particleRandomDelay}
						particleDisplacement={particleDisplacement}
						index={index}
					>
						<Particle type={props.type} />
					</ParticleContainer>
				);
			})}
		</PrecipitationContainer>
	);
}
