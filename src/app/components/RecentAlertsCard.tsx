import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaExclamationCircle } from 'react-icons/fa'; 
import { Alert } from '../hooks/useDashboardData';

interface RecentAlertsCardProps {
    alerts: Alert[] | null;
    isLoading?: boolean;
}

const formatTimeAgo = (timestamp: string): string => {
    const now = new Date();
    const alertTime = new Date(timestamp);
    const diffMs = now.getTime() - alertTime.getTime();
    const diffHours = Math.round(diffMs / (1000 * 60 * 60));
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

    if (diffHours < 24) {
        if (diffHours === 0) return 'Less than an hour ago';
        return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else if (diffDays === 1) {
        return 'Yesterday';
    } else {
        return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    }
};

const RecentAlertsCard: React.FC<RecentAlertsCardProps> = ({ alerts, isLoading }) => {
    const getAlertStyle = (type: string) => {
        switch (type) {
            case 'Critical':
                return {
                    icon: <FaExclamationCircle className="text-red-500" />, 
                    bgColorClass: 'bg-red-50' 
                };
            case 'Warning':
                return {
                    icon: <FaExclamationTriangle className="text-yellow-500" />,
                    bgColorClass: 'bg-yellow-50' 
                };
            case 'Info':
                return {
                    icon: <FaCheckCircle className="text-green-500" />, 
                    bgColorClass: 'bg-green-50'
                };
            default:
                return {
                    icon: null,
                    bgColorClass: 'bg-gray-50'
                };
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Alerts</h2>
            {isLoading ? (
                <div className="text-gray-500 text-center py-8">Loading alerts...</div>
            ) : (alerts && alerts.length > 0) ? (
                <ul className="space-y-4">
                    {alerts.map((alert) => {
                        const { icon, bgColorClass } = getAlertStyle(alert.type);
                        return (
                            <li key={alert.id} className={`${bgColorClass} p-4 rounded-lg shadow-sm border border-gray-100`}>
                                <div className="flex items-center mb-1"> 
                                    <span className="mr-3 text-xl flex-shrink-0">{icon}</span> 
                                    <h3 className="font-semibold text-gray-800 text-base">{alert.heading}</h3>
                                </div>
                                <div className="text-sm text-gray-500 pl-8"> 
                                    <p>{alert.message}</p> 
                                    <p className="mt-1 text-xs">{formatTimeAgo(alert.timestamp)}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <div className="text-gray-500 text-center py-8">No recent alerts.</div>
            )}
        </div>
    );
};

export default RecentAlertsCard;