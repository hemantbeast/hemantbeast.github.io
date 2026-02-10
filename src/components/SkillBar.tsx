import { useScrollReveal } from '@/hooks/use-animations';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  level: number;
  color?: string;
  delay?: number;
}

export function SkillBar({ name, level, color = 'bg-indigo-500', delay = 0 }: SkillBarProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-sm text-slate-500 font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all duration-1000 ease-out', color)}
          style={{
            width: isVisible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

interface SkillsGridProps {
  skills: Array<{
    name: string;
    level: number;
    category?: string;
  }>;
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'mobile':
        return 'bg-indigo-500';
      case 'backend':
        return 'bg-emerald-500';
      case 'tools':
        return 'bg-amber-500';
      default:
        return 'bg-indigo-500';
    }
  };

  return (
    <div ref={ref} className="space-y-4">
      {skills.map((skill, index) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          color={getCategoryColor(skill.category)}
          delay={index * 100}
        />
      ))}
    </div>
  );
}
