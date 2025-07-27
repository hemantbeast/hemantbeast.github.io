import { Button } from "@/components/ui/button";
import { LuGithub, LuLinkedin, LuTwitter, LuInstagram, LuMessageCircle, LuDownload } from "react-icons/lu";
import heroImage from "@/assets/hero-image.jpg";
import heroBg from "@/assets/tech-pattern.jpg"
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Hemant Sharma",
    "Mobile App Developer",
    "Tech Enthusiast",
    "Open Source Contributor"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = roles[currentTitleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const downloadResumeFile = () => {
    const fileUrl = "/resume.pdf";
    const suggestedFileName = "Resume.pdf";

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = suggestedFileName;

    // Append to the document body, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
        className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-hero relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-secondary rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-accent rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex gap-12 items-center">
          {/* Text Content */}
          <div className="flex-grow space-y-8 text-center lg:text-left">
            {/* Dynamic Text Display */}
            <div className="mb-8">
              <div className="text-2xl lg:text-4xl font-light text-muted-foreground mb-2">
                Hello World
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight gradient-text">
                <span className="gradient-text">
                  I'm {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                8+ years of experience architecting cross-platform mobile solutions.
                Technical lead passionate about creating innovative digital experiences with Flutter and cutting-edge technologies.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button asChild variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all">
                <a href="https://github.com/hemantbeast" target="_blank" rel="noopener noreferrer">
                  <LuGithub className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all">
                <a href="https://linkedin.com/in/hemantdesharma" target="_blank" rel="noopener noreferrer">
                  <LuLinkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all">
                <a href="https://x.com/hemantbeast" target="_blank" rel="noopener noreferrer">
                  <LuTwitter className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="w-12 h-12 rounded-full border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all">
                <a href="https://instagram.com/hemantbeast" target="_blank" rel="noopener noreferrer">
                  <LuInstagram className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <LuMessageCircle className="w-5 h-5" />
                Get In Touch
              </Button>
              <Button variant="hero" size="lg" className="text-lg px-8 hover-lift" onClick={downloadResumeFile}>
                <LuDownload className="w-5 h-5" />
                Resume
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative w-80">
            <div className="relative w-80 max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-rainbow rounded-full blur-xl opacity-30 animate-pulse-glow"></div>
              <img
                src={heroImage}
                alt="Hemant Sharma"
                className="relative w-full h-auto rounded-full border-4 border-primary/20 hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;