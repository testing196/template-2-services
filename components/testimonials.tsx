import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "The strategy consultation was exactly what our startup needed. The insights and action plan helped us secure our Series A funding.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    content:
      "Outstanding creative workshop! Our team came away with fresh ideas and a clear direction for our next campaign.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    content:
      "The team coaching session transformed how we collaborate. Communication has improved dramatically across all departments.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground text-pretty">"{testimonial.content}"</blockquote>
                <div className="space-y-1">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
