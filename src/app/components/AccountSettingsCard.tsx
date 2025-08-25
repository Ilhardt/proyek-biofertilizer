// src/components/AccountSettingsCard.tsx
"use client";

import React from "react";
import { FaUserCircle } from "react-icons/fa";

/**
 * @file AccountSettingsCard.tsx
 * @description Komponen ini adalah kartu pengaturan akun. Ia menampilkan formulir untuk email dan kata sandi dengan nilai-nilai dan handler dummy, tanpa mengelola state atau fungsionalitas pembaruan akun yang sebenarnya.
 * @example <AccountSettingsCard />
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AccountSettingsCardProps { }

const AccountSettingsCard: React.FC<AccountSettingsCardProps> = () => {
    const defaultEmail = "admin@biofertilizer.com";
    const defaultPasswordPlaceholder = "Enter new password";

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Dummy: Update Account button clicked.");
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Dummy: Email changed:", e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Dummy: Password changed:", e.target.value);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                <FaUserCircle className="mr-3 text-blue-600" /> Pengaturan Akun
            </h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Alamat Email
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
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Kata Sandi
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
                    Perbarui Akun
                </button>
            </form>
        </div>
    );
};

export default AccountSettingsCard;
