'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import AccountSettingsCard from './../components/AccountSettingsCard';
import NotificationSettingsCard from './../components/NotificationSettingsCard';
import SystemPreferencesCard from './../components/SystemPreferencesCard';

/**
 * @file settings/page.tsx
 * @description Halaman pengaturan ini adalah pusat di mana pengguna dapat mengelola
 * berbagai preferensi dan konfigurasi sistem mereka. Halaman ini terbagi menjadi
 * beberapa bagian utama yang diwakili oleh kartu-kartu pengaturan: pengaturan akun
 * (`AccountSettingsCard`), pengaturan notifikasi (`NotificationSettingsCard`),
 * dan preferensi sistem (`SystemPreferencesCard`). Saat ini, data yang diteruskan
 * ke kartu-kartu tersebut masih berupa placeholder array kosong, mengindikasikan
 * bahwa logika state dan fungsionalitas pengolahan data akan ditambahkan nanti.
 * @example <SettingsPage />
 */
export default function SettingsPage() {

    return (
        <div className="flex-1 p-6 bg-gray-100 min-h-[1200px] overflow-y-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">System Settings</h1>

            {/* Kartu Pengaturan Akun */}
            <AccountSettingsCard />

            {/* Kartu Pengaturan Notifikasi */}
            {/* Perhatikan bahwa props yang diberikan masih berupa array kosong,
                ini perlu diisi dengan state dan handler yang sebenarnya nanti */}
            <NotificationSettingsCard
                emailAlerts={[]} // Placeholder
                setEmailAlerts={[]} // Placeholder
                smsAlerts={[]} // Placeholder
                setSmsAlerts={[]} // Placeholder
                criticalAlertsOnly={[]} // Placeholder
                setCriticalAlertsOnly={[]} // Placeholder
            />

            {/* Kartu Preferensi Sistem */}
            {/* Sama seperti NotificationSettingsCard, props di sini juga placeholder */}
            <SystemPreferencesCard
                theme={[]} // Placeholder
                setTheme={[]} // Placeholder
                dataRefreshRate={[]} // Placeholder
                setDataRefreshRate={[]} // Placeholder
            />
        </div>
    );
}