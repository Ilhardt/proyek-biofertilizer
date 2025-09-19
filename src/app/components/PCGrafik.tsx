/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

/**
 * @file PCGrafik.tsx
 * @description Komponen ini menampilkan sebuah kartu yang berisi gambar grafik.
 * Gambar grafik diambil dari URL yang diberikan melalui props. Komponen ini akan
 * menampilkan pesan loading jika data sedang dimuat, dan menampilkan gambar
 * grafik ketika URL tersedia. Jika tidak ada URL, komponen akan menampilkan
 * pesan bahwa grafik tidak tersedia.
 * @example <PCGrafik isLoading={false} graphUrl="https://i.imgur.com/6LFhAW0.png" />
 */

interface PCGrafikProps {
    isLoading: boolean;
    graphUrl: string | null;
}

const PCGrafik: React.FC<PCGrafikProps> = ({ isLoading, graphUrl }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Grafik</h2>
            {isLoading ? (
                <div className="text-gray-500 animate-pulse text-center py-8">
                    Loading Grafik...
                </div>
            ) : graphUrl ? (
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <img
                        src={graphUrl} // Menggunakan URL dari props
                        alt="Grafik Pertumbuhan Kecambah Kacang Hijau"
                        className="w-full object-contain" // Mengubah w-2/4 menjadi w-full agar lebih responsif
                    />
                </div>
            ) : (
                <div className="text-gray-500 text-center py-8">
                    Grafik tidak tersedia.
                </div>
            )}
        </div>
    );
};

export default PCGrafik;