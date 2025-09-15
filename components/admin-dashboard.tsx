"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Calendar,
  Clock,
  Users,
  DollarSign,
  TrendingUp,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  Mail,
  Phone,
} from "lucide-react"

// Mock data - in a real app, this would come from your database
const mockStats = {
  totalBookings: 156,
  totalRevenue: 23400,
  totalCustomers: 89,
  avgSessionValue: 175,
}

const mockBookings = [
  {
    id: "1",
    customer: "John Doe",
    email: "john@example.com",
    service: "Strategy Consultation",
    date: "2024-01-15",
    time: "10:00 AM",
    duration: "60 minutes",
    price: "$150",
    status: "confirmed",
  },
  {
    id: "2",
    customer: "Jane Smith",
    email: "jane@example.com",
    service: "Creative Workshop",
    date: "2024-01-16",
    time: "2:00 PM",
    duration: "90 minutes",
    price: "$200",
    status: "pending",
  },
  {
    id: "3",
    customer: "Mike Johnson",
    email: "mike@example.com",
    service: "Team Coaching",
    date: "2024-01-17",
    time: "11:00 AM",
    duration: "120 minutes",
    price: "$300",
    status: "completed",
  },
]

const mockCustomers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    totalBookings: 3,
    totalSpent: "$650",
    joinDate: "2024-01-01",
    status: "active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 (555) 987-6543",
    totalBookings: 2,
    totalSpent: "$350",
    joinDate: "2024-01-05",
    status: "active",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 (555) 456-7890",
    totalBookings: 1,
    totalSpent: "$300",
    joinDate: "2024-01-10",
    status: "inactive",
  },
]

const mockServices = [
  {
    id: "1",
    title: "Strategy Consultation",
    description: "Get expert guidance on business strategy, planning, and growth opportunities.",
    duration: "60 minutes",
    price: "$150",
    active: true,
  },
  {
    id: "2",
    title: "Creative Workshop",
    description: "Collaborative sessions to unlock creativity and innovative solutions.",
    duration: "90 minutes",
    price: "$200",
    active: true,
  },
  {
    id: "3",
    title: "Team Coaching",
    description: "Improve team dynamics, communication, and overall performance.",
    duration: "120 minutes",
    price: "$300",
    active: true,
  },
  {
    id: "4",
    title: "Quick Consultation",
    description: "Fast-track solutions for urgent questions and immediate needs.",
    duration: "30 minutes",
    price: "$75",
    active: false,
  },
]

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your service booking business</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Service
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{mockStats.totalBookings}</p>
                <p className="text-sm text-muted-foreground">Total Bookings</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">${mockStats.totalRevenue.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{mockStats.totalCustomers}</p>
                <p className="text-sm text-muted-foreground">Total Customers</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">${mockStats.avgSessionValue}</p>
                <p className="text-sm text-muted-foreground">Avg Session Value</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Bookings */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
                <CardDescription>Latest customer bookings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockBookings.slice(0, 3).map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">{booking.customer}</p>
                      <p className="text-sm text-muted-foreground">{booking.service}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{booking.date}</span>
                        <span>{booking.time}</span>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="font-semibold">{booking.price}</p>
                      <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Revenue Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">Revenue chart would go here</p>
                    <p className="text-sm text-muted-foreground">Connect analytics to see detailed insights</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="bookings" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Bookings</CardTitle>
                  <CardDescription>Manage customer bookings and appointments</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Search bookings..." className="w-64" />
                  <Button variant="outline">Filter</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockBookings.map((booking) => (
                  <div key={booking.id} className="border rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold text-lg">{booking.customer}</h3>
                          <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>{booking.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{booking.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>
                              {booking.time} ({booking.duration})
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4" />
                            <span>{booking.price}</span>
                          </div>
                        </div>
                        <p className="font-medium">{booking.service}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Customer Management</CardTitle>
                  <CardDescription>View and manage your customer base</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Search customers..." className="w-64" />
                  <Button variant="outline">Export</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockCustomers.map((customer) => (
                  <div key={customer.id} className="border rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold text-lg">{customer.name}</h3>
                          <Badge className={getStatusColor(customer.status)}>{customer.status}</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>{customer.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>{customer.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>Joined {customer.joinDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4" />
                            <span>{customer.totalSpent} total</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{customer.totalBookings} bookings</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Service Management</CardTitle>
                  <CardDescription>Manage your service offerings and pricing</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Service
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockServices.map((service) => (
                  <div key={service.id} className="border rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold text-lg">{service.title}</h3>
                          <Badge
                            className={service.active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                          >
                            {service.active ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-pretty">{service.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{service.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            <span>{service.price}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Add Service Form */}
          <Card>
            <CardHeader>
              <CardTitle>Add New Service</CardTitle>
              <CardDescription>Create a new service offering for your customers</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Service Title</Label>
                    <Input id="title" placeholder="e.g., Strategy Consultation" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <Input id="price" placeholder="e.g., $150" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Input id="duration" placeholder="e.g., 60 minutes" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" placeholder="e.g., Consultation" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" rows={3} placeholder="Describe what this service includes..." />
                </div>
                <Button type="submit" className="w-full">
                  Create Service
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
