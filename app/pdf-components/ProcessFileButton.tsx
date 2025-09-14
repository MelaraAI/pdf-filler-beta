"use client";
import { useState } from "react";
import { useColorTheme } from "@/lib/use-color-theme";
import FileSuccessPopup from "./FileSuccessPopup";

export default function ProcessFileButton() {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const { colorTheme } = useColorTheme();

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
        className="text-white px-4 py-2 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
          boxShadow: `0 4px 15px ${colorTheme.primary}30`
        }}
      >
        Process File
      </button>
      {fileUrl && <FileSuccessPopup fileUrl={fileUrl} />}
    </>
  );
}
