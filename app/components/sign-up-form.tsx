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
  const [sent, setSent] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")

    const allowedEmails = ["viincentmelara@gmail.com", "rhayek@hayekinsurance.com", "team@melara.tech"];
    if (!allowedEmails.includes(email.trim().toLowerCase())) {
      setErrorMessage("Access denied. Please enter the correct email to continue.");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match. Please check and try again.");
      setIsLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (!error) {
      setSent(true)
    } else {
      setErrorMessage(error.message || "Error creating account. Please try again.")
    }

    setIsLoading(false)
  }

  // ✅ Redirect once the user is logged in via magic link
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        router.push("/agent")
      }
    }

    // Check right away
    checkSession()

    // Listen for future auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.push("/agent")
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
            className="text-center space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-green-400 bg-green-900/20 px-4 py-3 rounded-xl border border-green-500/30">
              ✅ Account created! Please check your email to verify your account.
            </div>
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                  className={`rounded-xl border-white/10 dark:border-white/10 border-slate-300/50 bg-white/5 dark:bg-white/5 bg-white/50 px-4 py-6 pr-12 ${theme === 'dark' ? 'text-white' : 'text-gray-800'} placeholder:text-slate-400 dark:placeholder:text-slate-400 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-indigo-400 transition-all duration-300`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'} transition-colors`}
                >
                  {showConfirmPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                </button>
              </motion.div>
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
