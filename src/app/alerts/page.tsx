"use client";

import AlertCard from "./../components/AlertCard";
import AlertsHeader from "./../components/AlertsHeader"; // Import komponen header



const AlertsPage: React.FC = () => {

    return (
        <div className="flex-1 p-8 bg-gray-50 min-h-screen overflow-y-auto">
            <AlertsHeader
            />

            <div className="space-y-6">
                <AlertCard/>
                <AlertCard/>
                <AlertCard/>
            </div>
        </div>
    );
};

export default AlertsPage;