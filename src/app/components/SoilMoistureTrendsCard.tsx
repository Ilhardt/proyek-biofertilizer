/* eslint-disable @next/next/no-img-element */
// src/components/SoilMoistureTrendsCard.tsx
'use client';

import React from 'react';

/**
 * @file SoilMoistureTrendsCard.tsx
 * @description Komponen ini itu kartu yang didesain buat nampilin tren data kelembaban tanah.
 * Saat ini, dia punya dua kondisi: kalo lagi *loading* (`isLoading` true), bakal muncul pesan "Loading Soil Moisture Trends...",
 * dan kalo udah selesai *loading* (atau `isLoading` false), dia bakal nampilin gambar *placeholder*
 * grafik tren kelembaban tanah. Jadi, ini masih berupa kerangka visual ya, belum ada integrasi
 * grafik dinamis yang beneran nampilin data `data` yang dikirim lewat props.
 * @example <SoilMoistureTrendsCard data={[{ time: '10:00', value: 50 }]} isLoading={false} />
 */
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
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
            {isLoading ? (
                <div className="text-gray-500 animate-pulse">
                    Loading Soil Moisture Trends...
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center text-gray-400 w-full h-full">
                    {/* Mengatur gambar untuk mengisi seluruh kontainer */}
                    <img
                        src="https://i.imgur.com/6LFhAW0.png" // Mengganti URL gambar untuk placeholder yang lebih baik
                        alt="Soil Moisture Trends Graph"
                        className="w-250 h-150 object-contain"
                    />
                </div>
            )}
        </div>
    );
};

export default SoilMoistureTrendsCard;