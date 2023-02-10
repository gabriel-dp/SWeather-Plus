import { IDataContext, hourlyValues } from "@/utils/dataTypes";
import { fahrenheit } from "@/utils/unitsConversions";

const normalize = (measure: number, decimals: number, unit: string) => `${measure.toFixed(decimals)} ${unit}`;

export class formattedWeatherData {
	data: IDataContext;
	interval: hourlyValues;

	constructor(data: IDataContext) {
		this.data = data;
		this.interval = data.intervalData.interval;
	}

	getTemperature(): string {
		if (!this.interval) return "0º";

		const celsiusTemperature = this.interval.values.temperature;
		if (this.data.unitSystem === "metric") return normalize(celsiusTemperature, 1, "ºC");

		const fahrenheitTemperature = fahrenheit(celsiusTemperature);
		return normalize(fahrenheitTemperature, 1, "ºF");
	}
}
