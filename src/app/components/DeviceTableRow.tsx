import React from 'react';
import { FaChartLine, FaCog, FaTrash } from 'react-icons/fa';
import { Device } from './ConnectedDevicesTable';

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
        <tr key={device.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{device.id}</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{device.location}</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{device.deviceType}</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(device.status)}`}>
                    {device.status}
                </span>
            </td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{device.lastActive}</td><td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium flex items-center space-x-2">
                <button
                    onClick={() => onViewAnalytics(device.id)}
                    className="text-green-600 hover:text-green-900"
                    title="View Analytics"
                >
                    <FaChartLine className="h-5 w-5" />
                </button>
                <button
                    onClick={() => onEditDevice(device.id)}
                    className="text-indigo-600 hover:text-indigo-900"
                    title="Edit Device"
                >
                    <FaCog className="h-5 w-5" />
                </button>
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