/* eslint-disable @next/next/no-img-element */
// src/components/SoilMoistureTrendsCard.tsx
'use client';

import React from 'react';

interface SoilMoistureDataPoint {
    time: string; 
    value: number;
}

interface SoilMoistureTrendsCardProps {
    data?: SoilMoistureDataPoint[]; 
    isLoading: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SoilMoistureTrendsCard: React.FC<SoilMoistureTrendsCardProps> = ({ data, isLoading }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md h-80 flex items-center justify-center">
            {isLoading ? (
                <div className="text-gray-500 animate-pulse">
                    Loading Soil Moisture Trends...
                </div>
            ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <img src="/_next/static/media/image_00bdd7.png" alt="Soil Moisture Trends Graph" className="max-w-full max-h-full object-contain" />
                </div>
            )}
        </div>
    );
};

export default SoilMoistureTrendsCard;