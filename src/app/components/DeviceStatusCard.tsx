import React from 'react';
import { FaBolt } from 'react-icons/fa';
import { DashboardDevice } from '../hooks/useDashboardData';

interface DeviceStatusCardProps {
    devices: DashboardDevice[] | null;
    isLoading?: boolean;
}

const DeviceStatusCard: React.FC<DeviceStatusCardProps> = ({ devices, isLoading }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Device Status</h2>
            {isLoading ? (
                <div className="text-gray-500 text-center py-8">Loading device status...</div>
            ) : (devices && devices.length > 0) ? (
                <ul className="space-y-3">
                    {devices.map((device) => (
                        <li key={device.id} className="flex items-center justify-between text-gray-800 p-3 rounded-lg border border-gray-200"> 
                            <div className="flex items-center space-x-3">
                                {/* Ikon Petir */}
                                <div className="bg-blue-100 p-2 rounded-full">
                                    <FaBolt className="text-blue-500 h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">
                                        {device.value !== undefined ? `${device.value.toFixed(1)}% ` : ''} 
                                        {device.name}
                                    </p>
                                    {device.description && (
                                        <p className="text-sm text-gray-500">{device.description}</p>
                                    )}
                                </div>
                            </div>
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
                <div className="text-gray-500 text-center py-8">No device data available.</div>
            )}
        </div>
    );
};

export default DeviceStatusCard;