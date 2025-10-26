import { Linkedin, Mail, BookOpen, Github } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Mail, href: "mailto:ericaragundi@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/eric-aragundi/", label: "LinkedIn" },
    { icon: BookOpen, href: "https://scholar.google.com", label: "Google Scholar" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Eric Aragundi</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              AI Consulting & Data Science Research — Bringing academic rigor to real-world AI solutions.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#research" className="text-muted-foreground hover:text-accent transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-muted-foreground hover:text-accent transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  AI Insights Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Teaching Materials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Eric Aragundi — AI Consulting & Data Science Research. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
