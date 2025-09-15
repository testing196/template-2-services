"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarInitials } from "@/components/ui/avatar"
import { Calendar, Clock, Phone, Mail, User, CreditCard, Settings } from "lucide-react"

// Mock data - in a real app, this would come from your database
const mockUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  joinDate: "January 2024",
}

const mockBookings = [
  {
    id: "1",
    service: "Strategy Consultation",
    date: "2024-01-15",
    time: "10:00 AM",
    duration: "60 minutes",
    price: "$150",
    status: "confirmed",
    consultant: "Sarah Johnson",
  },
  {
    id: "2",
    service: "Creative Workshop",
    date: "2024-01-22",
    time: "2:00 PM",
    duration: "90 minutes",
    price: "$200",
    status: "pending",
    consultant: "Michael Chen",
  },
  {
    id: "3",
    service: "Team Coaching",
    date: "2024-01-08",
    time: "11:00 AM",
    duration: "120 minutes",
    price: "$300",
    status: "completed",
    consultant: "Emily Rodriguez",
  },
]

const mockPayments = [
  {
    id: "1",
    date: "2024-01-08",
    service: "Team Coaching",
    amount: "$300",
    status: "paid",
    method: "Credit Card",
  },
  {
    id: "2",
    date: "2024-01-15",
    service: "Strategy Consultation",
    amount: "$150",
    status: "paid",
    method: "Credit Card",
  },
  {
    id: "3",
    date: "2024-01-22",
    service: "Creative Workshop",
    amount: "$200",
    status: "pending",
    method: "Credit Card",
  },
]

export function CustomerDashboard() {
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
      case "paid":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {mockUser.name}</h1>
          <p className="text-muted-foreground">Manage your bookings and account settings</p>
        </div>
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Book New Session
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Total Bookings</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-sm text-muted-foreground">Upcoming</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">$650</p>
                <p className="text-sm text-muted-foreground">Total Spent</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Consultants</p>
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
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Upcoming Bookings */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Bookings</CardTitle>
                <CardDescription>Your next scheduled sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockBookings
                  .filter((booking) => booking.status === "confirmed" || booking.status === "pending")
                  .map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{booking.service}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {booking.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {booking.time}
                          </div>
                        </div>
                      </div>
                      <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                    </div>
                  ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest sessions and updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Team Coaching session completed</p>
                      <p className="text-xs text-muted-foreground">January 8, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Strategy Consultation booked</p>
                      <p className="text-xs text-muted-foreground">January 15, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Payment processed for Creative Workshop</p>
                      <p className="text-xs text-muted-foreground">January 22, 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="bookings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>All Bookings</CardTitle>
              <CardDescription>View and manage all your scheduled sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockBookings.map((booking) => (
                  <div key={booking.id} className="border rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold text-lg">{booking.service}</h3>
                          <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
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
                            <User className="h-4 w-4" />
                            <span>{booking.consultant}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4" />
                            <span>{booking.price}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {booking.status === "confirmed" && (
                          <>
                            <Button variant="outline" size="sm">
                              Reschedule
                            </Button>
                            <Button variant="outline" size="sm">
                              Cancel
                            </Button>
                          </>
                        )}
                        {booking.status === "completed" && (
                          <Button variant="outline" size="sm">
                            Book Again
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>View all your transactions and payment details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockPayments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">{payment.service}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{payment.date}</span>
                        <span>{payment.method}</span>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="font-semibold">{payment.amount}</p>
                      <Badge className={getStatusColor(payment.status)}>{payment.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback>
                      <AvatarInitials name={mockUser.name} />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{mockUser.name}</h3>
                    <p className="text-sm text-muted-foreground">Member since {mockUser.joinDate}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{mockUser.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{mockUser.phone}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <Settings className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your preferences and security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Settings className="mr-2 h-4 w-4" />
                    Notification Preferences
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Methods
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <User className="mr-2 h-4 w-4" />
                    Privacy Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Settings className="mr-2 h-4 w-4" />
                    Change Password
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
