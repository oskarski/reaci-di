import { container } from "tsyringe";
import TemperatureCardService from "./TemperatureCard.service";

describe("TemperatureCardService", () => {
  const service = container.resolve(TemperatureCardService);

  it(".fromCelsiusToFahrenheit()", () => {
    expect(service.fromCelsiusToFahrenheit(0)).toBe(32);
    expect(service.fromCelsiusToFahrenheit(23)).toBe(73.4);
    expect(service.fromCelsiusToFahrenheit(-19)).toBe(-2.2);
  });

  it(".getTemperatureDescription()", () => {
    expect(service.getTemperatureDescription(-10)).toBe("Winter has come");
    expect(service.getTemperatureDescription(0)).toBe("Spring is almost here");
    expect(service.getTemperatureDescription(7)).toBe("Spring has started");
    expect(service.getTemperatureDescription(15)).toBe("Almost summer");
    expect(service.getTemperatureDescription(25)).toBe("Summer is here");
  });
});
