import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useNavigation } from "@/pages/Index";
import { ArrowLeft, CheckCircle, XCircle, Clock, Eye, MessageSquare, Calendar, User, AlertCircle } from "lucide-react";

const ApprovalsPage = () => {
  const { navigateTo } = useNavigation();
  const [activeTab, setActiveTab] = useState("pending");

  const pendingApprovals = [
    {
      id: 1,
      type: "Timetable",
      title: "CS Department - Semester 3 Timetable",
      submittedBy: "Dr. John Smith",
      submittedOn: "2024-01-15",
      department: "Computer Science",
      priority: "high",
      description: "Updated timetable with new lab sessions"
    },
    {
      id: 2,
      type: "Room Change",
      title: "Physics Lab Room Change Request",
      submittedBy: "Prof. Sarah Wilson",
      submittedOn: "2024-01-14",
      department: "Physics",
      priority: "medium",
      description: "Request to change lab location due to equipment upgrade"
    },
    {
      id: 3,
      type: "Faculty Leave",
      title: "Medical Leave Application",
      submittedBy: "Dr. Mike Johnson",
      submittedOn: "2024-01-13",
      department: "Electronics",
      priority: "urgent",
      description: "Medical leave for 2 weeks, need substitute arrangement"
    }
  ];

  const approvedItems = [
    {
      id: 4,
      type: "Timetable",
      title: "Mathematics Department Timetable",
      approvedBy: "Dean Academic",
      approvedOn: "2024-01-12",
      department: "Mathematics",
      submittedBy: "Prof. Emily Davis"
    },
    {
      id: 5,
      type: "Room Booking",
      title: "Auditorium Booking for Seminar",
      approvedBy: "Admin",
      approvedOn: "2024-01-11",
      department: "Computer Science",
      submittedBy: "Dr. John Smith"
    }
  ];

  const rejectedItems = [
    {
      id: 6,
      type: "Timetable",
      title: "Chemistry Lab Schedule",
      rejectedBy: "HOD Chemistry",
      rejectedOn: "2024-01-10",
      department: "Chemistry",
      submittedBy: "Prof. Robert Brown",
      reason: "Conflicts with existing lab sessions"
    }
  ];

  const workflowSteps = [
    { step: 1, title: "Submission", description: "Faculty submits request", status: "completed" },
    { step: 2, title: "Department Review", description: "HOD reviews the request", status: "current" },
    { step: 3, title: "Admin Approval", description: "Admin final approval", status: "pending" },
    { step: 4, title: "Implementation", description: "Changes implemented", status: "pending" }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent": return "bg-destructive text-destructive-foreground";
      case "high": return "bg-warning text-warning-foreground";
      case "medium": return "bg-info text-info-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Timetable": return <Calendar className="h-4 w-4" />;
      case "Room Change": return <AlertCircle className="h-4 w-4" />;
      case "Faculty Leave": return <User className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const renderPendingApprovals = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {pendingApprovals.map((item) => (
            <Card key={item.id} className="border-l-4 border-l-warning">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getTypeIcon(item.type)}
                    <div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription>Submitted by {item.submittedBy} • {item.submittedOn}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getPriorityColor(item.priority)}>
                      {item.priority}
                    </Badge>
                    <Badge variant="outline">{item.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Department: {item.department}</span>
                    <span>ID: #{item.id}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="gap-2">
                      <Eye className="h-3 w-3" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2">
                      <MessageSquare className="h-3 w-3" />
                      Comment
                    </Button>
                    <Button size="sm" className="gap-2">
                      <CheckCircle className="h-3 w-3" />
                      Approve
                    </Button>
                    <Button size="sm" variant="destructive" className="gap-2">
                      <XCircle className="h-3 w-3" />
                      Reject
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Approval Workflow</CardTitle>
              <CardDescription>Standard approval process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {workflowSteps.map((step) => (
                  <div key={step.step} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step.status === 'completed' ? 'bg-success text-success-foreground' :
                      step.status === 'current' ? 'bg-warning text-warning-foreground' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {step.status === 'completed' ? <CheckCircle className="h-4 w-4" /> : step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Pending</span>
                <Badge className="bg-warning text-warning-foreground">{pendingApprovals.length}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Approved Today</span>
                <Badge className="bg-success text-success-foreground">5</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Average Processing Time</span>
                <span className="text-sm">2.3 days</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderApprovedItems = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-success" />
          Approved Items
        </CardTitle>
        <CardDescription>Recently approved requests</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Approved By</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {approvedItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>
                  <Badge variant="outline">{item.type}</Badge>
                </TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>{item.approvedBy}</TableCell>
                <TableCell>{item.approvedOn}</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline">
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );

  const renderRejectedItems = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <XCircle className="h-5 w-5 text-destructive" />
          Rejected Items
        </CardTitle>
        <CardDescription>Recently rejected requests</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Rejected By</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rejectedItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>
                  <Badge variant="outline">{item.type}</Badge>
                </TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>{item.rejectedBy}</TableCell>
                <TableCell className="max-w-xs truncate">{item.reason}</TableCell>
                <TableCell>{item.rejectedOn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
            <h1 className="text-2xl font-bold text-foreground">Approvals</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending" className="gap-2">
              <Clock className="h-4 w-4" />
              Pending ({pendingApprovals.length})
            </TabsTrigger>
            <TabsTrigger value="approved" className="gap-2">
              <CheckCircle className="h-4 w-4" />
              Approved ({approvedItems.length})
            </TabsTrigger>
            <TabsTrigger value="rejected" className="gap-2">
              <XCircle className="h-4 w-4" />
              Rejected ({rejectedItems.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending">{renderPendingApprovals()}</TabsContent>
          <TabsContent value="approved">{renderApprovedItems()}</TabsContent>
          <TabsContent value="rejected">{renderRejectedItems()}</TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ApprovalsPage;