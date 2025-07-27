import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuCode, LuSmartphone, LuZap, LuUsers } from "react-icons/lu";

const About = () => {
  const skills = [
    "Flutter", "KMP", "Android", "iOS", "Kotlin", "Node.js",
    "Firebase", "REST APIs", "CI/CD", "Git", "Python"
  ];

  const highlights = [
    {
      icon: <LuCode className="w-6 h-6" />,
      title: "8+ Years Experience",
      description: "Cross-platform mobile development expertise"
    },
    {
      icon: <LuSmartphone className="w-6 h-6" />,
      title: "50+ Apps Delivered",
      description: "Successfully deployed to Play Store & App Store"
    },
    {
      icon: <LuZap className="w-6 h-6" />,
      title: "40% Performance Boost",
      description: "Optimized app performance across projects"
    },
    {
      icon: <LuUsers className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Led and mentored 4+ development teams"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-background relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate mobile developer with a track record of delivering innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Technical Lead & Mobile Developer
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Highly accomplished Mobile Application Developer with over 8 years of experience 
                in architecting and developing robust cross-platform solutions using Flutter and Xamarin. 
                Proven track record as a technical lead in optimizing application performance and 
                significantly increasing user engagement.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working at <span className="text-secondary-glow font-semibold">Eventtan Pvt. Ltd. </span>
                in Ahmedabad, where I lead development teams and drive innovative mobile solutions 
                for enterprise clients.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="default"
                    className="px-3 py-1 text-sm hover-lift"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title} 
                className="hover-lift glow-primary bg-card/80 backdrop-blur-sm border-primary/20"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-primary rounded-full text-primary-foreground">
                      {highlight.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover-lift">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Education & Location
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <h4 className="text-lg font-semibold text-secondary mb-2">Education</h4>
                <p className="text-muted-foreground">
                  Bachelor's in Computer Science & Engineering
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-accent mb-2">Location</h4>
                <p className="text-muted-foreground">
                  Ahmedabad, Gujarat, India
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;