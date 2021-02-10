import { findByText, render } from "@testing-library/react";
import { TemperatureCard } from "./TemperatureCard";
import ApiService from "../Api.service";
import { container } from "tsyringe";

describe("TemperatureCard", () => {
  let component: HTMLElement;

  container.register(ApiService, {
    useValue: {
      getTemperature: () => Promise.resolve(23)
    }
  });

  beforeEach(() => {
    const result = render(<TemperatureCard />);

    component = result.container as HTMLElement;
  });

  it("renders correctly", async () => {
    expect(await findByText(component, "23 °C")).toBeInTheDocument();
    expect(await findByText(component, "73.4 °F")).toBeInTheDocument();
    expect(await findByText(component, "Almost summer")).toBeInTheDocument();
  });
});
