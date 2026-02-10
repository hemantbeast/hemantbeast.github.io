import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuBriefcase, LuCalendar, LuMapPin, LuTrendingUp } from "react-icons/lu";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TiltCard } from "@/components/TiltCard";

const Experience = () => {
  const experiences = [
    {
      title: "Technical Lead - Mobile Applications",
      company: "Eventtan Pvt. Ltd.",
      location: "Ahmedabad, Gujarat, India",
      period: "Jan 2023 - Present",
      description: "Leading mobile development for enterprise clients across USA, UAE, UK, and Jordan markets. Architecting scalable solutions and driving AI/ML integration initiatives.",
      highlights: [
        "Led mobile development for 15+ enterprise apps across USA, UAE, UK, Jordan markets",
        "Improved app performance by 40% and reduced crashes by 30%",
        "Designed modular, offline-first architecture adopted across production apps",
        "Led a team of 4+ developers with Agile sprint planning & delivery",
        "Built RAG-powered chatbot automating 80% of customer support queries",
        "Implemented YOLO-based ML features with 60 FPS real-time inference",
        "Managed CI/CD pipelines with GitHub Actions and Azure DevOps",
      ],
      technologies: ["Flutter", "Kotlin", "Android", "iOS", "Riverpod", "MVVM", "Python", "FastAPI", "OpenAI API", "Azure AI Foundry", "CI/CD", "YOLO"],
      stats: [
        { label: "Team Size", value: "4+" },
        { label: "Users Served", value: "50K+" },
        { label: "Apps Delivered", value: "15+" },
      ]
    },
    {
      title: "Mobile Application Developer",
      company: "Eventtan Pvt. Ltd.",
      location: "Ahmedabad, Gujarat, India",
      period: "Jul 2017 - Dec 2022",
      description: "Developed and maintained Android and cross-platform mobile applications for diverse domains including banking, government services, logistics, and utilities.",
      highlights: [
        "Built end-to-end apps for banking, government, logistics, and utilities",
        "Designed responsive UIs and implemented business logic using MVVM architecture",
        "Integrated REST APIs and secure authentication flows",
        "Implemented Firebase services including Analytics, Crashlytics, and Cloud Messaging",
        "Built real-time features with push notifications and deep linking",
        "Integrated Google APIs for location-based applications",
        "Optimized app performance and improved stability across releases",
      ],
      technologies: ["Android SDK", "Kotlin", "Flutter", "Xamarin.Forms", "Firebase", "REST APIs", "Google APIs", "Git"],
      stats: [
        { label: "Experience", value: "5.5 yrs" },
        { label: "Projects", value: "20+" },
        { label: "Platforms", value: "3" },
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Experience</h2>
            <p className="text-lg text-slate-400">
              Professional journey and key achievements
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {experiences.map((exp, expIndex) => (
            <ScrollReveal key={expIndex} delay={expIndex * 200}>
              <TiltCard maxRotation={5}>
                <Card className="card-hover bg-slate-950 border-slate-800 overflow-hidden">
                  <CardHeader className="border-b border-slate-800/50 pb-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="p-2 bg-indigo-600 rounded-lg">
                            <LuBriefcase className="w-5 h-5 text-white" />
                          </div>
                          <CardTitle className="text-2xl text-white">
                            {exp.title}
                          </CardTitle>
                        </div>
                        <p className="text-xl font-semibold text-indigo-400">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-4 text-slate-300 text-sm">
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
                      
                      {/* Stats */}
                      {exp.stats && (
                        <div className="flex gap-6 lg:gap-8">
                          {exp.stats.map((stat) => (
                            <div key={`${expIndex}-${stat.label}`} className="text-center">
                              <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
                              <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-8 pt-6">
                    <p className="text-lg text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-white flex items-center gap-2">
                        <LuTrendingUp className="w-5 h-5 text-indigo-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start gap-3 text-slate-300 group"
                          >
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                            <span className="group-hover:text-white transition-colors duration-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-white">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary"
                            className="px-3 py-1 bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
