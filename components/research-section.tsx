import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Award } from "lucide-react"

export function ResearchSection() {
  const publications = [
    {
      title: "Deep Learning Approaches for Predictive Analytics in Healthcare",
      abstract:
        "This paper explores novel deep learning architectures for predicting patient outcomes using electronic health records. We demonstrate significant improvements over traditional statistical methods.",
      journal: "Journal of Machine Learning Research",
      year: "2024",
      link: "#",
      featured: true,
    },
    {
      title: "Ethical Considerations in Automated Decision-Making Systems",
      abstract:
        "An examination of fairness, accountability, and transparency in AI systems used for high-stakes decisions. Proposes a framework for ethical AI development.",
      journal: "AI & Society",
      year: "2023",
      link: "#",
      featured: false,
    },
    {
      title: "Transfer Learning for Small Data Scenarios in Industrial Applications",
      abstract:
        "Investigates transfer learning techniques that enable effective model training with limited labeled data in manufacturing and quality control contexts.",
      journal: "IEEE Transactions on Industrial Informatics",
      year: "2023",
      link: "#",
      featured: false,
    },
    {
      title: "Natural Language Processing for Financial Document Analysis",
      abstract:
        "Novel NLP methods for extracting structured information from unstructured financial documents, with applications in risk assessment and compliance.",
      journal: "Computational Linguistics",
      year: "2022",
      link: "#",
      featured: false,
    },
  ]

  return (
    <section
      id="research"
      className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
    >
      <div className="absolute top-40 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Research & Publications
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Peer-reviewed research advancing the field of artificial intelligence and machine learning.
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card
              key={pub.title}
              className={`p-6 lg:p-8 border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] glow-on-hover animate-fade-in-up ${
                pub.featured ? "bg-gradient-to-br from-primary/10 to-accent/5 border-primary/30" : "bg-card"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                      {pub.featured && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3 border border-primary/30">
                          <Award className="h-3 w-3" />
                          Featured Publication
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{pub.abstract}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-medium text-primary">{pub.journal}</span>
                    <span>•</span>
                    <span>{pub.year}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary flex-shrink-0 bg-transparent transition-all"
                >
                  View Paper
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary bg-transparent glow-on-hover"
          >
            View All Publications
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
