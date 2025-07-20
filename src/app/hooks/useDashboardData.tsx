// src/hooks/useDashboardData.ts
import { useState, useEffect, useCallback } from 'react';

export interface DashboardDevice {
    id: string;
    name: string;
    status: 'Online' | 'Offline' | 'Warning';
    description?: string;
    value?: number;
}

export interface Alert {
    id: string;
    type: 'Critical' | 'Warning' | 'Info';
    heading: string;
    message: string;
    timestamp: string;
}

export interface ProjectData {
    imageSrc: string;
    title: string;
    description: string;
    researchObjectives: string[];
    sensorParameters: string[];
}

export interface MetricData {
    title: string;
    value: number | null;
    min: number;
    max: number;
    unit: string;
    range: string;
    indicatorColorClass: string;
    iconType: 'moisture' | 'ph' | 'temperature' | 'humidity' | 'generic';
    optimalRangeMin: number;
    optimalRangeMax: number;
    optimalRangeColor: string;
    needleRotationDegree: number | null;
    fillPercentage: number | null;
}

// --- FUNGSI HELPER (dipindahkan dari page.tsx) ---
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getNeedleRotation = (value: number, min: number, max: number): number => {
    const clampedValue = Math.max(min, Math.min(max, value));
    const normalizedValue = (clampedValue - min) / (max - min);
    return normalizedValue * 180;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getFillPercentage = (value: number, min: number, max: number): number => {
    const clampedValue = Math.max(min, Math.min(max, value));
    const normalizedValue = (clampedValue - min) / (max - min);
    return normalizedValue * 100;
};

export const useDashboardData = () => {
    const [soilMoisture, setSoilMoisture] = useState<MetricData | null>(null);
    const [soilPh, setSoilPh] = useState<MetricData | null>(null);
    const [temperature, setTemperature] = useState<MetricData | null>(null);
    const [humidity, setHumidity] = useState<MetricData | null>(null);


    const [devicesStatus, setDevicesStatus] = useState<DashboardDevice[]>([]); 
    const [recentAlerts, setRecentAlerts] = useState<Alert[]>([]); 
    const [projectOverview, setProjectOverview] = useState<ProjectData | null>(null);

    const [isLoading, setIsLoading] = useState(true);

    const fetchData = useCallback(async () => {
        setIsLoading(true); 
        try {

            // await new Promise(resolve => setTimeout(resolve, 2000));

            // const backendMoisture = 72.5;
            // const backendPh = 6.8;
            // const backendTemperature = 27.1;
            // const backendHumidity = 78;

            // const backendDevicesStatus: DashboardDevice[] = [
            //     { id: 'dev1', name: 'Sensor Node 1', status: 'Online', description: 'Active • Field A', value: 66.6 },
            //     { id: 'dev2', name: 'Sensor Node 2', status: 'Online', description: 'Active • Field B' },
            //     { id: 'dev3', name: 'Gateway Device', status: 'Online', description: 'Central Hub' },
            //     { id: 'dev4', name: 'Pump Controller', status: 'Offline', description: 'Zone 3' },
            //     { id: 'dev5', name: 'Actuator Unit', status: 'Warning', description: 'Calibration Needed' },
            // ];

            // const backendRecentAlerts: Alert[] = [
            //     { id: 'alt1', type: 'Warning', message: 'Field A moisture below threshold - 55%', heading: 'Low Soil Moisture Alert', timestamp: '2025-07-19 14:30' },
            //     { id: 'alt2', type: 'Info', message: 'Firmware v2.1.4 successfully installed', heading: 'System Update Completed', timestamp: '2025-07-18 10:00' },
            //     { id: 'alt3', type: 'Critical', message: 'Field B temperature reached 34°C', heading: 'High Temperature Warning', timestamp: '2025-07-16 08:00' },
            // ];

            // const backendProjectOverview: ProjectData = {
            //     imageSrc: 'https://images.unsplash.com/photo-1542435503-956c469947f6?fit=crop&w=800&q=80',
            //     title: 'Smart Farming IoT Project',
            //     description: 'This project aims to optimize biofertilizer application and crop health using real-time IoT sensor data. It monitors soil moisture, pH, temperature, and humidity to provide actionable insights for farmers.',
            //     researchObjectives: [
            //         'Optimize biofertilizer dosage based on soil data.',
            //         'Monitor environmental conditions for ideal plant growth.',
            //         'Predict potential issues with early warning alerts.',
            //         'Improve crop yield and reduce resource waste.'
            //     ],
            //     sensorParameters: [
            //         'Soil Moisture: 0-100%',
            //         'Soil pH: 0-14',
            //         'Temperature: 0-50°C',
            //         'Humidity: 0-100%'
            //     ],
            // };

            // const moistureMin = 0; const moistureMax = 100;
            // setSoilMoisture({
            //     title: "Soil Moisture",
            //     value: backendMoisture, min: moistureMin, max: moistureMax, unit: "%", range: "Optimal range: 60-75%",
            //     indicatorColorClass: "blue-500", iconType: "moisture", optimalRangeMin: 60, optimalRangeMax: 75, optimalRangeColor: "gray-400",
            //     needleRotationDegree: getNeedleRotation(backendMoisture, moistureMin, moistureMax),
            //     fillPercentage: getFillPercentage(backendMoisture, moistureMin, moistureMax),
            // });

            // const phMin = 0; const phMax = 14;
            // setSoilPh({
            //     title: "Soil pH",
            //     value: backendPh, min: phMin, max: phMax, unit: "", range: "Neutral range: 6.0-7.5",
            //     indicatorColorClass: "green-500", iconType: "ph", optimalRangeMin: getFillPercentage(6.0, phMin, phMax), optimalRangeMax: getFillPercentage(7.5, phMin, phMax), optimalRangeColor: "green-400",
            //     needleRotationDegree: getNeedleRotation(backendPh, phMin, phMax),
            //     fillPercentage: getFillPercentage(backendPh, phMin, phMax),
            // });

            // const tempMin = 0; const tempMax = 50;
            // setTemperature({
            //     title: "Temperature",
            //     value: backendTemperature, min: tempMin, max: tempMax, unit: "°C", range: "Optimal: 24-30 °C",
            //     indicatorColorClass: "orange-500", iconType: "temperature", optimalRangeMin: getFillPercentage(24, tempMin, tempMax), optimalRangeMax: getFillPercentage(30, tempMin, tempMax), optimalRangeColor: "gray-400",
            //     needleRotationDegree: getNeedleRotation(backendTemperature, tempMin, tempMax),
            //     fillPercentage: getFillPercentage(backendTemperature, tempMin, tempMax),
            // });

            // const humMin = 0; const humMax = 100;
            // setHumidity({
            //     title: "Humidity",
            //     value: backendHumidity, min: humMin, max: humMax, unit: "%", range: "Optimal: 65-85%",
            //     indicatorColorClass: "indigo-500", iconType: "humidity", optimalRangeMin: 65, optimalRangeMax: 85, optimalRangeColor: "gray-400",
            //     needleRotationDegree: getNeedleRotation(backendHumidity, humMin, humMax),
            //     fillPercentage: getFillPercentage(backendHumidity, humMin, humMax),
            // });

            // setDevicesStatus(backendDevicesStatus);
            // setRecentAlerts(backendRecentAlerts);
            // setProjectOverview(backendProjectOverview);

        } catch (error) {
            console.error("Failed to fetch dashboard data:", error);
            setSoilMoisture(null);
            setSoilPh(null);
            setTemperature(null);
            setHumidity(null);
            setDevicesStatus([]); 
            setRecentAlerts([]); 
            setProjectOverview(null);
        } finally {
            setIsLoading(false); 
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {
        soilMoisture, soilPh, temperature, humidity,
        devicesStatus, recentAlerts, projectOverview,
        isLoading
    };
};