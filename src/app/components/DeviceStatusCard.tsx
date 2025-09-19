import React from 'react';
import { FaBolt, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { DeviceData } from '../hooks/useDashboardData';

/**
 * @file DeviceStatusCard.tsx
 * @description Komponen ini menampilkan daftar perangkat dengan tombol On/Off yang dapat diklik.
 * Setiap item dalam daftar menunjukkan nama perangkat dan tombol status yang
 * berubah warna dan ikonnya berdasarkan status On atau Off. Komponen ini juga
 * menangani status loading dan data yang tidak tersedia.
 * @example <DeviceStatusCard devices={data} isLoading={loading} />
 */
interface DeviceStatusCardProps {
    devices: DeviceData[] | null;
    isLoading?: boolean;
}

const DeviceStatusCard: React.FC<DeviceStatusCardProps> = ({ devices, isLoading }) => {
    // Fungsi dummy untuk mensimulasikan aksi toggle
    const handleToggle = (id: string, currentStatus: 'Online' | 'Offline') => {
        console.log(`Device ${id} is toggled to ${currentStatus === 'Online' ? 'Offline' : 'Online'}`);
        // Di sini Anda akan menambahkan logika untuk mengirim permintaan ke backend
        // untuk mengubah status perangkat yang sebenarnya.
        alert(`Device ${id} is toggled!`);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Device Control</h2>
            {isLoading ? (
                // Tampilan loading
                <div className="text-gray-500 text-center py-8">Loading device data...</div>
            ) : (devices && devices.length > 0) ? (
                // Daftar perangkat
                <ul className="space-y-3">
                    {devices.map((device) => {
                        // Gunakan status 'Online'/'Offline' dari data DeviceData
                        const isOnline = device.status === 'Online';
                        return (
                            <li
                                key={device.id}
                                className="flex items-center justify-between text-gray-800 p-3 rounded-lg border border-gray-200"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="bg-blue-100 p-2 rounded-full">
                                        <FaBolt className="text-blue-500 h-5 w-5" />
                                    </div>
                                    <div>
                                        {/* Nama perangkat */}
                                        <p className="font-semibold text-lg">{device.name}</p>
                                    </div>
                                </div>
                                {/* Tombol On/Off */}
                                <button
                                    onClick={() => handleToggle(device.id, device.status)}
                                    className={`flex items-center px-4 py-2 rounded-full text-white transition-colors duration-200
                                        ${isOnline ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`
                                    }
                                >
                                    {isOnline ? (
                                        <>
                                            <FaToggleOn className="h-5 w-5 mr-2" />
                                            On
                                        </>
                                    ) : (
                                        <>
                                            <FaToggleOff className="h-5 w-5 mr-2" />
                                            Off
                                        </>
                                    )}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                // Tampilan jika tidak ada data
                <div className="text-gray-500 text-center py-8">No device data available.</div>
            )}
        </div>
    );
};

export default DeviceStatusCard;