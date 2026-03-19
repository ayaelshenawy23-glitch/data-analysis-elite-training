/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageSquare, X } from 'lucide-react';
import React, { useState } from 'react';
import { Chat } from './components/Chat';
import { MonthDetail } from './components/MonthDetail';
import { Roadmap } from './components/Roadmap';
import { syllabus } from './data/syllabus';

export default function App() {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const currentMonthData = syllabus.find((m) => m.id === selectedMonth) || syllabus[0];

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden font-sans text-slate-900">
      <Roadmap selectedMonth={selectedMonth} onSelectMonth={setSelectedMonth} />
      
      <main className="flex-1 flex flex-col h-full relative">
        <MonthDetail data={currentMonthData} />

        {/* Chat Toggle Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`absolute bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 z-50 ${
            isChatOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105'
          }`}
        >
          {isChatOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </button>

        {/* Chat Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 flex flex-col ${
            isChatOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Chat />
        </div>
      </main>
    </div>
  );
}
