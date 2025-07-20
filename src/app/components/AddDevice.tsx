'use client';

import React from 'react';


export interface AddDeviceFormData {
    deviceName?: string;
    deviceType?: string;
    location?: string;
    capabilities?: string[];
    latitude?: string;
    longitude?: string;
    connectionProtocol?: string;
    initialStatus?: string;
    description?: string;
    isConnectionProtocolEnabled?: boolean;
}

interface AddDeviceProps {
    isOpen: boolean;
    onClose: () => void;
    onSave?: (formData: AddDeviceFormData) => void; 
}

const AddDevice: React.FC<AddDeviceProps> = ({
    isOpen,
    onClose,
    onSave, 
}) => {


    if (!isOpen) return null;
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        console.log(`Input ${e.target.id} changed to:`, e.target.value);
    };

    const handleCapabilitiesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
        console.log("Capabilities changed to:", selectedOptions);
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Checkbox changed to:", e.target.checked);
    };

    const handleSaveClick = () => {
        if (onSave) {
            onSave({}); 
        }
    };

    const deviceNamePlaceholder = "My Smart Sensor 1";
    const locationPlaceholder = "Field 1, Plot 3";
    const latitudePlaceholder = "e.g., -6.2088";
    const longitudePlaceholder = "e.g., 106.8456";

    const defaultDeviceType = "Soil Moisture Sensor";
    const defaultConnectionProtocol = "WiFi";
    const defaultInitialStatus = "Active";
    const defaultCapabilities: string[] = [];
    const defaultIsConnectionProtocolEnabled = true;


    return (
        <div className="fixed inset-0 backdrop-brightness-50 flex items-center justify-center z-50 p-4 ">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
                <div className="flex items-center p-6 border-b border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Add New IoT Device</h2>
                        <p className="text-black text-sm">
                            Enter details for the new IoT monitoring device to add it to your Biofertilizer MA11 system.
                        </p>
                    </div>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
                    <div className="col-span-2">
                        <label htmlFor="deviceName" className="block text-sm font-medium text-black mb-1">Device Name</label>
                        <input
                            type="text"
                            id="deviceName"
                            className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value="" 
                            onChange={handleInputChange} 
                            placeholder={deviceNamePlaceholder}
                        />
                    </div>

                    <div>
                        <label htmlFor="deviceType" className="block text-sm font-medium text-black mb-1">Device Type</label>
                        <select
                            id="deviceType"
                            className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value={defaultDeviceType} 
                            onChange={handleInputChange} 
                        >
                            <option>Soil Moisture Sensor</option>
                            <option>pH Meter</option>
                            <option>Temperature/Humidity</option>
                            <option>Multi-Sensor Node</option>
                            <option>Nutrient Sensor</option>
                            <option>Actuator Valve</option>
                            <option>Light Sensor</option>
                            <option>Electrical Conductivity</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="deviceID" className="block text-sm font-medium text-black mb-1">Device ID</label>
                        <input
                            type="text"
                            id="deviceID"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-black"
                            value="Will be auto-generated"
                            readOnly
                        />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="location" className="block text-sm font-medium text-black mb-1">Location</label>
                        <input
                            type="text"
                            id="location"
                            className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value="" 
                            onChange={handleInputChange} 
                            placeholder={locationPlaceholder}
                        />
                    </div>

                    <div>
                        <label htmlFor="capabilities" className="block text-sm font-medium text-black mb-1">Capabilities</label>
                        <select
                            id="capabilities"
                            multiple
                            className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-32 overflow-y-auto"
                            value={defaultCapabilities} 
                            onChange={handleCapabilitiesChange}
                        >
                            <option value="Moisture">Moisture</option>
                            <option value="pH Level">pH Level</option>
                            <option value="Temperature">Temperature</option>
                            <option value="Humidity">Humidity</option>
                            <option value="Nitrogen">Nitrogen</option>
                            <option value="Phosphorus">Phosphorus</option>
                            <option value="Potassium">Potassium</option>
                            <option value="Light">Light</option>
                            <option value="EC">Electrical Conductivity</option>
                        </select>
                        <p className="text-xs text-black mt-1">Hold Ctrl/Cmd to select multiple</p>
                    </div>

                    <div>
                        <label htmlFor="longitude" className="block text-sm font-medium text-black mb-1">Longitude</label>
                        <input
                            type="text"
                            id="longitude"
                            className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value="" 
                            onChange={handleInputChange}
                            placeholder={longitudePlaceholder}
                        />
                        <label htmlFor="latitude" className="block text-sm font-medium text-black mt-4 mb-1">Latitude</label>
                        <input
                            type="text"
                            id="latitude"
                            className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value="" 
                            onChange={handleInputChange}
                            placeholder={latitudePlaceholder}
                        />
                    </div>

                    <div className="col-span-2 flex items-center mt-2">
                        <input
                            type="checkbox"
                            id="connectionProtocolCheckbox"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            checked={defaultIsConnectionProtocolEnabled}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="connectionProtocolCheckbox" className="ml-2 block text-sm font-medium text-black">Connection Protocol</label>
                    </div>

                    <div>
                        <label htmlFor="connectionProtocol" className="block text-sm font-medium text-black mb-1">Connection Protocol</label>
                        <select
                            id="connectionProtocol"
                            className={`mt-1 block w-full p-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 ${defaultIsConnectionProtocolEnabled ? '' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                            value={defaultConnectionProtocol}
                            onChange={handleInputChange}
                            disabled={!defaultIsConnectionProtocolEnabled}
                        >
                            <option>WiFi</option>
                            <option>LoRaWAN</option>
                            <option>Cellular</option>
                            <option>Ethernet</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="initialStatus" className="block text-sm font-medium text-black mb-1">Initial Status</label>
                        <select
                            id="initialStatus"
                            className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value={defaultInitialStatus}
                            onChange={handleInputChange}
                        >
                            <option>Active</option>
                            <option>Inactive</option>
                            <option>Maintenance</option>
                        </select>
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="description" className="block text-sm font-medium text-black mb-1">Description</label>
                        <textarea
                            id="description"
                            rows={3}
                            className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value="" 
                            onChange={handleInputChange} 
                        ></textarea>
                    </div>
                </div>

                <div className="flex justify-end p-6 bg-gray-50 border-t border-gray-200 space-x-3">
                    <button
                        type="button"
                        className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                        onClick={handleSaveClick} 
                    >
                        Add Device
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddDevice;