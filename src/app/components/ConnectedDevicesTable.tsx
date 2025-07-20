'use client'; 

import React from 'react';
import { FaChartLine, FaCog, FaTrash } from 'react-icons/fa';

export interface Device {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
    id: string;
    location: string;
    deviceType?: string;
    status: 'Online' | 'Offline' | 'Calibration Needed';
    lastActive: string;
}


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ConnectedDevicesTableProps {
}

const ConnectedDevicesTable: React.FC<ConnectedDevicesTableProps> = () => {
    const devicesToDisplay: Device[] = []; 

    const handleDummyClick = (action: string, id?: string) => {
        console.log(`Dummy: ${action} action triggered for ${id || 'table'}`);
        alert(`Dummy: ${action} action for ${id || 'table'} executed!`);
    };

    const getStatusClasses = (status: Device['status']) => {
        switch (status) {
            case 'Online':
                return 'bg-green-100 text-green-800';
            case 'Offline':
                return 'bg-red-100 text-red-800';
            case 'Calibration Needed':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-700">Connected IoT Devices</h2>
                <div className="flex space-x-2">
                    <button
                        className="flex items-center px-3 py-1 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleDummyClick('Filter')} 
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-1.447.894L8 14.07V11.414L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                        </svg>
                        Filter
                    </button>
                    <button
                        className="flex items-center px-3 py-1 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleDummyClick('Sort')} 
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                        </svg>
                        Sort
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Device ID
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Device Type
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Last Active
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {devicesToDisplay.length > 0 ? (
                            devicesToDisplay.map((device) => (
                                <tr key={device.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {device.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {device.location}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {device.deviceType}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(device.status)}`}>
                                            {device.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {device.lastActive}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex space-x-2">
                                            <button
                                                className="text-blue-600 hover:text-blue-900"
                                                onClick={() => handleDummyClick('View Analytics', device.id)}
                                            >
                                                <FaChartLine className="h-5 w-5" />
                                            </button>
                                            <button
                                                className="text-gray-600 hover:text-indigo-900"
                                                onClick={() => handleDummyClick('Edit Device', device.id)}
                                            >
                                                <FaCog className="h-5 w-5" />
                                            </button>
                                            <button
                                                className="text-red-600 hover:text-red-900"
                                                onClick={() => handleDummyClick('Delete Device', device.id)}
                                            >
                                                <FaTrash className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                                    No devices found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <nav
                className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                aria-label="Pagination"
            >
                <div className="hidden sm:block">
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">0</span> to <span className="font-medium">0</span> of{' '}
                        <span className="font-medium">0</span> results
                    </p>
                </div>
                <div className="flex-1 flex justify-between sm:justify-end">
                    <button
                        onClick={() => handleDummyClick('Previous Page')}
                        disabled={true} 
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => handleDummyClick('Next Page')}
                        disabled={true}
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                        Next
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default ConnectedDevicesTable;