import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuCode, LuSmartphone, LuZap, LuUsers } from "react-icons/lu";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TiltCard } from "@/components/TiltCard";
import SkillsShowcase from "@/components/SkillsShowcase";

const About = () => {
  const skills = [
    { name: "Flutter/Dart", level: 95, category: "mobile" },
    { name: "Kotlin", level: 90, category: "mobile" },
    { name: "AI/ML", level: 85, category: "ai" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Firebase", level: 88, category: "backend" },
    { name: "Git/CI-CD", level: 85, category: "tools" },
  ];

  const techStack = [
    "Flutter", "Kotlin", "Android", "iOS", "Dart", "Riverpod",
    "MVVM", "Clean Architecture", "Firebase", "REST APIs", "CI/CD",
    "Python", "FastAPI", "OpenAI API", "Azure AI Foundry", "YOLO",
    "TensorFlow Lite", "RAG Chatbots", "Node.js", "Git"
  ];

  const highlights = [
    {
      icon: <LuCode className="w-6 h-6" />,
      title: "15+ Production Apps",
      description: "Enterprise apps serving global markets"
    },
    {
      icon: <LuSmartphone className="w-6 h-6" />,
      title: "AI/ML Integration",
      description: "RAG chatbots, YOLO-based ML, on-device inference"
    },
    {
      icon: <LuZap className="w-6 h-6" />,
      title: "40% Performance Boost",
      description: "Reduced crash rates by 30% across projects"
    },
    {
      icon: <LuUsers className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Led 4+ developers, sprint planning & delivery"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-950 relative">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">About Me</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Technical Lead & Mobile Developer with 8+ years of experience building scalable, high-performance applications
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <ScrollReveal direction="left" delay={100}>
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-slate-300 leading-relaxed">
                  Building scalable, high-performance mobile applications across Flutter and native Android. 
                  I specialize in designing clean architectures, improving app performance, and leading teams 
                  to deliver reliable, production-ready mobile solutions.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Over the years, I've worked on enterprise and consumer apps across domains like events, 
                  fitness, AI-driven platforms, and government systems. Notable projects include Fish Finder 
                  (YOLO-based fish recognition for Florida), Fit + Studio Republik (Dubai fitness platform), 
                  and the Eventtan event management suite serving 10,000+ concurrent users.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Currently leading mobile development at <span className="text-indigo-400 font-semibold">Eventtan Pvt. Ltd.</span> 
                  where I architect cross-platform solutions and drive AI/ML integration initiatives.
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="px-3 py-1 text-sm bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white transition-all duration-300 cursor-default hover:scale-105"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Skills with Animated Circular Progress */}
          <ScrollReveal direction="right" delay={200}>
            <SkillsShowcase skills={skills} />
          </ScrollReveal>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <ScrollReveal key={highlight.title} delay={index * 100}>
              <TiltCard>
                <Card className="card-hover bg-slate-900 border-slate-800 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-indigo-600 rounded-lg text-white transition-transform duration-300 hover:scale-110">
                        {highlight.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-slate-300">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Education & Certifications */}
        <ScrollReveal delay={300}>
          <Card className="bg-slate-900 border-slate-800 card-hover">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                Education & Location
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div>
                  <h4 className="text-lg font-semibold text-indigo-400 mb-2">Education</h4>
                  <p className="text-slate-300">
                    Bachelor's in Computer Engineering
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-indigo-400 mb-2">Location</h4>
                  <p className="text-slate-300">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
