import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign, Users, Zap, Target, Lightbulb } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Strategy Consultation",
    description: "Get expert guidance on business strategy, planning, and growth opportunities.",
    duration: "60 minutes",
    price: "$150",
    features: ["One-on-one session", "Action plan included", "Follow-up email"],
  },
  {
    icon: Lightbulb,
    title: "Creative Workshop",
    description: "Collaborative sessions to unlock creativity and innovative solutions.",
    duration: "90 minutes",
    price: "$200",
    features: ["Interactive workshop", "Creative exercises", "Resource materials"],
  },
  {
    icon: Users,
    title: "Team Coaching",
    description: "Improve team dynamics, communication, and overall performance.",
    duration: "120 minutes",
    price: "$300",
    features: ["Group session", "Team assessment", "Improvement roadmap"],
  },
  {
    icon: Zap,
    title: "Quick Consultation",
    description: "Fast-track solutions for urgent questions and immediate needs.",
    duration: "30 minutes",
    price: "$75",
    features: ["Focused discussion", "Quick solutions", "Same-day booking"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Services</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Choose from our range of professional services designed to help you achieve your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-pretty">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="font-semibold">{service.price}</span>
                  </div>
                </div>

                <ul className="space-y-1 text-sm text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-transparent" variant="outline">
                  Book This Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
