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
  SiDocker,
  SiTensorflow
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { LuBrainCircuit, LuGitBranch, LuCog, LuCloud } from "react-icons/lu";

interface TechLogo {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  name: string;
}

const techLogoMap: Record<string, TechLogo> = {
  "Flutter": { icon: SiFlutter, color: "#5FC9F8", name: "Flutter" },
  "Kotlin": { icon: SiKotlin, color: "#B97CFF", name: "Kotlin" },
  "Android": { icon: SiAndroid, color: "#3DDC84", name: "Android" },
  "iOS": { icon: SiApple, color: "#FFFFFF", name: "iOS" },
  "Dart": { icon: SiDart, color: "#00B4AB", name: "Dart" },
  "Riverpod": { icon: LuCog, color: "#FF9F7F", name: "Riverpod" },
  "Firebase": { icon: SiFirebase, color: "#FFD54F", name: "Firebase" },
  "Python": { icon: SiPython, color: "#FFD845", name: "Python" },
  "FastAPI": { icon: SiFastapi, color: "#00E5A0", name: "FastAPI" },
  "OpenAI API": { icon: SiOpenai, color: "#10A37F", name: "OpenAI" },
  "Azure AI Foundry": { icon: LuBrainCircuit, color: "#00BCF2", name: "Azure AI" },
  "Node.js": { icon: SiNodedotjs, color: "#4CAF50", name: "Node.js" },
  "Git": { icon: SiGit, color: "#FF6B6B", name: "Git" },
  "GitHub Actions": { icon: SiGithub, color: "#FFFFFF", name: "GitHub" },
  "Docker": { icon: SiDocker, color: "#2496ED", name: "Docker" },
  "YOLO": { icon: LuBrainCircuit, color: "#00E5FF", name: "YOLO" },
  "TensorFlow": { icon: SiTensorflow, color: "#FF9500", name: "TensorFlow" },
  "Xamarin.Forms": { icon: LuCog, color: "#5B9BD5", name: "Xamarin" },
  "REST APIs": { icon: TbApi, color: "#A5B4FC", name: "REST APIs" },
  "Google APIs": { icon: TbApi, color: "#93C5FD", name: "Google APIs" },
  "Android SDK": { icon: SiAndroid, color: "#3DDC84", name: "Android SDK" },
  "CI/CD": { icon: LuGitBranch, color: "#F472B6", name: "CI/CD" },
  "MVVM": { icon: LuCog, color: "#C4B5FD", name: "MVVM" },
  "Google Cloud": { icon: LuCloud, color: "#34A853", name: "Google Cloud" },
};

// Generate truly scattered positions with no grid pattern
const generateScatteredPositions = (count: number, containerWidth: number, containerHeight: number) => {
  const positions = [];
  const minDistance = 70; // Minimum distance between logos
  const padding = 20;
  const maxAttempts = 100;
  
  for (let i = 0; i < count; i++) {
    let x, y, validPosition;
    let attempts = 0;
    
    do {
      validPosition = true;
      attempts++;
      
      // Generate completely random position within bounds
      x = padding + Math.random() * (containerWidth - padding * 2 - 56);
      y = padding + Math.random() * (containerHeight - padding * 2 - 56);
      
      // Check distance from all existing positions
      for (const pos of positions) {
        const distance = Math.sqrt(Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2));
        if (distance < minDistance) {
          validPosition = false;
          break;
        }
      }
    } while (!validPosition && attempts < maxAttempts);
    
    positions.push({
      x,
      y,
      animationDelay: Math.random() * 4,
      animationDuration: 3 + Math.random() * 3,
      scale: 0.9 + Math.random() * 0.2, // Slight size variation
    });
  }
  
  return positions;
};

interface TechLogosProps {
  technologies: string[];
  isRightSide?: boolean;
}

const TechLogos = ({ technologies, isRightSide = false }: TechLogosProps) => {
  const getTechInfo = (tech: string): TechLogo => {
    return techLogoMap[tech] || { icon: LuCog, color: "#818CF8", name: tech };
  };

  // Match the card width - approximately 50% of container
  const containerWidth = 400; // Slightly wider for better spread
  const containerHeight = 350; // Taller for vertical spread
  const displayTechs = technologies.slice(0, 8);
  const positions = generateScatteredPositions(displayTechs.length, containerWidth, containerHeight);

  return (
    <div 
      className="hidden lg:block relative"
      style={{ width: `${containerWidth}px`, height: `${containerHeight}px` }}
    >
      {displayTechs.map((tech, index) => {
        const techInfo = getTechInfo(tech);
        const Icon = techInfo.icon;
        const pos = positions[index];
        
        return (
          <div
            key={tech}
            className="absolute group"
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              transform: `scale(${pos.scale})`,
              animation: `float ${pos.animationDuration}s ease-in-out ${pos.animationDelay}s infinite`,
            }}
          >
            <div 
              className="w-14 h-14 rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:bg-slate-800/60 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/20"
            >
              <Icon 
                className="w-8 h-8 transition-all duration-300 group-hover:scale-110" 
                style={{ 
                  color: techInfo.color,
                  filter: 'drop-shadow(0 0 10px currentColor)',
                }}
              />
            </div>
            {/* Tooltip */}
            <div 
              className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20"
            >
              <div className="bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg border border-slate-700 whitespace-nowrap shadow-xl">
                {techInfo.name}
              </div>
            </div>
          </div>
        );
      })}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(var(--scale, 1));
          }
          33% {
            transform: translateY(-8px) rotate(2deg) scale(var(--scale, 1));
          }
          66% {
            transform: translateY(-4px) rotate(-1deg) scale(var(--scale, 1));
          }
        }
      `}</style>
    </div>
  );
};

export default TechLogos;
