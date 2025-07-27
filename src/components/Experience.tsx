import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuBriefcase, LuCalendar, LuMapPin } from "react-icons/lu";

const Experience = () => {
  const experiences = [
    {
      title: "Technical Lead",
      company: "Eventtan Pvt. Ltd.",
      location: "Ahmedabad, Gujarat, India",
      period: "Jul 2017 - Present",
      description: "Leading cross-platform mobile development teams and architecting innovative solutions for enterprise clients.",
      highlights: [
        "Architected cross-platform apps using Xamarin and Flutter, reducing development time by 30%",
        "Led and mentored 4 development teams, improving project delivery by 25%",
        "Enhanced app functionality through RESTful API integration and third-party libraries"
      ],
      technologies: ["Flutter", "Xamarin", "REST APIs", "Team Leadership", "CI/CD"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional journey and key achievements
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="hover-lift glow-secondary bg-card/80 backdrop-blur-sm border-secondary/20"
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                      <LuBriefcase className="w-6 h-6 text-secondary" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-xl font-semibold text-secondary">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <LuCalendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <LuMapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge 
                        key={tech} 
                        variant="default"
                        className="px-3 py-1 hover-lift"
                        style={{
                          animationDelay: `${idx * 0.1}s`
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;