"use client";

import AlertCard from "./../components/AlertCard";
import AlertsHeader from "./../components/AlertsHeader";
import { useDashboardData } from "../hooks/useDashboardData";

const AlertsPage: React.FC = () => {
    const { recentAlerts, isLoading } = useDashboardData();

    if (isLoading) {
        return (
            <div className="flex-1 p-8 bg-gray-50 min-h-screen flex items-center justify-center">
                <p className="text-gray-500 text-xl animate-pulse">Memuat peringatan...</p>
            </div>
        );
    }

    if (!recentAlerts || recentAlerts.length === 0) {
        return (
            <div className="flex-1 p-8 bg-gray-50 min-h-screen">
                <AlertsHeader />
                <div className="text-center text-gray-500 py-10">
                    Tidak ada peringatan terbaru saat ini.
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 p-8 bg-gray-50 min-h-screen overflow-y-auto">
            <AlertsHeader />
            <div className="space-y-6">
                {recentAlerts.map((alert) => (
                    <AlertCard
                        key={alert.id}
                        type={alert.type}
                        heading={alert.heading} // Ganti 'title' menjadi 'heading'
                        message={alert.message}
                        timestamp={alert.timestamp}
                        deviceId={alert.deviceId || "N/A"} // Tambahkan properti deviceId
                    />
                ))}
            </div>
        </div>
    );
};

export default AlertsPage;