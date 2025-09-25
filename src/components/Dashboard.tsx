import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

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
                onClick={() => setActiveTab(item.id)}
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
                {/* Recent Activities */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                    <CardDescription>Latest updates and changes in the system</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            activity.status === 'pending' ? 'bg-warning' :
                            activity.status === 'approved' ? 'bg-success' : 'bg-muted'
                          }`} />
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium">{activity.action}</p>
                            <p className="text-xs text-muted-foreground">{activity.details}</p>
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
                    <CardDescription>Pending items requiring your attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingTasks.map((task, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium">{task.task}</p>
                            <span className={`text-xs px-2 py-1 rounded ${
                              task.priority === 'High' ? 'bg-destructive/10 text-destructive' :
                              task.priority === 'Medium' ? 'bg-warning/10 text-warning' :
                              'bg-muted text-muted-foreground'
                            }`}>
                              {task.priority}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">Due: {task.deadline}</p>
                          <p className="text-xs text-muted-foreground">Assigned to: {task.assignee}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks and shortcuts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline" className="h-20 flex-col">
                      <Plus className="h-6 w-6 mb-2" />
                      Add Faculty
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <Building className="h-6 w-6 mb-2" />
                      Add Classroom
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <Calendar className="h-6 w-6 mb-2" />
                      Generate Schedule
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <FileText className="h-6 w-6 mb-2" />
                      Export Data
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Other tab content would go here */}
          {activeTab !== "dashboard" && (
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
