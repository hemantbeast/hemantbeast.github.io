import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LuMenu, LuX, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.querySelector(`#${section}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
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
        ? "bg-slate-950/90 backdrop-blur-lg border-b border-slate-800" 
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
              className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors"
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
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-indigo-400"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-500" />
                )}
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
                className="text-slate-400 hover:text-indigo-400"
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
              className="text-slate-400"
            >
              {isMobileMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-lg border-b border-slate-800">
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
                    className={`block text-lg ${
                      activeSection === item.href.slice(1)
                        ? "text-indigo-400"
                        : "text-slate-300 hover:text-indigo-400"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-6 pt-4 border-t border-slate-800">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-indigo-400"
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
