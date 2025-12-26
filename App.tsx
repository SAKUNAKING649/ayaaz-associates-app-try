
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from './components/mobile/SplashScreen';
import AuthScreen from './components/mobile/AuthScreen';
import MainMobileApp from './components/mobile/MainMobileApp';
import PropertyDetail from './components/mobile/PropertyDetail';
import { Property, User } from './types';
import { INITIAL_PROPERTIES } from './constants';

const App: React.FC = () => {
  const [appState, setAppState] = useState<'splash' | 'auth' | 'main'>('splash');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'listings' | 'search' | 'account'>('listings');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);
  
  const [properties, setProperties] = useState<Property[]>(() => {
    const saved = localStorage.getItem('ayaz_properties');
    return saved ? JSON.parse(saved) : INITIAL_PROPERTIES;
  });

  // Check for persistent session on load
  useEffect(() => {
    const savedUser = localStorage.getItem('ayaz_active_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  // Handle Initial Boot Sequence
  useEffect(() => {
    if (appState === 'splash') {
      const timer = setTimeout(() => {
        const savedUser = localStorage.getItem('ayaz_active_user');
        if (savedUser) {
          setAppState('main');
        } else {
          setAppState('auth');
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [appState]);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('ayaz_active_user', JSON.stringify(user));
    setAppState('main');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('ayaz_active_user');
    setAppState('auth');
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 overflow-hidden select-none">
      <AnimatePresence mode="wait">
        {appState === 'splash' && (
          <SplashScreen key="splash" />
        )}

        {appState === 'auth' && (
          <AuthScreen key="auth" onLogin={handleLogin} />
        )}

        {appState === 'main' && currentUser && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full"
          >
            <MainMobileApp 
              user={currentUser}
              properties={properties} 
              activeTab={activeTab} 
              setActiveTab={setActiveTab}
              onPropertySelect={(id) => setSelectedPropertyId(id)}
              onLogout={handleLogout}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedPropertyId && (
          <PropertyDetail 
            property={properties.find(p => p.id === selectedPropertyId)!} 
            onClose={() => setSelectedPropertyId(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
