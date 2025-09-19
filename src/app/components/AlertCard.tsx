import React from "react";
import {
  FaExclamationTriangle,
  FaInfoCircle,
  FaTimesCircle,
  FaCheckCircle,
} from "react-icons/fa";

/**
 * @file AlertCard.tsx
 * @description Komponen kartu notifikasi yang menampilkan detail peringatan.
 * Kartu ini menerima data melalui props untuk menampilkan judul, pesan,
 * waktu, dan tipe peringatan, serta menyesuaikan tampilan (ikon dan warna)
 * secara otomatis berdasarkan tipe peringatan.
 * @example <AlertCard type="Critical" heading="Suhu Tinggi" message="Suhu di area tanaman 4 mencapai 30°C" timestamp="2025-07-16 08:00" deviceId="Temp Sensor #004" />
 */

interface AlertCardProps {
  type: "Critical" | "Warning" | "Info" | "Good";
  heading: string;
  message: string;
  timestamp: string;
  deviceId: string;
}

const getIcon = (type: AlertCardProps["type"]) => {
  switch (type) {
    case "Critical":
      return <FaExclamationTriangle className="w-6 h-6 text-red-500" />;
    case "Warning":
      return <FaExclamationTriangle className="w-6 h-6 text-yellow-500" />;
    case "Info":
      return <FaInfoCircle className="w-6 h-6 text-blue-500" />;
    case "Good":
      return <FaCheckCircle className="w-6 h-6 text-green-500" />;
    default:
      return <FaInfoCircle className="w-6 h-6 text-gray-400" />;
  }
};

const getBorderColor = (type: AlertCardProps["type"]) => {
  switch (type) {
    case "Critical":
      return "border-red-400";
    case "Warning":
      return "border-yellow-400";
    case "Info":
    case "Good":
    default:
      return "border-blue-400";
  }
};

const AlertCard: React.FC<AlertCardProps> = ({
  type,
  heading,
  message,
  timestamp,
  deviceId,
}) => {
  const icon = getIcon(type);
  const borderColor = getBorderColor(type);

  return (
    <div
      className={`bg-white border-l-4 ${borderColor} rounded-lg shadow-sm p-4 flex items-start space-x-4`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{heading}</h3>
        <p className="text-gray-600 text-sm mt-1">{message}</p>
        <p className="text-gray-500 text-xs mt-2">
          {timestamp} - {deviceId}
        </p>
      </div>
      <button className="text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer">
        <FaTimesCircle className="w-5 h-5" />
      </button>
    </div>
  );
};

export default AlertCard;
