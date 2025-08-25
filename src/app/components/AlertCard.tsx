import React from 'react';

/**
 * @file AlertCard.tsx
 * @description Nah, komponen ini tuh semacam kartu notifikasi atau peringatan yang tampilannya udah siap pakai.
 * Dia bisa diatur tipenya ('critical', 'warning', 'info') buat ngubah warna dan ikonnya secara otomatis.
 * Penting nih, semua data di sini (judul, deskripsi, waktu, ID sensor, tipe perangkat) masih string kosong
 * alias cuma *placeholder* doang ya, jadi komponen ini cuma fokus ke tampilan UI-nya aja, belum ada data atau logika aslinya.
 * Intinya, ini komponen "dumb" buat display alert!
 * @example <AlertCard type="critical" />
 * @example <AlertCard type="warning" />
 * @example <AlertCard type="info" />
 * @example <AlertCard /> // Kalo gak diisi type, dia bakal jadi kosong
 */
interface AlertCardProps {
    type?: 'critical' | 'warning' | 'info';
}

const AlertCard: React.FC<AlertCardProps> = ({ type = '' }) => {
    // Variabel-variabel ini masih kosong, karena emang cuma buat dummy/pragmatis di awal.
    // Nanti kalo udah ada data beneran, ini diisi dari props atau state.
    const title = "";
    const description = "";
    const timeAgo = "";
    const sensorId = "";
    const deviceType = "";

    let icon: React.ReactNode;
    let borderColor: string;
    let textColor: string;

    // Logic buat nyesuaiin tampilan (warna border, warna teks, dan ikon SVG)
    // sesuai sama 'type' yang dikirim ke komponen ini.
    switch (type) {
        case 'critical':
            icon = (
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                </svg>
            );
            borderColor = 'border-red-400';
            textColor = 'text-red-700';
            break;
        case 'warning':
            icon = (
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.518A8.955 8.955 0 0110 3a8.955 8.955 0 011.743.518c.247.1.48.225.696.37l1.458-1.458a1 1 0 111.414 1.414l-1.458 1.458c.145.216.27.449.37.696A8.955 8.955 0 0117 10a8.955 8.955 0 01-.518 1.743c-.1.247-.225.48-.37.696l1.458 1.458a1 1 0 11-1.414 1.414l-1.458-1.458c-.216.145-.449.27-.696.37A8.955 8.955 0 0110 17a8.955 8.955 0 01-1.743-.518c-.247-.1-.48-.225-.696-.37l-1.458 1.458a1 1 0 11-1.414-1.414l1.458-1.458c-.145-.216-.27-.449-.37-.696A8.955 8.955 0 013 10a8.955 8.955 0 01.518-1.743c.1-.247.225-.48.37-.696L2.43 5.43a1 1 0 011.414-1.414l1.458 1.458c.216-.145.449-.27.696-.37A8.955 8.955 0 0110 3zM10 5a5 5 0 100 10 5 5 0 000-10z" clipRule="evenodd"></path>
                </svg>
            );
            borderColor = 'border-yellow-400';
            textColor = 'text-yellow-700';
            break;
        case 'info':
        default: // Kalo nggak ada type atau typenya aneh, default-nya jadi info
            icon = (
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
            );
            borderColor = 'border-blue-400';
            textColor = 'text-blue-700';
            break;
    }

    return (
        <div className={`bg-white border-l-4 ${borderColor} rounded-lg shadow-sm p-4 flex items-start space-x-4`}>
            <div className={`flex-shrink-0 ${textColor}`}>
                {icon}
            </div>
            <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
                <p className="text-gray-500 text-xs mt-1">
                    {timeAgo} - {deviceType} #{sensorId}
                </p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    );
};

export default AlertCard;