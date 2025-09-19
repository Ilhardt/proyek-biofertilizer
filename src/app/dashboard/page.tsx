"use client";

import React from "react";
import MetricCard from "./../components/MetricCard";
import DeviceStatusCard from "./../components/DeviceStatusCard";
import RecentAlertsCard from "./../components/RecentAlertsCard";
import { useDashboardData, MetricData } from "./../hooks/useDashboardData";
import SoilMoistureTrendsCard from "./../components/PCGrafik";
import TempHumidityTrendsCard from "./../components/TempHumidityTrendsCard";
import PlantDataTable from "./../components/ConnectedDevicesTable";
import ColorLegend from "../components/ColorLegend";
import PCGrafik from "./../components/PCGrafik";

// Helper function buat render MetricCard, nanganin kondisi loading atau data kosong
const renderMetricCard = (data: MetricData | null, isLoading: boolean) => {
  if (isLoading) {
    return (
      <MetricCard
        title={data?.title || "Loading..."}
        value={"—"}
        unit=""
        range="Loading data..."
        indicatorColorClass="gray-400"
        needleRotationDegree={0}
        fillPercentage={0}
        iconType="generic"
        optimalRangeMin={0}
        optimalRangeMax={0}
        optimalRangeColor="gray-300"
      />
    );
  }
  if (!data || data.value === null) {
    return (
      <MetricCard
        title={data?.title || "Data Unavailable"}
        value={"N/A"}
        unit=""
        range="Data could not be loaded."
        indicatorColorClass="red-500"
        needleRotationDegree={0}
        fillPercentage={0}
        iconType="generic"
        optimalRangeMin={0}
        optimalRangeMax={0}
        optimalRangeColor="gray-300"
      />
    );
  }
  return (
    <MetricCard
      title={data.title}
      value={data.value.toFixed(data.unit === "" ? 1 : 0)}
      unit={data.unit}
      range={data.range}
      indicatorColorClass={data.indicatorColorClass}
      needleRotationDegree={data.needleRotationDegree!}
      fillPercentage={data.fillPercentage!}
      iconType={data.iconType}
      optimalRangeMin={data.optimalRangeMin}
      optimalRangeMax={data.optimalRangeMax}
      optimalRangeColor={data.optimalRangeColor}
    />
  );
};

export default function Dashboard() {
  const {
    soilMoisture,
    soilPh,
    temperature,
    humidity,
    plantData,
    deviceStatus,
    recentAlerts,
    graphData,
    isLoading,
  } = useDashboardData();

  return (
    <div className="flex-1 p-6 bg-gray-100 min-h-screen">
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Biofertilizer MA11 IoT Dashboard
        </h1>
        <ColorLegend/>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {renderMetricCard(soilMoisture, isLoading)}
        {renderMetricCard(soilPh, isLoading)}
        {renderMetricCard(temperature, isLoading)}
        {renderMetricCard(humidity, isLoading)}
      </div>

      <div className=" gap-6 mb-6">
        <PCGrafik isLoading={isLoading} graphUrl={graphData} />
        {/* <TempHumidityTrendsCard data={[]} isLoading={isLoading} /> */}
      </div>

      <div className="mb-6">
        <PlantDataTable data={plantData} isLoading={isLoading} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <DeviceStatusCard devices={deviceStatus} isLoading={isLoading} />
        <RecentAlertsCard
          alerts={isLoading || !recentAlerts ? [] : recentAlerts}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}