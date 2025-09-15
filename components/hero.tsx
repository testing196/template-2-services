import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, Users, Award } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Professional Services
                <span className="text-primary block">Made Simple</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-lg">
                Book expert consultations and services with ease. Get personalized solutions from certified
                professionals who care about your success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="/book">
                  Book a Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <Link href="#services">View Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Sessions Booked</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="h-16 w-16 text-primary" />
                </div>
                <p className="text-lg font-medium">Ready to get started?</p>
                <p className="text-muted-foreground">Book your first session today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
