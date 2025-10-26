"use client"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, BookOpen, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Whether you're looking to implement AI solutions, need research collaboration, or want to upskill your
              team, I'd love to hear from you.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-foreground">Location</h3>
              </div>
              <p className="text-muted-foreground">New York City, NY</p>
            </Card>

            <Card className="p-8 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-8 w-8 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-foreground">Email</h3>
              </div>
              <a
                href="mailto:ericaragundi@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors break-all"
              >
                ericaragundi@gmail.com
              </a>
            </Card>

            <Card className="p-8 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <Linkedin className="h-8 w-8 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-foreground">LinkedIn</h3>
              </div>
              <a
                href="https://www.linkedin.com/in/eric-aragundi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Connect on LinkedIn
              </a>
            </Card>

            <Card className="p-8 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-8 w-8 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-foreground">Google Scholar</h3>
              </div>
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                View Publications
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
