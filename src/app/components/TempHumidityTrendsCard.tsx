/* eslint-disable @next/next/no-img-element */
// src/components/TempHumidityTrendsCard.tsx
'use client';

import React from 'react';

/**
 * @file TempHumidityTrendsCard.tsx
 * @description Komponen ini itu kartu yang didesain buat nampilin tren data suhu dan kelembaban.
 * Kayak komponen tren data lainnya, dia punya dua mode: kalo lagi *loading* (`isLoading` true),
 * bakal munculin pesan "Loading Temperature & Humidity Graph...", dan kalo udah selesai *loading*,
 * dia bakal nampilin gambar *placeholder* grafik. Ini masih kerangka ya, jadi belum ada
 * integrasi grafik dinamis yang beneran nampilin data suhu dan kelembaban dari props `data`.
 * @example <TempHumidityTrendsCard data={[{ time: '10:00', temperature: 25, humidity: 60 }]} isLoading={false} />
 */
// Anda bisa mendefinisikan tipe data untuk chart di sini atau di file types global jika ada
interface TempHumidityDataPoint {
    time: string; // atau Date
    temperature: number;
    humidity: number;
}

interface TempHumidityTrendsCardProps {
    data?: TempHumidityDataPoint[]; // Data untuk grafik (saat ini belum digunakan secara visual)
    isLoading: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TempHumidityTrendsCard: React.FC<TempHumidityTrendsCardProps> = ({ data, isLoading }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md h-80 flex items-center justify-center">
            {isLoading ? (
                // Tampilan saat data sedang dimuat
                <div className="text-gray-500 animate-pulse">
                    Loading Temperature & Humidity Graph...
                </div>
            ) : (
                // Tampilan setelah loading, menampilkan gambar placeholder grafik
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                    {/* Placeholder for the actual Temperature & Humidity Chart */}
                    <img src="/_next/static/media/image_00bdd7.png" alt="Temperature & Humidity Graph" className="max-w-full max-h-full object-contain" />
                    {/* Temperature & Humidity Graph (Placeholder) */}
                </div>
            )}
        </div>
    );
};

export default TempHumidityTrendsCard;