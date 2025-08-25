import React from 'react';
import { FaChartLine, FaCog, FaTrash } from 'react-icons/fa';
import { Device } from './ConnectedDevicesTable';

/**
 * @file DeviceTableRow.tsx
 * @description Komponen ini itu ibaratnya satu baris data di tabel perangkat IoT.
 * Dia bertugas nampilin detail satu perangkat (ID, lokasi, tipe, status, terakhir aktif)
 * dan juga nyediain tombol-tombol aksi kayak "View Analytics", "Edit Device", sama "Delete Device"
 * yang kalo diklik bakal manggil fungsi yang dikirim dari parent-nya. Jadi, komponen ini
 * fokusnya cuma nampilin satu baris data dengan rapi dan responsif terhadap aksi pengguna.
 * @example <DeviceTableRow device={myDevice} getStatusClasses={myStatusFunc} onViewAnalytics={handleView} onEditDevice={handleEdit} onDeleteDevice={handleDelete} />
 */
interface DeviceTableRowProps {
    device: Device;
    getStatusClasses: (status: Device['status']) => string;
    onViewAnalytics: (deviceId: string) => void;
    onEditDevice: (deviceId: string) => void;
    onDeleteDevice: (deviceId: string) => void;
}

const DeviceTableRow: React.FC<DeviceTableRowProps> = ({
    device,
    getStatusClasses,
    onViewAnalytics,
    onEditDevice,
    onDeleteDevice,
}) => {
    return (
        // Baris tabel untuk satu perangkat, key-nya pakai device.id
        <tr key={device.id}>
            {/* Kolom Device ID */}
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{device.id}</td>
            {/* Kolom Lokasi */}
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{device.location}</td>
            {/* Kolom Tipe Perangkat */}
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{device.deviceType}</td>
            {/* Kolom Status dengan badge berwarna sesuai statusnya */}
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(device.status)}`}>
                    {device.status}
                </span>
            </td>
            {/* Kolom Last Active */}
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{device.lastActive}</td>
            {/* Kolom Actions: Tombol View Analytics, Edit, dan Delete */}
            <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium flex items-center space-x-2">
                {/* Tombol View Analytics */}
                <button
                    onClick={() => onViewAnalytics(device.id)}
                    className="text-green-600 hover:text-green-900"
                    title="View Analytics"
                >
                    <FaChartLine className="h-5 w-5" />
                </button>
                {/* Tombol Edit Device */}
                <button
                    onClick={() => onEditDevice(device.id)}
                    className="text-indigo-600 hover:text-indigo-900"
                    title="Edit Device"
                >
                    <FaCog className="h-5 w-5" />
                </button>
                {/* Tombol Delete Device */}
                <button
                    onClick={() => onDeleteDevice(device.id)}
                    className="text-red-600 hover:text-red-900"
                    title="Delete Device"
                >
                    <FaTrash className="h-5 w-5" />
                </button>
            </td>
        </tr>
    );
};

export default DeviceTableRow;