import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LuMenu, LuX, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <LuGithub className="w-5 h-5" />, href: "https://github.com/hemantbeast", label: "GitHub" },
    { icon: <LuLinkedin className="w-5 h-5" />, href: "https://linkedin.com/in/hemantdesharma", label: "LinkedIn" },
    { icon: <LuMail className="w-5 h-5" />, href: "mailto:hemantdesharma@gmail.com", label: "Email" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/80 backdrop-blur-lg border-b border-border/50" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
            >
              HS
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-foreground hover:text-primary-glow transition-colors relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
          </div>

          {/* Desktop Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                asChild
                variant="ghost"
                size="sm"
                className="hover-lift"
              >
                <a 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              </Button>
            ))}
            <Button 
              variant="default" 
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="ml-2"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover-lift"
            >
              {isMobileMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 animate-bounce-in">
            <div className="px-6 py-6 space-y-6">
              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="block text-lg text-foreground hover:text-primary-glow transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-6 pt-4 border-t border-border/30">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    asChild
                    variant="ghost"
                    size="sm"
                    className="hover-lift"
                  >
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  </Button>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="w-full"
                  onClick={() => scrollToSection("#contact")}
                >
                  Let's Work Together
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;