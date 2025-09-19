import { useState, useEffect, useCallback, ReactNode } from "react";

/**
 * @file useDashboardData.ts
 * @description Hook ini bertanggung jawab untuk mengambil dan mengelola data yang dibutuhkan
 * untuk dashboard utama dan halaman alerts. Ini mencakup data metrik sensor,
 * status perangkat, peringatan, dan data tanaman.
 * @example const { plantData, recentAlerts, isLoading } = useDashboardData();
 */

// Interface untuk data tanaman yang akan ditampilkan di tabel
export interface PlantData {
  id: string;
  temperature: number;
  humidity: number;
  soilMoisture: number;
  soilPH: number;
  status: "Kering" | "Basah";
  lastActive: string;
}

// Interface untuk data perangkat yang ditampilkan di DeviceStatusCard
export interface DeviceData {
  id: string;
  name: string;
  status: "Online" | "Offline";
}

// Interface untuk data peringatan (alerts)
export interface Alert {
  deviceId: string;
  id: string;
  type: "Critical" | "Warning" | "Info";
  heading: string;
  message: string;
  timestamp: string;
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
  iconType: "moisture" | "ph" | "temperature" | "humidity" | "generic";
  optimalRangeMin: number;
  optimalRangeMax: number;
  optimalRangeColor: string;
  needleRotationDegree: number | null;
  fillPercentage: number | null;
}

// Fungsi helper untuk menghitung rotasi jarum gauge
const getNeedleRotation = (value: number, min: number, max: number): number => {
  const clampedValue = Math.max(min, Math.min(max, value));
  const normalizedValue = (clampedValue - min) / (max - min);
  return normalizedValue * 180;
};

// Fungsi helper untuk menghitung persentase fill gauge
const getFillPercentage = (value: number, min: number, max: number): number => {
  const clampedValue = Math.max(min, Math.min(max, value));
  const normalizedValue = (clampedValue - min) / (max - min);
  return normalizedValue * 100;
};

// Custom Hook useDashboardData
export const useDashboardData = () => {
  const [soilMoisture, setSoilMoisture] = useState<MetricData | null>(null);
  const [soilPh, setSoilPh] = useState<MetricData | null>(null);
  const [temperature, setTemperature] = useState<MetricData | null>(null);
  const [humidity, setHumidity] = useState<MetricData | null>(null);
  const [plantData, setPlantData] = useState<PlantData[]>([]);
  const [deviceStatus, setDeviceStatus] = useState<DeviceData[]>([]);
  const [recentAlerts, setRecentAlerts] = useState<Alert[]>([]);
  // Tambahkan state untuk data grafik
  const [graphData, setGraphData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulasi jeda 2 detik untuk fetching data
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const isDummyData = false;

      if (isDummyData) {
        const backendMoisture = 72.5;
        const backendPh = 6.8;
        const backendTemperature = 27.1;
        const backendHumidity = 78;

        const backendPlantData: PlantData[] = [
          {
            id: "tanaman1",
            temperature: 28,
            humidity: 75,
            soilMoisture: 30,
            soilPH: 6.5,
            status: "Kering",
            lastActive: "2023-10-27",
          },
          {
            id: "tanaman2",
            temperature: 25,
            humidity: 80,
            soilMoisture: 70,
            soilPH: 7.0,
            status: "Basah",
            lastActive: "2023-10-27",
          },
          {
            id: "tanaman3",
            temperature: 26,
            humidity: 78,
            soilMoisture: 45,
            soilPH: 6.8,
            status: "Basah",
            lastActive: "2023-10-26",
          },
          {
            id: "tanaman4",
            temperature: 30,
            humidity: 60,
            soilMoisture: 20,
            soilPH: 6.2,
            status: "Kering",
            lastActive: "2023-10-25",
          },
        ];

        const backendDevicesStatus: DeviceData[] = [
          { id: "d1", name: "Device 1", status: "Online" },
          { id: "d2", name: "Device 2", status: "Online" },
          { id: "d3", name: "Device 3", status: "Offline" },
        ];

        const backendAlerts: Alert[] = [
          {
            id: "alt1",
            type: "Warning",
            message: "Kelembaban tanah di area tanaman 1 terlalu rendah - 30%",
            heading: "Peringatan Tanah Kering",
            timestamp: "2025-07-19 14:30",
            deviceId: "Tanaman 1",
          },
          {
            id: "alt2",
            type: "Info",
            message: "Kondisi lingkungan ideal untuk pertumbuhan tanaman",
            heading: "Kondisi Optimal",
            timestamp: "2025-07-18 10:00",
            deviceId: "Tanaman 2",
          },
          {
            id: "alt3",
            type: "Critical",
            message: "Suhu di area tanaman 4 mencapai 30°C",
            heading: "Suhu Tinggi Terdeteksi",
            timestamp: "2025-07-16 08:00",
            deviceId: "Tanaman 4",
          },
        ];

        // DATA DUMMY UNTUK GRAFIK
        const backendGraphUrl = "https://i.imgur.com/6LFhAW0.png";

        // Set state untuk data metrik
        const moistureMin = 0;
        const moistureMax = 100;
        setSoilMoisture({
          title: "Soil Moisture",
          value: backendMoisture,
          min: moistureMin,
          max: moistureMax,
          unit: "%",
          range: "Optimal range: 60-75%",
          indicatorColorClass: "blue-500",
          iconType: "moisture",
          optimalRangeMin: 60,
          optimalRangeMax: 75,
          optimalRangeColor: "gray-400",
          needleRotationDegree: getNeedleRotation(backendMoisture, moistureMin, moistureMax),
          fillPercentage: getFillPercentage(backendMoisture, moistureMin, moistureMax),
        });

        const phMin = 0;
        const phMax = 14;
        setSoilPh({
          title: "Soil pH",
          value: backendPh,
          min: phMin,
          max: phMax,
          unit: "",
          range: "Neutral range: 6.0-7.5",
          indicatorColorClass: "green-500",
          iconType: "ph",
          optimalRangeMin: getFillPercentage(6.0, phMin, phMax),
          optimalRangeMax: getFillPercentage(7.5, phMin, phMax),
          optimalRangeColor: "green-400",
          needleRotationDegree: getNeedleRotation(backendPh, phMin, phMax),
          fillPercentage: getFillPercentage(backendPh, phMin, phMax),
        });

        const tempMin = 0;
        const tempMax = 50;
        setTemperature({
          title: "Temperature",
          value: backendTemperature,
          min: tempMin,
          max: tempMax,
          unit: "°C",
          range: "Optimal: 24-30 °C",
          indicatorColorClass: "orange-500",
          iconType: "temperature",
          optimalRangeMin: getFillPercentage(24, tempMin, tempMax),
          optimalRangeMax: getFillPercentage(30, tempMin, tempMax),
          optimalRangeColor: "gray-400",
          needleRotationDegree: getNeedleRotation(backendTemperature, tempMin, tempMax),
          fillPercentage: getFillPercentage(backendTemperature, tempMin, tempMax),
        });

        const humMin = 0;
        const humMax = 100;
        setHumidity({
          title: "Humidity",
          value: backendHumidity,
          min: humMin,
          max: humMax,
          unit: "%",
          range: "Optimal: 65-85%",
          indicatorColorClass: "indigo-500",
          iconType: "humidity",
          optimalRangeMin: 65,
          optimalRangeMax: 85,
          optimalRangeColor: "gray-400",
          needleRotationDegree: getNeedleRotation(backendHumidity, humMin, humMax),
          fillPercentage: getFillPercentage(backendHumidity, humMin, humMax),
        });

        // Set semua state dengan data dummy
        setPlantData(backendPlantData);
        setDeviceStatus(backendDevicesStatus);
        setRecentAlerts(backendAlerts);
        setGraphData(backendGraphUrl); 
      } else {
        // ... (bagian untuk data kosong)
        setSoilMoisture(null);
        setSoilPh(null);
        setTemperature(null);
        setHumidity(null);
        setPlantData([]);
        setDeviceStatus([]);
        setRecentAlerts([]);
        setGraphData(null); 
      }

    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
      setSoilMoisture(null);
      setSoilPh(null);
      setTemperature(null);
      setHumidity(null);
      setPlantData([]);
      setDeviceStatus([]);
      setRecentAlerts([]);
      setGraphData(null); 
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    soilMoisture,
    soilPh,
    temperature,
    humidity,
    plantData,
    deviceStatus,
    recentAlerts,
    graphData, 
    isLoading,
  };
};