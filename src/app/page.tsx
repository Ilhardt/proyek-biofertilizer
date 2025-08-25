"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * @file page.tsx
 * @description Ini adalah halaman login.
 * Fungsinya cuma buat nampilin form login. Gak ada validasi username/password,
 * karena ini cuma frontend dummy. Begitu tombol "Login" diklik, langsung
 * nge-redirect ke halaman dashboard.
 */

export default function LoginPage() {
  // Panggil hook useRouter dari Next.js buat pindah halaman.
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Langsung arahkan ke dashboard, tanpa validasi
    router.push("/dashboard");
  };

  return (
    // Kontainer utama
    <div className="flex items-center justify-center min-h-screen bg-blue-800">
      {/* Box panel login */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
        {/* Judul dan sub-judul */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">
            Login to Biofertilizer MA11
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Sign in to access your dashboard
          </p>
        </div>

        {/* Form login */}
        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Input buat username */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>

          {/* Input buat password */}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
            />
          </div>

          {/* Tombol login */}
          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
