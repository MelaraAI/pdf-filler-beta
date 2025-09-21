"use client"

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Button } from "@/app/components/ui/button"
import SignUpForm from '../components/sign-up-form'
import ThemeToggle from '../components/theme-toggle'
import ThemeCustomizer from '../components/theme-customizer'
import { useColorTheme } from '@/lib/use-color-theme'
import Image from "next/image"
import ZyfloCursor from '../components/zyflo/mouse-style'
import SaucyLoader from '../components/SaucyLoader'

export default function StyledSignUpPage() {
  const { theme } = useTheme();
  const { colorTheme, changeColorTheme } = useColorTheme()
  const [loading, setLoading] = useState(true);
  const pageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("colorTheme");
    if (saved) {
      const parsedTheme = JSON.parse(saved);
      changeColorTheme(parsedTheme);
    }
  }, [changeColorTheme]);

  useEffect(() => {
    document.body.classList.add('hide-scrollbar');
    return () => {
      document.body.classList.remove('hide-scrollbar');
    };
  }, []);

  const handleThemeChange = (newTheme: typeof colorTheme) => {
    changeColorTheme(newTheme);
    localStorage.setItem("colorTheme", JSON.stringify(newTheme));
  };

  if (loading) {
    return (
      <SaucyLoader 
        currentTheme={colorTheme}
        isLoading={loading}
        size="md"
        message="Loading sign up page"
      />
    );
  }

  return (
    <div
      ref={pageContainerRef}
      className={`relative min-h-screen w-full overflow-hidden bg-gradient-to-b ${
        theme === "dark" ? colorTheme.background : "from-slate-50 to-slate-100"
      } dark:text-white transition-all duration-1000`}
      style={{
        color: theme === "dark" ? "white" : "#333333"
      }}
    >
      <ZyfloCursor
        containerRef={pageContainerRef}
        variant="inverted"
        label="Interactive Cursor"
        srOnly="Custom Interactive Cursor"
        color={colorTheme.primary}
      />

      <ThemeCustomizer onThemeChangeAction={handleThemeChange} currentTheme={colorTheme} />

      <div className="relative z-10">
        <header className="w-full px-1 py-6">
          <div className="flex items-center justify-between w-full">
            <motion.div
              className="flex items-center gap-2 ml-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", damping: 20 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20"
                style={{ 
                  background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})` 
                }}
              >
                <Image 
                  src="/m-logo-clear.png" 
                  alt="Melara AI Logo" 
                  width={42} 
                  height={42} 
                  className="object-contain"
                />
              </motion.div>
              <span className="text-xl font-bold">Powered by Melara AI</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 mr-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", damping: 20, delay: 0.2 }}
            >
              <ThemeToggle />
              <Button
                variant="ghost"
                className="zyflo-hover rounded-full border border-slate-300/50 dark:border-white/20 px-6 text-sm backdrop-blur-sm hover:bg-slate-200/50 dark:hover:bg-white/10 dark:text-white transition-all duration-300"
                style={{
                  color: theme === "dark" ? "white" : "#333333"
                }}
                onClick={() => {
                  window.location.href = '/';
                }}
              >
                Back to Home
              </Button>
            </motion.div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="flex min-h-[80vh] flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateX: 15 }}
              transition={{ duration: 0.6, type: "spring", damping: 20 }}
              className="w-full max-w-md"
            >
              <SignUpForm 
                onCancelAction={() => {
                  window.location.href = '/';
                }} 
                colorTheme={colorTheme}
              />
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
