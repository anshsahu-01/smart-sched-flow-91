import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useNavigation } from "@/pages/Index";
import { ArrowLeft, CheckCircle, XCircle, Clock, MessageSquare, Download, AlertTriangle } from "lucide-react";

const ReviewPage = () => {
  const { navigateTo } = useNavigation();
  const [selectedTimetable, setSelectedTimetable] = useState("version-1");

  const timetableVersions = [
    {
      id: "version-1",
      name: "Version 1.0",
      status: "pending",
      conflicts: 2,
      efficiency: 94,
      generatedAt: "2024-01-15 10:30 AM",
      department: "Computer Science"
    },
    {
      id: "version-2",
      name: "Version 2.0",
      status: "approved",
      conflicts: 0,
      efficiency: 98,
      generatedAt: "2024-01-15 02:15 PM",
      department: "Computer Science"
    },
    {
      id: "version-3",
      name: "Version 1.1",
      status: "rejected",
      conflicts: 5,
      efficiency: 87,
      generatedAt: "2024-01-14 04:45 PM",
      department: "Electronics"
    }
  ];

  const scheduleData = [
    { time: "09:00-10:00", monday: "DSA Lab", tuesday: "Physics", wednesday: "Math", thursday: "Chemistry", friday: "English" },
    { time: "10:00-11:00", monday: "Math", tuesday: "DSA", wednesday: "Physics Lab", thursday: "Math", friday: "Chemistry" },
    { time: "11:00-12:00", monday: "Physics", tuesday: "Chemistry", wednesday: "English", thursday: "DSA", friday: "Physics Lab" },
    { time: "12:00-01:00", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
    { time: "01:00-02:00", monday: "Chemistry", tuesday: "English", wednesday: "DSA", thursday: "Physics", friday: "Math" },
    { time: "02:00-03:00", monday: "English", tuesday: "Math", wednesday: "Chemistry", thursday: "English", friday: "DSA" },
  ];

  const conflicts = [
    { type: "Room Conflict", description: "Room 101 assigned to two classes at 10:00 AM", severity: "high" },
    { type: "Faculty Clash", description: "Dr. Smith scheduled for two subjects simultaneously", severity: "medium" }
  ];

  const comments = [
    { author: "Dr. John Smith", role: "Department Head", comment: "The morning slots look good, but afternoon needs adjustment", time: "2 hours ago" },
    { author: "Prof. Sarah Wilson", role: "Faculty", comment: "Lab sessions are well distributed", time: "4 hours ago" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "bg-success text-success-foreground";
      case "rejected": return "bg-destructive text-destructive-foreground";
      default: return "bg-warning text-warning-foreground";
    }
  };

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
            <h1 className="text-2xl font-bold text-foreground">Review Timetables</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Generated Timetable Versions</CardTitle>
                <CardDescription>Select a version to review and approve</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {timetableVersions.map((version) => (
                  <div 
                    key={version.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedTimetable === version.id ? 'border-primary bg-primary/5' : 'hover:border-muted-foreground/50'
                    }`}
                    onClick={() => setSelectedTimetable(version.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold">{version.name}</h4>
                        <Badge className={getStatusColor(version.status)}>
                          {version.status}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{version.generatedAt}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Conflicts: </span>
                        <span className={version.conflicts > 0 ? "text-destructive font-medium" : "text-success"}>
                          {version.conflicts}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Efficiency: </span>
                        <span className="font-medium">{version.efficiency}%</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Department: </span>
                        <span>{version.department}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Timetable Preview</CardTitle>
                <CardDescription>Computer Science - Semester 3</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Time</TableHead>
                        <TableHead>Monday</TableHead>
                        <TableHead>Tuesday</TableHead>
                        <TableHead>Wednesday</TableHead>
                        <TableHead>Thursday</TableHead>
                        <TableHead>Friday</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {scheduleData.map((row) => (
                        <TableRow key={row.time}>
                          <TableCell className="font-medium">{row.time}</TableCell>
                          <TableCell>{row.monday}</TableCell>
                          <TableCell>{row.tuesday}</TableCell>
                          <TableCell>{row.wednesday}</TableCell>
                          <TableCell>{row.thursday}</TableCell>
                          <TableCell>{row.friday}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  Conflicts ({conflicts.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {conflicts.map((conflict, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{conflict.type}</span>
                      <Badge variant={conflict.severity === "high" ? "destructive" : "secondary"}>
                        {conflict.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{conflict.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Comments & Feedback
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comments.map((comment, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{comment.author}</span>
                      <span className="text-xs text-muted-foreground">{comment.time}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">{comment.role}</Badge>
                    <p className="text-sm text-muted-foreground">{comment.comment}</p>
                    {index < comments.length - 1 && <hr className="mt-3" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Approve Timetable
                </Button>
                <Button variant="destructive" className="w-full gap-2">
                  <XCircle className="h-4 w-4" />
                  Reject Timetable
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Export as PDF
                </Button>
                <Button variant="secondary" className="w-full gap-2">
                  <Clock className="h-4 w-4" />
                  Request Modifications
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReviewPage;