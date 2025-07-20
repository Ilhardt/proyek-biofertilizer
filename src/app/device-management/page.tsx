'use client';

import React, { useState, useEffect, useCallback } from 'react';
import DeviceManagementHeader from './../components/DeviceManagementHeader';
import DeviceSummaryCards from './../components/DeviceSummaryCards';
import ConnectedDevicesTable, { Device } from './../components/ConnectedDevicesTable';
import AddDeviceModal from './../components/AddDevice';
import { useDeviceManagementData } from './../hooks/useDeviceManagementData';

export default function DeviceManagementPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { devices, summaryData, isLoading, fetchDeviceData, addDevice } = useDeviceManagementData();

    useEffect(() => {
        if (devices) {
            setFilteredDevices(devices);
        }
    }, [devices]);

    const handleSearch = useCallback((searchTerm: string) => {
        console.log('Searching for:', searchTerm);
        if (!devices) {
            setFilteredDevices([]);
            return;
        }

        if (searchTerm === '') {
            setFilteredDevices(devices);
        } else {
            const lowercasedSearchTerm = searchTerm.toLowerCase();
            const filtered = devices.filter(device => {
                const matchId = device.id?.toLowerCase().includes(lowercasedSearchTerm);
                const matchName = device.name?.toLowerCase().includes(lowercasedSearchTerm);
                const matchLocation = device.location?.toLowerCase().includes(lowercasedSearchTerm);
                const matchDeviceType = device.deviceType?.toLowerCase().includes(lowercasedSearchTerm);

                return matchId || matchName || matchLocation || matchDeviceType;
            });
            setFilteredDevices(filtered);
        }
    }, [devices]);

    const handleAddDeviceClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSaveNewDevice = async (deviceData: any) => {
        console.log('New device data to save:', deviceData);
        await addDevice(deviceData);
        alert(`Device "${deviceData.deviceName}" added!`);
        setIsModalOpen(false);
    };

    return (
        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
            <DeviceManagementHeader
                onSearchChange={handleSearch}
                onAddDeviceClick={handleAddDeviceClick}
            />
            <DeviceSummaryCards/>

            <ConnectedDevicesTable/>

            <AddDeviceModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveNewDevice}
            />
        </div>
    );
}