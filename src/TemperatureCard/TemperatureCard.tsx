import React, { useEffect, useState } from "react";
import useService from "../useService";
import ApiService from "../Api.service";
import TemperatureCardService from "./TemperatureCard.service";

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
    <div style={{ border: "3px solid #fff", padding: "24px" }}>
      {temperature !== undefined && (
        <>
          <div
            style={{
              fontSize: "44px",
              fontWeight: "bold",
              marginBottom: "8px"
            }}
          >
            {temperature} °C
          </div>
          <div>
            {temperatureCardService.fromCelsiusToFahrenheit(temperature)} °F
          </div>

          <div
            style={{
              fontSize: "24px",
              marginTop: "8px"
            }}
          >
            {temperatureCardService.getTemperatureDescription(temperature)}
          </div>
        </>
      )}

      <button
        style={{ fontSize: "24px", marginTop: "24px" }}
        onClick={fetchTemperature}
        disabled={loading}
      >
        {loading ? "Loading..." : "Refresh"}
      </button>
    </div>
  );
};
