"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#research", label: "Research" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="font-serif text-xl lg:text-2xl font-bold text-foreground">
            Eric Aragundi
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="mailto:ericaragundi@gmail.com?subject=Consultation Request&body=Hi Eric,%0D%0A%0D%0AI would like to schedule a consultation to discuss my AI/Data Science needs.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!">
                Book Consultation
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full" asChild>
                <a href="mailto:ericaragundi@gmail.com?subject=Consultation Request&body=Hi Eric,%0D%0A%0D%0AI would like to schedule a consultation to discuss my AI/Data Science needs.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!">
                  Book Consultation
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
