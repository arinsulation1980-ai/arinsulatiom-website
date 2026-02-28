import React from 'react';
import { Hexagon, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center group mb-6">
              <span className="text-2xl font-black tracking-tighter uppercase text-white">
                ARINSULATIONS<span className="inline-block w-3 h-3 bg-[#ff264d] rounded-[3px] ml-1 mb-0.5 align-baseline transition-transform group-hover:scale-110"></span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Advanced industrial insulation solutions for a more efficient and sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Thermal Audits</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Cryogenic Insulation</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Acoustic Barriers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Fireproofing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-orange-500 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">ISO Certifications</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} ARINSULATIONS. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;