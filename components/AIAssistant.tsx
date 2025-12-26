
import React, { useState, useRef, useEffect } from 'react';
import { getRealEstateAdvice } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([
    { 
      role: 'ai', 
      content: "Hello! I am your Official Helper at Ayaz Associates. Whether you're looking to invest, buy, or are simply confused about the market, I'm here to guide you. I can also connect you directly with our Directors, Faiz Ali Khan and Ayaz Ali Khan, for expert consultation. How can I help you today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const aiResponse = await getRealEstateAdvice(userMessage);
    setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#7D110E] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        aria-label="Open Helper Bot"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[420px] h-[550px] bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden animate-fade-in-up border border-slate-100">
          <div className="bg-[#7D110E] p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">Director's Support</h3>
                <p className="text-[10px] text-red-200 uppercase tracking-widest font-bold">Official Helper Bot</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-[#7D110E] text-white rounded-tr-none shadow-md' 
                  : 'bg-white text-slate-800 shadow-sm border border-slate-200/60 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 space-x-1.5 flex items-center">
                  <div className="w-1.5 h-1.5 bg-red-700 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-red-700 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-red-700 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-red-50/50 border-t border-red-100 flex flex-wrap gap-2 justify-center">
            <button 
              onClick={() => setInput("Connect me with Faiz Ali Khan")}
              className="text-[10px] font-bold py-1.5 px-3 bg-white border border-red-200 text-red-800 rounded-full hover:bg-red-100 transition-colors"
            >
              Contact Director Faiz
            </button>
            <button 
              onClick={() => setInput("Talk to Ayaz Ali Khan")}
              className="text-[10px] font-bold py-1.5 px-3 bg-white border border-red-200 text-red-800 rounded-full hover:bg-red-100 transition-colors"
            >
              Contact Director Ayaz
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything or request a Director..."
              className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#7D110E] transition-all"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#7D110E] text-white p-3 rounded-xl hover:bg-red-900 disabled:opacity-50 transition-all shadow-lg active:scale-95"
            >
              <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
