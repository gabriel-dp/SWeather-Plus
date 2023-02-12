import React from "react";

import { particles } from "@/utils/dataTypes";
import Rain from "./components/Rain";
import FreezingRain from "./components/FreezingRain";
import Sleet from "./components/Sleet";
import Snow from "./components/Snow";

import { PrecipitationContainer, ParticleContainer } from "./styles";

interface ParticleProps {
	precipitationType: number;
}

const Particle = (props: ParticleProps) => {
	switch (props.precipitationType) {
		case particles.freezingRain:
			return <FreezingRain />;
		case particles.sleet:
			return <Sleet />;
		case particles.snow:
			return <Snow />;
		default:
			return <Rain />;
	}
};

export default function Precipitation() {
	return (
		<PrecipitationContainer>
			<ParticleContainer>
				<Particle precipitationType={0} />
			</ParticleContainer>
		</PrecipitationContainer>
	);
}
