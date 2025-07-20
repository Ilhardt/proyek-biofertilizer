'use client';

import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AccountSettingsCardProps {

}

const AccountSettingsCard: React.FC<AccountSettingsCardProps> = (
) => {

    const defaultEmail = "admin@biofertilizer.com"; 
    const defaultPasswordPlaceholder = "Enter new password"; 


    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Update Account button clicked (dummy handler)");
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Email changed:", e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Password changed:", e.target.value);
    };


    return (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                <FaUserCircle className="mr-3 text-blue-600" /> Account Settings
            </h2>
            <form onSubmit={handleFormSubmit}> 
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={defaultEmail} 
                        onChange={handleEmailChange}
                        required
                        readOnly 
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={defaultPasswordPlaceholder}
                        value="" 
                        onChange={handlePasswordChange} 
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Update Account
                </button>
            </form>
        </div>
    );
};

export default AccountSettingsCard;