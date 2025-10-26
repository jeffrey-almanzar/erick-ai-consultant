import { Card } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Eric Aragundi's expertise in machine learning transformed our approach to predictive maintenance. The models developed have saved us millions in operational costs.",
      author: "Sarah Chen",
      role: "VP of Operations",
      company: "TechManufacturing Inc.",
      rating: 5,
    },
    {
      quote:
        "Working with Eric Aragundi was a game-changer. His ability to translate complex AI concepts into actionable business strategies is unmatched.",
      author: "Michael Rodriguez",
      role: "Chief Data Officer",
      company: "DataDriven Solutions",
      rating: 5,
    },
    {
      quote:
        "The training workshops provided by Eric Aragundi upskilled our entire data science team. His teaching style is clear, practical, and immediately applicable.",
      author: "Emily Thompson",
      role: "Director of Analytics",
      company: "FinTech Innovations",
      rating: 5,
    },
  ]

  const partners = ["Stanford University", "MIT Media Lab", "Google Research", "Microsoft AI", "IBM Watson"]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Testimonials & Collaborations
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trusted by leading organizations and research institutions worldwide.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.author}
              className="p-6 lg:p-8 border-primary/20 hover:border-primary/50 transition-all hover:scale-105 bg-gradient-to-br from-primary/5 to-accent/5 glow-on-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Quote className="h-8 w-8 text-primary/30" />
                <div className="flex gap-1 ml-auto">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-primary">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="border-t border-primary/20 pt-12">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            Research Collaborations & Partnerships
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-muted-foreground/60 font-medium text-sm lg:text-base hover:text-primary transition-all hover:scale-110 cursor-pointer"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
