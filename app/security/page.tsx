"use client"

import { useActionState, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/app/components/ui/switch"
import { Separator } from "@/app/components/ui/separator"
import { motion } from "framer-motion"
import { useAuth } from "@/lib/auth/AuthContext"
import { useRouter } from "next/navigation"
import { ArrowLeft, Shield, Smartphone, AlertTriangle } from "lucide-react"
import { useEffect } from "react"
import { useColorTheme } from '@/lib/use-color-theme'
import SaucyLoader from '../components/SaucyLoader'

interface SecurityFormState {
  ok: boolean;
  message?: string;
  issues?: string[];
}

const changePassword = async (prevState: SecurityFormState | null, formData: FormData): Promise<SecurityFormState> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const currentPassword = formData.get('currentPassword') as string;
  const newPassword = formData.get('newPassword') as string;
  const confirmPassword = formData.get('confirmPassword') as string;
  
  const issues: string[] = [];
  if (!currentPassword?.trim()) issues.push('Current password is required');
  if (!newPassword?.trim()) issues.push('New password is required');
  if (!confirmPassword?.trim()) issues.push('Please confirm your new password');
  if (newPassword && newPassword.length < 8) issues.push('Password must be at least 8 characters');
  if (newPassword !== confirmPassword) issues.push('Passwords do not match');
  
  if (issues.length > 0) {
    return {
      ok: false,
      message: 'Please check the required fields',
      issues
    };
  }
  
  return {
    ok: true,
    message: 'Password updated successfully'
  };
};

const saveSecurity = async (): Promise<SecurityFormState> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    ok: true,
    message: 'Security settings saved successfully'
  };
};

export default function SecurityPage() {
  const { user, session, isLoading } = useAuth();
  const { colorTheme } = useColorTheme();
  const router = useRouter();
  const [enable2fa, setEnable2fa] = useState(false);
  const [showToast, setShowToast] = useState<string | null>(null);

  const [pwdState, pwdAction, pwdPending] = useActionState(changePassword, null);
  const [secState, secAction, secPending] = useActionState(async () => await saveSecurity(), null);

  // Authentication check
  useEffect(() => {
    if (!isLoading && !session && !user) {
      router.push('/');
    }
  }, [isLoading, session, user, router]);

  // Show toast notifications
  useEffect(() => {
    if (pwdState?.ok) {
      setShowToast("Password updated successfully!");
      setTimeout(() => setShowToast(null), 3000);
    }
  }, [pwdState]);

  useEffect(() => {
    if (secState?.ok) {
      setShowToast("Security settings saved!");
      setTimeout(() => setShowToast(null), 3000);
    }
  }, [secState]);

  if (isLoading) {
    return (
      <SaucyLoader 
        currentTheme={colorTheme}
        isLoading={isLoading}
        size="md"
        message="Loading security settings"
      />
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
          {showToast}
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
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Shield className="w-8 h-8" />
            Security Settings
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="overflow-hidden rounded-3xl border-white/10 bg-white/5 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-white">Change Password</CardTitle>
              <CardDescription className="text-white/70">
                Update your password regularly to keep your account secure.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                action={async (fd) => {
                  await pwdAction(fd);
                }}
                className="grid gap-4"
              >
                <div className="space-y-2">
                  <Label className="text-white/80" htmlFor="currentPassword">
                    Current password
                  </Label>
                  <Input
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    className="rounded-xl bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/80" htmlFor="newPassword">
                    New password
                  </Label>
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    className="rounded-xl bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/80" htmlFor="confirmPassword">
                    Confirm new password
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="rounded-xl bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400"
                  />
                </div>

                {pwdState && !pwdState.ok && pwdState.issues?.length ? (
                  <motion.ul
                    className="list-disc pl-6 text-sm text-red-300 bg-red-900/20 rounded-xl p-4 border border-red-500/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {pwdState.issues.map((i, idx) => (
                      <li key={idx}>{i}</li>
                    ))}
                  </motion.ul>
                ) : null}

                <div>
                  <Button
                    type="submit"
                    disabled={pwdPending}
                    className="rounded-xl px-6 py-3 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                    style={{ 
                      background: pwdPending 
                        ? 'rgba(59, 130, 246, 0.5)' 
                        : 'linear-gradient(135deg, #3b82f6, #06b6d4)' 
                    }}
                  >
                    {pwdPending ? "Updating..." : "Update Password"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="overflow-hidden rounded-3xl border-white/10 bg-white/5 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Two‑Factor Authentication
              </CardTitle>
              <CardDescription className="text-white/70">Add an extra layer of security to your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                action={async () => {
                  await secAction();
                }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
                  <div>
                    <div className="font-medium text-white">Enable 2FA</div>
                    <div className="text-sm text-white/70">Use an authenticator app to generate codes.</div>
                  </div>
                  <input type="hidden" name="twofa" value={enable2fa ? "on" : "off"} />
                  <Switch checked={enable2fa} onCheckedChange={setEnable2fa} />
                </div>

                {enable2fa && (
                  <motion.div
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="mb-3 text-sm text-white/80">
                      Scan this QR code or enter the key into your authenticator app.
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="flex items-center justify-center rounded-xl bg-white/10 p-4">
                        <div className="h-44 w-44 rounded-lg bg-white/20 flex items-center justify-center text-white/60">
                          QR Code Placeholder
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="rounded-lg bg-white/10 p-3 text-white font-mono text-sm">
                          Secret key: JBSWY3DPEHPK3PXP
                        </div>
                        <div className="space-y-2">
                          <Label className="text-white/80" htmlFor="verify">
                            Enter 6‑digit code
                          </Label>
                          <Input
                            id="verify"
                            name="verify"
                            placeholder="123 456"
                            className="rounded-xl bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400"
                          />
                        </div>
                        <Button
                          type="button"
                          onClick={() => setShowToast("Recovery codes generated!")}
                          variant="outline"
                          className="rounded-xl bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                          Generate recovery codes
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}

                <Separator className="bg-white/10" />

                <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
                  <div>
                    <div className="font-medium text-white">Login alerts</div>
                    <div className="text-sm text-white/70">Email me when a new device logs in.</div>
                  </div>
                  <input name="loginAlerts" defaultValue="on" hidden />
                  <Switch defaultChecked />
                </div>

                <div>
                  <Button
                    type="submit"
                    disabled={secPending}
                    className="rounded-xl px-6 py-3 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                    style={{ 
                      background: secPending 
                        ? 'rgba(59, 130, 246, 0.5)' 
                        : 'linear-gradient(135deg, #3b82f6, #06b6d4)' 
                    }}
                  >
                    {secPending ? "Saving..." : "Save Security"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="overflow-hidden rounded-3xl border-white/10 bg-white/5 backdrop-blur-lg lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Active Sessions
              </CardTitle>
              <CardDescription className="text-white/70">
                Review devices that have access to your account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  { name: "Chrome on Mac", ip: "24.18.101.3", last: "Just now", current: true },
                  { name: "iPhone 15 Pro", ip: "10.0.0.12", last: "2h ago", current: false },
                  { name: "Windows PC", ip: "51.22.11.91", last: "Yesterday", current: false },
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
                    <div>
                      <div className="font-medium text-white">{s.name}</div>
                      <div className="text-sm text-white/60">
                        IP {s.ip} • {s.last} {s.current ? "• Current session" : ""}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      className="rounded-full text-white hover:bg-white/10"
                      onClick={() => setShowToast(`Signed out ${s.name}`)}
                    >
                      Sign out
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
