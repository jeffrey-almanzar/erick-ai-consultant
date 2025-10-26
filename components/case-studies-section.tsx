import { TrendingUp, Users, Zap, CheckCircle2 } from "lucide-react"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      icon: TrendingUp,
      title: "Predictive Maintenance for Manufacturing",
      client: "Fortune 500 Manufacturing Company",
      challenge: "Reduce equipment downtime and maintenance costs through predictive analytics.",
      solution: "Developed ML models analyzing sensor data to predict equipment failures 48 hours in advance.",
      results: ["35% reduction in unplanned downtime", "$2.4M annual cost savings", "92% prediction accuracy"],
      image: "manufacturing-factory-equipment-sensors.jpg",
      gradient: "from-primary/10 to-accent/10",
    },
    {
      icon: Users,
      title: "Customer Churn Prediction for SaaS",
      client: "Mid-Market SaaS Platform",
      challenge: "Identify at-risk customers before they cancel subscriptions.",
      solution: "Built ensemble models combining usage patterns, support interactions, and engagement metrics.",
      results: [
        "28% improvement in retention",
        "3x ROI on retention campaigns",
        "Early warning system 30 days in advance",
      ],
      image: "customer-analytics-dashboard-charts.jpg",
      gradient: "from-accent/10 to-secondary/10",
    },
    {
      icon: Zap,
      title: "Natural Language Processing for Legal Tech",
      client: "Legal Services Firm",
      challenge: "Automate contract review and extract key clauses from thousands of documents.",
      solution: "Implemented transformer-based NLP models for document classification and information extraction.",
      results: [
        "80% reduction in review time",
        "95% accuracy in clause extraction",
        "Processing 1000+ documents daily",
      ],
      image: "legal-documents-contract-analysis.jpg",
      gradient: "from-secondary/10 to-primary/10",
    },
  ]

  return (
    <section id="case-studies" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse [animation-duration:6s]" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse [animation-duration:8s]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Case Studies & Impact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real-world applications demonstrating measurable business value through AI and machine learning.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className={`relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br ${study.gradient} border-2 border-primary/20 glow-on-hover transition-all hover:scale-105`}
                >
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div
                  className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${study.gradient} border border-primary/20 w-fit`}
                >
                  <study.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-2">{study.title}</h3>
                <p className="text-sm font-medium text-primary mb-6">{study.client}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-1 h-4 bg-primary rounded-full" />
                      Challenge
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-1 h-4 bg-accent rounded-full" />
                      Solution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-1 h-4 bg-primary rounded-full" />
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
