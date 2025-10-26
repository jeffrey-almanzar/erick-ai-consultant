import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Award } from "lucide-react"

export function ResearchSection() {
  const publications = [
    {
      title: "Artificial Intelligence and Stigma in Addiction Research: Insights From the HEALing Communities Study Coalition Meetings",
      abstract:
        "This paper describes how artificial intelligence (AI) was used to analyze meeting minutes from community coalitions participating in the HEALing Communities Study. We examined how often coalitions discussed stigma when selecting evidence-based practices (EBPs), variations in stigma-related discussions across coalitions, how these discussions addressed race, ethnicity, and racial inequity, and whether the frequency of stigma discussions was associated with the proportion of minoritized populations in each community.",
      journal: "Journal of Addiction Medicine",
      year: "2024",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Bpz8cwEAAAAJ&citation_for_view=Bpz8cwEAAAAJ:u-x6o8ySG0sC",
      featured: true,
    },
    {
      title: "The Practical, Robust Implementation and Sustainability (PRISM)-capabilities model for use of Artificial Intelligence in community-engaged implementation science research",
      abstract:
        " By integrating AI into CER, researchers could enhance their capacity to work collaboratively with communities, making research more efficient, inclusive, and impactful.",
      journal: "Implementation Science",
      year: "2025",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Bpz8cwEAAAAJ&citation_for_view=Bpz8cwEAAAAJ:d1gkVwhDpl0C",
      featured: false,
    },
    {
      title: "MAT 301-Applied Statistics and Data Analysis",
      abstract:
        "Data analysis using standard statistical methods and relevant computer software. Emphasis on real-world data, interpretation, and misinterpretation of computer output.",
      journal: "",
      year: "2025",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Bpz8cwEAAAAJ&citation_for_view=Bpz8cwEAAAAJ:u5HHmVD_uO8C",
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
                    {pub.journal && (
                     <>
                      <span className="font-medium text-primary">{pub.journal}</span>
                      <span>•</span>
                     </>
                    )}
                    <span>{pub.year}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary flex-shrink-0 bg-transparent transition-all"
                  asChild
                >
                  <a 
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    View Paper
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
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
            asChild
          >
            <a 
              href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=Bpz8cwEAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              View All Publications
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
