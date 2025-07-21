import React from 'react';

/**
 * @file FieldHealthStatusCard.tsx
 * @description Komponen ini itu kartu khusus buat nampilin visualisasi status kesehatan lahan.
 * Saat ini, dia cuma punya judul "Field Health Status" di bagian atas dan area kosong
 * di tengah yang ada tulisan "Field Health Status Visualization" sebagai *placeholder*.
 * Jadi, ini intinya cuma *layout* dasar aja ya, belum ada grafik atau data beneran
 * yang dinamis buat nunjukkin kondisi kesehatan lahan.
 * @example <FieldHealthStatusCard />
 */
const FieldHealthStatusCard: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 h-96 flex flex-col"> 
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Field Health Status</h3>
            {/* Area ini disiapkan sebagai wadah untuk visualisasi status kesehatan lahan.
                Saat ini hanya berupa placeholder teks. */}
            <div className="flex-grow flex items-center justify-center bg-gray-100 rounded-md">
                <p className="text-gray-500">Field Health Status Visualization</p>
            </div>
        </div>
    );
};

export default FieldHealthStatusCard;