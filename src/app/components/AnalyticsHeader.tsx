'use client';

import React from 'react';

/**
 * @file AnalyticsHeader.tsx
 * @description Komponen ini itu bagian *header* buat halaman analitik data kita, judulnya "Biofertilizer Data Analysis".
 * Di sebelah kanan, ada dropdown buat milih rentang waktu (kayak "Last 7 days") dan tombol "Export".
 * Fungsi-fungsi buat dropdown (`handleTimeRangeChangeDummy`) dan tombol export (`handleExportClickDummy`)
 * itu masih *dummy* ya, cuma buat *console log* atau *alert* pop-up doang. Jadi, ini bener-bener cuma komponen tampilan
 * yang belum ada logika pengambilan data atau export beneran. Dia nggak perlu props apa-apa alias *standalone*.
 * @example <AnalyticsHeader />
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AnalyticsHeaderProps {
}

const AnalyticsHeader: React.FC<AnalyticsHeaderProps> = () => {

    // Ini cuma variabel buat nampilin default pilihan di dropdown, belum nyambung ke state yang dinamis.
    const selectedTimeRange = 'Last 7 days';

    // Ini fungsi dummy buat nanggepin perubahan pilihan di dropdown rentang waktu.
    // Cuma nge-log ke konsol, nggak ngapa-ngapain data.
    const handleTimeRangeChangeDummy = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('Dummy: Time range change detected:', e.target.value);
    };

    // Fungsi dummy buat tombol export.
    // Bakal munculin alert pop-up kecil dan nge-log di konsol, tapi nggak ada proses export file.
    const handleExportClickDummy = () => {
        console.log('Dummy: Export button clicked.');
        alert('Dummy: Export button was clicked (no actual export).');
    };

    return (
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Biofertilizer Data Analysis</h1>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <select
                        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-blue-500 cursor-pointer"
                        value={selectedTimeRange}
                        onChange={handleTimeRangeChangeDummy}
                    >
                        <option>Last 24 hours</option>
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last 90 days</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15 9.707V7H5v2.707l4.293 4.293z" /></svg>
                    </div>
                </div>
                <button
                    onClick={handleExportClickDummy}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md inline-flex items-center cursor-pointer"
                >
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0V18z" /></svg>
                    Export
                </button>
            </div>
        </div>
    );
};

export default AnalyticsHeader;