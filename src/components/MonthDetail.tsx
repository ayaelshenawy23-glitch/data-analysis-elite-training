import { BookOpen, Briefcase, Code, Lightbulb, Send, Target, UploadCloud } from 'lucide-react';
import React, { useState } from 'react';
import { MonthData } from '../data/syllabus';

interface MonthDetailProps {
  data: MonthData;
  onOpenChat: () => void;
}

export function MonthDetail({ data, onOpenChat }: MonthDetailProps) {
  const [projectLink, setProjectLink] = useState('');

  const handleSubmitProject = () => {
    if (!projectLink.trim()) return;
    
    const message = `لقد أنهيت مشروع الشهر (${data.subtitle}): "${data.project}"\n\nهذا هو رابط المشروع للتقييم: ${projectLink}\n\nأرجو تقييمه وإعطائي ملاحظات لتحسينه بناءً على معايير الجودة.`;
    
    // Open chat panel
    onOpenChat();
    
    // Dispatch event to send message
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('send-chat', { detail: message }));
    }, 300); // slight delay to allow chat to open
    
    setProjectLink('');
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-950 p-6 lg:p-12 text-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-sm font-semibold tracking-wide uppercase mb-4">
            <Target size={16} />
            {data.title}
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {data.subtitle}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-sm hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <BookOpen size={20} />
              </div>
              <h2 className="text-lg font-bold text-white">Core Topics</h2>
            </div>
            <ul className="space-y-3">
              {data.topics.map((topic, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <span className="leading-snug">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-sm hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Briefcase size={20} />
              </div>
              <h2 className="text-lg font-bold text-white">Main Project</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              {data.project}
            </p>

            <div className="flex items-center gap-3 mb-4 pt-6 border-t border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Lightbulb size={20} />
              </div>
              <h2 className="text-lg font-bold text-white">Source Inspiration</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">{data.source}</p>
          </div>
        </div>

        {/* Project Evaluation Section */}
        <div className="mb-12 bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <UploadCloud size={28} className="text-emerald-400" />
              <h2 className="text-2xl font-bold text-white tracking-tight">تقييم المشروع (Project Evaluation)</h2>
            </div>
            <p className="text-slate-400 mb-6 text-lg" dir="rtl">
              بعد الانتهاء من مشروع الشهر، قم برفع رابط المشروع (GitHub, Kaggle, أو Google Drive) ليقوم د. خبير بتقييمه وإعطائك ملاحظات لتطويره.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" dir="rtl">
              <input
                type="url"
                value={projectLink}
                onChange={(e) => setProjectLink(e.target.value)}
                placeholder="أدخل رابط المشروع هنا (مثال: https://github.com/...)"
                className="flex-1 bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                dir="ltr"
              />
              <button
                onClick={handleSubmitProject}
                disabled={!projectLink.trim()}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shrink-0"
              >
                <span>إرسال للتقييم</span>
                <Send size={18} className="rotate-180" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-indigo-950/50 rounded-3xl p-8 lg:p-10 text-white shadow-xl border border-indigo-900/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Code size={24} className="text-indigo-400" />
              <h2 className="text-2xl font-bold tracking-tight">Quality Standards</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-indigo-900/80 border border-indigo-700/50 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-bold text-sm text-indigo-300">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-100 mb-1">Real Datasets</h3>
                  <p className="text-indigo-200/70 text-sm leading-relaxed">
                    Always use real-world datasets from Kaggle or UCI Machine Learning Repository.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-indigo-900/80 border border-indigo-700/50 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-bold text-sm text-indigo-300">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-100 mb-1">Clean Code</h3>
                  <p className="text-indigo-200/70 text-sm leading-relaxed">
                    Write clean, documented code following PEP 8 standards.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-indigo-900/80 border border-indigo-700/50 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-bold text-sm text-indigo-300">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-100 mb-1">Mini-Quizzes</h3>
                  <p className="text-indigo-200/70 text-sm leading-relaxed">
                    Test your knowledge with a mini-quiz after completing each module.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-indigo-900/80 border border-indigo-700/50 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-bold text-sm text-indigo-300">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-100 mb-1">Business Insights</h3>
                  <p className="text-indigo-200/70 text-sm leading-relaxed">
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
