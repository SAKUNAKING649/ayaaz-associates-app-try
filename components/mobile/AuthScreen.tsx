
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LOGO } from '../../constants';
import { User } from '../../types';

interface AuthScreenProps {
  onLogin: (user: User) => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Simulated Mobile Database using LocalStorage
    const userDb: User[] = JSON.parse(localStorage.getItem('ayaz_app_db') || '[]');

    if (isLogin) {
      const user = userDb.find(u => u.email.toLowerCase() === formData.email.toLowerCase() && u.password === formData.password);
      if (user) {
        onLogin(user);
      } else {
        setError('Invalid credentials. Please try again or Sign Up.');
      }
    } else {
      if (!formData.name || !formData.email || !formData.whatsapp || !formData.password) {
        setError('All fields are required.');
        return;
      }
      if (userDb.some(u => u.email.toLowerCase() === formData.email.toLowerCase())) {
        setError('This email is already registered.');
        return;
      }

      const newUser: User = { 
        name: formData.name, 
        email: formData.email, 
        whatsapp: formData.whatsapp, 
        password: formData.password 
      };
      
      const updatedDb = [...userDb, newUser];
      localStorage.setItem('ayaz_app_db', JSON.stringify(updatedDb));
      onLogin(newUser);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="fixed inset-0 bg-white z-[200] p-8 flex flex-col overflow-y-auto"
    >
      <div className="flex justify-center my-10">
        <div className="scale-125">{LOGO}</div>
      </div>

      <div className="flex-1">
        <h1 className="text-4xl font-black text-slate-900 mb-2">
          {isLogin ? 'Sign In' : 'Create Account'}
        </h1>
        <p className="text-slate-400 mb-8 font-medium">
          {isLogin ? 'Welcome back to Ayaz Associates.' : 'Join the most trusted real estate community.'}
        </p>

        {error && (
          <div className="bg-red-50 border border-red-100 text-red-700 p-4 rounded-2xl text-xs font-bold mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl outline-none focus:border-red-700 transition-all font-medium"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="tel" 
                placeholder="WhatsApp Number" 
                className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl outline-none focus:border-red-700 transition-all font-medium"
                value={formData.whatsapp}
                onChange={e => setFormData({...formData, whatsapp: e.target.value})}
              />
            </>
          )}
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl outline-none focus:border-red-700 transition-all font-medium"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl outline-none focus:border-red-700 transition-all font-medium"
            value={formData.password}
            onChange={e => setFormData({...formData, password: e.target.value})}
          />

          <button 
            type="submit"
            className="w-full bg-red-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-red-700/20 active:scale-[0.98] transition-all text-lg mt-6"
          >
            {isLogin ? 'Login Now' : 'Sign Up'}
          </button>
        </form>
      </div>

      <button 
        onClick={() => {
          setIsLogin(!isLogin);
          setError('');
        }}
        className="py-10 text-slate-400 font-bold"
      >
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span className="text-red-700 underline underline-offset-4">{isLogin ? 'Register' : 'Login'}</span>
      </button>
    </motion.div>
  );
};

export default AuthScreen;
