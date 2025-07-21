import { useState, useEffect, useCallback } from 'react';
import { Device } from '../components/ConnectedDevicesTable'; // Import Device interface

/**
 * @file useDeviceManagementData.ts
 * @description Hook ini berfungsi sebagai "otak" di balik halaman Device Management,
 * bertanggung jawab untuk fetching data perangkat, menghitung ringkasan status perangkat
 * (total, online, offline, perlu perhatian), dan juga menyediakan fungsi untuk
 * menambahkan perangkat baru ke dalam daftar. Saat ini, data perangkat masih menggunakan
 * dummy data (`dummyBackendDevices`) dan simulasi loading.
 * @example const { devices, summaryData, isLoading, fetchDeviceData, addDevice } = useDeviceManagementData();
 */

// Interface untuk data ringkasan perangkat
interface DeviceSummaryData {
    totalDevices: number;
    onlineDevices: number;
    offlineDevices: number;
    needsAttentionDevices: number;
}

// Data dummy perangkat yang akan disimulasikan sebagai data dari backend
const dummyBackendDevices: Device[] = [
    { id: 'DEV-MA11-001', location: 'Field A1', deviceType: 'Multi-Sensor Node', status: 'Online', lastActive: '2 minutes ago' },
    { id: 'DEV-MA11-002', location: 'Field B2', deviceType: 'Soil Moisture Sensor', status: 'Online', lastActive: '5 minutes ago' },
    { id: 'DEV-MA11-003', location: 'Greenhouse 1', deviceType: 'pH Meter', status: 'Calibration Needed', lastActive: '15 minutes ago' },
    { id: 'DEV-MA11-004', location: 'Field C3', deviceType: 'Temperature/Humidity', status: 'Offline', lastActive: '3 hours ago' },
    { id: 'DEV-MA11-005', location: 'Lab Area', deviceType: 'Light Sensor', status: 'Online', lastActive: '1 hour ago' },
    { id: 'DEV-MA11-006', location: 'Field A2', deviceType: 'Nutrient Sensor', status: 'Online', lastActive: '30 minutes ago' },
    { id: 'DEV-MA11-007', location: 'Greenhouse 2', deviceType: 'Actuator Valve', status: 'Offline', lastActive: '1 day ago' },
];

// Custom Hook untuk manajemen data perangkat
export const useDeviceManagementData = () => {
    // State buat nyimpen daftar perangkat
    const [devices, setDevices] = useState<Device[]>([]);
    // State buat nyimpen data ringkasan perangkat
    const [summaryData, setSummaryData] = useState<DeviceSummaryData | null>(null);
    // State buat nampilin status loading
    const [isLoading, setIsLoading] = useState(true);

    // Fungsi helper buat ngitung ringkasan status perangkat.
    const calculateSummary = useCallback((deviceList: Device[]): DeviceSummaryData => {
        const onlineCount = deviceList.filter(d => d.status === 'Online').length;
        const offlineCount = deviceList.filter(d => d.status === 'Offline').length;
        const needsAttentionCount = deviceList.filter(d => d.status === 'Calibration Needed').length;
        return {
            totalDevices: deviceList.length,
            onlineDevices: onlineCount,
            offlineDevices: offlineCount,
            needsAttentionDevices: needsAttentionCount,
        };
    }, []); // Dependencies kosong, jadi fungsi ini cuma dibuat sekali

    // Fungsi buat fetching data perangkat dari "backend" (saat ini dummy data). Dibungkus useCallback.
    const fetchDeviceData = useCallback(async () => {
        setIsLoading(true); // Set loading jadi true
        try {
            // Simulasi delay fetching data
            await new Promise(resolve => setTimeout(resolve, 1500));

            const fetchedDevices = dummyBackendDevices; // Ambil data dummy

            setDevices(fetchedDevices); // Update state devices
            setSummaryData(calculateSummary(fetchedDevices)); // Update state summaryData
        } catch (error) {
            console.error("Failed to fetch device data:", error);
            // Kalau gagal, set state jadi kosong/default
            setDevices([]);
            setSummaryData({
                totalDevices: 0,
                onlineDevices: 0,
                offlineDevices: 0,
                needsAttentionDevices: 0,
            });
        } finally {
            setIsLoading(false); // Selesai loading, baik sukses atau gagal
        }
    }, [calculateSummary]); // Dependencies: calculateSummary, karena fungsi ini memanggil calculateSummary

    // useEffect buat ngejalanin fetchDeviceData pas komponen pertama kali di-render
    useEffect(() => {
        fetchDeviceData();
    }, [fetchDeviceData]); // Dependencies: fetchDeviceData, biar effect jalan lagi kalo fetchDeviceData berubah

    // Fungsi buat nambahin perangkat baru. Dibungkus useCallback.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const addDevice = useCallback((deviceData: any) => {
        // Buat objek perangkat baru
        const newDevice: Device = {
            id: `DEV-NEW-${Date.now()}`, // ID unik berdasarkan timestamp
            location: deviceData.location,
            deviceType: deviceData.deviceType,
            status: 'Online', // Asumsi perangkat baru langsung online
            lastActive: 'just now',
        };

        setDevices(prevDevices => {
            const updatedDevices = [...prevDevices, newDevice]; // Tambahin perangkat baru ke daftar
            setSummaryData(calculateSummary(updatedDevices)); // Update summary data juga
            return updatedDevices;
        });

    }, [calculateSummary]); // Dependencies: calculateSummary, karena fungsi ini memanggil calculateSummary

    // Return semua state dan fungsi yang dibutuhkan oleh komponen
    return { devices, summaryData, isLoading, fetchDeviceData, addDevice };
};