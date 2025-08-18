"use client";

import { useEffect } from "react";
import { SignUpForm } from "@/components/sign-up-form";

export default function Page() {
  // Add/remove hide-scrollbar class to body
  useEffect(() => {
    document.body.classList.add('hide-scrollbar');
    return () => {
      document.body.classList.remove('hide-scrollbar');
    };
  }, []);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  );
}
