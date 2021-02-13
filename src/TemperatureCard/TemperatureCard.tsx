import React from "react";
import { useTemperatureCardController } from "./TemperatureCard.controller";
import {
  MainTemperature,
  RefreshButton,
  StyledTemperatureCard,
  TemperatureDescription
} from "./TemperatureCard.style";

export const TemperatureCard = () => {
  const {
    loading,
    celsiusTemperature,
    fahrenheitTemperature,
    temperatureDescription,
    onRefreshButtonClick
  } = useTemperatureCardController();

  return (
    <StyledTemperatureCard>
      {celsiusTemperature !== undefined && (
        <MainTemperature>{celsiusTemperature} °C</MainTemperature>
      )}

      {fahrenheitTemperature !== undefined && (
        <div>{fahrenheitTemperature} °F</div>
      )}

      {temperatureDescription && (
        <TemperatureDescription>
          {temperatureDescription}
        </TemperatureDescription>
      )}

      <RefreshButton onClick={onRefreshButtonClick} disabled={loading}>
        {loading ? "Loading..." : "Refresh"}
      </RefreshButton>
    </StyledTemperatureCard>
  );
};
