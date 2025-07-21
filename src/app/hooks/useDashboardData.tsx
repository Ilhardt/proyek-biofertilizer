// src/hooks/useDashboardData.ts
import { useState, useEffect, useCallback } from 'react';

/**
 * @file useDashboardData.ts
 * @description Hook ini bertanggung jawab untuk mengambil dan mengelola data yang dibutuhkan
 * untuk dashboard utama. Ini mencakup data metrik sensor (kelembaban tanah, pH, suhu, kelembaban),
 * status perangkat, peringatan terbaru, dan gambaran umum proyek. Hook ini juga menangani
 * status loading data dan menyediakan placeholder data jika fetching gagal.
 * Saat ini, fetching data masih disimulasikan (kode fetching data nyata masih dikomentari),
 * namun strukturnya sudah disiapkan untuk integrasi backend.
 * @example const { soilMoisture, isLoading } = useDashboardData();
 */

// Interface untuk data perangkat yang ditampilkan di dashboard
export interface DashboardDevice {
    id: string;
    name: string;
    status: 'Online' | 'Offline' | 'Warning';
    description?: string;
    value?: number;
}

// Interface untuk data peringatan (alerts)
export interface Alert {
    id: string;
    type: 'Critical' | 'Warning' | 'Info';
    heading: string;
    message: string;
    timestamp: string;
}

// Interface untuk data gambaran umum proyek
export interface ProjectData {
    imageSrc: string;
    title: string;
    description: string;
    researchObjectives: string[];
    sensorParameters: string[];
}

// Interface untuk data metrik sensor (misal: kelembaban, pH)
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
    needleRotationDegree: number | null; // Untuk visualisasi jarum gauge
    fillPercentage: number | null; // Untuk visualisasi fill gauge
}

// --- FUNGSI HELPER (dipindahkan dari page.tsx) ---
// Fungsi buat ngitung rotasi jarum untuk gauge, biar pas sama nilainya
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getNeedleRotation = (value: number, min: number, max: number): number => {
    const clampedValue = Math.max(min, Math.min(max, value)); // Pastiin nilai ada di antara min dan max
    const normalizedValue = (clampedValue - min) / (max - min); // Normalisasi nilai jadi 0-1
    return normalizedValue * 180; // Kalikan 180 karena gauge biasanya 180 derajat
};

// Fungsi buat ngitung persentase fill untuk gauge (misal: bar atau lingkaran)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getFillPercentage = (value: number, min: number, max: number): number => {
    const clampedValue = Math.max(min, Math.min(max, value)); // Pastiin nilai ada di antara min dan max
    const normalizedValue = (clampedValue - min) / (max - min); // Normalisasi nilai jadi 0-1
    return normalizedValue * 100; // Ubah jadi persentase
};

// Custom Hook useDashboardData
export const useDashboardData = () => {
    // State buat nyimpen data masing-masing metrik
    const [soilMoisture, setSoilMoisture] = useState<MetricData | null>(null);
    const [soilPh, setSoilPh] = useState<MetricData | null>(null);
    const [temperature, setTemperature] = useState<MetricData | null>(null);
    const [humidity, setHumidity] = useState<MetricData | null>(null);

    // State buat nyimpen status perangkat dan peringatan terbaru
    const [devicesStatus, setDevicesStatus] = useState<DashboardDevice[]>([]);
    const [recentAlerts, setRecentAlerts] = useState<Alert[]>([]);
    // State buat nyimpen data overview proyek
    const [projectOverview, setProjectOverview] = useState<ProjectData | null>(null);

    // State buat nampilin status loading
    const [isLoading, setIsLoading] = useState(true);

    // Fungsi utama buat ngambil data, dibungkus pake useCallback biar efisien
    const fetchData = useCallback(async () => {
        setIsLoading(true); // Set loading jadi true pas mulai fetch
        try {
            // Simulasi delay fetching data dari backend (dikomentari)
            // await new Promise(resolve => setTimeout(resolve, 2000));

            // Data dummy dari backend (dikomentari)
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

            // // Set state metrik dengan data dummy dan perhitungan gauge
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
            // Kalau ada error, set semua data jadi null/kosong
            setSoilMoisture(null);
            setSoilPh(null);
            setTemperature(null);
            setHumidity(null);
            setDevicesStatus([]);
            setRecentAlerts([]);
            setProjectOverview(null);
        } finally {
            setIsLoading(false); // Selesai loading, baik sukses atau gagal
        }
    }, []); // Dependencies kosong, artinya fetchData cuma dibuat sekali saat komponen mount

    // useEffect buat ngejalanin fetchData pas komponen pertama kali di-render
    useEffect(() => {
        fetchData();
    }, [fetchData]); // Dependencies: fetchData, biar effect jalan lagi kalo fetchData berubah (walaupun useCallback udah mencegah ini)

    // Return semua data dan status loading
    return {
        soilMoisture, soilPh, temperature, humidity,
        devicesStatus, recentAlerts, projectOverview,
        isLoading
    };
};