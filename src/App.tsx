import { Menu, MessageSquare, X } from 'lucide-react';
import React, { useState } from 'react';
import { Chat } from './components/Chat';
import { MonthDetail } from './components/MonthDetail';
import { Roadmap } from './components/Roadmap';
import { syllabus } from './data/syllabus';

export default function App() {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);

  const currentMonthData = syllabus.find((m) => m.id === selectedMonth) || syllabus[0];

  return (
    <div className="flex h-screen w-full bg-slate-950 overflow-hidden font-sans text-slate-200">
      
      {/* Mobile Overlay for Roadmap */}
      {isRoadmapOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsRoadmapOpen(false)}
        />
      )}

      {/* Roadmap Sidebar */}
      <div className={`fixed md:relative z-50 h-full transition-transform duration-300 ease-in-out ${isRoadmapOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <Roadmap 
          selectedMonth={selectedMonth} 
          onSelectMonth={(id) => {
            setSelectedMonth(id);
            setIsRoadmapOpen(false); // Close on mobile after selection
          }} 
        />
      </div>
      
      <main className="flex-1 flex flex-col h-full relative w-full">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between bg-slate-900 p-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsRoadmapOpen(true)} 
              className="text-slate-300 hover:text-white p-1"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-lg font-bold text-white">Data Analytics Elite</h1>
          </div>
          <button 
            onClick={() => setIsChatOpen(true)}
            className="text-indigo-400 hover:text-indigo-300 p-1"
          >
            <MessageSquare size={24} />
          </button>
        </div>

        <MonthDetail 
          data={currentMonthData} 
          onOpenChat={() => setIsChatOpen(true)} 
        />

        {/* Chat Toggle Button (Desktop) */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`hidden md:flex absolute bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl items-center justify-center transition-all duration-300 z-50 ${
            isChatOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-indigo-600 text-white hover:bg-indigo-500 hover:scale-105'
          }`}
        >
          {isChatOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </button>

        {/* Chat Panel */}
        <div
          className={`fixed md:absolute top-0 right-0 h-full w-full md:w-[400px] shadow-2xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
            isChatOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
      </main>
    </div>
  );
}
