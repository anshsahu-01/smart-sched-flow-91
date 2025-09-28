import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useNavigation } from "@/pages/Index";
import { ArrowLeft, Plus, Edit, Trash2, Users, BookOpen, MapPin, Clock } from "lucide-react";

const AddDataPage = () => {
  const { navigateTo } = useNavigation();
  const [activeTab, setActiveTab] = useState("classrooms");

  const classrooms = [
    { id: 1, name: "Room 101", type: "Lecture Hall", capacity: 60, equipment: "Projector, AC, WiFi" },
    { id: 2, name: "Lab 201", type: "Computer Lab", capacity: 30, equipment: "30 PCs, Projector, AC" },
    { id: 3, name: "Room 102", type: "Tutorial Room", capacity: 25, equipment: "Whiteboard, AC" },
    { id: 4, name: "Lab 301", type: "Physics Lab", capacity: 20, equipment: "Lab Equipment, Fume Hood" }
  ];

  const faculties = [
    { id: 1, name: "Dr. John Smith", department: "Computer Science", subjects: "DSA, Algorithms", availability: "Mon-Fri", avgLeaves: 2 },
    { id: 2, name: "Prof. Sarah Wilson", department: "Mathematics", subjects: "Calculus, Statistics", availability: "Mon-Thu", avgLeaves: 1 },
    { id: 3, name: "Dr. Mike Johnson", department: "Physics", subjects: "Mechanics, Electronics", availability: "Tue-Sat", avgLeaves: 3 },
    { id: 4, name: "Prof. Emily Davis", department: "Chemistry", subjects: "Organic, Inorganic", availability: "Mon-Fri", avgLeaves: 1 }
  ];

  const subjects = [
    { id: 1, name: "Data Structures", code: "CS301", type: "Core", weeklyHours: 4, labRequired: true },
    { id: 2, name: "Calculus", code: "MA201", type: "Core", weeklyHours: 3, labRequired: false },
    { id: 3, name: "Physics", code: "PH101", type: "Core", weeklyHours: 3, labRequired: true },
    { id: 4, name: "Technical Writing", code: "EN301", type: "Elective", weeklyHours: 2, labRequired: false }
  ];

  const batches = [
    { id: 1, name: "CS-3A", department: "Computer Science", semester: 3, strength: 55, shift: "Morning" },
    { id: 2, name: "CS-3B", department: "Computer Science", semester: 3, strength: 58, shift: "Morning" },
    { id: 3, name: "EC-2A", department: "Electronics", semester: 2, strength: 45, shift: "Afternoon" },
    { id: 4, name: "ME-4A", department: "Mechanical", semester: 4, strength: 50, shift: "Morning" }
  ];

  const renderClassroomForm = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Add New Classroom
          </CardTitle>
          <CardDescription>Enter classroom details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="classroom-name">Classroom Name</Label>
            <Input id="classroom-name" placeholder="e.g., Room 101" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="classroom-type">Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lecture">Lecture Hall</SelectItem>
                <SelectItem value="lab">Laboratory</SelectItem>
                <SelectItem value="tutorial">Tutorial Room</SelectItem>
                <SelectItem value="auditorium">Auditorium</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="capacity">Capacity</Label>
            <Input id="capacity" type="number" placeholder="e.g., 60" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="equipment">Equipment Available</Label>
            <Textarea id="equipment" placeholder="e.g., Projector, AC, WiFi" />
          </div>
          <Button className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Classroom
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Existing Classrooms</CardTitle>
          <CardDescription>Manage classroom inventory</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {classrooms.map((room) => (
              <div key={room.id} className="p-3 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{room.name}</h4>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="destructive">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <Badge variant="secondary">{room.type}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capacity:</span>
                    <span>{room.capacity}</span>
                  </div>
                  <div className="text-muted-foreground">
                    Equipment: {room.equipment}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderFacultyForm = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Add New Faculty
          </CardTitle>
          <CardDescription>Enter faculty member details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="faculty-name">Faculty Name</Label>
            <Input id="faculty-name" placeholder="e.g., Dr. John Smith" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subjects">Subjects Handled</Label>
            <Input id="subjects" placeholder="e.g., DSA, Algorithms" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="availability">Availability</Label>
            <Input id="availability" placeholder="e.g., Mon-Fri" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="avg-leaves">Average Monthly Leaves</Label>
            <Input id="avg-leaves" type="number" placeholder="e.g., 2" />
          </div>
          <Button className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Faculty
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Faculty List</CardTitle>
          <CardDescription>Manage faculty members</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {faculties.map((faculty) => (
                <TableRow key={faculty.id}>
                  <TableCell className="font-medium">{faculty.name}</TableCell>
                  <TableCell>{faculty.department}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const renderSubjectForm = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Add New Subject
          </CardTitle>
          <CardDescription>Enter subject details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="subject-name">Subject Name</Label>
            <Input id="subject-name" placeholder="e.g., Data Structures" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject-code">Subject Code</Label>
            <Input id="subject-code" placeholder="e.g., CS301" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject-type">Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="core">Core</SelectItem>
                <SelectItem value="elective">Elective</SelectItem>
                <SelectItem value="practical">Practical</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="weekly-hours">Weekly Hours</Label>
            <Input id="weekly-hours" type="number" placeholder="e.g., 4" />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="lab-required" />
            <Label htmlFor="lab-required">Lab Required</Label>
          </div>
          <Button className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Subject
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Subject List</CardTitle>
          <CardDescription>Manage subjects</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Hours</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjects.map((subject) => (
                <TableRow key={subject.id}>
                  <TableCell className="font-medium">{subject.name}</TableCell>
                  <TableCell>{subject.code}</TableCell>
                  <TableCell>
                    <Badge variant={subject.type === "Core" ? "default" : "secondary"}>
                      {subject.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{subject.weeklyHours}h</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const renderBatchForm = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Add New Batch
          </CardTitle>
          <CardDescription>Enter batch details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="batch-name">Batch Name</Label>
            <Input id="batch-name" placeholder="e.g., CS-3A" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="batch-department">Department</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="ec">Electronics</SelectItem>
                <SelectItem value="me">Mechanical</SelectItem>
                <SelectItem value="civil">Civil</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="semester">Semester</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent>
                {[1,2,3,4,5,6,7,8].map(sem => (
                  <SelectItem key={sem} value={sem.toString()}>{sem}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="strength">Student Strength</Label>
            <Input id="strength" type="number" placeholder="e.g., 55" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="shift">Shift</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select shift" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning</SelectItem>
                <SelectItem value="afternoon">Afternoon</SelectItem>
                <SelectItem value="evening">Evening</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Batch
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Batch List</CardTitle>
          <CardDescription>Manage student batches</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Batch</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Semester</TableHead>
                <TableHead>Strength</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {batches.map((batch) => (
                <TableRow key={batch.id}>
                  <TableCell className="font-medium">{batch.name}</TableCell>
                  <TableCell>{batch.department}</TableCell>
                  <TableCell>{batch.semester}</TableCell>
                  <TableCell>{batch.strength}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
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
            <h1 className="text-2xl font-bold text-foreground">Add Data</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="classrooms" className="gap-2">
              <MapPin className="h-4 w-4" />
              Classrooms
            </TabsTrigger>
            <TabsTrigger value="faculty" className="gap-2">
              <Users className="h-4 w-4" />
              Faculty
            </TabsTrigger>
            <TabsTrigger value="subjects" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Subjects
            </TabsTrigger>
            <TabsTrigger value="batches" className="gap-2">
              <Users className="h-4 w-4" />
              Batches
            </TabsTrigger>
          </TabsList>

          <TabsContent value="classrooms">{renderClassroomForm()}</TabsContent>
          <TabsContent value="faculty">{renderFacultyForm()}</TabsContent>
          <TabsContent value="subjects">{renderSubjectForm()}</TabsContent>
          <TabsContent value="batches">{renderBatchForm()}</TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AddDataPage;