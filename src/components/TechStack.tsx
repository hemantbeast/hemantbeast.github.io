import { 
  SiFlutter, 
  SiKotlin, 
  SiAndroid, 
  SiApple,
  SiDart,
  SiFirebase,
  SiPython,
  SiFastapi,
  SiOpenai,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiTensorflow
} from "react-icons/si";

const TechStack = () => {
  const technologies = [
    { icon: SiFlutter, name: "Flutter", color: "#02569B" },
    { icon: SiDart, name: "Dart", color: "#0175C2" },
    { icon: SiKotlin, name: "Kotlin", color: "#7F52FF" },
    { icon: SiAndroid, name: "Android", color: "#3DDC84" },
    { icon: SiApple, name: "iOS", color: "#999999" },
    { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiFastapi, name: "FastAPI", color: "#009688" },
    { icon: SiOpenai, name: "OpenAI", color: "#412991" },
    { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiGithub, name: "GitHub", color: "#FFFFFF" },
    { icon: SiGitlab, name: "GitLab", color: "#FC6D26" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
  ];

  return (
    <section className="py-12 bg-slate-900/50 overflow-hidden">
      <div className="text-center mb-8">
        <p className="text-sm text-slate-500 uppercase tracking-widest">Tech Stack</p>
      </div>
      
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll hover:pause">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 px-8 py-4 mx-4 bg-slate-900 rounded-lg border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <tech.icon 
                className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
                style={{ color: tech.color }}
              />
              <span className="text-slate-300 font-medium whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover,
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
