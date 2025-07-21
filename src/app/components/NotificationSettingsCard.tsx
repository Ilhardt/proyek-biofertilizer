'use client';

import React from 'react';
import { FaBell } from 'react-icons/fa';

/**
 * @file NotificationSettingsCard.tsx
 * @description Komponen ini adalah kartu pengaturan notifikasi.
 * Di dalamnya ada tiga opsi utama: "Email Alerts", "SMS Alerts", dan "Critical Alerts Only",
 * masing-masing diwakili oleh sebuah checkbox. Komponen ini dirancang untuk stateless,
 * jadi dia menerima status `checked` dari parent-nya (`emailAlerts`, `smsAlerts`, `criticalAlertsOnly`)
 * dan juga fungsi `set` untuk setiap opsi (`setEmailAlerts`, `setSmsAlerts`, `setCriticalAlertsOnly`)
 * yang akan dipanggil ketika pengguna mengubah status checkbox. Ini bikin komponennya fleksibel
 * buat diintegrasiin sama state manajemen di parent.
 * @example <NotificationSettingsCard emailAlerts={isEmailOn} setEmailAlerts={setIsEmailOn} smsAlerts={isSmsOn} setSmsAlerts={setIsSmsOn} criticalAlertsOnly={isCriticalOnly} setCriticalAlertsOnly={setIsCriticalOnly} />
 */
interface NotificationSettingsCardProps {
    emailAlerts: boolean;
    setEmailAlerts: (checked: boolean) => void;
    smsAlerts: boolean;
    setSmsAlerts: (checked: boolean) => void;
    criticalAlertsOnly: boolean;
    setCriticalAlertsOnly: (checked: boolean) => void;
}

const NotificationSettingsCard: React.FC<NotificationSettingsCardProps> = ({
    emailAlerts,
    setEmailAlerts,
    smsAlerts,
    setSmsAlerts,
    criticalAlertsOnly,
    setCriticalAlertsOnly,
}) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                <FaBell className="mr-3 text-blue-600" /> Notification Settings
            </h2>
            <div className="space-y-3">
                {/* Checkbox untuk Email Alerts */}
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="emailAlerts"
                        className="h-4 w-4 text-blue-600 border-gray-300 cursor-pointer rounded focus:ring-blue-500"
                        checked={emailAlerts} // Status checked dari props
                        onChange={(e) => setEmailAlerts(e.target.checked)} // Panggil fungsi dari props saat berubah
                    />
                    <label htmlFor="emailAlerts" className="ml-2 block text-sm text-gray-700">
                        Email Alerts
                    </label>
                </div>
                {/* Checkbox untuk SMS Alerts */}
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="smsAlerts"
                        className="h-4 w-4 text-blue-600 border-gray-300 cursor-pointer rounded focus:ring-blue-500"
                        checked={smsAlerts} // Status checked dari props
                        onChange={(e) => setSmsAlerts(e.target.checked)} // Panggil fungsi dari props saat berubah
                    />
                    <label htmlFor="smsAlerts" className="ml-2 block text-sm text-gray-700">
                        SMS Alerts
                    </label>
                </div>
                {/* Checkbox untuk Critical Alerts Only */}
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="criticalAlertsOnly"
                        className="h-4 w-4 text-blue-600 border-gray-300 cursor-pointer rounded focus:ring-blue-500"
                        checked={criticalAlertsOnly} // Status checked dari props
                        onChange={(e) => setCriticalAlertsOnly(e.target.checked)} // Panggil fungsi dari props saat berubah
                    />
                    <label htmlFor="criticalAlertsOnly" className="ml-2 block text-sm text-gray-700">
                        Critical Alerts Only
                    </label>
                </div>
            </div>
        </div>
    );
};

export default NotificationSettingsCard;