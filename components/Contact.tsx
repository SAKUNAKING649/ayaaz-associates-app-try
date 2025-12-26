
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-black font-brand mb-8">Let's Discuss Your <span className="text-red-600">Future Home</span></h2>
            <p className="text-slate-400 text-lg mb-12">
              Our experts are ready to assist you with every detail. Visit our office or drop a message below.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-red-700/20 group-hover:border-red-700 transition-all">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Our Office</h4>
                  <p className="text-slate-400">SHOP NO 10, 11, SANIA CORNER, Gulzar-e-Hijri Sector 18 C Scheme 33, Karachi</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-red-700/20 group-hover:border-red-700 transition-all">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Call/WhatsApp</h4>
                  <p className="text-slate-400">0332 3251465</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-red-700/20 group-hover:border-red-700 transition-all">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Working Hours</h4>
                  <p className="text-slate-400">Mon - Sat: 10:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-10 shadow-2xl">
            <h3 className="text-slate-900 text-3xl font-black font-brand mb-8">Send a Inquiry</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-bold mb-2 text-sm uppercase tracking-widest">Name</label>
                  <input type="text" className="w-full bg-slate-100 border-none rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-red-700" placeholder="Your Name" />
                </div>
                <div>
                   <label className="block text-slate-700 font-bold mb-2 text-sm uppercase tracking-widest">Phone</label>
                  <input type="tel" className="w-full bg-slate-100 border-none rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-red-700" placeholder="WhatsApp Number" />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 font-bold mb-2 text-sm uppercase tracking-widest">Interested In</label>
                <select className="w-full bg-slate-100 border-none rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-red-700 appearance-none">
                  <option>Buying Property</option>
                  <option>Selling Property</option>
                  <option>Investment Consultation</option>
                  <option>Renting</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-700 font-bold mb-2 text-sm uppercase tracking-widest">Message</label>
                <textarea rows={4} className="w-full bg-slate-100 border-none rounded-2xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-red-700" placeholder="Tell us more about your requirements..."></textarea>
              </div>
              <button className="w-full bg-red-700 hover:bg-red-800 text-white font-black py-5 rounded-2xl transition-all transform hover:scale-[1.02] shadow-xl text-lg uppercase tracking-widest">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
