import { Card } from "@/components/ui/card"
import { Lightbulb, Cpu, BarChart3, GraduationCap, Shield } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Lightbulb,
      title: "AI Strategy Consulting",
      description:
        "Develop comprehensive AI strategies aligned with your business goals. Identify opportunities, assess feasibility, and create roadmaps for successful AI implementation.",
      gradient: "from-primary/10 to-accent/10",
    },
    {
      icon: Cpu,
      title: "Machine Learning Model Development",
      description:
        "Design, build, and deploy custom ML models tailored to your specific needs. From predictive analytics to natural language processing and computer vision.",
      gradient: "from-accent/10 to-primary/10",
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Visualization",
      description:
        "Transform raw data into actionable insights. Create compelling visualizations and dashboards that drive informed decision-making across your organization.",
      gradient: "from-primary/10 to-secondary/10",
    },
    {
      icon: GraduationCap,
      title: "Training & Workshops",
      description:
        "Upskill your team with customized training programs. From AI fundamentals to advanced machine learning techniques, tailored to your industry and use cases.",
      gradient: "from-secondary/10 to-accent/10",
    },
    {
      icon: Shield,
      title: "Responsible & Ethical AI",
      description:
        "Ensure your AI systems are fair, transparent, and accountable. Implement best practices for ethical AI development and deployment in your organization.",
      gradient: "from-accent/10 to-primary/10",
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Consulting Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive AI and data science solutions designed to transform your business operations and drive
            measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`p-6 lg:p-8 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group hover:scale-105 glow-on-hover bg-gradient-to-br ${service.gradient} animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 rounded-xl bg-primary/20 w-fit group-hover:bg-primary/30 transition-all group-hover:scale-110 duration-300">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
