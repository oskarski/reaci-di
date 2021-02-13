import React, { useEffect, useState } from "react";
import useService from "../useService";
import ApiService from "../Api.service";
import TemperatureCardService from "./TemperatureCard.service";
import {
  MainTemperature,
  RefreshButton,
  StyledTemperatureCard,
  TemperatureDescription
} from "./TemperatureCard.style";

export const TemperatureCard: React.FC = () => {
  const apiService = useService(ApiService);
  const temperatureCardService = useService(TemperatureCardService);

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

  return (
    <StyledTemperatureCard>
      {temperature !== undefined && (
        <>
          <MainTemperature>{temperature} °C</MainTemperature>

          <div>
            {temperatureCardService.fromCelsiusToFahrenheit(temperature)} °F
          </div>

          <TemperatureDescription>
            {temperatureCardService.getTemperatureDescription(temperature)}
          </TemperatureDescription>
        </>
      )}

      <RefreshButton onClick={fetchTemperature} disabled={loading}>
        {loading ? "Loading..." : "Refresh"}
      </RefreshButton>
    </StyledTemperatureCard>
  );
};
