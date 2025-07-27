import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LuExternalLink, LuSmartphone } from "react-icons/lu";
import doriImage from "@/assets/dori.webp";
import fitImage from "@/assets/fitrepublik.png"
import chemImage from "@/assets/chemexpo.png"
import speedyImage from "@/assets/speedy.svg"
import pharmaImage from "@/assets/pharmatech.webp"

const Projects = () => {
  const projects = [
    {
      title: "Fit + Studio Republik",
      company: "Fitness & Wellness Platform",
      description: "Comprehensive fitness studio management app with class booking, trainer profiles, and workout tracking.",
      image: fitImage,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.republik.customerapp",
      websiteUrl: "https://fitrepublik.com/",
      technologies: ["Flutter", "Firebase", "Face Detection", "REST API", "UI/UX"]
    },
    {
      title: "PharmaTech Expo",
      company: "Eventtan",
      description: "Event management app for pharmaceutical industry exhibitions with attendee networking and schedule management.",
      image: pharmaImage,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dvl.pte",
      websiteUrl: "https://pharmatechexpo.com/",
      technologies: ["Flutter", "Event Management", "Networking", "Real-time Updates"]
    },
    {
      title: "ChemExpo India",
      company: "Eventtan",
      description: "Chemical industry exhibition app featuring exhibitor directories, product catalogs, and business networking tools.",
      image: chemImage,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.eventtan.chemindia",
      websiteUrl: "https://chemexpoindia.com/",
      technologies: ["Flutter", "B2B Networking", "Catalog Management", "Analytics"]
    },
    {
      title: "DORI",
      company: "On-Demand Services",
      description: "Multi-service platform connecting users with various service providers for home and personal needs.",
      image: doriImage,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dori.doriapp",
      websiteUrl: "#",
      technologies: ["Xamarin", "Location Services", "Payment Gateway", "Multi-vendor"]
    },
    {
      title: "Speedy Services",
      company: "Logistics & Delivery",
      description: "Fast delivery service app with real-time tracking, route optimization, and customer management.",
      image: speedyImage,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.speedyservices.speedyapp",
      websiteUrl: "#",
      technologies: ["Xamarin", "GPS Tracking", "Route Optimization", "Real-time Updates"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Mobile applications that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="hover-lift glow-accent bg-card/80 backdrop-blur-sm border-accent/20 group"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardHeader className="space-y-4">
                <div className="aspect-video bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  {/*<LuSmartphone className="w-12 h-12 text-primary-foreground" />*/}
                  <img
                      src={project.image}
                      alt={project.title}
                      className="relative justify-center"
                  />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm font-medium text-accent">
                    {project.company}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed min-h-32">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs px-2 py-1 border-accent/30 text-accent"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    asChild 
                    variant="default" 
                    size="sm" 
                    className="flex-1"
                  >
                    <a 
                      href={project.playStoreUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <LuSmartphone className="w-4 h-4" />
                      Play Store
                    </a>
                  </Button>
                  {project.websiteUrl !== "#" && (
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm"
                      className="hover-lift"
                    >
                      <a 
                        href={project.websiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <LuExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="text-lg px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;