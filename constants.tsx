
import React from 'react';
import { Property, Review } from './types';

export const BRAND_COLORS = {
  primary: '#7D110E',
  secondary: '#E53E3E',
  dark: '#0F172A', 
  accent: '#F8F8F8',
};

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/ayazassociatesrealestate',
  googleMaps: 'https://maps.app.goo.gl/9yG9T4V8T8W2vFzH9'
};

// Added missing NAV_ITEMS to fix "Module '../constants' has no exported member 'NAV_ITEMS'" error in Navbar.tsx
export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Visit Us', href: '#visit' },
  { label: 'Contact', href: '#contact' },
];

// Added missing MOCK_REVIEWS to fix "Module '../constants' has no exported member 'MOCK_REVIEWS'" error in Testimonials.tsx
export const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Mohammad Ahmed',
    rating: 5,
    content: "Excellent service and very professional staff. They helped me find a great plot in Scheme 33 at a very competitive price. Highly recommended!",
    date: 'OCT 2023'
  },
  {
    id: '2',
    author: 'Sarah Khan',
    rating: 5,
    content: "The best estate agency in Karachi. Faiz Ali Khan is a true gentleman and guided me throughout the purchasing process. Transparency is their key.",
    date: 'NOV 2023'
  }
];

export const LOGO = (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:scale-110">
        <path d="M48 10L10 90H28L35 75H55L62 90H80L48 10Z" fill={BRAND_COLORS.primary} />
        <path d="M52 45L65 80H78L62 40L52 45Z" fill={BRAND_COLORS.secondary} />
      </svg>
    </div>
    <div className="flex flex-col -space-y-1">
      <span className="text-2xl font-black font-brand tracking-tighter text-slate-900 group-hover:text-[#7D110E] transition-colors">AYAZ</span>
      <span className="text-[10px] font-bold tracking-[0.3em] text-[#7D110E] uppercase">Associates</span>
    </div>
  </div>
);

// Start with 0 properties as requested
export const INITIAL_PROPERTIES: Property[] = [];
