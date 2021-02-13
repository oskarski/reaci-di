import useService from "../useService";
import ApiService from "../Api.service";
import TemperatureCardService from "./TemperatureCard.service";
import { useEffect, useState } from "react";

export const useTemperatureCardController = () => {
  const apiService = useService(ApiService);
  const { fromCelsiusToFahrenheit, getTemperatureDescription } = useService(
    TemperatureCardService
  );

  const [loading, toggleLoading] = useState(true);
  const [temperature, setTemperature] = useState<number | undefined>();

  const fetchTemperature = async () => {
    toggleLoading(true);

    const temp = await apiService.getTemperature();

    setTemperature(temp);
    toggleLoading(false);
  };

  useEffect(() => {
    fetchTemperature();
  }, []);

  return {
    loading,
    celsiusTemperature: temperature,
    fahrenheitTemperature: fromCelsiusToFahrenheit(temperature),
    temperatureDescription: getTemperatureDescription(temperature),
    onRefreshButtonClick: fetchTemperature
  };
};
