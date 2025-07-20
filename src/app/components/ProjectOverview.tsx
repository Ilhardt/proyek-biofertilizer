/* eslint-disable @next/next/no-img-element */
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ProjectData } from '../hooks/useDashboardData'; 

interface ProjectOverviewProps {
    imageSrc: string;
    title: string;
    description: string;
    researchObjectives: string[];
    sensorParameters: string[];
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
    imageSrc, title, description, researchObjectives, sensorParameters
}) => {
    return (
        <div className="bg-white text-black p-6 rounded-lg shadow-md">

            <h2 className="text-xl font-semibold text-gray-700 mb-4">Project Overview</h2>

            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"> 

                <div className="flex-shrink-0 ">
                    <img src={imageSrc} alt={title} className="w-56 h-60 object-cover rounded-lg shadow-sm" />
                </div>


                <div className="flex-grow">

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
                    <p className="text-gray-600 mb-4">{description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Research Objectives</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                {researchObjectives.map((obj, index) => (
                                    <li key={index}>{obj}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Sensor Parameters</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                {sensorParameters.map((param, index) => (
                                    <li key={index}>{param}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectOverview;