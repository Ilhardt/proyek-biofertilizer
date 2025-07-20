'use client';

import React from 'react';
import MetricCard from './../components/MetricCard';
import DeviceStatusCard from './../components/DeviceStatusCard';
import RecentAlertsCard from './../components/RecentAlertsCard';
import ProjectOverview from './../components/ProjectOverview';
import { useDashboardData, MetricData } from './../hooks/useDashboardData';
import SoilMoistureTrendsCard from './../components/SoilMoistureTrendsCard';
import TempHumidityTrendsCard from './../components/TempHumidityTrendsCard';



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
        soilMoisture, soilPh, temperature, humidity,
        devicesStatus, recentAlerts, projectOverview,
        isLoading
    } = useDashboardData();

    return (
        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Biofertilizer MA11 IoT Dashboard</h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {renderMetricCard(soilMoisture, isLoading)}
                {renderMetricCard(soilPh, isLoading)}
                {renderMetricCard(temperature, isLoading)}
                {renderMetricCard(humidity, isLoading)}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <SoilMoistureTrendsCard
                    data={[]}
                    isLoading={isLoading}
                />
                <TempHumidityTrendsCard
                    data={[]} 
                    isLoading={isLoading}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Device Status Card */}
                <DeviceStatusCard
                    devices={isLoading || !devicesStatus ? [] : devicesStatus}
                    isLoading={isLoading}
                />
                {/* Recent Alerts Card */}
                <RecentAlertsCard
                    alerts={isLoading || !recentAlerts ? [] : recentAlerts}
                    isLoading={isLoading}
                />
            </div>

            {/* Project Overview */}
            {isLoading ? (
                <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Loading Project Overview...</h2>
                    <div className="h-40 bg-gray-200 rounded"></div>
                </div>
            ) : (
                <ProjectOverview
                    imageSrc={projectOverview?.imageSrc || 'https://via.placeholder.com/300x200'}
                    title={projectOverview?.title || 'Project Overview'}
                    description={projectOverview?.description || 'A brief description of the project will appear here.'}
                    researchObjectives={projectOverview?.researchObjectives || ['No objectives defined yet.']}
                    sensorParameters={projectOverview?.sensorParameters || ['No parameters defined yet.']}
                />
            )}
        </div>
    );
}