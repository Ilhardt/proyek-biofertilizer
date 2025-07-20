'use client';
import React from 'react';

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
                <input
                    type="text text-"
                    placeholder="Search devices..."
                    className="p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => onSearchChange?.(e.target.value)}
                />
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