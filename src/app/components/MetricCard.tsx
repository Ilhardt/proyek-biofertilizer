import React from 'react';
import { FaTint, FaFlask, FaThermometerHalf, FaCloudRain } from 'react-icons/fa';

/**
 * @file MetricCard.tsx
 * @description Komponen ini itu kartu khusus buat nampilin satu metrik data penting,
 * kayak kelembaban, pH, suhu, atau kelembaban udara. Dia punya judul, nilai, unit,
 * rentang, dan bahkan indikator warna. Dia juga ada elemen visual
 * kayak jarum indikator (`needleRotationDegree`) dan persentase pengisian (`fillPercentage`)
 * yang bisa diatur, serta ikon yang berubah sesuai tipe metriknya. Ada juga area
 * visual buat nunjukkin rentang optimalnya.
 * @example <MetricCard title="Kelembaban Tanah" value={65} unit="%" range="Normal" indicatorColorClass="green-500" needleRotationDegree={120} fillPercentage={65} iconType="moisture" optimalRangeMin={40} optimalRangeMax={70} optimalRangeColor="green-300" />
 */
interface MetricCardProps {
    title: string;
    value: number | string;
    unit: string;
    range: string;
    indicatorColorClass: string;
    needleRotationDegree: number | null;
    fillPercentage: number | null;
    iconType: 'moisture' | 'ph' | 'temperature' | 'humidity' | 'generic';
    optimalRangeMin: number;
    optimalRangeMax: number;
    optimalRangeColor: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
    title, value, unit, range, indicatorColorClass,
    needleRotationDegree, fillPercentage, iconType,
    optimalRangeMin, optimalRangeMax, optimalRangeColor
}) => {
    // Fungsi ini buat nentuin ikon yang mau ditampilin berdasarkan `iconType`.
    const getIcon = (type: string) => {
        switch (type) {
            case 'moisture': return <FaTint className={`h-8 w-8 text-${indicatorColorClass}`} />;
            case 'ph': return <FaFlask className={`h-8 w-8 text-${indicatorColorClass}`} />;
            case 'temperature': return <FaThermometerHalf className={`h-8 w-8 text-${indicatorColorClass}`} />;
            case 'humidity': return <FaCloudRain className={`h-8 w-8 text-${indicatorColorClass}`} />;
            default: return <div className={`h-8 w-8 bg-gray-400 rounded-full flex items-center justify-center text-white`}>?</div>;
        }
    };

    // Ini nilai rotasi jarum indikator, kalo needleRotationDegree null, defaultnya 0.
    const currentNeedleRotation = needleRotationDegree !== null ? needleRotationDegree : 0;
    // Ini nilai persentase pengisian, kalo fillPercentage null, defaultnya 0.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const currentFillPercentage = fillPercentage !== null ? fillPercentage : 0;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
            {/* Ini area buat indikator visual seperti gauge atau bar */}
            <div className="relative w-32 h-16 overflow-hidden mb-4">
                {/* Ini layer buat nunjukkin rentang optimal */}
                <div className="absolute inset-x-0 bottom-0 h-16 rounded-t-full"
                    style={{
                        background: `linear-gradient(to right, ${optimalRangeColor} ${optimalRangeMin}%, transparent ${optimalRangeMin}%, transparent ${optimalRangeMax}%, ${optimalRangeColor} ${optimalRangeMax}%)`
                    }}
                ></div>
                {/* Ini layer background gauge */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gray-200 rounded-t-full"></div>
                {/* Ini layer buat mengisi gauge (mungkin untuk visualisasi fillPercentage, tapi saat ini dengan gradient dummy) */}
                <div className={`absolute inset-x-0 bottom-0 h-16 rounded-t-full opacity-70`}
                    style={{
                        background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                        '--tw-gradient-from': indicatorColorClass.includes('red') ? '#ef4444' : indicatorColorClass.includes('green') ? '#22c55e' : indicatorColorClass.includes('yellow') ? '#eab308' : '#6b7280', // Contoh mapping warna Tailwind ke CSS variable
                        '--tw-gradient-to': 'rgba(255,255,255,0)'
                    } as React.CSSProperties}
                ></div>

                {/* Ini jarum indikator yang rotasinya diatur oleh currentNeedleRotation */}
                <div className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-gray-800 origin-bottom-left transition-transform duration-500"
                    style={{
                        transform: `translateX(-50%) translateY(-50%) rotate(${currentNeedleRotation - 90}deg)`,
                        transformOrigin: 'bottom center',
                    }}
                ></div>
            </div>
            {/* Nilai metrik dan unitnya */}
            <p className="text-4xl font-bold text-gray-900 mb-1">{value}{unit}</p>
            {/* Rentang nilai metrik */}
            <p className="text-sm text-gray-500 mb-3">{range}</p>
            {/* Ikon metrik yang tampil berdasarkan type */}
            {getIcon(iconType)}
        </div>
    );
};

export default MetricCard;