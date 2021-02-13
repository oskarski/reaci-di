import React from "react";
import { withMemoizedController } from "../withController";
import { useTemperatureCardController } from "./TemperatureCard.controller";
import {
  MainTemperature,
  RefreshButton,
  StyledTemperatureCard,
  TemperatureDescription
} from "./TemperatureCard.style";

export const TemperatureCard = withMemoizedController(
  useTemperatureCardController,
  ({
    loading,
    celsiusTemperature,
    fahrenheitTemperature,
    temperatureDescription,
    onRefreshButtonClick
  }) => (
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
  )
);
