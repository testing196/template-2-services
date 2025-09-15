import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Clock } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Why Choose Our Services?</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                We're committed to delivering exceptional results through personalized service and proven methodologies.
                Our team of experts brings years of experience to help you succeed.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Certified professionals with proven track records",
                "Personalized approach tailored to your needs",
                "Flexible scheduling to fit your busy lifestyle",
                "Comprehensive follow-up and ongoing support",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <Users className="h-8 w-8 text-primary mx-auto" />
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <Award className="h-8 w-8 text-primary mx-auto" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <Clock className="h-8 w-8 text-primary mx-auto" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <CheckCircle className="h-8 w-8 text-primary mx-auto" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
