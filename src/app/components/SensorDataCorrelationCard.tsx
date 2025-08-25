import React from 'react';

/**
 * @file SensorDataCorrelationCard.tsx
 * @description Komponen ini adalah kartu yang disiapkan buat nampilin visualisasi
 * korelasi antar data sensor. Untuk sekarang, dia cuma punya judul "Sensor Data Correlation"
 * dan area kosong di tengah yang ada teks *placeholder* "Sensor Data Correlation Graph".
 * Jadi, ini tuh dasarnya cuma kerangka atau *layout* doang ya, belum ada implementasi
 * grafik korelasi data sensor yang dinamis.
 * @example <SensorDataCorrelationCard />
 */
const SensorDataCorrelationCard: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 h-96 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Sensor Data Correlation</h3>
            {/* Area ini disiapkan sebagai wadah untuk grafik korelasi data sensor.
                Saat ini hanya berupa placeholder teks. */}
            <div className="flex-grow flex items-center justify-center bg-gray-100 rounded-md">
                <p className="text-gray-500">Sensor Data Correlation Graph</p>
            </div>
        </div>
    );
};

export default SensorDataCorrelationCard;