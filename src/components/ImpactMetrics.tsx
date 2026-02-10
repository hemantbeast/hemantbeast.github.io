import { LuUsers, LuSmartphone, LuTrendingUp, LuClock } from "react-icons/lu";
import AnimatedCounter from "./AnimatedCounter";
import { ScrollReveal } from "./ScrollReveal";

const ImpactMetrics = () => {
  const metrics = [
    {
      icon: <LuUsers className="w-6 h-6" />,
      value: 50,
      suffix: "K+",
      label: "Users Reached",
      description: "Enterprise apps in production"
    },
    {
      icon: <LuSmartphone className="w-6 h-6" />,
      value: 35,
      suffix: "+",
      label: "Apps Delivered",
      description: "Across multiple platforms"
    },
    {
      icon: <LuTrendingUp className="w-6 h-6" />,
      value: 15,
      suffix: "+",
      label: "Production Apps",
      description: "Enterprise-grade solutions"
    },
    {
      icon: <LuClock className="w-6 h-6" />,
      value: 8,
      suffix: "+",
      label: "Years Experience",
      description: "Professional development"
    }
  ];

  return (
    <section className="py-16 px-6 bg-slate-950 border-y border-slate-800">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Impact at a Glance</h2>
            <p className="text-slate-400">The numbers that define my journey</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <ScrollReveal key={metric.label} delay={index * 100}>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center p-3 bg-slate-900 rounded-xl border border-slate-800 mb-4 group-hover:border-indigo-500/50 group-hover:bg-slate-800/50 transition-all duration-300">
                  <div className="text-indigo-400">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} duration={2000} />
                </div>
                <div className="text-sm font-semibold text-slate-300 mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-500">
                  {metric.description}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
