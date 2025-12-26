
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Property, User } from '../../types';
import { LOGO } from '../../constants';

interface MainMobileAppProps {
  user: User;
  properties: Property[];
  activeTab: 'listings' | 'search' | 'account';
  setActiveTab: (tab: 'listings' | 'search' | 'account') => void;
  onPropertySelect: (id: string) => void;
  onLogout: () => void;
}

const MainMobileApp: React.FC<MainMobileAppProps> = ({ user, properties, activeTab, setActiveTab, onPropertySelect, onLogout }) => {
  const [currentSubPage, setCurrentSubPage] = useState<string | null>(null);

  const renderSubPage = (title: string) => (
    <motion.div 
      initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
      className="fixed inset-0 bg-white z-[250] p-6 pt-16 flex flex-col"
    >
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => setCurrentSubPage(null)} className="p-3 bg-slate-100 rounded-full active:scale-90 transition-transform">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth={3}/></svg>
        </button>
        <h2 className="text-3xl font-black text-slate-900">{title}</h2>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center opacity-20">
        <svg className="w-24 h-24 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeWidth={1.5}/></svg>
        <p className="text-xl font-bold uppercase tracking-widest">Nothing Here Yet</p>
      </div>
    </motion.div>
  );

  return (
    <div className="h-screen w-screen flex flex-col bg-slate-50 relative overflow-hidden">
      <AnimatePresence>
        {currentSubPage && renderSubPage(currentSubPage)}
      </AnimatePresence>

      {/* Persistent App Bar */}
      <header className="px-6 pt-14 pb-4 bg-white/80 backdrop-blur-md sticky top-0 z-40 flex justify-between items-center border-b border-slate-100">
        <div className="scale-75 -ml-4">{LOGO}</div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Authenticated</p>
            <p className="text-xs font-bold text-slate-900">{user.name}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center text-xs font-black text-white shadow-lg shadow-red-700/20">
            {user.name.substring(0, 1).toUpperCase()}
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-36">
        <AnimatePresence mode="wait">
          {activeTab === 'listings' && (
            <motion.div key="listings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 h-full min-h-[70vh] flex flex-col">
              <h2 className="text-3xl font-black text-slate-900 mb-6">Latest Opportunities</h2>
              
              {properties.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center relative">
                   {/* Massive Watermark */}
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
                     <span className="text-[160px] font-black rotate-[-25deg] uppercase leading-none">AYAZ</span>
                   </div>
                   <div className="z-10 text-center opacity-40 px-10">
                      <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeWidth={1.5}/></svg>
                      </div>
                      <p className="text-2xl font-black text-slate-800 mb-2">Currently no properties listed</p>
                      <p className="text-sm font-medium">Please check back later or contact a Director.</p>
                   </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {properties.map(p => (
                    <div 
                      key={p.id} 
                      onClick={() => onPropertySelect(p.id)}
                      className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 active:scale-[0.97] transition-all"
                    >
                      <div className="h-56 relative">
                        <img src={p.image} className="w-full h-full object-cover" />
                        <div className="absolute top-4 right-4 bg-red-700 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase">{p.category}</div>
                      </div>
                      <div className="p-6">
                        <p className="text-red-700 font-black text-2xl mb-1">{p.price}</p>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h3>
                        <p className="text-slate-400 text-xs font-medium flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                          {p.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'search' && (
            <motion.div key="search" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6">
              <h2 className="text-3xl font-black text-slate-900 mb-6">Discovery</h2>
              <div className="relative mb-8">
                <input type="text" placeholder="Search areas or projects..." className="w-full bg-white border border-slate-200 rounded-[2rem] p-6 pl-14 outline-none focus:border-red-700 transition-all shadow-sm" />
                <svg className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth={2.5}/></svg>
              </div>
              
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 ml-2">Trending Categories</p>
              <div className="grid grid-cols-2 gap-4">
                {['Residential', 'Commercial', 'Plot Files', 'Luxury Flats'].map(cat => (
                  <button key={cat} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 text-left active:bg-slate-50 transition-colors shadow-sm">
                    <p className="text-[10px] font-black text-red-700 uppercase mb-1">Browse</p>
                    <p className="font-bold text-slate-800">{cat}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'account' && (
            <motion.div key="account" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="p-6">
              <div className="flex items-center gap-5 mb-10 bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="w-20 h-20 bg-red-700 rounded-3xl flex items-center justify-center text-white text-3xl font-black uppercase">
                  {user.name[0]}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">{user.name}</h3>
                  <p className="text-slate-400 text-xs font-bold">{user.email}</p>
                  <p className="text-red-700 text-xs font-black mt-1 uppercase tracking-widest">{user.whatsapp}</p>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-3 shadow-sm border border-slate-100 space-y-1">
                {['My Favorites', 'Recent Searches', 'Documents', 'Notifications', 'App Settings'].map(label => (
                  <button key={label} onClick={() => setCurrentSubPage(label)} className="w-full p-6 flex justify-between items-center active:bg-slate-50 rounded-2xl transition-all">
                    <span className="font-bold text-slate-700">{label}</span>
                    <svg className="w-5 h-5 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth={3}/></svg>
                  </button>
                ))}
              </div>

              <button 
                onClick={onLogout}
                className="w-full mt-8 p-5 bg-slate-50 text-red-700 font-black rounded-[2rem] border border-red-100 active:scale-95 transition-all text-center uppercase tracking-widest"
              >
                Logout Account
              </button>
              
              <p className="text-center text-[10px] font-bold text-slate-300 mt-10 uppercase tracking-[0.3em]">Ayaz Associates Mobile v1.0.4</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Static Fixed Bottom Navigation */}
      <nav className="fixed bottom-8 left-8 right-8 h-20 bg-slate-900 rounded-[2.5rem] flex items-center justify-around px-6 shadow-2xl z-50">
        <NavBtn 
          active={activeTab === 'listings'} 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeWidth={2}/></svg>} 
          onClick={() => { setActiveTab('listings'); setCurrentSubPage(null); }} 
        />
        <NavBtn 
          active={activeTab === 'search'} 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth={2.5}/></svg>} 
          onClick={() => { setActiveTab('search'); setCurrentSubPage(null); }} 
        />
        <NavBtn 
          active={activeTab === 'account'} 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeWidth={2}/></svg>} 
          onClick={() => { setActiveTab('account'); setCurrentSubPage(null); }} 
        />
      </nav>
    </div>
  );
};

const NavBtn: React.FC<{active: boolean, icon: any, onClick: any}> = ({active, icon, onClick}) => (
  <button 
    onClick={onClick} 
    className={`p-4 transition-all duration-300 relative ${active ? 'text-red-500 scale-110' : 'text-slate-500 active:scale-90'}`}
  >
    {active && (
      <motion.div layoutId="active-nav" className="absolute inset-0 bg-red-600/10 rounded-2xl" />
    )}
    <div className="relative z-10">{icon}</div>
  </button>
);

export default MainMobileApp;
