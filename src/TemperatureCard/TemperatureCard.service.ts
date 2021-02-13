import { injectable } from "tsyringe";

@injectable()
export default class TemperatureCardService {
  fromCelsiusToFahrenheit(celsiusTemperature?: number) {
    if (celsiusTemperature === undefined) return undefined;

    return parseFloat((celsiusTemperature * 1.8 + 32).toFixed(1));
  }

  getTemperatureDescription(celsiusTemperature?: number) {
    if (celsiusTemperature === undefined) return undefined;
    if (celsiusTemperature < 0) return "Winter has come";
    if (celsiusTemperature < 7) return "Spring is almost here";
    if (celsiusTemperature < 15) return "Spring has started";
    if (celsiusTemperature < 25) return "Almost summer";

    return "Summer is here";
  }
}
