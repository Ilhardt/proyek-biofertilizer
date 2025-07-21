// src/components/adddevice.tsx
'use client';

import React from 'react';

/**
 * @file AddDevice.tsx
 * @description Komponen modal ini menyediakan antarmuka untuk menambahkan perangkat IoT baru.
 * Meskipun dirancang untuk tampilan dan form input, dalam versi pragmatis ini,
 * semua input hanya menggunakan nilai placeholder atau nilai default statis,
 * dan handler perubahan input/simpan (`handleInputChange`, `handleCapabilitiesChange`,
 * `handleCheckboxChange`, `handleSaveClick`) hanya mencatat ke konsol.
 * Modal ini menerima properti `isOpen` (untuk mengontrol visibilitas), `onClose` (untuk menutup modal),
 * dan `onSave` (handler dummy saat tombol simpan diklik).
 *
 * @example
 * // Penggunaan dalam komponen induk:
 * import AddDevice from '@/components/AddDevice';
 * // ...
 * <AddDevice isOpen={true} onClose={() => console.log('Close clicked')} onSave={(data) => console.log('Save clicked', data)} />
 */

export interface AddDeviceFormData {
    deviceName?: string;
    deviceType?: string;
    location?: string;
    capabilities?: string[];
    latitude?: string;
    longitude?: string;
    connectionProtocol?: string;
    initialStatus?: string;
    description?: string;
    isConnectionProtocolEnabled?: boolean;
}

interface AddDeviceProps {
    isOpen: boolean;
    onClose: () => void;
    onSave?: (formData: AddDeviceFormData) => void;
}

const AddDevice: React.FC<AddDeviceProps> = ({
    isOpen,
    onClose,
    onSave,
}) => {
    // Jika modal tidak terbuka, jangan render apa pun
    if (!isOpen) return null;

    // --- Handler Dummy untuk Input Formulir ---
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        console.log(`Input ${e.target.id} changed to:`, e.target.value);
    };

    const handleCapabilitiesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
        console.log("Capabilities changed to:", selectedOptions);
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Checkbox changed to:", e.target.checked);
    };

    const handleSaveClick = () => {
        if (onSave) {
            // Memanggil onSave dengan objek kosong sebagai placeholder untuk data formulir dummy
            onSave({});
        }
        console.log("Add Device button clicked (dummy handler)");
        // Dalam implementasi nyata, ini akan mengumpulkan data form dan mengirimkannya.
    };

    // --- Placeholder dan Nilai Default Statis untuk Input ---
    const deviceNamePlaceholder = "My Smart Sensor 1";
    const locationPlaceholder = "Field 1, Plot 3";
    const latitudePlaceholder = "e.g., -6.2088";
    const longitudePlaceholder = "e.g., 106.8456";

    const defaultDeviceType = "Soil Moisture Sensor";
    const defaultConnectionProtocol = "WiFi";
    const defaultInitialStatus = "Active";
    const defaultCapabilities: string[] = []; // Biarkan kosong atau tambahkan nilai default jika diinginkan
    const defaultIsConnectionProtocolEnabled = true;


    return (
        <div className="fixed inset-0 backdrop-brightness-50 flex items-center justify-center z-50 p-4 ">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
                <div className="flex items-center p-6 border-b border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        {/* SVG Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Tambahkan Perangkat IoT Baru</h2>
                        <p className="text-black text-sm">
                            Masukkan detail untuk perangkat pemantauan IoT baru untuk menambahkannya ke sistem Biofertilizer MA11 Anda.
                        </p>
                    </div>
                </div>

                {/* Bagian Formulir Input */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
                    <div className="col-span-2">
                        <label htmlFor="deviceName" className="block text-sm font-medium text-black mb-1">Nama Perangkat</label>
                        <input
                            type="text"
                            id="deviceName"
                            className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value="" // Nilai input selalu kosong
                            onChange={handleInputChange} // Menggunakan handler dummy
                            placeholder={deviceNamePlaceholder}
                        />
                    </div>

                    <div>
                        <label htmlFor="deviceType" className="block text-sm font-medium text-black mb-1">Tipe Perangkat</label>
                        <select
                            id="deviceType"
                            className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value={defaultDeviceType} // Menggunakan nilai default statis
                            onChange={handleInputChange} // Menggunakan handler dummy
                        >
                            <option>Sensor Kelembaban Tanah</option>
                            <option>pH Meter</option>
                            <option>Suhu/Kelembaban</option>
                            <option>Node Multi-Sensor</option>
                            <option>Sensor Nutrisi</option>
                            <option>Katup Aktuator</option>
                            <option>Sensor Cahaya</option>
                            <option>Konduktivitas Elektrik</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="deviceID" className="block text-sm font-medium text-black mb-1">ID Perangkat</label>
                        <input
                            type="text"
                            id="deviceID"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-black"
                            value="Akan dibuat otomatis"
                            readOnly
                        />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="location" className="block text-sm font-medium text-black mb-1">Lokasi</label>
                        <input
                            type="text"
                            id="location"
                            className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value=""
                            onChange={handleInputChange}
                            placeholder={locationPlaceholder}
                        />
                    </div>

                    <div>
                        <label htmlFor="capabilities" className="block text-sm font-medium text-black mb-1">Kapabilitas</label>
                        <select
                            id="capabilities"
                            multiple
                            className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-32 overflow-y-auto"
                            value={defaultCapabilities} // Menggunakan nilai default statis (array kosong)
                            onChange={handleCapabilitiesChange} // Menggunakan handler dummy
                        >
                            <option value="Moisture">Kelembaban</option>
                            <option value="pH Level">Tingkat pH</option>
                            <option value="Temperature">Suhu</option>
                            <option value="Humidity">Kelembaban</option>
                            <option value="Nitrogen">Nitrogen</option>
                            <option value="Phosphorus">Fosfor</option>
                            <option value="Potassium">Kalium</option>
                            <option value="Light">Cahaya</option>
                            <option value="EC">Konduktivitas Elektrik</option>
                        </select>
                        <p className="text-xs text-black mt-1">Tahan Ctrl/Cmd untuk memilih beberapa</p>
                    </div>

                    <div>
                        <label htmlFor="longitude" className="block text-sm font-medium text-black mb-1">Longitude</label>
                        <input
                            type="text"
                            id="longitude"
                            className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value=""
                            onChange={handleInputChange}
                            placeholder={longitudePlaceholder}
                        />
                        <label htmlFor="latitude" className="block text-sm font-medium text-black mt-4 mb-1">Latitude</label>
                        <input
                            type="text"
                            id="latitude"
                            className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value=""
                            onChange={handleInputChange}
                            placeholder={latitudePlaceholder}
                        />
                    </div>

                    <div className="col-span-2 flex items-center mt-2">
                        <input
                            type="checkbox"
                            id="connectionProtocolCheckbox"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            checked={defaultIsConnectionProtocolEnabled} // Menggunakan nilai default statis
                            onChange={handleCheckboxChange} // Menggunakan handler dummy
                        />
                        <label htmlFor="connectionProtocolCheckbox" className="ml-2 block text-sm font-medium text-black">Protokol Koneksi</label>
                    </div>

                    <div>
                        <label htmlFor="connectionProtocol" className="block text-sm font-medium text-black mb-1">Protokol Koneksi</label>
                        <select
                            id="connectionProtocol"
                            className={`mt-1 block w-full p-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 ${defaultIsConnectionProtocolEnabled ? '' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                            value={defaultConnectionProtocol} // Menggunakan nilai default statis
                            onChange={handleInputChange}
                            disabled={!defaultIsConnectionProtocolEnabled} // Status disabled berdasarkan nilai default
                        >
                            <option>WiFi</option>
                            <option>LoRaWAN</option>
                            <option>Seluler</option>
                            <option>Ethernet</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="initialStatus" className="block text-sm font-medium text-black mb-1">Status Awal</label>
                        <select
                            id="initialStatus"
                            className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value={defaultInitialStatus} // Menggunakan nilai default statis
                            onChange={handleInputChange}
                        >
                            <option>Aktif</option>
                            <option>Tidak Aktif</option>
                            <option>Perawatan</option>
                        </select>
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="description" className="block text-sm font-medium text-black mb-1">Deskripsi</label>
                        <textarea
                            id="description"
                            rows={3}
                            className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value="" // Nilai textarea selalu kosong
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                </div>

                {/* Bagian Tombol Aksi */}
                <div className="flex justify-end p-6 bg-gray-50 border-t border-gray-200 space-x-3">
                    <button
                        type="button"
                        className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                        onClick={onClose} // Menggunakan handler onClose dari props
                    >
                        Batal
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                        onClick={handleSaveClick} // Menggunakan handler dummy handleSaveClick
                    >
                        Tambah Perangkat
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddDevice;