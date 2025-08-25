'use client';

import React, { useState, useEffect, useCallback } from 'react';
import DeviceManagementHeader from './../components/DeviceManagementHeader';
import DeviceSummaryCards from './../components/DeviceSummaryCards';
import ConnectedDevicesTable, { Device } from './../components/ConnectedDevicesTable';
import AddDeviceModal from './../components/AddDevice';
import { useDeviceManagementData } from './../hooks/useDeviceManagementData';

/**
 * @file device-management/page.tsx
 * @description Halaman Device Management ini adalah tempat buat ngatur semua perangkat IoT yang terhubung.
 * Di sini, kita bisa liat rangkuman status perangkat (`DeviceSummaryCards`), daftar lengkap perangkat
 * yang terhubung dalam bentuk tabel (`ConnectedDevicesTable`), dan yang paling penting, ada fungsionalitas
 * untuk nambahin perangkat baru via modal (`AddDeviceModal`). Ada juga fitur pencarian (`handleSearch`)
 * biar gampang nyari perangkat tertentu. Semua data perangkat dan logika *fetching* data dihandle
 * pake custom hook `useDeviceManagementData`, jadi kodenya rapi dan terpisah.
 * @example <DeviceManagementPage />
 */
export default function DeviceManagementPage() {
    // State buat ngontrol modal "Add Device" kebuka atau ketutup
    const [isModalOpen, setIsModalOpen] = useState(false);
    // State buat nyimpen daftar perangkat yang udah difilter hasil pencarian.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);

    // Ambil semua data dan fungsi dari custom hook useDeviceManagementData
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { devices, summaryData, isLoading, fetchDeviceData, addDevice } = useDeviceManagementData();

    // useEffect ini buat update filteredDevices kalo data devices dari hook berubah
    useEffect(() => {
        if (devices) {
            setFilteredDevices(devices);
        }
    }, [devices]);

    // Callback buat nanganin event pencarian. Ini penting biar fungsi nggak dibikin ulang tiap render
    const handleSearch = useCallback((searchTerm: string) => {
        console.log('Searching for:', searchTerm);
        if (!devices) {
            setFilteredDevices([]);
            return;
        }

        if (searchTerm === '') {
            setFilteredDevices(devices); // Kalau searchTerm kosong, tampilkan semua perangkat
        } else {
            const lowercasedSearchTerm = searchTerm.toLowerCase();
            const filtered = devices.filter(device => {
                // Filter perangkat berdasarkan ID, nama, lokasi, atau tipe perangkat
                const matchId = device.id?.toLowerCase().includes(lowercasedSearchTerm);
                const matchName = device.name?.toLowerCase().includes(lowercasedSearchTerm);
                const matchLocation = device.location?.toLowerCase().includes(lowercasedSearchTerm);
                const matchDeviceType = device.deviceType?.toLowerCase().includes(lowercasedSearchTerm);

                return matchId || matchName || matchLocation || matchDeviceType;
            });
            setFilteredDevices(filtered);
        }
    }, [devices]); // Dependencies: devices, biar callback di-recreate kalo devices berubah

    // Fungsi buat ngebuka modal "Add Device"
    const handleAddDeviceClick = () => {
        setIsModalOpen(true);
    };

    // Fungsi buat nutup modal "Add Device"
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Fungsi buat nyimpen data perangkat baru dan nutup modal
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSaveNewDevice = async (deviceData: any) => {
        console.log('New device data to save:', deviceData);
        await addDevice(deviceData); // Panggil fungsi addDevice dari hook
        alert(`Device "${deviceData.deviceName}" added!`); // Kasih notifikasi sederhana
        setIsModalOpen(false);
    };

    return (
        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
            {/* Header halaman Device Management, lengkap dengan search dan tombol tambah perangkat */}
            <DeviceManagementHeader
                onSearchChange={handleSearch}
                onAddDeviceClick={handleAddDeviceClick}
            />
            {/* Ringkasan status perangkat (Online, Offline, Total) */}
            <DeviceSummaryCards />

            {/* Tabel daftar perangkat yang terhubung */}
            <ConnectedDevicesTable />

            {/* Modal untuk menambahkan perangkat baru */}
            <AddDeviceModal
                isOpen={isModalOpen} // Status buka/tutup modal
                onClose={handleCloseModal} // Fungsi untuk menutup modal
                onSave={handleSaveNewDevice} // Fungsi untuk menyimpan data perangkat baru
            />
        </div>
    );
}