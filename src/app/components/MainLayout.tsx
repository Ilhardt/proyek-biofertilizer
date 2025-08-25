// components/MainLayout.tsx
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar"; 

/**
 * @file MainLayout.tsx
 * @description Komponen layout utama untuk seluruh halaman dashboard.
 * Fungsinya nampung Sidebar dan konten utama.
 * Kalau user lagi di halaman login, sidebar-nya disembunyiin.
 * Kalau udah login, sidebar bakal muncul di samping konten.
 * @example <MainLayout>...</MainLayout>
 */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Pake hook usePathname buat tau user lagi ada di halaman mana.
  const pathname = usePathname();
  // Cek apakah user lagi di halaman login ('/').
  const isLoginPage = pathname === "/";

  // Kalau lagi di halaman login, langsung render children aja (page.tsx).
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Kalau bukan halaman login, render sidebar sama konten di sampingnya.
  return (
    // Pake flexbox buat nyusun sidebar dan konten secara horizontal.
    // min-h-screen buat mastiin tingginya minimal setinggi layar.
    <div className="flex flex-row w-full h-full min-h-screen">
      {/* Sidebar yang selalu ada di kiri */}
      <Sidebar />
      {/* Kontainer utama buat konten halaman, bisa di-scroll kalau isinya panjang */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}