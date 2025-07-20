import React from 'react';
import { FaCheckCircle, FaExclamationCircle, FaLaptop, FaTimesCircle } from "react-icons/fa";

interface SummaryCardProps {
    title: string;
    value?: number | string | null;
    icon?: React.ElementType;
    colorClass?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon: Icon, colorClass }) => {
    const displayValue = value === null || value === undefined ? '—' : value;

    let iconContainerBg = 'bg-gray-200';
    let iconContainerText = 'text-gray-700';
    let dotBg = 'bg-gray-400';

    if (colorClass) {
        const parts = colorClass.split('-');
        if (parts.length === 3) { 
            const baseColor = parts[1];
            const shade = parts[2];
            iconContainerBg = `bg-${baseColor}-${shade}`;
            iconContainerText = `text-${baseColor}-700`; 
            dotBg = colorClass;
        } else if (parts.length === 2) { 
            iconContainerBg = colorClass;
            iconContainerText = 'text-white';
            dotBg = colorClass;
        }
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
                <p className="text-lg text-gray-500">{title}</p>
                <p className="text-3xl font-bold text-gray-800">{displayValue}</p>
            </div>
            {Icon ? (
                <div className={`w-8 h-8 rounded-full ${iconContainerBg} ${iconContainerText} flex items-center justify-center`}>
                    <Icon className="h-5 w-5" />
                </div>
            ) : (
                colorClass && <div className={`w-4 h-4 rounded-full ${dotBg}`}></div>
            )}
        </div>
    );
};


const DeviceSummaryCards: React.FC = () => {
    const placeholderValue = '0'; 

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <SummaryCard
                title="Total Devices"
                value={placeholderValue} 
                icon={FaLaptop}
                colorClass="bg-blue-500"
            />
            <SummaryCard
                title="Online"
                value={placeholderValue} 
                icon={FaCheckCircle}
                colorClass="bg-green-500"
            />
            <SummaryCard
                title="Offline"
                value={placeholderValue} 
                icon={FaTimesCircle}
                colorClass="bg-red-500"
            />
            <SummaryCard
                title="Needs Attention"
                value={placeholderValue} 
                icon={FaExclamationCircle}
                colorClass="bg-yellow-500"
            />
        </div>
    );
};

export default DeviceSummaryCards;