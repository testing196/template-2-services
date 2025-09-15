"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, CheckCircle } from "lucide-react"
import { PayPalCheckout } from "@/components/paypal-checkout"

const services = [
  {
    id: "strategy",
    title: "Strategy Consultation",
    duration: "60 minutes",
    price: "$150",
    description: "Get expert guidance on business strategy, planning, and growth opportunities.",
  },
  {
    id: "creative",
    title: "Creative Workshop",
    duration: "90 minutes",
    price: "$200",
    description: "Collaborative sessions to unlock creativity and innovative solutions.",
  },
  {
    id: "team",
    title: "Team Coaching",
    duration: "120 minutes",
    price: "$300",
    description: "Improve team dynamics, communication, and overall performance.",
  },
  {
    id: "quick",
    title: "Quick Consultation",
    duration: "30 minutes",
    price: "$75",
    description: "Fast-track solutions for urgent questions and immediate needs.",
  },
]

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

export function BookingForm() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string>("")
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setStep(2)
  }

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    if (date) {
      setStep(3)
    }
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep(4)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Move to payment step
    setStep(5)
  }

  const handlePaymentSuccess = (orderData: any) => {
    console.log("Payment successful:", orderData)
    // Store order data if needed
    setStep(6)
  }

  const handlePaymentError = (error: any) => {
    console.error("Payment error:", error)
    // Handle payment error
  }

  const handlePaymentCancel = () => {
    console.log("Payment cancelled")
    // Handle payment cancellation
  }

  const selectedServiceData = services.find((s) => s.id === selectedService)

  if (step === 6) {
    return (
      <Card className="max-w-2xl mx-auto text-center">
        <CardContent className="p-12 space-y-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
            <p className="text-muted-foreground">
              Thank you for booking with us. You'll receive a confirmation email shortly with all the details.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-left">
            <div className="flex justify-between">
              <span className="font-medium">Service:</span>
              <span>{selectedServiceData?.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Date:</span>
              <span>{selectedDate?.toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Time:</span>
              <span>{selectedTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Duration:</span>
              <span>{selectedServiceData?.duration}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>{selectedServiceData?.price}</span>
            </div>
          </div>
          <Button onClick={() => (window.location.href = "/")} className="w-full">
            Return to Home
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center space-x-4">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div key={stepNumber} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= stepNumber ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {stepNumber}
            </div>
            {stepNumber < 4 && <div className={`w-12 h-0.5 ${step > stepNumber ? "bg-primary" : "bg-muted"}`} />}
          </div>
        ))}
      </div>

      {/* Step 1: Service Selection */}
      {step === 1 && (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Choose Your Service</h2>
            <p className="text-muted-foreground">Select the service that best fits your needs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleServiceSelect(service.id)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {service.title}
                    <Badge variant="secondary">{service.price}</Badge>
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {service.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {service.price}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Date Selection */}
      {step === 2 && selectedServiceData && (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Select Date</h2>
            <p className="text-muted-foreground">Choose a date for your {selectedServiceData.title}</p>
          </div>
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                disabled={(date) => date < new Date() || date.getDay() === 0}
                className="rounded-md border-0"
              />
            </CardContent>
          </Card>
          <div className="text-center">
            <Button variant="outline" onClick={() => setStep(1)}>
              Back to Services
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Time Selection */}
      {step === 3 && selectedDate && (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Select Time</h2>
            <p className="text-muted-foreground">Available times for {selectedDate.toLocaleDateString()}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                onClick={() => handleTimeSelect(time)}
                className="h-12"
              >
                {time}
              </Button>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" onClick={() => setStep(2)}>
              Back to Date
            </Button>
          </div>
        </div>
      )}

      {/* Step 4: Contact Information */}
      {step === 4 && (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Your Information</h2>
            <p className="text-muted-foreground">Please provide your contact details to complete the booking</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Details</CardTitle>
                <CardDescription>We'll use this information to confirm your booking</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input id="company" name="company" value={formData.company} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Notes (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any specific requirements or questions?"
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button type="button" variant="outline" onClick={() => setStep(3)} className="flex-1">
                      Back to Time
                    </Button>
                    <Button type="submit" className="flex-1">
                      Proceed to Payment
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Service:</span>
                    <span>{selectedServiceData?.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Date:</span>
                    <span>{selectedDate?.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Time:</span>
                    <span>{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duration:</span>
                    <span>{selectedServiceData?.duration}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total:</span>
                      <span>{selectedServiceData?.price}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                  <p className="font-medium mb-2">What happens next?</p>
                  <ul className="space-y-1">
                    <li>• You'll receive a confirmation email</li>
                    <li>• We'll send calendar invite with meeting details</li>
                    <li>• Payment will be processed securely</li>
                    <li>• You can reschedule up to 24 hours before</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Step 5: Payment */}
      {step === 5 && selectedServiceData && (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Payment</h2>
            <p className="text-muted-foreground">Complete your booking by making a payment</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Payment Options</CardTitle>
                <CardDescription>Select your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <PayPalCheckout
                  selectedService={selectedServiceData}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  formData={formData}
                  onSuccess={handlePaymentSuccess}
                  onError={handlePaymentError}
                  onCancel={handlePaymentCancel}
                />
                <div className="mt-4">
                  <Button variant="outline" onClick={() => setStep(4)} className="w-full">
                    Back to Contact Information
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Service:</span>
                    <span>{selectedServiceData?.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Date:</span>
                    <span>{selectedDate?.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Time:</span>
                    <span>{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duration:</span>
                    <span>{selectedServiceData?.duration}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total:</span>
                      <span>{selectedServiceData?.price}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                  <p className="font-medium mb-2">What happens next?</p>
                  <ul className="space-y-1">
                    <li>• You'll receive a confirmation email</li>
                    <li>• We'll send calendar invite with meeting details</li>
                    <li>• You can reschedule up to 24 hours before</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
