import { Button } from "@/components/ui/button";
import { LuGithub, LuLinkedin, LuTwitter, LuInstagram, LuMail, LuHeart } from "react-icons/lu";

const Footer = () => {
  const socialLinks = [
    { icon: <LuGithub className="w-5 h-5" />, href: "https://github.com/hemantbeast", label: "GitHub" },
    { icon: <LuLinkedin className="w-5 h-5" />, href: "https://linkedin.com/in/hemantdesharma", label: "LinkedIn" },
    { icon: <LuTwitter className="w-5 h-5" />, href: "https://x.com/hemantbeast", label: "Twitter" },
    { icon: <LuInstagram className="w-5 h-5" />, href: "https://instagram.com/hemantbeast", label: "Instagram" },
    { icon: <LuMail className="w-5 h-5" />, href: "mailto:hemantdesharma@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Hemant Sharma
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Mobile Application Developer specializing in Flutter and cross-platform solutions. 
                Turning ideas into powerful mobile experiences.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-slate-400">
                <strong className="text-slate-200">Location:</strong> Ahmedabad, Gujarat, India
              </p>
              <p className="text-sm text-slate-400">
                <strong className="text-slate-200">Available for:</strong> Freelance & Full-time
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <div className="space-y-3">
              <p className="text-slate-400">Flutter Development</p>
              <p className="text-slate-400">Cross-platform Apps</p>
              <p className="text-slate-400">UI/UX Design</p>
              <p className="text-slate-400">API Integration</p>
              <p className="text-slate-400">App Store Deployment</p>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-200">Email:</strong>
                </p>
                <a 
                  href="mailto:hemantdesharma@gmail.com"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  hemantdesharma@gmail.com
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-200">Phone:</strong>
                </p>
                <a 
                  href="tel:+919662643675"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  +91 9662643675
                </a>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-slate-200 font-medium">Follow Me:</p>
                <div className="flex gap-2">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.label}
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-slate-700 hover:border-indigo-500 hover:text-indigo-400"
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
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-400">
              © 2025 Hemant Sharma. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span>Made with</span>
              <LuHeart className="w-4 h-4 text-red-500 fill-current" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
