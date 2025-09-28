import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useNavigation } from "@/pages/Index";
import { ArrowLeft, TrendingUp, TrendingDown, Calendar, Users, MapPin, BookOpen, Clock, Download } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts";

const AnalyticsPage = () => {
  const { navigateTo } = useNavigation();

  const utilizationData = [
    { month: 'Jan', classrooms: 85, labs: 78, auditoriums: 92 },
    { month: 'Feb', classrooms: 88, labs: 82, auditoriums: 95 },
    { month: 'Mar', classrooms: 90, labs: 85, auditoriums: 88 },
    { month: 'Apr', classrooms: 87, labs: 80, auditoriums: 90 },
    { month: 'May', classrooms: 92, labs: 88, auditoriums: 93 },
    { month: 'Jun', classrooms: 89, labs: 85, auditoriums: 91 }
  ];

  const facultyWorkloadData = [
    { name: 'Dr. John Smith', hours: 18, efficiency: 95 },
    { name: 'Prof. Sarah Wilson', hours: 16, efficiency: 92 },
    { name: 'Dr. Mike Johnson', hours: 20, efficiency: 88 },
    { name: 'Prof. Emily Davis', hours: 15, efficiency: 96 },
    { name: 'Dr. Robert Brown', hours: 17, efficiency: 90 }
  ];

  const departmentData = [
    { name: 'Computer Science', value: 35, color: '#3b82f6' },
    { name: 'Electronics', value: 25, color: '#10b981' },
    { name: 'Mechanical', value: 20, color: '#f59e0b' },
    { name: 'Civil', value: 15, color: '#ef4444' },
    { name: 'Others', value: 5, color: '#8b5cf6' }
  ];

  const timetableEfficiencyData = [
    { week: 'Week 1', generated: 12, approved: 10, rejected: 2, efficiency: 83 },
    { week: 'Week 2', generated: 15, approved: 14, rejected: 1, efficiency: 93 },
    { week: 'Week 3', generated: 18, approved: 16, rejected: 2, efficiency: 89 },
    { week: 'Week 4', generated: 20, approved: 19, rejected: 1, efficiency: 95 }
  ];

  const resourceAllocationData = [
    { hour: '8-9', morning: 95, afternoon: 0, evening: 0 },
    { hour: '9-10', morning: 98, afternoon: 0, evening: 0 },
    { hour: '10-11', morning: 92, afternoon: 0, evening: 0 },
    { hour: '11-12', morning: 88, afternoon: 0, evening: 0 },
    { hour: '12-1', morning: 45, afternoon: 0, evening: 0 },
    { hour: '1-2', morning: 0, afternoon: 85, evening: 0 },
    { hour: '2-3', morning: 0, afternoon: 90, evening: 0 },
    { hour: '3-4', morning: 0, afternoon: 87, evening: 0 },
    { hour: '4-5', morning: 0, afternoon: 82, evening: 0 },
    { hour: '5-6', morning: 0, afternoon: 0, evening: 75 },
    { hour: '6-7', morning: 0, afternoon: 0, evening: 80 },
    { hour: '7-8', morning: 0, afternoon: 0, evening: 65 }
  ];

  const kpiCards = [
    {
      title: "Overall Utilization",
      value: "89.2%",
      change: "+2.4%",
      trend: "up",
      icon: <TrendingUp className="h-5 w-5" />,
      description: "Classroom utilization rate"
    },
    {
      title: "Scheduling Efficiency",
      value: "94.7%",
      change: "+1.8%",
      trend: "up",
      icon: <Calendar className="h-5 w-5" />,
      description: "Successful schedule generation"
    },
    {
      title: "Faculty Satisfaction",
      value: "92.3%",
      change: "-0.5%",
      trend: "down",
      icon: <Users className="h-5 w-5" />,
      description: "Faculty feedback score"
    },
    {
      title: "Conflict Resolution",
      value: "96.8%",
      change: "+3.2%",
      trend: "up",
      icon: <Clock className="h-5 w-5" />,
      description: "Conflicts resolved automatically"
    }
  ];

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
            <h1 className="text-2xl font-bold text-foreground">Analytics Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiCards.map((kpi, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{kpi.title}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">{kpi.value}</span>
                      <span className={`text-sm flex items-center gap-1 ${
                        kpi.trend === 'up' ? 'text-success' : 'text-destructive'
                      }`}>
                        {kpi.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {kpi.change}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{kpi.description}</p>
                  </div>
                  <div className="text-primary">{kpi.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Resource Utilization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Resource Utilization Trends
              </CardTitle>
              <CardDescription>Monthly utilization rates by resource type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={utilizationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="classrooms" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="labs" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="auditoriums" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Department Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Department Resource Distribution
              </CardTitle>
              <CardDescription>Resource allocation by department</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Faculty Workload */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Faculty Workload Analysis
              </CardTitle>
              <CardDescription>Teaching hours vs efficiency scores</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={facultyWorkloadData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="hours" fill="#3b82f6" name="Teaching Hours" />
                  <Bar yAxisId="right" dataKey="efficiency" fill="#10b981" name="Efficiency %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Timetable Generation Efficiency */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Timetable Generation Efficiency
              </CardTitle>
              <CardDescription>Weekly timetable generation performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={timetableEfficiencyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="generated" fill="#8b5cf6" name="Generated" />
                  <Bar yAxisId="left" dataKey="approved" fill="#10b981" name="Approved" />
                  <Bar yAxisId="left" dataKey="rejected" fill="#ef4444" name="Rejected" />
                  <Line yAxisId="right" type="monotone" dataKey="efficiency" stroke="#f59e0b" strokeWidth={3} name="Efficiency %" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Time Slot Utilization */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Hourly Resource Utilization
            </CardTitle>
            <CardDescription>Resource utilization by time slots across different shifts</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={resourceAllocationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="morning" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.8} />
                <Area type="monotone" dataKey="afternoon" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.8} />
                <Area type="monotone" dataKey="evening" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.8} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Peak Utilization Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Morning (9-11 AM)</span>
                  <span className="font-semibold">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Afternoon (2-3 PM)</span>
                  <span className="font-semibold">90%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Evening (6-7 PM)</span>
                  <span className="font-semibold">80%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Departments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Computer Science</span>
                  <span className="font-semibold">96.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Electronics</span>
                  <span className="font-semibold">94.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Mechanical</span>
                  <span className="font-semibold">92.1%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm">
                  <span className="text-muted-foreground">Total Schedules:</span>
                  <span className="font-semibold ml-2">156</span>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Zero Conflicts:</span>
                  <span className="font-semibold ml-2">142</span>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Avg Generation Time:</span>
                  <span className="font-semibold ml-2">2.3 min</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;