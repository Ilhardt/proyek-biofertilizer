import React from 'react';

interface KeyInsightCardProps {
    icon: React.ReactNode; // 
    title: string;
    description: string;
}

const KeyInsightCard: React.FC<KeyInsightCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-start">
            <div className="text-2xl mb-3">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
};

export default KeyInsightCard;