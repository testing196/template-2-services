import { BookingForm } from "@/components/booking-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BookPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-balance">Book Your Session</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Choose your service, select a time that works for you, and we'll take care of the rest.
              </p>
            </div>
            <BookingForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
