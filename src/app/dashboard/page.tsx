'use client';

import React from 'react';
import MetricCard from './../components/MetricCard';
import DeviceStatusCard from './../components/DeviceStatusCard';
import RecentAlertsCard from './../components/RecentAlertsCard';
import ProjectOverview from './../components/ProjectOverview';
import { useDashboardData, MetricData } from './../hooks/useDashboardData';
import SoilMoistureTrendsCard from './../components/SoilMoistureTrendsCard';
import TempHumidityTrendsCard from './../components/TempHumidityTrendsCard';

/**
 * @file dashboard/page.tsx
 * @description Halaman Dashboard ini adalah pusat kendali utama untuk sistem IoT Biofertilizer MA11.
 * Di sini, kita bisa liat rangkuman data sensor penting seperti kelembaban tanah, pH tanah, suhu,
 * dan kelembaban udara yang disajikan dalam bentuk kartu metrik interaktif. Selain itu, ada juga
 * visualisasi tren data kelembaban tanah dan suhu/kelembaban, status perangkat yang terhubung,
 * daftar peringatan terbaru, dan gambaran umum proyek. Semua data ini diambil menggunakan
 * hook `useDashboardData` dan komponen ini menangani kondisi *loading* serta data yang tidak tersedia
 * dengan baik, biar user tetap dapet *feedback* yang informatif.
 * @example <Dashboard />
 */

// Helper function buat render MetricCard, nanganin kondisi loading atau data kosong
const renderMetricCard = (data: MetricData | null, isLoading: boolean) => {
    if (isLoading) {
        return (
            <MetricCard
                title={data?.title || "Loading..."} // Kalau lagi loading, kasih judul "Loading..."
                value={"—"}
                unit=""
                range="Loading data..."
                indicatorColorClass="gray-400"
                needleRotationDegree={0}
                fillPercentage={0}
                iconType="generic"
                optimalRangeMin={0}
                optimalRangeMax={0}
                optimalRangeColor="gray-300"
            />
        );
    }
    if (!data || data.value === null) {
        return (
            <MetricCard
                title={data?.title || "Data Unavailable"} // Kalau data nggak ada, kasih judul "Data Unavailable"
                value={"N/A"}
                unit=""
                range="Data could not be loaded."
                indicatorColorClass="red-500" // Indikator merah kalau data nggak ada
                needleRotationDegree={0}
                fillPercentage={0}
                iconType="generic"
                optimalRangeMin={0}
                optimalRangeMax={0}
                optimalRangeColor="gray-300"
            />
        );
    }
    return (
        // Render MetricCard dengan data yang valid
        <MetricCard
            title={data.title}
            value={data.value.toFixed(data.unit === "" ? 1 : 0)} // Format nilai sesuai unit
            unit={data.unit}
            range={data.range}
            indicatorColorClass={data.indicatorColorClass}
            needleRotationDegree={data.needleRotationDegree!}
            fillPercentage={data.fillPercentage!}
            iconType={data.iconType}
            optimalRangeMin={data.optimalRangeMin}
            optimalRangeMax={data.optimalRangeMax}
            optimalRangeColor={data.optimalRangeColor}
        />
    );
};

export default function Dashboard() {
    // Ambil data dari custom hook useDashboardData
    const {
        soilMoisture, soilPh, temperature, humidity,
        devicesStatus, recentAlerts, projectOverview,
        isLoading
    } = useDashboardData();

    return (
        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Biofertilizer MA11 IoT Dashboard</h1>
            </header>

            {/* Bagian Metric Cards - Menampilkan ringkasan data sensor utama */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {renderMetricCard(soilMoisture, isLoading)}
                {renderMetricCard(soilPh, isLoading)}
                {renderMetricCard(temperature, isLoading)}
                {renderMetricCard(humidity, isLoading)}
            </div>

            {/* Bagian Trend Charts - Menampilkan grafik tren kelembaban dan suhu/kelembaban */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <SoilMoistureTrendsCard
                    data={[]} // Data masih kosong karena ini placeholder
                    isLoading={isLoading}
                />
                <TempHumidityTrendsCard
                    data={[]} // Data masih kosong karena ini placeholder
                    isLoading={isLoading}
                />
            </div>

            {/* Bagian Status Perangkat dan Peringatan Terbaru */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Device Status Card */}
                <DeviceStatusCard
                    devices={isLoading || !devicesStatus ? [] : devicesStatus} // Kirim data perangkat atau array kosong jika loading/tidak ada data
                    isLoading={isLoading}
                />
                {/* Recent Alerts Card */}
                <RecentAlertsCard
                    alerts={isLoading || !recentAlerts ? [] : recentAlerts} // Kirim data alerts atau array kosong jika loading/tidak ada data
                    isLoading={isLoading}
                />
            </div>

            {/* Project Overview Card */}
            {isLoading ? (
                // Tampilan loading untuk Project Overview
                <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Loading Project Overview...</h2>
                    <div className="h-40 bg-gray-200 rounded"></div>
                </div>
            ) : (
                // Tampilan Project Overview dengan data dari hook
                <ProjectOverview
                    imageSrc={projectOverview?.imageSrc || 'https://via.placeholder.com/300x200'}
                    title={projectOverview?.title || 'Project Overview'}
                    description={projectOverview?.description || 'A brief description of the project will appear here.'}
                    researchObjectives={projectOverview?.researchObjectives || ['No objectives defined yet.']}
                    sensorParameters={projectOverview?.sensorParameters || ['No parameters defined yet.']}
                />
            )}
        </div>
    );
}