import { CheckCircle2, ChevronRight } from 'lucide-react';
import React from 'react';
import { MonthData, syllabus } from '../data/syllabus';

interface RoadmapProps {
  selectedMonth: number;
  onSelectMonth: (id: number) => void;
}

export function Roadmap({ selectedMonth, onSelectMonth }: RoadmapProps) {
  return (
    <div className="w-80 bg-slate-900 h-full flex flex-col border-r border-slate-800 shrink-0">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Data Analytics Elite
        </h1>
        <p className="text-slate-400 text-sm mt-2">6-Month Training Program</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {syllabus.map((month, index) => {
          const isSelected = selectedMonth === month.id;
          const isPast = month.id < selectedMonth;

          return (
            <button
              key={month.id}
              onClick={() => onSelectMonth(month.id)}
              className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-4 group ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-semibold text-sm ${
                  isSelected
                    ? 'bg-white text-indigo-600'
                    : isPast
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-slate-800 text-slate-500 group-hover:bg-slate-700'
                }`}
              >
                {isPast ? <CheckCircle2 size={16} /> : month.id}
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className={`font-medium truncate ${
                    isSelected ? 'text-white' : 'text-slate-200'
                  }`}
                >
                  {month.title}
                </h3>
                <p
                  className={`text-xs truncate mt-0.5 ${
                    isSelected ? 'text-indigo-200' : 'text-slate-500'
                  }`}
                >
                  {month.subtitle}
                </p>
              </div>
              {isSelected && <ChevronRight size={18} className="text-white/70" />}
            </button>
          );
        })}
      </div>

      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              Progress
            </span>
            <span className="text-emerald-400 text-xs font-bold">
              {Math.round(((selectedMonth - 1) / 6) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-500 ease-out"
              style={{ width: `${((selectedMonth - 1) / 6) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
