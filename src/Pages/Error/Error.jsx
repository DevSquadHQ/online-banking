import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-red-600">404</h1>
        <p className="text-2xl md:text-3xl font-bold mt-6">
          متاسفانه این صفحه وجود ندارد
        </p>
        <p className="mt-4 text-gray-400">
          ممکن است ادرس اشتباه باشد یا صفحه حذف شده باشد
        </p>
        <button
          onClick={() => navigate("/homedata")}
          className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold text-lg rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition"
        >
          برگشت به خانه
        </button>
      </div>
    </div>
  );
}
