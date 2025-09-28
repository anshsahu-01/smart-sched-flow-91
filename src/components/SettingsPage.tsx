import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useNavigation } from "@/pages/Index";
import { ArrowLeft, User, Bell, Shield, Database, Clock, Save, RefreshCw, Download, Upload } from "lucide-react";

const SettingsPage = () => {
  const { navigateTo } = useNavigation();
  const [activeTab, setActiveTab] = useState("general");

  const [settings, setSettings] = useState({
    instituteName: "University of Technology",
    academicYear: "2023-24",
    semesterPattern: "Semester",
    workingDays: "Monday to Friday",
    defaultShift: "Morning",
    
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    reminderTime: "1 day",
    
    autoBackup: true,
    backupFrequency: "Daily",
    retentionPeriod: "6 months",
    
    twoFactorAuth: false,
    sessionTimeout: "30 minutes",
    passwordPolicy: "Strong"
  });

  const timeSlots = [
    { id: 1, name: "Morning Slot 1", start: "08:00", end: "09:00", active: true },
    { id: 2, name: "Morning Slot 2", start: "09:00", end: "10:00", active: true },
    { id: 3, name: "Morning Slot 3", start: "10:00", end: "11:00", active: true },
    { id: 4, name: "Break", start: "11:00", end: "11:15", active: false },
    { id: 5, name: "Morning Slot 4", start: "11:15", end: "12:15", active: true },
    { id: 6, name: "Lunch Break", start: "12:15", end: "01:00", active: false },
    { id: 7, name: "Afternoon Slot 1", start: "01:00", end: "02:00", active: true },
    { id: 8, name: "Afternoon Slot 2", start: "02:00", end: "03:00", active: true },
  ];

  const handleSave = () => {
    // Handle save logic
    console.log("Settings saved:", settings);
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Institution Settings
          </CardTitle>
          <CardDescription>Basic institution information and preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="institute-name">Institute Name</Label>
              <Input 
                id="institute-name" 
                value={settings.instituteName}
                onChange={(e) => setSettings({...settings, instituteName: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="academic-year">Academic Year</Label>
              <Select value={settings.academicYear} onValueChange={(value) => setSettings({...settings, academicYear: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023-24">2023-24</SelectItem>
                  <SelectItem value="2024-25">2024-25</SelectItem>
                  <SelectItem value="2025-26">2025-26</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="semester-pattern">Semester Pattern</Label>
              <Select value={settings.semesterPattern} onValueChange={(value) => setSettings({...settings, semesterPattern: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Semester">Semester</SelectItem>
                  <SelectItem value="Trimester">Trimester</SelectItem>
                  <SelectItem value="Quarter">Quarter</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="working-days">Working Days</Label>
              <Select value={settings.workingDays} onValueChange={(value) => setSettings({...settings, workingDays: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Monday to Friday">Monday to Friday</SelectItem>
                  <SelectItem value="Monday to Saturday">Monday to Saturday</SelectItem>
                  <SelectItem value="Sunday to Thursday">Sunday to Thursday</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Default Preferences</CardTitle>
          <CardDescription>Set default values for timetable generation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="default-shift">Default Shift</Label>
              <Select value={settings.defaultShift} onValueChange={(value) => setSettings({...settings, defaultShift: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Morning">Morning</SelectItem>
                  <SelectItem value="Afternoon">Afternoon</SelectItem>
                  <SelectItem value="Evening">Evening</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderNotificationSettings = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Notification Preferences
        </CardTitle>
        <CardDescription>Configure how you want to receive notifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive notifications via email</p>
            </div>
            <Switch 
              id="email-notifications"
              checked={settings.emailNotifications}
              onCheckedChange={(checked) => setSettings({...settings, emailNotifications: checked})}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="sms-notifications">SMS Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
            </div>
            <Switch 
              id="sms-notifications"
              checked={settings.smsNotifications}
              onCheckedChange={(checked) => setSettings({...settings, smsNotifications: checked})}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="push-notifications">Push Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive browser push notifications</p>
            </div>
            <Switch 
              id="push-notifications"
              checked={settings.pushNotifications}
              onCheckedChange={(checked) => setSettings({...settings, pushNotifications: checked})}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="reminder-time">Reminder Time</Label>
          <Select value={settings.reminderTime} onValueChange={(value) => setSettings({...settings, reminderTime: value})}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="15 minutes">15 minutes before</SelectItem>
              <SelectItem value="30 minutes">30 minutes before</SelectItem>
              <SelectItem value="1 hour">1 hour before</SelectItem>
              <SelectItem value="1 day">1 day before</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Settings
          </CardTitle>
          <CardDescription>Manage your account security preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="two-factor-auth">Two-Factor Authentication</Label>
              <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
            </div>
            <Switch 
              id="two-factor-auth"
              checked={settings.twoFactorAuth}
              onCheckedChange={(checked) => setSettings({...settings, twoFactorAuth: checked})}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="session-timeout">Session Timeout</Label>
            <Select value={settings.sessionTimeout} onValueChange={(value) => setSettings({...settings, sessionTimeout: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15 minutes">15 minutes</SelectItem>
                <SelectItem value="30 minutes">30 minutes</SelectItem>
                <SelectItem value="1 hour">1 hour</SelectItem>
                <SelectItem value="2 hours">2 hours</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password-policy">Password Policy</Label>
            <Select value={settings.passwordPolicy} onValueChange={(value) => setSettings({...settings, passwordPolicy: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Basic">Basic (8 characters)</SelectItem>
                <SelectItem value="Medium">Medium (10 characters, mixed case)</SelectItem>
                <SelectItem value="Strong">Strong (12 characters, mixed case, numbers, symbols)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Password Management</CardTitle>
          <CardDescription>Update your account password</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <Button className="w-full">Update Password</Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderDataSettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Backup Settings
          </CardTitle>
          <CardDescription>Configure automatic backup preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="auto-backup">Automatic Backup</Label>
              <p className="text-sm text-muted-foreground">Enable automatic data backups</p>
            </div>
            <Switch 
              id="auto-backup"
              checked={settings.autoBackup}
              onCheckedChange={(checked) => setSettings({...settings, autoBackup: checked})}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="backup-frequency">Backup Frequency</Label>
            <Select value={settings.backupFrequency} onValueChange={(value) => setSettings({...settings, backupFrequency: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Daily">Daily</SelectItem>
                <SelectItem value="Weekly">Weekly</SelectItem>
                <SelectItem value="Monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="retention-period">Data Retention Period</Label>
            <Select value={settings.retentionPeriod} onValueChange={(value) => setSettings({...settings, retentionPeriod: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3 months">3 months</SelectItem>
                <SelectItem value="6 months">6 months</SelectItem>
                <SelectItem value="1 year">1 year</SelectItem>
                <SelectItem value="2 years">2 years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data Management</CardTitle>
          <CardDescription>Import/Export and backup operations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="gap-2">
              <Upload className="h-4 w-4" />
              Import Data
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Data
            </Button>
            <Button variant="outline" className="gap-2">
              <Database className="h-4 w-4" />
              Create Backup
            </Button>
            <Button variant="outline" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Restore Backup
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderTimeSlotSettings = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Time Slot Configuration
        </CardTitle>
        <CardDescription>Configure class time slots for timetable generation</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {timeSlots.map((slot) => (
            <div key={slot.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <Switch 
                  checked={slot.active}
                  onCheckedChange={() => {
                    // Handle time slot toggle
                  }}
                />
                <div>
                  <span className="font-medium">{slot.name}</span>
                  <p className="text-sm text-muted-foreground">{slot.start} - {slot.end}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">Edit</Button>
                <Button size="sm" variant="destructive">Delete</Button>
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full gap-2">
          <Clock className="h-4 w-4" />
          Add New Time Slot
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigateTo("dashboard")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
            <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={handleSave} className="gap-2">
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="general" className="gap-2">
              <User className="h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2">
              <Shield className="h-4 w-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="data" className="gap-2">
              <Database className="h-4 w-4" />
              Data
            </TabsTrigger>
            <TabsTrigger value="timeslots" className="gap-2">
              <Clock className="h-4 w-4" />
              Time Slots
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general">{renderGeneralSettings()}</TabsContent>
          <TabsContent value="notifications">{renderNotificationSettings()}</TabsContent>
          <TabsContent value="security">{renderSecuritySettings()}</TabsContent>
          <TabsContent value="data">{renderDataSettings()}</TabsContent>
          <TabsContent value="timeslots">{renderTimeSlotSettings()}</TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default SettingsPage;