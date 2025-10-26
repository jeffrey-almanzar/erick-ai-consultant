import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 neural-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 gradient-animate" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI Research & Consulting Excellence</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up [animation-delay:100ms]">
              <span className="block">AI Consulting</span>
              <span className="block">Backed by{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Research
                </span>
              </span>
              <span className="block">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  and Real-World Insight
                </span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
              Helping businesses leverage Data Science, Machine Learning, and Artificial Intelligence for better
              decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up [animation-delay:300ms]">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto glow-on-hover shadow-lg shadow-primary/20"
                asChild
              >
                <a href="mailto:ericaragundi@gmail.com?subject=Consultation Request&body=Hi Eric,%0D%0A%0D%0AI would like to schedule a consultation to discuss my AI/Data Science needs.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/5 hover:border-primary w-full sm:w-auto bg-transparent transition-all"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                View Research
              </Button>
            </div>

            <p className="mt-12 text-sm font-medium text-muted-foreground animate-fade-in-up [animation-delay:400ms]">
              Bringing Academic Rigor to Real-World AI Solutions
            </p>
          </div>

          {/* Image Content */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up [animation-delay:200ms]">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                <Image
                  src="hero.png"
                  alt="AI Research Consultant"
                  width={400}
                  height={500}
                  className="rounded-xl w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse [animation-duration:4s]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse [animation-duration:6s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
    </section>
  )
}
