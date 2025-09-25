import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Users, BookOpen, Building, Plus, FileSpreadsheet } from "lucide-react";
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
  AreaChart,
  Area
} from "recharts";

const TimetableGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  // Sample constraint data
  const constraintData = [
    { name: 'Faculty Availability', satisfied: 95, violations: 5 },
    { name: 'Room Capacity', satisfied: 88, violations: 12 },
    { name: 'Subject Requirements', satisfied: 92, violations: 8 },
    { name: 'Time Preferences', satisfied: 87, violations: 13 },
    { name: 'Lab Requirements', satisfied: 90, violations: 10 },
  ];

  const optimizationScores = [
    { solution: 'Solution A', efficiency: 85, conflicts: 6, score: 89 },
    { solution: 'Solution B', efficiency: 92, conflicts: 3, score: 94 },
    { solution: 'Solution C', efficiency: 88, conflicts: 4, score: 91 },
    { solution: 'Solution D', efficiency: 90, conflicts: 5, score: 88 },
  ];

  const timeSlotUtilization = [
    { time: '8:00-9:00', utilization: 65 },
    { time: '9:00-10:00', utilization: 85 },
    { time: '10:00-11:00', utilization: 92 },
    { time: '11:00-12:00', utilization: 88 },
    { time: '12:00-1:00', utilization: 45 },
    { time: '1:00-2:00', utilization: 78 },
    { time: '2:00-3:00', utilization: 82 },
    { time: '3:00-4:00', utilization: 75 },
  ];

  const departmentWorkload = [
    { name: 'Computer Science', workload: 85, color: '#3B82F6' },
    { name: 'Engineering', workload: 78, color: '#10B981' },
    { name: 'Mathematics', workload: 82, color: '#F59E0B' },
    { name: 'Physics', workload: 75, color: '#EF4444' },
    { name: 'Chemistry', workload: 80, color: '#8B5CF6' },
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Timetable Generator</h2>
        <p className="text-muted-foreground">
          Generate optimized timetables using AI-powered scheduling algorithms
        </p>
      </div>

      {/* Configuration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Total Subjects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">128</div>
            <p className="text-xs text-muted-foreground">Across all departments</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Faculty Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">45</div>
            <p className="text-xs text-muted-foreground">Available for scheduling</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Classrooms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">24</div>
            <p className="text-xs text-muted-foreground">Including labs</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Time Slots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">48</div>
            <p className="text-xs text-muted-foreground">Per week</p>
          </CardContent>
        </Card>
      </div>

      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle>Generation Parameters</CardTitle>
          <CardDescription>Configure constraints and preferences for timetable generation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <select className="w-full p-2 border rounded-md">
                <option>All Departments</option>
                <option>Computer Science</option>
                <option>Engineering</option>
                <option>Mathematics</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="semester">Semester</Label>
              <select className="w-full p-2 border rounded-md">
                <option>All Semesters</option>
                <option>Semester 1</option>
                <option>Semester 2</option>
                <option>Semester 3</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="priority">Optimization Priority</Label>
              <select className="w-full p-2 border rounded-md">
                <option>Balanced</option>
                <option>Minimize Conflicts</option>
                <option>Maximize Utilization</option>
                <option>Faculty Preference</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <Button 
              onClick={handleGenerate} 
              variant="hero" 
              size="lg" 
              disabled={isGenerating}
              className="w-full md:w-auto"
            >
              {isGenerating ? "Generating..." : "Generate Timetable"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Analytics Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Constraint Satisfaction */}
        <Card>
          <CardHeader>
            <CardTitle>Constraint Satisfaction Analysis</CardTitle>
            <CardDescription>How well current parameters meet constraints</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={constraintData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="satisfied" fill="hsl(var(--success))" name="Satisfied %" />
                <Bar dataKey="violations" fill="hsl(var(--destructive))" name="Violations %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Time Slot Utilization */}
        <Card>
          <CardHeader>
            <CardTitle>Time Slot Utilization</CardTitle>
            <CardDescription>Classroom usage throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={timeSlotUtilization}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="utilization" 
                  stroke="hsl(var(--primary))" 
                  fill="hsl(var(--primary))" 
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Optimization Solutions */}
        <Card>
          <CardHeader>
            <CardTitle>Solution Comparison</CardTitle>
            <CardDescription>AI-generated timetable alternatives</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={optimizationScores}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="solution" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="efficiency" fill="hsl(var(--primary))" name="Efficiency %" />
                <Bar dataKey="score" fill="hsl(var(--secondary))" name="Overall Score" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Department Workload */}
        <Card>
          <CardHeader>
            <CardTitle>Department Workload Distribution</CardTitle>
            <CardDescription>Teaching load across departments</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={departmentWorkload}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="workload"
                  label={({ name, workload }) => `${name}: ${workload}%`}
                >
                  {departmentWorkload.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Generated Solutions Preview */}
      {isGenerating && (
        <Card>
          <CardHeader>
            <CardTitle>Generating Solutions...</CardTitle>
            <CardDescription>AI is analyzing constraints and optimizing schedules</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Processing constraints...</p>
                <p className="text-xs text-muted-foreground">This may take a few moments</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TimetableGenerator;