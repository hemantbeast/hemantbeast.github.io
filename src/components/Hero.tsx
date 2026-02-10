import { Button } from "@/components/ui/button";
import { LuGithub, LuLinkedin, LuTwitter, LuInstagram, LuMessageCircle, LuDownload, LuCopy, LuCheck } from "react-icons/lu";
import { useState, useEffect, useRef } from "react";
import { useTypewriter } from "@/hooks/use-animations";
import { ScrollReveal } from "@/components/ScrollReveal";

const CodeSnippet = () => {
  const [copied, setCopied] = useState(false);
  
  const codeLines = [
    { num: 1, content: 'import { Developer } from "./portfolio";', type: 'import' },
    { num: 2, content: '', type: 'empty' },
    { num: 3, content: 'const profile = new Developer({', type: 'declaration' },
    { num: 4, content: '  name: "Hemant Sharma",', type: 'property' },
    { num: 5, content: '  role: "Mobile Developer",', type: 'property' },
    { num: 6, content: '  experience: "8+ years",', type: 'property' },
    { num: 7, content: '  passion: "Building clean UIs"', type: 'property' },
    { num: 8, content: '});', type: 'declaration' },
    { num: 9, content: '', type: 'empty' },
    { num: 10, content: 'profile.readyToCollaborate();', type: 'method' },
  ];

  const getLineClass = (type: string) => {
    switch (type) {
      case 'import': return 'text-indigo-400';
      case 'declaration': return 'text-blue-400';
      case 'property': return 'text-slate-300';
      case 'method': return 'text-emerald-400';
      default: return 'text-slate-500';
    }
  };

  const handleCopy = () => {
    const codeText = codeLines.map(line => line.content).join('\n');
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ScrollReveal direction="right" delay={300}>
      <div className="bg-slate-950 border border-slate-800 rounded-lg overflow-hidden shadow-2xl max-w-md relative group">
        {/* Window header */}
        <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-slate-500 font-mono">developer.ts</span>
          <button
            onClick={handleCopy}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-slate-800 rounded"
            title="Copy code"
          >
            {copied ? (
              <LuCheck className="w-4 h-4 text-emerald-400" />
            ) : (
              <LuCopy className="w-4 h-4 text-slate-500 hover:text-slate-300" />
            )}
          </button>
        </div>
        
        {/* Code content */}
        <div className="p-4 font-mono text-sm leading-relaxed">
          {codeLines.map((line, index) => (
            <div 
              key={line.num} 
              className="flex"
              style={{
                animation: `fadeIn 0.3s ease-out ${index * 50}ms both`,
              }}
            >
              <span className="text-slate-600 w-8 select-none">{line.num}</span>
              <span className={getLineClass(line.type)}>{line.content}</span>
            </div>
          ))}
        </div>
        
        {/* Typing cursor decoration */}
        <div className="absolute bottom-4 right-4">
          <span className="text-emerald-400 animate-pulse">▋</span>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Hero = () => {
  const roles = [
    "Hemant Sharma",
    "Mobile Development Lead",
    "Flutter & Android Expert",
    "AI/ML Integration Specialist"
  ];

  const { displayText, isTyping } = useTypewriter(roles, {
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2500,
  });

  const downloadResumeFile = () => {
    const fileUrl = "/resume.pdf";
    const suggestedFileName = "Resume.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = suggestedFileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-slate-950"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="flex-grow lg:max-w-[55%] space-y-8 text-center lg:text-left">
            {/* Dynamic Text Display */}
            <ScrollReveal direction="up" delay={0}>
              <div className="mb-8">
                <div className="text-xl lg:text-2xl font-light text-slate-400 mb-2 font-mono">
                  <span className="text-indigo-400">$</span> hello world
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                  <span className="font-mono">
                    I'm {displayText}
                    <span className={`inline-block w-0.5 h-8 lg:h-12 ml-1 bg-indigo-400 ${isTyping ? 'animate-pulse' : ''}`} />
                  </span>
                </h1>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <div className="space-y-6">
                <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                  Mobile Development Lead specializing in Flutter, Android (Kotlin), System Design & AI/ML Integration.
                  8+ years architecting high-performance cross-platform solutions for enterprise clients across USA, UAE, UK, and Jordan.
                </p>
              </div>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal direction="up" delay={200}>
              <div className="flex gap-3 justify-center lg:justify-start">
                {[
                  { icon: LuGithub, href: "https://github.com/hemantbeast", label: "GitHub" },
                  { icon: LuLinkedin, href: "https://linkedin.com/in/hemantdesharma", label: "LinkedIn" },
                  { icon: LuTwitter, href: "https://x.com/hemantbeast", label: "Twitter" },
                  { icon: LuInstagram, href: "https://instagram.com/hemantbeast", label: "Instagram" },
                ].map((social, index) => (
                  <Button 
                    key={social.label}
                    asChild 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full border-slate-700 hover:border-indigo-500 hover:text-indigo-400 transition-all duration-300 hover:scale-110"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal direction="up" delay={250}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <Button 
                  size="lg" 
                  className="text-base px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <LuMessageCircle className="w-5 h-5" />
                  Let's Connect
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base px-8 border-slate-600 hover:bg-slate-800 transition-all duration-300 hover:scale-105"
                  onClick={downloadResumeFile}
                >
                  <LuDownload className="w-5 h-5" />
                  Resume
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Code Snippet Preview */}
          <div className="relative flex-shrink-0">
            <CodeSnippet />
          </div>
        </div>
      </div>

      {/* Keyboard shortcut hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-600 text-sm font-mono hidden lg:block">
        Press <kbd className="px-2 py-1 bg-slate-800 rounded text-slate-400 mx-1">Ctrl</kbd> + <kbd className="px-2 py-1 bg-slate-800 rounded text-slate-400 mx-1">K</kbd> to navigate
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
