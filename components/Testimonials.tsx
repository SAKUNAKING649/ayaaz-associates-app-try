
import React from 'react';
import { MOCK_REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <div className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-widest mb-4">
              Our Happy Clients
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-brand text-slate-900 mb-6">
              Trust is Our <span className="text-red-700">Foundation</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              We take pride in the relationships we've built over 12 years. Our clients consistently rank us as the top estate consultant in Karachi's Scheme 33.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-12 h-12 rounded-full border-4 border-white shadow-md" src={`https://picsum.photos/id/${i+10}/100/100`} alt="avatar" />
                ))}
              </div>
              <p className="text-sm font-bold text-slate-900">+1.2k more reviews</p>
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6 relative">
             {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-700/5 rounded-full blur-3xl"></div>
            
            {MOCK_REVIEWS.map((review, idx) => (
              <div key={review.id} className={`p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all ${idx === 0 ? 'md:mt-8' : ''}`}>
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-slate-300'}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-700 text-white flex items-center justify-center font-bold">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{review.author}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-tighter">{review.date}</p>
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

export default Testimonials;
