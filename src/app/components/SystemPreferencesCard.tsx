'use client';

import React from 'react';
import { FaCog } from 'react-icons/fa';

interface SystemPreferencesCardProps {
    theme: string;
    setTheme: (theme: string) => void;
    dataRefreshRate: string;
    setDataRefreshRate: (rate: string) => void;
}

const SystemPreferencesCard: React.FC<SystemPreferencesCardProps> = ({
    theme,
    setTheme,
    dataRefreshRate,
    setDataRefreshRate,
}) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                <FaCog className="mr-3 text-blue-600" /> System Preferences
            </h2>
            <div className="mb-4">
                <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-1">
                    Theme
                </label>
                <div className="relative">
                    <select
                        id="theme"
                        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 cursor-pointer rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                    >
                        <option>Light</option>
                        <option>Dark</option>
                        <option>System Default</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15 9.707V7H5v2.707l4.293 4.293z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div>
                <label htmlFor="dataRefreshRate" className="block text-sm font-medium text-gray-700 mb-1">
                    Data Refresh Rate
                </label>
                <div className="relative">
                    <select
                        id="dataRefreshRate"
                        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 cursor-pointer rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        value={dataRefreshRate}
                        onChange={(e) => setDataRefreshRate(e.target.value)}
                    >
                        <option>5 seconds</option>
                        <option>30 seconds</option>
                        <option>1 minute</option>
                        <option>5 minutes</option>
                        <option>10 minutes</option>
                        <option>30 minutes</option>
                        <option>1 hour</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15 9.707V7H5v2.707l4.293 4.293z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemPreferencesCard;