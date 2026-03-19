import { BookOpen, Briefcase, Code, FileText, Lightbulb, Target } from 'lucide-react';
import React from 'react';
import { MonthData } from '../data/syllabus';

interface MonthDetailProps {
  data: MonthData;
}

export function MonthDetail({ data }: MonthDetailProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-white p-8 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide uppercase mb-4">
            <Target size={16} />
            {data.title}
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {data.subtitle}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <BookOpen size={20} />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Core Topics</h2>
            </div>
            <ul className="space-y-3">
              {data.topics.map((topic, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                  <span className="leading-snug">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Briefcase size={20} />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Main Project</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-6">
              {data.project}
            </p>

            <div className="flex items-center gap-3 mb-4 pt-6 border-t border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Lightbulb size={20} />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Source Inspiration</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">{data.source}</p>
          </div>
        </div>

        <div className="bg-indigo-900 rounded-3xl p-8 lg:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-700 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/3" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Code size={24} className="text-indigo-300" />
              <h2 className="text-2xl font-bold tracking-tight">Quality Standards</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-100 mb-1">Real Datasets</h3>
                  <p className="text-indigo-200/80 text-sm leading-relaxed">
                    Always use real-world datasets from Kaggle or UCI Machine Learning Repository.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-100 mb-1">Clean Code</h3>
                  <p className="text-indigo-200/80 text-sm leading-relaxed">
                    Write clean, documented code following PEP 8 standards.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-100 mb-1">Mini-Quizzes</h3>
                  <p className="text-indigo-200/80 text-sm leading-relaxed">
                    Test your knowledge with a mini-quiz after completing each module.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-100 mb-1">Business Insights</h3>
                  <p className="text-indigo-200/80 text-sm leading-relaxed">
                    Focus on Data Storytelling. Don't just show numbers, explain what they mean for the business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
