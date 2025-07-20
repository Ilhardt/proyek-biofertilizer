import React from "react";

interface AnalysisCardProps {
    title: string;
    averageValue?: string;
    predictionChange?: string;
    children: React.ReactNode;
}

const AnalysisCard: React.FC<AnalysisCardProps> = ({
    title,
    averageValue,
    predictionChange,
    children,
}) => {
    return (
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden h-96 flex flex-col">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent/50 z-10"></div>
            </div>

            <div className="relative z-20 p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    {averageValue && (
                        <span className="bg-purple-100 text-purple-700 text-sm font-medium px-2.5 py-0.5 rounded-full">
                            {averageValue}
                        </span>
                    )}
                    {predictionChange && (
                        <span className="bg-green-100 text-green-700 text-sm font-medium px-2.5 py-0.5 rounded-full">
                            {predictionChange}
                        </span>
                    )}
                </div>

                <div className="flex-grow flex items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AnalysisCard;
