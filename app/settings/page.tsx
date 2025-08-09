"use client"

import PageShell from "@/components/page-shell"
import { useActionState, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { saveSettings } from "@/app/actions/account"
import { useToast } from "@/hooks/use-toast"
import { useTheme } from "next-themes"
import { useColorTheme } from "@/lib/use-color-theme"

export default function SettingsPage() {
  const { toast } = useToast()
  const { setTheme, theme } = useTheme()
  const { colorTheme } = useColorTheme()

  const [state, formAction, pending] = useActionState(saveSettings, null)
  const [emailNotif, setEmailNotif] = useState(true)
  const [smsNotif, setSmsNotif] = useState(false)
  const [pushNotif, setPushNotif] = useState(true)
  const [profilePublic, setProfilePublic] = useState(true)
  const [shareData, setShareData] = useState(false)

  return (
    <PageShell title="Settings">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 overflow-hidden rounded-3xl border-white/10 bg-white/5 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-white">Preferences</CardTitle>
            <CardDescription className="text-white/70">Customize your experience across the app.</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              action={async (fd) => {
                fd.set("emailNotif", emailNotif ? "on" : "off")
                fd.set("smsNotif", smsNotif ? "on" : "off")
                fd.set("pushNotif", pushNotif ? "on" : "off")
                fd.set("profilePublic", profilePublic ? "on" : "off")
                fd.set("shareData", shareData ? "on" : "off")
                const res = await formAction(fd)
                if (res?.ok) toast({ title: "Settings saved" })
              }}
              className="grid gap-6"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-white/80">Theme</Label>
                  <div className="flex gap-2">
                    {["system", "light", "dark"].map((t) => (
                      <Button
                        key={t}
                        type="button"
                        variant="ghost"
                        className={`rounded-full px-4 text-white/90 hover:bg-white/10 ${theme === t ? "bg-white/10" : ""}`}
                        onClick={() => setTheme(t as "system" | "light" | "dark")}
                      >
                        {t[0].toUpperCase() + t.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-white/80">Language</Label>
                  <Select name="language" defaultValue="en">
                    <SelectTrigger className="rounded-xl bg-white/10 text-white">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="ja">Japanese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-white/80">Time zone</Label>
                  <Select name="timezone" defaultValue="UTC">
                    <SelectTrigger className="rounded-xl bg-white/10 text-white">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UTC">UTC</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                      <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                      <SelectItem value="Europe/London">London</SelectItem>
                      <SelectItem value="Asia/Tokyo">Tokyo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-white/80">Default agent prompt</Label>
                  <Input
                    name="defaultPrompt"
                    placeholder="e.g., Be concise and friendly."
                    className="rounded-xl bg-white/10 text-white"
                  />
                </div>
              </div>

              <Separator className="bg-white/10" />

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3 rounded-2xl bg-white/5 p-4">
                  <div className="font-medium text-white">Notifications</div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Email</span>
                    <Switch checked={emailNotif} onCheckedChange={setEmailNotif} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">SMS</span>
                    <Switch checked={smsNotif} onCheckedChange={setSmsNotif} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Push</span>
                    <Switch checked={pushNotif} onCheckedChange={setPushNotif} />
                  </div>
                </div>

                <div className="space-y-3 rounded-2xl bg-white/5 p-4">
                  <div className="font-medium text-white">Privacy</div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Public profile</span>
                    <Switch checked={profilePublic} onCheckedChange={setProfilePublic} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Share anonymized usage</span>
                    <Switch checked={shareData} onCheckedChange={setShareData} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white/80">Signature</Label>
                <Textarea
                  name="signature"
                  placeholder="Used for emails and transcripts..."
                  className="min-h-[100px] rounded-xl bg-white/10 text-white"
                />
              </div>

              <div>
                <Button
                  type="submit"
                  disabled={pending}
                  className="rounded-xl px-6 py-6 text-white"
                  style={{ background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})` }}
                >
                  {pending ? "Saving..." : "Save Settings"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="overflow-hidden rounded-3xl border-white/10 bg-white/5 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-white">Data & Danger Zone</CardTitle>
            <CardDescription className="text-white/70">Export your data or delete your account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl bg-white/5 p-4">
              <div className="mb-2 font-medium text-white">Export data</div>
              <p className="mb-3 text-sm text-white/70">Receive a download link to your data via email.</p>
              <Button className="rounded-xl bg-white/10 text-white hover:bg-white/20">Request export</Button>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <div className="mb-2 font-medium text-white">Delete account</div>
              <p className="mb-3 text-sm text-white/70">Permanently remove your account and all associated data.</p>
              <Button className="rounded-xl bg-red-500/90 text-white hover:bg-red-500">Delete account</Button>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <div className="mb-2 font-medium text-white">Billing email</div>
              <Input placeholder="billing@example.com" className="rounded-xl bg-white/10 text-white" />
              <Button className="mt-3 rounded-xl bg-white/10 text-white hover:bg-white/20">Update billing</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}
