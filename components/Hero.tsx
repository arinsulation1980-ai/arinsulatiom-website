import React, { Suspense } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Scene3D from './Scene3D';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* 3D Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-slate-950" />}>
        <Scene3D />
      </Suspense>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md shadow-lg transform hover:scale-105 transition-transform duration-300">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_#f97316]"></span>
            <span className="text-orange-200 text-xs font-bold tracking-wider uppercase">ISO 9001:2015 Certified Insulation Contractor</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter mb-8 drop-shadow-2xl">
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#ff264d] to-rose-500 animate-gradient-x">
              Extreme Efficiency
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed drop-shadow-md mx-auto md:mx-0">
            We provide and install premium industrial insulation systems designed to reduce energy costs, protect assets, and ensure personnel safety in the most demanding environments.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <a
              href="#contact"
              className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#ff264d] hover:bg-rose-600 text-white font-bold rounded-sm overflow-hidden transition-all shadow-[0_0_20px_rgba(255,38,77,0.4)] hover:shadow-[0_0_40px_rgba(255,38,77,0.6)] hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10 tracking-wide uppercase text-sm">Request Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <a href="#about" className="text-white/30 hover:text-white transition-colors p-2">
          <ChevronDown className="w-10 h-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;