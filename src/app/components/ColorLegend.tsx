import React from "react";

const ColorLegend = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">
        Keterangan Status
      </h3>
      <div className="flex flex-col text-sm text-gray-600">
        <p className="flex items-center space-x-2 mb-1">
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
          <span>Baik-baik saja</span>
        </p>
        <p className="flex items-center space-x-2 mb-1">
          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span>Waspada</span>
        </p>
        <p className="flex items-center space-x-2">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span>Segera butuh tindakan</span>
        </p>
      </div>
    </div>
  );
};

export default ColorLegend;
