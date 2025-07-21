import React from 'react';
import { FaCheckCircle, FaExclamationCircle, FaLaptop, FaTimesCircle } from "react-icons/fa";

/**
 * @file DeviceSummaryCards.tsx
 * @description Di file ini ada dua komponen nih: `SummaryCard` dan `DeviceSummaryCards`.
 * `SummaryCard` itu komponen kecil buat nampilin ringkasan data, punya judul, nilai (bisa kosong),
 * ikon, sama kelas warna buat kustomisasi. Kalo warnanya dimasukin, ikonnya bisa punya background warna sesuai
 * biar keliatan lebih hidup, kalo enggak, munculnya cuma dot warna aja.
 * Nah, si `DeviceSummaryCards` ini yang nampilin 4 `SummaryCard` sekaligus buat ringkasan status perangkat (Total, Online, Offline, Needs Attention),
 * tapi inget ya, semua nilainya itu masih `0` alias *placeholder* doang, belum data beneran.
 * Ini cuma buat *layouting* dan tampilan awal aja.
 * @example <DeviceSummaryCards />
 */
interface SummaryCardProps {
    title: string;
    value?: number | string | null;
    icon?: React.ElementType;
    colorClass?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon: Icon, colorClass }) => {
    // Kalo value-nya null atau undefined, dia bakal nampilin strip ("—")
    const displayValue = value === null || value === undefined ? '—' : value;

    // Default class buat ikon dan dot
    let iconContainerBg = 'bg-gray-200';
    let iconContainerText = 'text-gray-700';
    let dotBg = 'bg-gray-400';

    // Logic buat nentuin warna background dan teks ikon berdasarkan colorClass yang dikasih.
    // Ini agak tricky karena ada dua format colorClass yang dihandle.
    if (colorClass) {
        const parts = colorClass.split('-');
        if (parts.length === 3) { // Contoh: "bg-blue-500"
            const baseColor = parts[1];
            const shade = parts[2];
            iconContainerBg = `bg-${baseColor}-${shade}`;
            iconContainerText = `text-${baseColor}-700`;
            dotBg = colorClass;
        } else if (parts.length === 2) { // Contoh: "bg-blue"
            iconContainerBg = colorClass;
            iconContainerText = 'text-white'; // Default text-white kalo cuma ada base color
            dotBg = colorClass;
        }
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
                <p className="text-lg text-gray-500">{title}</p>
                <p className="text-3xl font-bold text-gray-800">{displayValue}</p>
            </div>
            {Icon ? (
                // Kalo ada ikon, tampilkan ikon di dalam lingkaran berwarna
                <div className={`w-8 h-8 rounded-full ${iconContainerBg} ${iconContainerText} flex items-center justify-center`}>
                    <Icon className="h-5 w-5" />
                </div>
            ) : (
                // Kalo nggak ada ikon tapi ada colorClass, tampilkan dot berwarna
                colorClass && <div className={`w-4 h-4 rounded-full ${dotBg}`}></div>
            )}
        </div>
    );
};

// Ini komponen utama yang nampilin kumpulan SummaryCard
const DeviceSummaryCards: React.FC = () => {
    // Ini cuma nilai placeholder, semua angkanya masih 0.
    const placeholderValue = '0';

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <SummaryCard
                title="Total Devices"
                value={placeholderValue}
                icon={FaLaptop}
                colorClass="bg-blue-500"
            />
            <SummaryCard
                title="Online"
                value={placeholderValue}
                icon={FaCheckCircle}
                colorClass="bg-green-500"
            />
            <SummaryCard
                title="Offline"
                value={placeholderValue}
                icon={FaTimesCircle}
                colorClass="bg-red-500"
            />
            <SummaryCard
                title="Needs Attention"
                value={placeholderValue}
                icon={FaExclamationCircle}
                colorClass="bg-yellow-500"
            />
        </div>
    );
};

export default DeviceSummaryCards;