'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'; 
import Image from 'next/image';
import AnalysisCard from './../components/AnalysisCard';
import SensorDataCorrelationCard from './../components/SensorDataCorrelationCard';
import FieldHealthStatusCard from './../components/FieldHealthStatusCard';
import KeyInsightCard from '../components/KeyInsightCard';
import AnalyticsHeader from './../components/AnalyticsHeader'; 

export default function DataAnalyticsPage() {

    return (
        <div className="flex-1 p-8 bg-gray-50 min-h-screen overflow-y-auto">

            <AnalyticsHeader
            />

            {/* Bagian Kartu Data Analisis */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <AnalysisCard
                    title="Soil Moisture"
                    averageValue="Avg: 65%"
                >
                    {/* Placeholder for Soil Moisture Chart */}
                    <div className="relative w-full h-full border">
                        <div className="absolute inset-x-0  h-4/4 bg-blue-200/50 flex items-center justify-center text-blue-800 text-xs">
                            <Image
                                src="/images/soil-moisture-bg.jpg"
                                alt="Soil Moisture Background"
                                layout="fill"
                                objectFit="cover"
                                className="opacity-50"
                            />
                        </div>
                    </div>
                </AnalysisCard>

                <AnalysisCard
                    title="Soil pH"
                    averageValue="Avg: 6.5"
                >
                    {/* Placeholder for Soil pH Chart */}
                    <div className="relative w-full h-full">
                        <div className="absolute inset-x-0 bottom-0 h-4/4 bg-green-200/50 flex items-center justify-center text-green-800 text-xs">
                            <Image
                                src="/images/soil-ph-bg.jpg"
                                alt="Soil pH Background"
                                layout="fill"
                                objectFit="cover"
                                className="opacity-50"
                            />
                        </div>
                    </div>
                </AnalysisCard>

                <AnalysisCard
                    title="Nitrogen Levels"
                    averageValue="Avg: 24ppm"
                >
                    {/* Placeholder for Nitrogen Levels Chart */}
                    <div className="relative w-full h-full">
                        <div className="absolute inset-x-0 bottom-0 h-4/4 bg-yellow-200/50 flex items-center justify-center text-yellow-800 text-xs">
                            <Image
                                src="/images/nitrogen-bg.jpg"
                                alt="Nitrogen Levels Background"
                                layout="fill"
                                objectFit="cover"
                                className="opacity-50"
                            />
                        </div>
                    </div>
                </AnalysisCard>

                <AnalysisCard
                    title="Yield Prediction"
                    predictionChange="+12%"
                >
                    {/* Placeholder for Yield Prediction Chart/Table */}
                    <div className="relative w-full h-full">
                        <div className="absolute inset-x-0 bottom-0 h-4/4 bg-red-200/50 flex items-center justify-center text-red-800 text-xs p-4 overflow-auto">
                            <Image
                                src="/images/yield-bg.jpg"
                                alt="Yield Prediction Background"
                                layout="fill"
                                objectFit="cover"
                                className="opacity-50"
                            />
                        </div>
                    </div>
                </AnalysisCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <SensorDataCorrelationCard />
                <FieldHealthStatusCard />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 gap-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <KeyInsightCard
                        icon={
                            <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                        }
                        title=""
                        description=""
                    />
                    <KeyInsightCard
                        icon={
                            <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.518A8.955 8.955 0 0110 3a8.955 8.955 0 011.743.518c.247.1.48.225.696.37l1.458-1.458a1 1 0 111.414 1.414l-1.458 1.458c.145.216.27.449.37.696A8.955 8.955 0 0117 10a8.955 8.955 0 01-.518 1.743c-.1.247-.225.48-.37.696l1.458 1.458a1 1 0 11-1.414 1.414l-1.458-1.458c-.216.145-.449.27-.696.37A8.955 8.955 0 0110 17a8.955 8.955 0 01-1.743-.518c-.247-.1-.48-.225-.696-.37l-1.458 1.458a1 1 0 11-1.414-1.414l1.458-1.458c-.145-.216-.27-.449-.37-.696A8.955 8.955 0 013 10a8.955 8.955 0 01.518-1.743c.1-.247.225-.48.37-.696L2.43 5.43a1 1 0 011.414-1.414l1.458 1.458c.216-.145.449-.27.696-.37A8.955 8.955 0 0110 3zM10 5a5 5 0 100 10 5 5 0 000-10z" clipRule="evenodd"></path>
                            </svg>
                        }
                        title=""
                        description=""
                    />
                    <KeyInsightCard
                        icon={
                            <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a2 2 0 012 2v8a2 2 0 01-2 2H6a3 3 0 01-3-3V6zm4 0a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V7a1 1 0 00-1-1H7zm5 0a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V7a1 1 0 00-1-1h-2z" clipRule="evenodd"></path>
                            </svg>
                        }
                        title=""
                        description=""
                    />
                </div>
            </div>
        </div>
    );
}