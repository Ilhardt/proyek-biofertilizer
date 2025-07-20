import { useState, useEffect, useCallback } from 'react';
import { Device } from '../components/ConnectedDevicesTable'; // Import Device interface


interface DeviceSummaryData {
    totalDevices: number;
    onlineDevices: number;
    offlineDevices: number;
    needsAttentionDevices: number;
}


const dummyBackendDevices: Device[] = [
    { id: 'DEV-MA11-001', location: 'Field A1', deviceType: 'Multi-Sensor Node', status: 'Online', lastActive: '2 minutes ago' },
    { id: 'DEV-MA11-002', location: 'Field B2', deviceType: 'Soil Moisture Sensor', status: 'Online', lastActive: '5 minutes ago' },
    { id: 'DEV-MA11-003', location: 'Greenhouse 1', deviceType: 'pH Meter', status: 'Calibration Needed', lastActive: '15 minutes ago' },
    { id: 'DEV-MA11-004', location: 'Field C3', deviceType: 'Temperature/Humidity', status: 'Offline', lastActive: '3 hours ago' },
    { id: 'DEV-MA11-005', location: 'Lab Area', deviceType: 'Light Sensor', status: 'Online', lastActive: '1 hour ago' },
    { id: 'DEV-MA11-006', location: 'Field A2', deviceType: 'Nutrient Sensor', status: 'Online', lastActive: '30 minutes ago' },
    { id: 'DEV-MA11-007', location: 'Greenhouse 2', deviceType: 'Actuator Valve', status: 'Offline', lastActive: '1 day ago' },
];

export const useDeviceManagementData = () => {
    const [devices, setDevices] = useState<Device[]>([]);
    const [summaryData, setSummaryData] = useState<DeviceSummaryData | null>(null);
    const [isLoading, setIsLoading] = useState(true);


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
    }, []);


    const fetchDeviceData = useCallback(async () => {
        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            const fetchedDevices = dummyBackendDevices; 

            setDevices(fetchedDevices);
            setSummaryData(calculateSummary(fetchedDevices));
        } catch (error) {
            console.error("Failed to fetch device data:", error);
            setDevices([]); 
            setSummaryData({ 
                totalDevices: 0,
                onlineDevices: 0,
                offlineDevices: 0,
                needsAttentionDevices: 0,
            });
        } finally {
            setIsLoading(false);
        }
    }, [calculateSummary]); 


    useEffect(() => {
        fetchDeviceData();
    }, [fetchDeviceData]); 


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const addDevice = useCallback((deviceData: any) => { 
        const newDevice: Device = {
            id: `DEV-NEW-${Date.now()}`, 
            location: deviceData.location,
            deviceType: deviceData.deviceType,
            status: 'Online', 
            lastActive: 'just now',
        };

        setDevices(prevDevices => {
            const updatedDevices = [...prevDevices, newDevice];
            setSummaryData(calculateSummary(updatedDevices)); 
            return updatedDevices;
        });


    }, [calculateSummary]);

    return { devices, summaryData, isLoading, fetchDeviceData, addDevice };
};