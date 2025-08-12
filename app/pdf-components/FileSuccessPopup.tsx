"use client";
import { useState } from "react";

export default function FileSuccessPopup({ fileUrl }: { fileUrl: string }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-2 text-green-600">File filled out successfully!</h2>
        <p className="mb-4">Your file is ready to download.</p>
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Download File
        </a>
        <button
          onClick={() => setVisible(false)}
          className="block mt-4 text-gray-500 hover:text-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
