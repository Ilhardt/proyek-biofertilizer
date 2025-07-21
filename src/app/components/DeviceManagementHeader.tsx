'use client';
import React from 'react';

/**
 * @file DeviceManagementHeader.tsx
 * @description Komponen ini itu bagian *header* buat halaman manajemen perangkat.
 * Isinya ada judul "Device Management", terus di sisi kanan ada *input search bar*
 * buat nyari perangkat, sama tombol "+ Add Device" buat nambah perangkat baru.
 * Komponen ini udah bisa terima fungsi beneran
 * lewat props `onSearchChange` (buat nangkep input search) dan `onAddDeviceClick`
 * (buat nanganin klik tombol tambah perangkat).
 * @example <DeviceManagementHeader onSearchChange={handleSearch} onAddDeviceClick={openAddModal} />
 */
interface DeviceManagementHeaderProps {
    onSearchChange?: (searchTerm: string) => void;
    onAddDeviceClick?: () => void;
}

const DeviceManagementHeader: React.FC<DeviceManagementHeaderProps> = ({
    onSearchChange,
    onAddDeviceClick,
}) => {
    return (
        <header className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Device Management</h1>
            <div className="flex items-center space-x-4">
                {/* Input search bar buat nyari perangkat.
                    Kalo ada perubahan di input, fungsi onSearchChange bakal dipanggil. */}
                <input
                    type="text text-"
                    placeholder="Search devices..."
                    className="p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => onSearchChange?.(e.target.value)}
                />
                {/* Tombol buat nambah perangkat baru.
                    Kalo diklik, fungsi onAddDeviceClick bakal jalan. */}
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    onClick={onAddDeviceClick}
                >
                    + Add Device
                </button>
            </div>
        </header>
    );
};

export default DeviceManagementHeader;