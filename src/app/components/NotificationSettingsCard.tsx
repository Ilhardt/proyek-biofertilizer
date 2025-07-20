'use client';

import React from 'react';
import { FaBell } from 'react-icons/fa';

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
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="emailAlerts"
                        className="h-4 w-4 text-blue-600 border-gray-300 cursor-pointer rounded focus:ring-blue-500"
                        checked={emailAlerts}
                        onChange={(e) => setEmailAlerts(e.target.checked)}
                    />
                    <label htmlFor="emailAlerts" className="ml-2 block text-sm text-gray-700">
                        Email Alerts
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="smsAlerts"
                        className="h-4 w-4 text-blue-600 border-gray-300 cursor-pointer rounded focus:ring-blue-500"
                        checked={smsAlerts}
                        onChange={(e) => setSmsAlerts(e.target.checked)}
                    />
                    <label htmlFor="smsAlerts" className="ml-2 block text-sm text-gray-700">
                        SMS Alerts
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="criticalAlertsOnly"
                        className="h-4 w-4 text-blue-600 border-gray-300 cursor-pointer rounded focus:ring-blue-500"
                        checked={criticalAlertsOnly}
                        onChange={(e) => setCriticalAlertsOnly(e.target.checked)}
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