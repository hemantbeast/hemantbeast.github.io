import { Card, CardContent } from "@/components/ui/card";
import { LuBriefcase, LuCalendar, LuMapPin, LuArrowUpRight } from "react-icons/lu";
import { ScrollReveal } from "@/components/ScrollReveal";
import TechLogos from "@/components/TechLogos";
import { useState } from "react";

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      technologies: ["Flutter", "Kotlin", "Android", "iOS", "Riverpod", "Python", "FastAPI", "OpenAI API", "Azure AI Foundry", "CI/CD", "YOLO"],
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
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">Career Path</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Experience</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              8+ years of building mobile solutions across diverse industries
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-slate-700 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div 
                  className={`relative flex flex-col lg:flex-row gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      hoveredIndex === index 
                        ? 'bg-indigo-500 border-indigo-500 scale-125' 
                        : 'bg-slate-950 border-slate-600'
                    }`}>
                      <div className={`w-full h-full rounded-full bg-indigo-500/50 animate-ping ${
                        hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                      }`} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 lg:ml-0 lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'
                  }`}>
                    <Card className={`group bg-slate-900/80 backdrop-blur-sm border-slate-800/50 overflow-hidden transition-all duration-500 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10 ${
                      hoveredIndex === index ? 'scale-[1.02]' : ''
                    }`}>
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className={`mb-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                          <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                            {index % 2 === 0 ? (
                              <>
                                <span className="text-indigo-400 text-sm font-medium">{exp.period}</span>
                                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                  <LuBriefcase className="w-4 h-4" />
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                  <LuBriefcase className="w-4 h-4" />
                                </div>
                                <span className="text-indigo-400 text-sm font-medium">{exp.period}</span>
                              </>
                            )}
                          </div>
                          
                          <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className={`text-slate-400 font-medium flex items-center gap-1 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                            {exp.company}
                            <LuArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </p>
                          <p className={`text-slate-500 text-sm flex items-center gap-1 mt-1 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                            <LuMapPin className="w-3 h-3" />
                            {exp.location}
                          </p>
                        </div>

                        {/* Description */}
                        <p className={`text-slate-300 text-sm leading-relaxed mb-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        <div className="mb-4">
                          <ul className="space-y-2">
                            {exp.highlights.slice(0, 4).map((highlight, idx) => (
                              <li 
                                key={idx} 
                                className={`flex items-start gap-2 text-sm text-slate-400 group/item ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                                <span className={`group-hover/item:text-slate-200 transition-colors duration-300 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                  {highlight}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>


                      </CardContent>
                    </Card>
                  </div>

                  {/* Tech Logos */}
                  <TechLogos 
                    technologies={exp.technologies} 
                    isRightSide={index % 2 === 0}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
