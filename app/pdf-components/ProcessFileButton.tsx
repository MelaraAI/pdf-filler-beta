"use client";
import { useState } from "react";
import FileSuccessPopup from "./FileSuccessPopup";

export default function ProcessFileButton() {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  async function handleProcessFile() {
    // Replace with your actual file or trigger request
    const res = await fetch("/api/n8n-recieve", {
      method: "POST",
      // body: ...
    });
    const data = await res.json();
    if (data.success) {
      setFileUrl(data.fileUrl);
    }
  }

  return (
    <>
      <button
        onClick={handleProcessFile}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Process File
      </button>
      {fileUrl && <FileSuccessPopup fileUrl={fileUrl} />}
    </>
  );
}
