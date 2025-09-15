import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function BookingSuccessPage() {
  return (
    <div className="container max-w-4xl py-12">
      <Card className="max-w-2xl mx-auto text-center">
        <CardContent className="p-12 space-y-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Booking Confirmed!</h1>
            <p className="text-muted-foreground">
              Thank you for booking with us. You'll receive a confirmation email shortly with all the details.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6 space-y-4 text-left">
            <h2 className="text-xl font-semibold">What happens next?</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span>
                  <strong>Confirmation Email:</strong> Check your inbox for a detailed confirmation of your booking.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span>
                  <strong>Calendar Invite:</strong> We'll send you a calendar invitation for the scheduled session.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span>
                  <strong>Preparation:</strong> Any pre-session materials will be shared with you prior to your appointment.
                </span>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <Button asChild className="w-full">
              <Link href="/">Return to Home</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/dashboard">View My Bookings</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}