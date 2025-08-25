import React from "react";

/**
 * @file AnalysisCard.tsx
 * @description Komponen ini itu kayak "wadah" kartu yang kece buat nampilin berbagai analisis atau data.
 * Dia punya judul wajib (`title`), terus ada juga tempat opsional buat nampilin nilai rata-rata (`averageValue`)
 * sama perubahan prediksi (`predictionChange`) yang bisa muncul di bagian atas kartu.
 * Nah, yang paling seru, dia bisa dimasukin konten apa aja (`children`) di tengah kartunya,
 * jadi bisa buat grafik, teks, atau komponen lain. Cocok banget buat visualisasi data!
 * @example <AnalysisCard title="Suhu Rata-rata" averageValue="25°C">...</AnalysisCard>
 * @example <AnalysisCard title="Prediksi Kelembaban" predictionChange="+5%">...</AnalysisCard>
 * @example <AnalysisCard title="Grafik Sensor" averageValue="123 Unit" predictionChange="-2%">...</AnalysisCard>
 */
interface AnalysisCardProps {
    title: string;
    averageValue?: string;
    predictionChange?: string;
    children: React.ReactNode;
}

const AnalysisCard: React.FC<AnalysisCardProps> = ({
    title,
    averageValue,
    predictionChange,
    children,
}) => {
    return (
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden h-96 flex flex-col">
            <div className="absolute inset-0 z-0">
                {/* Ini buat efek gradasi di background */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent/50 z-10"></div>
            </div>

            <div className="relative z-20 p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    {/* Ini muncul kalo ada averageValue */}
                    {averageValue && (
                        <span className="bg-purple-100 text-purple-700 text-sm font-medium px-2.5 py-0.5 rounded-full">
                            {averageValue}
                        </span>
                    )}
                    {/* Ini muncul kalo ada predictionChange */}
                    {predictionChange && (
                        <span className="bg-green-100 text-green-700 text-sm font-medium px-2.5 py-0.5 rounded-full">
                            {predictionChange}
                        </span>
                    )}
                </div>

                {/* Bagian ini buat nampilin konten utama di tengah kartu (children) */}
                <div className="flex-grow flex items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AnalysisCard;