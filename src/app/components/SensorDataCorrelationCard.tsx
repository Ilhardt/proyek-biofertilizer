import React from 'react';

const SensorDataCorrelationCard: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 h-96 flex flex-col"> 
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Sensor Data Correlation</h3>
            <div className="flex-grow flex items-center justify-center bg-gray-100 rounded-md">
                
                <p className="text-gray-500">Sensor Data Correlation Graph</p>
            </div>
        </div>
    );
};

export default SensorDataCorrelationCard;