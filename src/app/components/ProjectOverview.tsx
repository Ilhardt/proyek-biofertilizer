/* eslint-disable @next/next/no-img-element */
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ProjectData } from '../hooks/useDashboardData';

/**
 * @file ProjectOverview.tsx
 * @description Komponen ini didesain buat nampilin ringkasan lengkap tentang sebuah proyek.
 * Isinya ada gambar proyek, judul gede, deskripsi detail, daftar tujuan penelitian,
 * sama daftar parameter sensor yang dipake.
 * @example <ProjectOverview imageSrc="/images/project-bio.jpg" title="Optimalisasi Bio-fertilizer" description="Proyek ini berfokus pada..." researchObjectives={["Meningkatkan hasil", "Mengurangi limbah"]} sensorParameters={["pH Tanah", "Kelembaban"]} />
 */
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
            {/* Judul utama bagian Project Overview */}
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Project Overview</h2>

            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                {/* Bagian gambar proyek */}
                <div className="flex-shrink-0 ">
                    <img src={imageSrc} alt={title} className="w-56 h-60 object-cover rounded-lg shadow-sm" />
                </div>

                {/* Bagian detail proyek: judul, deskripsi, tujuan, dan parameter sensor */}
                <div className="flex-grow">
                    {/* Judul proyek */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
                    {/* Deskripsi proyek */}
                    <p className="text-gray-600 mb-4">{description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Bagian Tujuan Penelitian */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Research Objectives</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                {/* Loop untuk menampilkan setiap tujuan penelitian */}
                                {researchObjectives.map((obj, index) => (
                                    <li key={index}>{obj}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Bagian Parameter Sensor */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Sensor Parameters</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                {/* Loop untuk menampilkan setiap parameter sensor */}
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