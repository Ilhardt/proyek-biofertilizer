'use client'; 

import React from 'react';

/**
 * @file AlertsHeader.tsx
 * @description Ini tuh komponen buat bagian atas halaman "System Alerts" kita.
 * Isinya ada judul gede "System Alerts" sama sepasang kontrol di kanan:
 * dropdown buat milih tingkat keparahan (Severity) dan tombol "Filter".
 * Meskipun ada kontrolnya, fungsi buat ganti pilihan di dropdown (`handleSeverityChangeDummy`)
 * dan klik tombol filter (`handleFilterClickDummy`) itu masih dummy banget ya,
 * cuma buat nampilin log di konsol atau alert pop-up, jadi belum nge-filter data beneran.
 * Komponen ini nggak butuh props apa-apa, mandiri aja.
 * @example <AlertsHeader />
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AlertsHeaderProps {
}

const AlertsHeader: React.FC<AlertsHeaderProps> = () => {

    // Nilai ini cuma buat nampilin default di dropdown, belum dinamis dari state.
    const selectedOptions = 'All Severity';

    // Ini fungsi palsu buat nanggepin perubahan di dropdown severity.
    // Cuma nge-log ke konsol, belum ada efek lain.
    const handleSeverityChangeDummy = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('Dummy: Severity change detected:', e.target.value);
    };

    // Ini juga fungsi palsu buat tombol filter.
    // Bakal muncul alert kecil sama nge-log di konsol, tapi nggak beneran nge-filter apa-apa.
    const handleFilterClickDummy = () => {
        console.log('Dummy: Filter button clicked.');
        alert('Dummy: Filter button was clicked (no actual filtering).');
    };

    return (
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">System Alerts</h1>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <select
                        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500 cursor-pointer"
                        value={selectedOptions}
                        onChange={handleSeverityChangeDummy} 
                    >
                        <option>All Severity</option>
                        <option>Critical</option>
                        <option>Warning</option>
                        <option>Info</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15 9.707V7H5v2.707l4.293 4.293z" />
                        </svg>
                    </div>
                </div>
                <button
                    onClick={handleFilterClickDummy}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md inline-flex items-center cursor-pointer"
                >
                    <svg
                        className="fill-current w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                    >
                        <path
                            d="M19 3H5C3.58579 3 2.87868 3 2.43934 3.4122C2 3.8244 2 4.48782 2 5.81466V6.50448C2 7.54232 2 8.06124 2.25960 8.49142C2.51920 8.9216 2.99347 9.18858 3.94202 9.72255L6.85504 11.3624C7.49146 11.7206 7.80967 11.8998 8.03751 12.0976C8.51199 12.5095 8.80408 12.9935 8.93644 13.5872C9 13.8722 9 14.2058 9 14.8729L9 17.5424C9 18.452 9 18.9067 9.25192 19.2613C9.50385 19.6158 9.95128 19.7907 10.8462 20.1406C12.7248 20.875 13.6641 21.2422 14.3321 20.8244C15 20.4066 15 19.4519 15 17.5424V14.8729C15 14.2058 15 13.8722 15.0636 13.5872C15.1959 12.9935 15.4880 12.5095 15.9625 12.0976C16.1903 11.8998 16.5085 11.7206 17.1450 11.3624L20.0580 9.72255C21.0065 9.18858 21.4808 8.9216 21.7404 8.49142C22 8.06124 22 7.54232 22 6.50448V5.81466C22 4.48782 22 3.8244 21.5607 3.4122C21.1213 3 20.4142 3 19 3Z"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                        />
                    </svg>
                    Filter
                </button>
            </div>
        </div>
    );
};

export default AlertsHeader;