import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { Scan, ClipboardList, HardHat, ShieldCheck, LucideIcon } from 'lucide-react';

// Icon mapping helper
const IconMap: Record<string, LucideIcon> = {
  Scan: Scan,
  ClipboardList: ClipboardList,
  HardHat: HardHat,
  ShieldCheck: ShieldCheck,
};

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h4 className="text-orange-500 font-bold uppercase tracking-widest mb-2">Our Process</h4>
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">From Analysis to Implementation</h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 perspective-1000">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = IconMap[step.iconName];
              return (
                <div key={step.id} className="relative z-10 group perspective-1000">
                  <div className="flex flex-col items-center text-center transition-all duration-500 transform group-hover:rotate-y-12 preserve-3d">

                    {/* Icon Container */}
                    <div className="w-24 h-24 rounded-2xl bg-slate-900 border-2 border-slate-700 group-hover:border-orange-500 shadow-[0_0_0_8px_rgba(30,41,59,0.5)] flex items-center justify-center mb-8 transition-all duration-500 transform group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(234,88,12,0.3)] relative bg-gradient-to-br from-slate-800 to-slate-900">
                      {Icon && <Icon className="w-10 h-10 text-slate-400 group-hover:text-orange-500 transition-colors" />}
                      {/* Number badge */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-sm shadow-lg border-2 border-slate-900">
                        {index + 1}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl w-full min-h-[200px] border border-white/10 group-hover:border-orange-500/30 group-hover:bg-white/10 transition-all duration-300 shadow-xl group-hover:translate-y-[-10px]">
                      <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;