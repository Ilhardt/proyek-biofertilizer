import React from 'react';
import { FaTint, FaFlask, FaThermometerHalf, FaCloudRain } from 'react-icons/fa';

interface MetricCardProps {
    title: string;
    value: number | string; 
    unit: string;
    range: string;
    indicatorColorClass: string;
    needleRotationDegree: number | null; 
    fillPercentage: number | null; 
    iconType: 'moisture' | 'ph' | 'temperature' | 'humidity' | 'generic'; 
    optimalRangeMin: number;
    optimalRangeMax: number;
    optimalRangeColor: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
    title, value, unit, range, indicatorColorClass,
    needleRotationDegree, fillPercentage, iconType,
    optimalRangeMin, optimalRangeMax, optimalRangeColor
}) => {
    const getIcon = (type: string) => {
        switch (type) {
            case 'moisture': return <FaTint className={`h-8 w-8 text-${indicatorColorClass}`} />;
            case 'ph': return <FaFlask className={`h-8 w-8 text-${indicatorColorClass}`} />;
            case 'temperature': return <FaThermometerHalf className={`h-8 w-8 text-${indicatorColorClass}`} />;
            case 'humidity': return <FaCloudRain className={`h-8 w-8 text-${indicatorColorClass}`} />;
            default: return <div className={`h-8 w-8 bg-gray-400 rounded-full flex items-center justify-center text-white`}>?</div>; 
        }
    };

    const currentNeedleRotation = needleRotationDegree !== null ? needleRotationDegree : 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const currentFillPercentage = fillPercentage !== null ? fillPercentage : 0;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
            <div className="relative w-32 h-16 overflow-hidden mb-4">
                <div className="absolute inset-x-0 bottom-0 h-16 rounded-t-full"
                    style={{
                        background: `linear-gradient(to right, ${optimalRangeColor} ${optimalRangeMin}%, transparent ${optimalRangeMin}%, transparent ${optimalRangeMax}%, ${optimalRangeColor} ${optimalRangeMax}%)`
                    }}
                ></div>
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gray-200 rounded-t-full"></div>
                <div className={`absolute inset-x-0 bottom-0 h-16 rounded-t-full opacity-70`}
                    style={{
                        background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                        '--tw-gradient-stops': `var(--tw-gradient-from), var(--tw-gradient-to, rgba(255,255,255,0))`
                    } as React.CSSProperties} 
                ></div>

                {/* Needle */}
                <div className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-gray-800 origin-bottom-left transition-transform duration-500"
                    style={{
                        transform: `translateX(-50%) translateY(-50%) rotate(${currentNeedleRotation - 90}deg)`, 
                        transformOrigin: 'bottom center',
                    }}
                ></div>
            </div>
            <p className="text-4xl font-bold text-gray-900 mb-1">{value}{unit}</p>
            <p className="text-sm text-gray-500 mb-3">{range}</p>
            {getIcon(iconType)}
        </div>
    );
};

export default MetricCard;