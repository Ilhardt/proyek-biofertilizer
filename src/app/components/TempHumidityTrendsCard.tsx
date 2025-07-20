/* eslint-disable @next/next/no-img-element */
// src/components/TempHumidityTrendsCard.tsx
'use client';

import React from 'react';

// Anda bisa mendefinisikan tipe data untuk chart di sini atau di file types global jika ada
interface TempHumidityDataPoint {
    time: string; // atau Date
    temperature: number;
    humidity: number;
}

interface TempHumidityTrendsCardProps {
    data?: TempHumidityDataPoint[]; // Data untuk grafik
    isLoading: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TempHumidityTrendsCard: React.FC<TempHumidityTrendsCardProps> = ({ data, isLoading }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md h-80 flex items-center justify-center">
            {isLoading ? (
                <div className="text-gray-500 animate-pulse">
                    Loading Temperature & Humidity Graph...
                </div>
            ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                    {/* Placeholder for the actual Temperature & Humidity Chart */}
                    {/* Di sini Anda akan mengintegrasikan komponen grafik seperti Recharts, Chart.js, dll. */}
                    {/* Contoh: <LineChart width={500} height={300} data={data}>...</LineChart> */}
                    <img src="/_next/static/media/image_00bdd7.png" alt="Temperature & Humidity Graph" className="max-w-full max-h-full object-contain" />
                    {/* Atau hanya teks placeholder jika Anda belum memiliki implementasi grafik */}
                    {/* Temperature & Humidity Graph (Placeholder) */}
                </div>
            )}
        </div>
    );
};

export default TempHumidityTrendsCard;