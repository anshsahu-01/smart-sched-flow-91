import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, ArrowLeft, Shield, User, UserCheck } from "lucide-react";
import { useNavigation } from "@/pages/Index";

const LoginPage = () => {
  const { navigateTo } = useNavigation();
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const roles = [
    { value: "admin", label: "System Administrator", icon: Shield, description: "Full system access and management" },
    { value: "dept_head", label: "Department Head", icon: UserCheck, description: "Department-level scheduling and approvals" },
    { value: "faculty", label: "Faculty Member", icon: User, description: "View schedules and submit preferences" }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { role, email, password });
    // Navigate to dashboard on successful login
    navigateTo("dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 animate-scale-in">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Calendar className="h-10 w-10 text-white" />
            <span className="text-2xl font-bold text-white">Smart Classroom</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-white/80">Sign in to access your dashboard</p>
        </div>

        {/* Login Card */}
        <Card className="bg-white/95 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle>Login to Dashboard</CardTitle>
            <CardDescription>
              Enter your credentials to access the Smart Classroom platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Role Selection */}
              <div className="space-y-2">
                <Label htmlFor="role">Select Your Role</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((roleOption) => (
                      <SelectItem key={roleOption.value} value={roleOption.value}>
                        <div className="flex items-center space-x-2">
                          <roleOption.icon className="h-4 w-4" />
                          <span>{roleOption.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {role && (
                  <p className="text-sm text-muted-foreground">
                    {roles.find(r => r.value === role)?.description}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Login Button */}
              <Button 
                type="submit" 
                className="w-full" 
                variant="hero"
                disabled={!role || !email || !password}
              >
                Sign In to Dashboard
              </Button>

              {/* Forgot Password */}
              <div className="text-center">
                <Button variant="link" className="text-sm">
                  Forgot your password?
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Role Information Cards */}
        <div className="grid gap-3">
          {roles.map((roleOption) => (
            <Card 
              key={roleOption.value} 
              className={`bg-white/10 backdrop-blur-sm border-white/20 cursor-pointer transition-all hover:bg-white/20 ${
                role === roleOption.value ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => setRole(roleOption.value)}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <roleOption.icon className="h-5 w-5 text-white" />
                  <div>
                    <p className="text-white font-medium">{roleOption.label}</p>
                    <p className="text-white/70 text-sm">{roleOption.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Button variant="ghost" className="text-white/80 hover:text-white" onClick={() => navigateTo("home")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;