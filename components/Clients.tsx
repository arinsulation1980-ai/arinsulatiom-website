import React from 'react';
import { CLIENTS, TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Logos */}
        <div className="mb-32 text-center">
          <p className="text-orange-600 font-bold uppercase tracking-widest mb-12 text-sm">Trusted by Forward-Thinking Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20 px-4 md:px-0 opacity-80 transition-all duration-500">
            {CLIENTS.map((client) => (
              <div key={client.id} className="relative group perspective-1000">
                <span className="text-xl md:text-2xl font-black text-slate-300 group-hover:text-slate-900 transition-colors duration-500 select-none tracking-tighter uppercase inline-block transform group-hover:-translate-y-1">
                  {client.name}
                </span>
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-500 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Client Feedback</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="bg-white p-10 rounded-2xl relative border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 group">
                <Quote className="absolute top-8 right-8 w-10 h-10 text-orange-100 fill-orange-50 group-hover:fill-orange-100 group-hover:text-orange-200 transition-colors duration-300" />

                <div className="flex text-amber-400 mb-6 drop-shadow-sm">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <p className="text-slate-600 font-medium italic mb-8 leading-relaxed text-lg">"{item.content}"</p>

                <div className="flex items-center space-x-4 border-t border-slate-100 pt-6">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{item.name}</h4>
                    <div className="text-sm font-medium text-slate-500">
                      {item.role}, <span className="text-orange-600 font-bold">{item.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;