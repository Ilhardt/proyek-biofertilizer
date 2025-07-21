"use client";

import AlertCard from "./../components/AlertCard";
import AlertsHeader from "./../components/AlertsHeader"; // Import komponen header

/**
 * @file alerts/page.tsx
 * @description Halaman ini menampilkan daftar peringatan (alerts) kepada pengguna.
 * Komponen ini berfungsi sebagai wadah utama untuk menampilkan header peringatan (`AlertsHeader`)
 * dan beberapa kartu peringatan (`AlertCard`) yang disusun dalam tata letak vertikal.
 * @example <AlertsPage />
 */
const AlertsPage: React.FC = () => {

    return (
        <div className="flex-1 p-8 bg-gray-50 min-h-screen overflow-y-auto">
            {/* Menampilkan komponen header untuk halaman Alerts */}
            <AlertsHeader />

            {/* Wadah untuk menampung daftar AlertCard, dengan jarak antar kartu */}
            <div className="space-y-6">
                {/* Contoh AlertCard. Saat ini menggunakan instance AlertCard statis sebagai placeholder. */}
                <AlertCard />
                <AlertCard />
                <AlertCard />
            </div>
        </div>
    );
};

export default AlertsPage;