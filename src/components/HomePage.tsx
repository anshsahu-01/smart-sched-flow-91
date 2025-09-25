import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, BookOpen, Brain, CheckCircle, Clock } from "lucide-react";
import { useNavigation } from "@/pages/Index";
import heroImage from "@/assets/hero-classroom.jpg";

const HomePage = () => {
  const { navigateTo } = useNavigation();
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered timetable generation that optimizes classroom usage and faculty workload distribution."
    },
    {
      icon: Users,
      title: "Faculty Management",
      description: "Comprehensive faculty tracking with availability, subjects, and workload monitoring."
    },
    {
      icon: BookOpen,
      title: "Curriculum Integration",
      description: "Seamless integration with UG/PG curricula, electives, and NEP 2020 compliance."
    },
    {
      icon: Brain,
      title: "Conflict Resolution",
      description: "Intelligent conflict detection and resolution with multiple optimization solutions."
    },
    {
      icon: CheckCircle,
      title: "Approval Workflow",
      description: "Multi-level review and approval system for department heads and administration."
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Dynamic scheduling updates with instant notifications and change tracking."
    }
  ];

  const stats = [
    { number: "95%", label: "Efficiency Gain" },
    { number: "50+", label: "Institutions" },
    { number: "10K+", label: "Students Managed" },
    { number: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Smart Classroom</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">About</Button>
            <Button variant="outline" onClick={() => navigateTo("login")}>Login</Button>
            <Button variant="hero" onClick={() => navigateTo("login")}>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Smart Classroom &
              <span className="text-primary block">Timetable Scheduler</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Transform your educational institution with AI-powered scheduling. Generate optimized timetables that maximize efficiency while considering all constraints and preferences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="animate-scale-in" onClick={() => navigateTo("login")}>
                Start Scheduling
              </Button>
              <Button variant="outline" size="xl" className="animate-scale-in">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm text-muted-foreground">NEP 2020 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm text-muted-foreground">Multi-Department Support</span>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <img 
              src={heroImage} 
              alt="Smart Classroom Technology" 
              className="rounded-2xl shadow-hero w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Powerful Features for Modern Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform addresses every aspect of academic scheduling with intelligent automation and user-friendly interfaces.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join leading educational institutions using Smart Classroom to optimize their academic scheduling and improve operational efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="xl" onClick={() => navigateTo("login")}>
              Login to Dashboard
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="h-6 w-6 text-primary" />
                <span className="font-bold text-foreground">Smart Classroom</span>
              </div>
              <p className="text-muted-foreground">
                Revolutionizing educational scheduling with intelligent automation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Features</li>
                <li>Pricing</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Smart Classroom & Timetable Scheduler. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;