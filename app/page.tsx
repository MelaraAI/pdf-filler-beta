"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import LoginForm from "@/app/components/login-form";
import SignUpForm from "@/app/components/sign-up-form";
import ChromaticBlob from "@/app/components/chromatic-blob";
import { useTheme } from "next-themes";
import ThemeToggle from "@/app/components/theme-toggle";
import ThemeCustomizer from "@/app/components/theme-customizer";
import FloatingElements from "@/app/components/floating-elements";
import ParticleField from "@/app/components/particle-field";
import AnimatedText from "@/app/components/animated-text";
import ZyfloCursor from "@/app/components/zyflo/mouse-style";

const defaultTheme = {
  name: "Ocean",
  primary: "#4f46e5",
  secondary: "#06b6d4",
  accent: "#0891b2",
  background: "from-blue-950 to-cyan-950",
};

export default function Home() {
  const { theme } = useTheme();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [colorTheme, setColorTheme] = useState(defaultTheme);
  const [loading, setLoading] = useState(true);
  const pageContainerRef = useRef<HTMLDivElement>(null);

  // Check loading state only - no auto redirect
  useEffect(() => {
    const checkUser = async () => {
      console.log("[HOME PAGE DEBUG] Loading home page - no authentication required");
      // Just check loading state, don't auto-redirect
      setLoading(false);
    };

    checkUser();
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("colorTheme");
    if (saved) {
      setColorTheme(JSON.parse(saved));
    }
  }, []);

  const handleThemeChange = (newTheme: typeof defaultTheme) => {
    setColorTheme(newTheme);
    localStorage.setItem("colorTheme", JSON.stringify(newTheme));
  };

  if (loading) {
    console.log("[HOME PAGE DEBUG] Still loading home page...");
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg">Checking login status...</p>
      </main>
    );
  }

  console.log("[HOME PAGE DEBUG] Home page loaded - showing main interface");

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
      {/* Zyflo Custom Cursor */}
      <ZyfloCursor
        containerRef={pageContainerRef}
        variant="inverted"
        label="Interactive Cursor"
        srOnly="Custom Interactive Cursor"
        color={colorTheme.primary}
      />

      {/* Backgrounds */}
      <ParticleField />
      <FloatingElements />
      <div className="fixed inset-0 z-0">
        <ChromaticBlob className="absolute top-[-20%] left-[-10%]" size={600} color1={colorTheme.primary} color2={colorTheme.secondary} speed={30} isDark={theme === "dark"} />
        <ChromaticBlob className="absolute bottom-[-30%] right-[-15%]" size={800} color1={colorTheme.secondary} color2={colorTheme.accent} speed={40} isDark={theme === "dark"} />
        <ChromaticBlob className="absolute top-[40%] right-[20%]" size={400} color1={colorTheme.accent} color2={colorTheme.primary} speed={20} isDark={theme === "dark"} />
      </div>

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
                      console.log("[HOME PAGE DEBUG] Login button clicked - showing login form");
                      setShowLogin(true);
                    }}
              >
                Login
              </Button>
            </motion.div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="flex min-h-[80vh] flex-col items-center justify-center">
            {!showLogin && !showSignUp ? (
              <motion.div
                className="max-w-2xl text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "spring", damping: 20 }}
              >
                <AnimatedText
                  text="The Next Generation"
                  className="mb-2 text-4xl font-bold leading-tight tracking-tighter md:text-6xl"
                  delay={0.5}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <span
                    className="bg-gradient-to-r bg-clip-text text-transparent text-4xl font-bold leading-tight tracking-tighter md:text-6xl"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
                    }}
                  >
                    PDF Form Filler
                  </span>
                </motion.div>

                <motion.p
                  className="mb-8 mt-3 text-lg dark:text-white md:text-xl"
                  style={{
                    color: theme === "dark" ? "white" : "#333333"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  Experience the future of PDF form filling with our AI-powered assistant. Please log in to access your personalized PDF dashboard.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                >
                  <Button
                    className="zyflo-hover rounded-full px-8 py-6 text-lg font-medium text-white hover:shadow-lg transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
                      boxShadow: `0 10px 30px ${colorTheme.primary}20`,
                    }}
                    onClick={() => {
                      console.log("[HOME PAGE DEBUG] Get Started button clicked - showing signup form");
                      setShowSignUp(true);
                    }}
                  >
                    Get Started <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>
            ) : showSignUp ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateX: 15 }}
                transition={{ duration: 0.6, type: "spring", damping: 20 }}
                className="w-full max-w-md"
              >
                <SignUpForm 
                  onCancelAction={() => setShowSignUp(false)} 
                  onLoginRedirectAction={() => {
                    setShowSignUp(false);
                    setShowLogin(true);
                  }}
                  colorTheme={colorTheme} 
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateX: 15 }}
                transition={{ duration: 0.6, type: "spring", damping: 20 }}
                className="w-full max-w-md"
              >
                <LoginForm 
                  onCancelAction={() => setShowLogin(false)} 
                  onSignUpRedirect={() => {
                    setShowLogin(false)
                    setShowSignUp(true)
                  }}
                  colorTheme={colorTheme}
                  preventAutoRedirect={true}
                />
              </motion.div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
