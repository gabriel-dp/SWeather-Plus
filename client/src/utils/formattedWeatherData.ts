import { IDataContext, hourlyValues } from "@/utils/dataTypes";
import { fahrenheit, milesPerHour } from "@/utils/unitsConversions";

const normalize = (measure: number, decimals: number, unit: string, join = "") =>
	[measure.toFixed(decimals), unit].join(join);

export class formattedWeatherData {
	data: IDataContext;
	interval: hourlyValues;

	constructor(data: IDataContext) {
		this.data = data;
		this.interval = data.intervalData.interval;
	}

	getTemperature(): string {
		if (!this.interval) return normalize(0, 1, "º", " ");

		const celsiusTemperature = this.interval.values.temperature;
		if (this.data.unitSystem === "metric") return normalize(celsiusTemperature, 1, "ºC", " ");

		const fahrenheitTemperature = fahrenheit(celsiusTemperature);
		return normalize(fahrenheitTemperature, 1, "ºF", " ");
	}

	getWindSpeed(): string {
		if (!this.interval) return normalize(0, 1, "");

		const metricSpeed = this.interval.values.windSpeed;
		if (this.data.unitSystem === "metric") return normalize(metricSpeed, 1, "m/s", " ");

		const imperialSpeed = milesPerHour(metricSpeed);
		return normalize(imperialSpeed, 1, "mph", " ");
	}

	getHumidity(): string {
		if (!this.interval) return normalize(0, 0, "%");

		const percentage = this.interval.values.humidity;
		return normalize(percentage, 0, "%");
	}

	getPrecipitationProbability(): string {
		if (!this.interval) return normalize(0, 0, "%");

		const probability = this.interval.values.precipitationProbability;
		return normalize(probability, 0, "%");
	}
}
