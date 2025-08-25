import React from 'react';
import { FaBolt } from 'react-icons/fa';
import { DashboardDevice } from '../hooks/useDashboardData';

/**
 * @file DeviceStatusCard.tsx
 * @description Komponen ini nampilin ringkasan status dari berbagai perangkat.
 * Dia nerima data perangkat (`devices`) yang bisa kosong atau lagi *loading* (`isLoading`).
 * Setiap perangkat bakal muncul dalam daftar dengan ikon petir, nama, deskripsi (opsional),
 * dan statusnya (Online, Offline, atau Calibration Needed) yang dikasih warna beda-beda biar gampang diliat.
 * Kalo lagi *loading* atau nggak ada data, ada pesan yang muncul.
 * @example <DeviceStatusCard devices={data} isLoading={loading} />
 */
interface DeviceStatusCardProps {
    devices: DashboardDevice[] | null;
    isLoading?: boolean;
}

const DeviceStatusCard: React.FC<DeviceStatusCardProps> = ({ devices, isLoading }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Device Status</h2>
            {isLoading ? (
                // Kalo lagi loading, munculin pesan ini
                <div className="text-gray-500 text-center py-8">Loading device status...</div>
            ) : (devices && devices.length > 0) ? (
                // Kalo devices ada isinya, loop dan tampilkan status masing-masing perangkat
                <ul className="space-y-3">
                    {devices.map((device) => (
                        <li key={device.id} className="flex items-center justify-between text-gray-800 p-3 rounded-lg border border-gray-200">
                            <div className="flex items-center space-x-3">
                                {/* Ikon Petir sebagai indikator visual */}
                                <div className="bg-blue-100 p-2 rounded-full">
                                    <FaBolt className="text-blue-500 h-5 w-5" />
                                </div>
                                <div>
                                    {/* Nama perangkat dan nilainya (kalau ada) */}
                                    <p className="font-semibold text-lg">
                                        {device.value !== undefined ? `${device.value.toFixed(1)}% ` : ''}
                                        {device.name}
                                    </p>
                                    {/* Deskripsi perangkat (opsional) */}
                                    {device.description && (
                                        <p className="text-sm text-gray-500">{device.description}</p>
                                    )}
                                </div>
                            </div>
                            {/* Status perangkat dengan warna yang disesuaikan */}
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold
                                ${device.status === 'Online' ? 'bg-green-100 text-green-800' :
                                    device.status === 'Offline' ? 'bg-red-100 text-red-800' :
                                        'bg-yellow-100 text-yellow-800'}`
                            }>
                                {device.status}
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                // Kalo nggak ada data perangkat, munculin pesan ini
                <div className="text-gray-500 text-center py-8">No device data available.</div>
            )}
        </div>
    );
};

export default DeviceStatusCard;