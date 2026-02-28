import React from 'react';
import { PROJECTS } from '../constants';
import { Plus } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="relative">
            <h4 className="text-orange-600 font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-orange-600 inline-block"></span>
              Our Portfolio
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Featured Works<span className="text-orange-600">.</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] transition-all duration-500 cursor-pointer border border-slate-100/50">
              <div className="relative h-96 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-orange-500/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg">
                      {project.category}
                    </span>
                    <span className="text-white/80 font-medium text-sm bg-slate-900/50 backdrop-blur-sm px-3 py-1 rounded-sm">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-200/90 line-clamp-2 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.description}
                  </p>
                </div>

                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500">
                  <Plus className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;