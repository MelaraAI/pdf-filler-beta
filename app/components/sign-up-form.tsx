"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Loader2, Eye, EyeOff } from "lucide-react"
import { createClient } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface ColorTheme {
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
}

interface SignUpFormProps {
  onCancelAction: () => void
  onLoginRedirectAction: () => void
  colorTheme: ColorTheme
}

export default function SignUpForm({ onCancelAction, onLoginRedirectAction, colorTheme }: SignUpFormProps) {
  const { theme } = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const [sent, setSent] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match. Please check and try again.");
      setIsLoading(false);
      return;
    }

    console.log("[SIGNUP DEBUG] Attempting signup for email:", email);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (!error) {
      console.log("[SIGNUP DEBUG] Signup request successful!");
      console.log("[SIGNUP DEBUG] User data:", {
        id: data.user?.id,
        email: data.user?.email,
        emailConfirmed: data.user?.email_confirmed_at,
        createdAt: data.user?.created_at,
        needsConfirmation: !data.session
      });
      if (data.session) {
        console.log("[SIGNUP DEBUG] Session created immediately:", {
          accessToken: data.session.access_token ? "Present" : "Missing",
          refreshToken: data.session.refresh_token ? "Present" : "Missing",
          expiresAt: data.session.expires_at
        });
      } else {
        console.log("[SIGNUP DEBUG] No session created - email confirmation required");
      }
      setSent(true)
    } else {
      console.log("[SIGNUP DEBUG] Signup failed!");
      console.log("[SIGNUP DEBUG] Error details:", {
        message: error?.message,
        status: error?.status,
        name: error?.name
      });
      setErrorMessage(error.message || "Error creating account. Please try again.")
    }

    setIsLoading(false)
  }

  // Only redirect after successful signup - no auto-redirects
  useEffect(() => {
    // Only listen for sign up events, don't check existing sessions
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("[SIGNUP DEBUG] Auth state changed:", event, session?.user?.email || "No user");
      if (session) {
        console.log("[SIGNUP DEBUG] Full session details:", {
          userId: session.user.id,
          userEmail: session.user.email,
          accessToken: session.access_token ? "Present" : "Missing",
          refreshToken: session.refresh_token ? "Present" : "Missing",
          expiresAt: session.expires_at,
          tokenType: session.token_type
        });
      }
      // Only redirect on confirmed sign up, not existing sessions
      if (event === 'SIGNED_IN' && session) {
        console.log("[SIGNUP DEBUG] User signed up and confirmed, redirecting to dashboard");
        router.push("/pdf-components/dashboard")
      }
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [router])

  return (
    <motion.div
      className="overflow-hidden rounded-3xl bg-white/5 dark:bg-white/5 bg-white/80 p-8 backdrop-blur-lg border border-white/10 dark:border-white/10 border-slate-200/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        boxShadow: `0 25px 50px ${colorTheme.primary}20`,
        transition: { duration: 0.3 },
      }}
    >
      <div className="mb-6 flex items-center">
        <motion.div whileHover={{ scale: 1.1, rotate: -10 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            size="icon"
            className={`mr-2 rounded-full ${theme === 'dark' ? 'text-white hover:text-white' : 'text-gray-800 hover:text-slate-900'} hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-200/50`}
            onClick={onCancelAction}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </motion.div>
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Create Account</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {errorMessage && (
          <motion.div
            className="text-red-500 bg-red-900/20 px-4 py-3 rounded-xl text-center font-medium border border-red-500/30"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {errorMessage}
          </motion.div>
        )}

        {sent ? (
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              className={`px-6 py-4 rounded-2xl border-2 backdrop-blur-sm font-medium text-lg relative overflow-hidden cursor-pointer group transition-all duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}
              style={{
                background: theme === 'dark' 
                  ? `linear-gradient(135deg, ${colorTheme.primary}20, ${colorTheme.secondary}15)` 
                  : `linear-gradient(135deg, ${colorTheme.primary}10, ${colorTheme.secondary}08)`,
                borderColor: `${colorTheme.primary}60`,
                boxShadow: `0 10px 30px ${colorTheme.primary}20`,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: `0 0 20px ${colorTheme.primary}80, 0 0 40px ${colorTheme.primary}40, 0 10px 30px ${colorTheme.primary}20`
              }}
            >
              {/* Animated background shine effect */}
              <motion.div
                className="absolute inset-0 -skew-x-12"
                style={{
                  background: `linear-gradient(90deg, transparent, ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.3)'}, transparent)`
                }}
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
              />
              <div className="relative z-10 flex items-center justify-center gap-3">
                <motion.svg
                  key={colorTheme.primary}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, duration: 0.5, type: "spring", stiffness: 200 }}
                  className="w-16 h-16"
                  style={{ 
                    color: colorTheme.primary,
                    fill: colorTheme.primary 
                  }}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </motion.svg>
                <span>Account created! Please check your email to verify your account.</span>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <>
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Label htmlFor="email" className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                Email
              </Label>
              <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", damping: 20, stiffness: 300 }}>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={`rounded-xl border-white/10 dark:border-white/10 border-slate-300/50 bg-white/5 dark:bg-white/5 bg-white/50 px-4 py-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'} placeholder:text-slate-400 dark:placeholder:text-slate-400 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-indigo-400 transition-all duration-300`}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <Label htmlFor="password" className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                Password
              </Label>
              <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", damping: 20, stiffness: 300 }} className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    // Check if passwords match when typing in password field
                    if (confirmPassword && e.target.value) {
                      setPasswordsMatch(e.target.value === confirmPassword)
                    } else {
                      setPasswordsMatch(true)
                    }
                  }}
                  placeholder="Create a password"
                  required
                  className={`rounded-xl border-white/10 dark:border-white/10 border-slate-300/50 bg-white/5 dark:bg-white/5 bg-white/50 px-4 py-6 pr-12 ${theme === 'dark' ? 'text-white' : 'text-gray-800'} placeholder:text-slate-400 dark:placeholder:text-slate-400 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-indigo-400 transition-all duration-300`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'} transition-colors`}
                >
                  {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Label htmlFor="confirmPassword" className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                Confirm Password
              </Label>
              <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", damping: 20, stiffness: 300 }} className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    // Check if passwords match when typing
                    if (password && e.target.value) {
                      setPasswordsMatch(password === e.target.value)
                    } else {
                      setPasswordsMatch(true)
                    }
                  }}
                  onBlur={() => {
                    // Final check when user leaves the field
                    if (password && confirmPassword) {
                      setPasswordsMatch(password === confirmPassword)
                    }
                  }}
                  placeholder="Confirm your password"
                  required
                  className={`rounded-xl border-white/10 dark:border-white/10 border-slate-300/50 bg-white/5 dark:bg-white/5 bg-white/50 px-4 py-6 pr-12 ${theme === 'dark' ? 'text-white' : 'text-gray-800'} placeholder:text-slate-400 dark:placeholder:text-slate-400 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-indigo-400 transition-all duration-300 ${!passwordsMatch && confirmPassword ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'} transition-colors`}
                >
                  {showConfirmPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                </button>
              </motion.div>
              {!passwordsMatch && confirmPassword && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-red-500 text-sm mt-1 flex items-center gap-1"
                >
                  <span>⚠️</span> Passwords do not match
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 15px 40px ${colorTheme.primary}30`,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl py-6 text-lg font-medium text-white transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
                  boxShadow: `0 10px 30px ${colorTheme.primary}20`,
                }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </motion.div>
            
            {/* Login link */}
            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => onLoginRedirectAction?.()}
                  className={`font-medium underline hover:no-underline transition-all duration-200 ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}
                >
                  Login
                </button>
              </p>
            </motion.div>
          </>
        )}
      </form>
    </motion.div>
  )
}
