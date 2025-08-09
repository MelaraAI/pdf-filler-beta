"use client"

import { useActionState, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { useAuth } from "@/lib/auth/AuthContext"
import { useRouter } from "next/navigation"
import { ArrowLeft, Upload, User } from "lucide-react"
import { useEffect } from "react"
import Image from "next/image"

interface ProfileFormState {
  ok: boolean;
  message?: string;
  issues?: string[];
}

const saveProfile = async (prevState: ProfileFormState | null, formData: FormData): Promise<ProfileFormState> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Basic validation
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  
  const issues: string[] = [];
  if (!firstName?.trim()) issues.push('First name is required');
  if (!lastName?.trim()) issues.push('Last name is required');
  if (!email?.trim()) issues.push('Email is required');
  if (email && !email.includes('@')) issues.push('Please enter a valid email');
  
  if (issues.length > 0) {
    return {
      ok: false,
      message: 'Please check the required fields',
      issues
    };
  }
  
  return {
    ok: true,
    message: 'Profile updated successfully'
  };
};

export default function ProfilePage() {
  const { user, session, isLoading } = useAuth();
  const router = useRouter();
  const [preview, setPreview] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const [state, formAction, pending] = useActionState(saveProfile, null);

  // Authentication check
  useEffect(() => {
    if (!isLoading && !session && !user) {
      router.push('/');
    }
  }, [isLoading, session, user, router]);

  // Show toast when form is saved successfully
  useEffect(() => {
    if (state?.ok) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  }, [state]);

  // Get user initials
  const getInitials = (email: string) => {
    const name = email.split('@')[0];
    return name.charAt(0).toUpperCase() + (name.charAt(1) || '').toUpperCase();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-6">
      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg"
        >
          Profile updated successfully!
        </motion.div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            onClick={() => router.back()}
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold text-white">Profile Settings</h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="col-span-1 overflow-hidden rounded-3xl border-white/10 bg-white/5 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-white">Avatar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="relative">
                  {preview ? (
                    <Image
                      src={preview}
                      alt="Profile"
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xl font-semibold">
                      {user?.email ? getInitials(user.email) : 'U'}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="avatar"
                    className="inline-flex items-center gap-2 cursor-pointer rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    Upload
                  </Label>
                  <Input
                    id="avatar"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const f = e.target.files?.[0]
                      if (f) setPreview(URL.createObjectURL(f))
                    }}
                  />
                  <p className="text-xs text-white/60">PNG, JPG up to 2MB</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1 md:col-span-2 overflow-hidden rounded-3xl border-white/10 bg-white/5 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action={async (fd) => {
                  await formAction(fd)
                }}
                className="grid gap-4 md:grid-cols-2"
              >
                <div className="space-y-2">
                  <Label className="text-white/80" htmlFor="firstName">
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Ada"
                    className="rounded-xl bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/80" htmlFor="lastName">
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Lovelace"
                    className="rounded-xl bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/80" htmlFor="username">
                    Username
                  </Label>
                  <Input 
                    id="username" 
                    name="username" 
                    placeholder="adal" 
                    className="rounded-xl bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400" 
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/80" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={user?.email || ''}
                    placeholder="ada@example.com"
                    className="rounded-xl bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label className="text-white/80" htmlFor="phone">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 555 000 1234"
                    className="rounded-xl bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label className="text-white/80" htmlFor="bio">
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    placeholder="A short bio about you..."
                    className="min-h-[120px] rounded-xl bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400 resize-none"
                  />
                </div>

                {/* Error list */}
                {state && !state.ok && state.issues?.length ? (
                  <motion.ul
                    className="md:col-span-2 list-disc pl-6 text-sm text-red-300 bg-red-900/20 rounded-xl p-4 border border-red-500/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {state.issues.map((i, idx) => (
                      <li key={idx}>{i}</li>
                    ))}
                  </motion.ul>
                ) : null}

                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    disabled={pending}
                    className="rounded-xl px-8 py-3 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                    style={{ 
                      background: pending 
                        ? 'rgba(59, 130, 246, 0.5)' 
                        : 'linear-gradient(135deg, #3b82f6, #06b6d4)' 
                    }}
                  >
                    {pending ? "Saving..." : "Save Profile"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
