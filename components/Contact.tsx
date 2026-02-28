import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will contact you shortly.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="text-white">
            <h4 className="text-orange-500 font-bold uppercase tracking-widest mb-2">Get In Touch</h4>
            <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Facility?</h2>
            <p className="text-slate-400 mb-12 leading-relaxed text-lg">
              Our engineering team is ready to discuss your custom insulation needs. Contact us for a free thermal audit or project consultation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded bg-slate-900 border border-slate-700 flex items-center justify-center flex-shrink-0 text-orange-500 shadow-inner">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Phone</h3>
                  <p className="text-slate-400">+91 8428642523</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded bg-slate-900 border border-slate-700 flex items-center justify-center flex-shrink-0 text-orange-500 shadow-inner">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <p className="text-slate-400">arinsulation1980@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded bg-slate-900 border border-slate-700 flex items-center justify-center flex-shrink-0 text-orange-500 shadow-inner">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Headquarters</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">274W2/OLD NO:205 MEALNILAIPALLI THERU,<br />KAMATCHIPURAM, UTHAMAPALAYAM TALUK,<br />THENI - 625520. TAMILNADU, INDIA.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-sm p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-amber-500"></div>

            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder=""
                    className="w-full px-4 py-3 rounded-sm border border-slate-700 bg-slate-800/50 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-wide">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder=""
                    className="w-full px-4 py-3 rounded-sm border border-slate-700 bg-slate-800/50 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-wide">Industry</label>
                <select className="w-full px-4 py-3 rounded-sm border border-slate-700 bg-slate-800/50 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all appearance-none">
                  <option value=""></option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-wide">Project Details</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-sm border border-slate-700 bg-slate-800/50 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all resize-none"
                  placeholder="Tell us about your insulation needs..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-sm transition-colors flex items-center justify-center gap-2 uppercase tracking-widest text-sm shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)]"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;