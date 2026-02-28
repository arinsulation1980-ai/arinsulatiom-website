import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Company Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="relative group perspective-1000">
            {/* Decorative 3D elements behind image */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-500/10 rounded-xl transform rotate-[-10deg] transition-transform group-hover:rotate-[-15deg]"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-900/10 rounded-xl transform rotate-[10deg] transition-transform group-hover:rotate-[15deg]"></div>

            <div className="relative transform transition-transform duration-700 hover:rotate-y-[5deg] hover:rotate-x-[5deg] preserve-3d shadow-2xl rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop"
                alt="Industrial Insulation"
                className="w-full h-[550px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-bold text-lg">Premium Insulation</p>
                <p className="text-orange-300 text-sm">Expertly Installed Solutions</p>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Who We Are</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">A New Era of <br /><span className="text-orange-600">Thermal Innovation</span></h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              Founded in 2021, ARINSULATIONS began as a local insulation contractor in Detroit. Today, we are a global leader in thermal conservation technology.
              We don't just sell insulation; we sell efficiency.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8 border-l-4 border-orange-500 pl-6 italic">
              Our mission is to help heavy industries drastically lower their carbon footprint while optimizing operational costs. From cryogenic LNG plants to high-heat foundries, ARINSULATIONS provides the barrier that matters.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
                <span className="block text-4xl font-black text-slate-900 mb-1">25+</span>
                <span className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Projects Completed</span>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
                <span className="block text-4xl font-black text-slate-900 mb-1">100%</span>
                <span className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Safety Record</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900">Our Core Values</h3>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-500 mt-6 max-w-2xl mx-auto">Built on a foundation of quality, integrity, and relentless innovation in thermal dynamics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 font-black text-2xl">01</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Precision Application</h4>
              <p className="text-slate-600">Every insulation solution is expertly installed to exact specifications, ensuring zero thermal bridging and maximum efficiency.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 font-black text-2xl">02</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Uncompromising Safety</h4>
              <p className="text-slate-600">Our materials and installation processes exceed OSHA standards, providing absolute protection in volatile environments.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 font-black text-2xl">03</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Sustainable Future</h4>
              <p className="text-slate-600">We are committed to reducing industrial carbon emissions through advanced thermal barrier technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;