import React from 'react';

/**
 * @file KeyInsightCard.tsx
 * @description Komponen ini tuh semacam kartu kecil yang didesain buat nampilin "insight" atau poin penting.
 * Setiap kartu bisa punya ikon (`icon`) di bagian atas, judul (`title`) yang jelas,
 * dan deskripsi singkat (`description`) buat ngejelasin insight-nya. Jadi, intinya
 * komponen ini fungsinya buat nyajiin informasi penting secara ringkas dan visual
 * biar gampang dicerna sama yang liat.
 * @example <KeyInsightCard icon={<FaLightbulb />} title="Optimalisasi Irigasi" description="Penghematan air hingga 20% dengan jadwal irigasi otomatis." />
 */
interface KeyInsightCardProps {
    icon: React.ReactNode; // Properti buat ikon, bisa dari library ikon atau SVG biasa
    title: string;
    description: string;
}

const KeyInsightCard: React.FC<KeyInsightCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-start">
            {/* Area untuk menampilkan ikon */}
            <div className="text-2xl mb-3">
                {icon}
            </div>
            {/* Judul insight */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            {/* Deskripsi singkat dari insight */}
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
};

export default KeyInsightCard;