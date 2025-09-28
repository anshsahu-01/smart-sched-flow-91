import { useState } from "react";
import TimetableGenerator from "@/components/TimetableGenerator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useNavigation } from "@/pages/Index";
import { 
  Calendar, 
  Users, 
  BookOpen, 
  Building, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Home,
  Plus,
  Settings,
  FileText,
  UserCheck,
  BarChart3,
  Menu,
  Bell
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart
} from "recharts";

const Dashboard = () => {
  const { navigateTo } = useNavigation();
  const [activeTab, setActiveTab] = useState("dashboard");

  // Sample data for charts
  const classroomUtilizationData = [
    { name: 'Mon', Morning: 85, Afternoon: 92, Evening: 78 },
    { name: 'Tue', Morning: 88, Afternoon: 89, Evening: 82 },
    { name: 'Wed', Morning: 92, Afternoon: 95, Evening: 85 },
    { name: 'Thu', Morning: 90, Afternoon: 88, Evening: 80 },
    { name: 'Fri', Morning: 87, Afternoon: 90, Evening: 75 },
    { name: 'Sat', Morning: 65, Afternoon: 70, Evening: 45 },
  ];

  const departmentDistribution = [
    { name: 'Computer Science', value: 35, color: '#3B82F6' },
    { name: 'Engineering', value: 28, color: '#10B981' },
    { name: 'Mathematics', value: 15, color: '#F59E0B' },
    { name: 'Physics', value: 12, color: '#EF4444' },
    { name: 'Chemistry', value: 10, color: '#8B5CF6' },
  ];

  const facultyWorkloadData = [
    { name: 'Dr. Smith', hours: 22, subjects: 3 },
    { name: 'Dr. Johnson', hours: 20, subjects: 2 },
    { name: 'Dr. Williams', hours: 24, subjects: 4 },
    { name: 'Dr. Brown', hours: 18, subjects: 2 },
    { name: 'Dr. Davis', hours: 21, subjects: 3 },
    { name: 'Dr. Miller', hours: 19, subjects: 2 },
  ];

  const timetableEfficiencyData = [
    { month: 'Jan', efficiency: 82, conflicts: 15 },
    { month: 'Feb', efficiency: 85, conflicts: 12 },
    { month: 'Mar', efficiency: 88, conflicts: 8 },
    { month: 'Apr', efficiency: 91, conflicts: 6 },
    { month: 'May', efficiency: 87, conflicts: 10 },
    { month: 'Jun', efficiency: 93, conflicts: 4 },
  ];

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "add-data", label: "Add Data", icon: Plus },
    { id: "generate", label: "Generate Timetable", icon: Calendar },
    { id: "review", label: "Review", icon: FileText },
    { id: "approvals", label: "Approvals", icon: UserCheck },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const stats = [
    {
      title: "Total Classrooms",
      value: "24",
      change: "+2 from last month",
      icon: Building,
      color: "text-primary"
    },
    {
      title: "Active Batches",
      value: "18",
      change: "+3 new batches",
      icon: Users,
      color: "text-secondary"
    },
    {
      title: "Faculty Members",
      value: "45",
      change: "+5 this semester",
      icon: UserCheck,
      color: "text-success"
    },
    {
      title: "Subjects",
      value: "128",
      change: "8 electives added",
      icon: BookOpen,
      color: "text-warning"
    },
    {
      title: "Utilization Rate",
      value: "87%",
      change: "+5% improvement",
      icon: BarChart3,
      color: "text-primary"
    },
    {
      title: "Pending Approvals",
      value: "3",
      change: "2 urgent reviews",
      icon: AlertCircle,
      color: "text-destructive"
    }
  ];

  const recentActivities = [
    {
      action: "New timetable generated",
      details: "Computer Science Department - Semester 5",
      time: "2 hours ago",
      status: "pending"
    },
    {
      action: "Faculty schedule updated",
      details: "Dr. Sarah Johnson - Mathematics",
      time: "4 hours ago",
      status: "approved"
    },
    {
      action: "Classroom capacity modified",
      details: "Room A-205 - Increased to 60 students",
      time: "1 day ago",
      status: "completed"
    },
    {
      action: "New elective course added",
      details: "Machine Learning Fundamentals",
      time: "2 days ago",
      status: "approved"
    }
  ];

  const upcomingTasks = [
    {
      task: "Review CS Department Timetable",
      priority: "High",
      deadline: "Today, 5:00 PM",
      assignee: "Dr. Smith"
    },
    {
      task: "Approve New Faculty Schedule",
      priority: "Medium",
      deadline: "Tomorrow, 2:00 PM",
      assignee: "Admin Team"
    },
    {
      task: "Update Classroom Allocations",
      priority: "Low",
      deadline: "This Week",
      assignee: "Facilities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Smart Classroom</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="text-right">
                <p className="text-sm font-medium">Dr. Admin User</p>
                <p className="text-xs text-muted-foreground">System Administrator</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                A
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-card/30 min-h-screen">
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => {
                    if (item.id === "dashboard") {
                      setActiveTab(item.id);
                    } else if (item.id === "generate") {
                      navigateTo("timetable-generator");
                    } else if (item.id === "add-data") {
                      navigateTo("add-data");
                    } else if (item.id === "review") {
                      navigateTo("review");
                    } else if (item.id === "approvals") {
                      navigateTo("approvals");
                    } else if (item.id === "analytics") {
                      navigateTo("analytics");
                    } else if (item.id === "settings") {
                      navigateTo("settings");
                    }
                  }}
                >
                  <item.icon className="h-4 w-4 mr-3" />
                  {item.label}
                </Button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Page Header */}
              <div>
                <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
                <p className="text-muted-foreground">
                  Welcome back! Here's what's happening with your institution today.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                      <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">{stat.change}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Classroom Utilization Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Classroom Utilization</CardTitle>
                    <CardDescription>Weekly usage patterns across different time slots</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={classroomUtilizationData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Morning" fill="hsl(var(--primary))" />
                        <Bar dataKey="Afternoon" fill="hsl(var(--secondary))" />
                        <Bar dataKey="Evening" fill="hsl(var(--accent))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Department Distribution */}
                <Card>
                  <CardHeader>
                    <CardTitle>Department Distribution</CardTitle>
                    <CardDescription>Subject allocation across departments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={departmentDistribution}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {departmentDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Faculty Workload Analysis */}
                <Card>
                  <CardHeader>
                    <CardTitle>Faculty Workload Analysis</CardTitle>
                    <CardDescription>Teaching hours distribution among faculty members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={facultyWorkloadData} layout="horizontal">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" width={80} />
                        <Tooltip />
                        <Bar dataKey="hours" fill="hsl(var(--success))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Timetable Efficiency Trends */}
                <Card>
                  <CardHeader>
                    <CardTitle>Timetable Efficiency Trends</CardTitle>
                    <CardDescription>Monthly efficiency and conflict resolution metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={timetableEfficiencyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="efficiency" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={3}
                          name="Efficiency %"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="conflicts" 
                          stroke="hsl(var(--destructive))" 
                          strokeWidth={3}
                          name="Conflicts"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Analytics Section */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Activities */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                    <CardDescription>Latest system updates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentActivities.slice(0, 4).map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            activity.status === 'pending' ? 'bg-warning' :
                            activity.status === 'approved' ? 'bg-success' : 'bg-muted'
                          }`} />
                          <div className="flex-1">
                            <p className="text-sm font-medium">{activity.action}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Tasks */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Tasks</CardTitle>
                    <CardDescription>Pending approvals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {upcomingTasks.map((task, index) => (
                        <div key={index} className="border rounded-lg p-3">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-sm font-medium truncate">{task.task}</p>
                            <span className={`text-xs px-2 py-1 rounded ${
                              task.priority === 'High' ? 'bg-destructive/10 text-destructive' :
                              task.priority === 'Medium' ? 'bg-warning/10 text-warning' :
                              'bg-muted text-muted-foreground'
                            }`}>
                              {task.priority}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">{task.deadline}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* System Health */}
                <Card>
                  <CardHeader>
                    <CardTitle>System Health</CardTitle>
                    <CardDescription>Performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Server Status</span>
                        <span className="text-sm text-success font-medium">Online</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Response Time</span>
                        <span className="text-sm text-success font-medium">120ms</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Uptime</span>
                        <span className="text-sm text-success font-medium">99.9%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Active Users</span>
                        <span className="text-sm font-medium">247</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Generate Timetable Tab */}
          {activeTab === "generate" && <TimetableGenerator />}

          {/* Other tabs - placeholder content */}
          {activeTab !== "dashboard" && activeTab !== "generate" && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {sidebarItems.find(item => item.id === activeTab)?.label}
              </h2>
              <p className="text-muted-foreground">
                This section is under development. Full functionality coming soon!
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
