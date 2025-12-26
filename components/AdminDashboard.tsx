
import React, { useState } from 'react';
import { Property } from '../types';
import { BRAND_COLORS, LOGO } from '../constants';

interface AdminDashboardProps {
  properties: Property[];
  onAdd: (p: Property) => void;
  onDelete: (id: string) => void;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ properties, onAdd, onDelete, onLogout }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProp, setNewProp] = useState<Partial<Property>>({
    type: 'Sale',
    category: 'Residential',
    beds: 0,
    baths: 0,
    area: '120 Sq. Yards'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProp.title || !newProp.price || !newProp.location) return;

    const propToAdd: Property = {
      id: Math.random().toString(36).substr(2, 9),
      title: newProp.title!,
      price: newProp.price!,
      location: newProp.location!,
      beds: newProp.beds || 0,
      baths: newProp.baths || 0,
      area: newProp.area || '120 Sq. Yards',
      image: newProp.image || 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      description: newProp.description || 'Modern luxury property listing.',
      type: newProp.type as any,
      category: newProp.category as any,
    };

    onAdd(propToAdd);
    setShowAddForm(false);
    setNewProp({ type: 'Sale', category: 'Residential' });
  };

  return (
    <div className="flex min-h-screen bg-slate-100 animate-fade-in">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed inset-y-0">
        <div className="p-8 border-b border-white/10 grayscale invert brightness-0">
          {LOGO}
        </div>
        <nav className="flex-1 p-6 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-red-700 rounded-xl text-sm font-bold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h16M4 18h16" strokeWidth={2}/></svg>
            Listings
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-sm font-medium text-slate-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeWidth={2}/></svg>
            Analytics
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-sm font-medium text-slate-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeWidth={2}/></svg>
            Inquiries
          </button>
        </nav>
        <div className="p-6 border-t border-white/10">
          <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-700/20 text-red-500 rounded-xl text-sm font-bold transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" strokeWidth={2}/></svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-12">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-500">Welcome back, Faiz Ali Khan</p>
          </div>
          <button 
            onClick={() => setShowAddForm(true)}
            className="bg-red-700 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-red-700/30 hover:bg-red-800 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth={3}/></svg>
            Post New Listing
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Listings', val: properties.length, icon: '🏠', color: 'bg-blue-500' },
            { label: 'Active Inquiries', val: '24', icon: '📩', color: 'bg-green-500' },
            { label: 'Pending Docs', val: '12', icon: '📝', color: 'bg-amber-500' },
            { label: 'Monthly Growth', val: '+15%', icon: '📈', color: 'bg-red-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
              <div className={`w-12 h-12 ${stat.color} text-white rounded-2xl flex items-center justify-center text-xl mb-4`}>
                {stat.icon}
              </div>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
              <p className="text-3xl font-black text-slate-900">{stat.val}</p>
            </div>
          ))}
        </div>

        {/* Properties List */}
        <div className="bg-white rounded-[3rem] shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-900">Manage Properties</h2>
            <div className="flex gap-2">
              <input type="text" placeholder="Search ID..." className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-700" />
            </div>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[10px] uppercase font-bold tracking-widest">
                <th className="px-8 py-4">Property Detail</th>
                <th className="px-8 py-4">Type</th>
                <th className="px-8 py-4">Price</th>
                <th className="px-8 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {properties.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-4">
                      <img src={p.image} className="w-12 h-12 rounded-xl object-cover" alt={p.title} />
                      <div>
                        <p className="font-bold text-slate-900">{p.title}</p>
                        <p className="text-xs text-slate-500">{p.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">{p.category}</span>
                  </td>
                  <td className="px-8 py-4">
                    <p className="font-black text-red-700">{p.price}</p>
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Edit">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeWidth={2}/></svg>
                      </button>
                      <button 
                        onClick={() => onDelete(p.id)}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" 
                        title="Delete"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth={2}/></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Add Modal */}
      {showAddForm && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[3rem] w-full max-w-2xl overflow-hidden shadow-2xl animate-fade-in-up">
            <div className="bg-slate-900 p-8 text-white flex justify-between items-center">
              <h3 className="text-2xl font-bold">New Listing</h3>
              <button onClick={() => setShowAddForm(false)} className="text-slate-400 hover:text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth={2}/></svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Title</label>
                  <input 
                    required 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900" 
                    placeholder="Luxury 3 Bed Flat"
                    value={newProp.title || ''}
                    onChange={(e) => setNewProp({...newProp, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Price</label>
                  <input 
                    required 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900" 
                    placeholder="PKR 2.5 Crore"
                    value={newProp.price || ''}
                    onChange={(e) => setNewProp({...newProp, price: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Location</label>
                  <input 
                    required 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900" 
                    placeholder="Sania Corner, Scheme 33"
                    value={newProp.location || ''}
                    onChange={(e) => setNewProp({...newProp, location: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Category</label>
                  <select 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 appearance-none"
                    value={newProp.category}
                    onChange={(e) => setNewProp({...newProp, category: e.target.value as any})}
                  >
                    <option>Residential</option>
                    <option>Apartment</option>
                    <option>Flat</option>
                    <option>Plot</option>
                    <option>Commercial</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Description</label>
                <textarea 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900" 
                  rows={3} 
                  placeholder="Tell us more about the property..."
                  value={newProp.description || ''}
                  onChange={(e) => setNewProp({...newProp, description: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-red-700 text-white py-4 rounded-xl font-bold shadow-xl shadow-red-700/20 hover:bg-red-800 transition-all"
              >
                Publish Listing
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
