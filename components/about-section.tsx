import { Brain, Database, TrendingUp, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

export function AboutSection() {
  const expertise = [
    { icon: Brain, label: "Artificial Intelligence" },
    { icon: TrendingUp, label: "Machine Learning" },
    { icon: Database, label: "Data Science" },
    { icon: Users, label: "Teaching & Training" },
  ]

  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse [animation-duration:5s]" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse [animation-duration:7s]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border-2 border-primary/20 glow-on-hover">
              <img
                src="with-hija.png"
                alt="Professor Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Eric Aragundi
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science Professor specializing in Data Science, Machine Learning, and Artificial
                Intelligence. With years of experience in both academic research and practical consulting, I bridge the
                gap between cutting-edge AI research and real-world business applications.
              </p>
              <p>
                My work focuses on helping organizations implement AI solutions that are not only technically sound but
                also ethically responsible and aligned with business objectives. I bring the rigor of academic research
                to every consulting engagement.
              </p>
              <p>
                Through teaching, research, and consulting, I've helped numerous organizations transform their
                operations with data-driven insights and intelligent automation.
              </p>
            </div>

            {/* Expertise Badges */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <Card
                  key={item.label}
                  className="p-4 border-primary/20 hover:border-primary/50 transition-all hover:scale-105 bg-gradient-to-br from-primary/5 to-accent/5 glow-on-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
