import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LuExternalLink, LuSmartphone, LuGithub } from "react-icons/lu";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TiltCard } from "@/components/TiltCard";
import doriImage from "@/assets/dori.webp";
import fitImage from "@/assets/fitrepublik.png";
import chemImage from "@/assets/chemexpo.png";
import speedyImage from "@/assets/speedy.svg";
import pharmaImage from "@/assets/pharmatech.webp";

const Projects = () => {
  const projects = [
    {
      title: "Fit + Studio Republik",
      company: "Fitness & Wellness Platform",
      description: "Comprehensive fitness studio management app with class booking, trainer profiles, and workout tracking.",
      image: fitImage,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.republik.customerapp",
      websiteUrl: "https://fitrepublik.com/",
      githubUrl: null,
      technologies: ["Flutter", "Firebase", "Face Detection", "REST API", "UI/UX"],
      featured: true,
    },
    {
      title: "PharmaTech Expo",
      company: "Eventtan",
      description: "Event management app for pharmaceutical industry exhibitions with attendee networking and schedule management.",
      image: pharmaImage,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dvl.pte",
      websiteUrl: "https://pharmatechexpo.com/",
      githubUrl: null,
      technologies: ["Flutter", "Event Management", "Networking", "Real-time Updates"],
      featured: false,
    },
    {
      title: "ChemExpo India",
      company: "Eventtan",
      description: "Chemical industry exhibition app featuring exhibitor directories, product catalogs, and business networking tools.",
      image: chemImage,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.eventtan.chemindia",
      websiteUrl: "https://chemexpoindia.com/",
      githubUrl: null,
      technologies: ["Flutter", "B2B Networking", "Catalog Management", "Analytics"],
      featured: false,
    },
    {
      title: "DORI",
      company: "On-Demand Services",
      description: "Multi-service platform connecting users with various service providers for home and personal needs.",
      image: doriImage,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.dori.doriapp",
      websiteUrl: "#",
      githubUrl: null,
      technologies: ["Xamarin", "Location Services", "Payment Gateway", "Multi-vendor"],
      featured: false,
    },
    {
      title: "Speedy Services",
      company: "Logistics & Delivery",
      description: "Fast delivery service app with real-time tracking, route optimization, and customer management.",
      image: speedyImage,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.speedyservices.speedyapp",
      websiteUrl: "#",
      githubUrl: null,
      technologies: ["Xamarin", "GPS Tracking", "Route Optimization", "Real-time Updates"],
      featured: false,
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-300">
              Enterprise and consumer apps across events, fitness, AI-driven platforms, and more
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100}>
              <TiltCard maxRotation={5}>
                <Card className="card-hover bg-slate-900 border-slate-800 group h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30">
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-indigo-600 hover:bg-indigo-500 text-white">
                        Featured
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="space-y-4">
                    <div className="aspect-video bg-slate-800/50 rounded-lg overflow-hidden relative flex items-center justify-center p-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      
                      {/* View Project overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          View Project
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-xl text-white group-hover:text-indigo-400 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm font-medium text-indigo-400">
                        {project.company}
                      </p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6 flex-grow">
                    <p className="text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs px-2 py-1 border-slate-700 text-slate-300 hover:border-indigo-500 hover:text-indigo-400 transition-colors duration-200"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button 
                        asChild 
                        size="sm" 
                        className="flex-1 transition-all duration-300 hover:scale-105"
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
                      
                      {project.githubUrl && (
                        <Button 
                          asChild 
                          variant="outline" 
                          size="sm"
                          className="border-slate-700 hover:border-indigo-500 transition-all duration-300"
                        >
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <LuGithub className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      
                      {project.websiteUrl !== "#" && (
                        <Button 
                          asChild 
                          variant="outline" 
                          size="sm"
                          className="border-slate-700 hover:border-indigo-500 transition-all duration-300"
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
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="text-lg px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              View All Projects
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
