import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

interface CircularProgressProps {
  skill: Skill;
  delay: number;
}

const CircularProgress = ({ skill, delay }: CircularProgressProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'mobile':
        return { stroke: '#6366f1', bg: 'bg-indigo-500/10', text: 'text-indigo-400' };
      case 'backend':
        return { stroke: '#10b981', bg: 'bg-emerald-500/10', text: 'text-emerald-400' };
      case 'tools':
        return { stroke: '#f59e0b', bg: 'bg-amber-500/10', text: 'text-amber-400' };
      case 'ai':
        return { stroke: '#8b5cf6', bg: 'bg-violet-500/10', text: 'text-violet-400' };
      default:
        return { stroke: '#6366f1', bg: 'bg-indigo-500/10', text: 'text-indigo-400' };
    }
  };

  const colors = getCategoryColor(skill.category);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 1500;
        const startTime = Date.now();
        const targetProgress = skill.level;

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progressRatio = Math.min(elapsed / duration, 1);
          const easeOutQuart = 1 - Math.pow(1 - progressRatio, 4);
          setProgress(Math.floor(easeOutQuart * targetProgress));

          if (progressRatio < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800 transition-all duration-300 group"
    >
      <div className="relative w-24 h-24 mb-3">
        {/* Background circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            stroke="#1e293b"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            stroke={colors.stroke}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? strokeDashoffset : circumference}
            className="transition-all duration-100 ease-out"
          />
        </svg>
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-white font-mono">
            {progress}%
          </span>
        </div>
      </div>
      <h4 className="text-sm font-semibold text-slate-200 text-center mb-1">
        {skill.name}
      </h4>
      <span className={`text-xs ${colors.text} px-2 py-0.5 rounded-full ${colors.bg}`}>
        {skill.category}
      </span>
    </div>
  );
};

interface SkillsShowcaseProps {
  skills: Skill[];
}

const SkillsShowcase = ({ skills }: SkillsShowcaseProps) => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
      <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
        Technical Proficiency
      </h4>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <CircularProgress
            key={skill.name}
            skill={skill}
            delay={index * 100}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          <span className="text-slate-400">Mobile Development</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-slate-400">Backend</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="text-slate-400">Tools & DevOps</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-500" />
          <span className="text-slate-400">AI/ML</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsShowcase;
