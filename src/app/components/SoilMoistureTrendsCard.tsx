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
    data?: SoilMoistureDataPoint[]; // Data kelembaban tanah (saat ini belum digunakan secara visual)
    isLoading: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SoilMoistureTrendsCard: React.FC<SoilMoistureTrendsCardProps> = ({ data, isLoading }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md h-80 flex items-center justify-center">
            {isLoading ? (
                // Tampilan saat data sedang dimuat
                <div className="text-gray-500 animate-pulse">
                    Loading Soil Moisture Trends...
                </div>
            ) : (
                // Tampilan setelah loading, menampilkan gambar placeholder grafik
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                    {/* Gambar placeholder untuk grafik tren kelembaban tanah */}
                    <img src="/_next/static/media/image_00bdd7.png" alt="Soil Moisture Trends Graph" className="max-w-full max-h-full object-contain" />
                </div>
            )}
        </div>
    );
};

export default SoilMoistureTrendsCard;