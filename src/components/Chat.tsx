import { GoogleGenAI } from '@google/genai';
import { Bot, Send, User } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import Markdown from 'react-markdown';

const SYSTEM_INSTRUCTION = `
أنت "د. خبير"، بروفيسور وعالم بيانات بخبرة 15 عاماً في شركات عالمية. هدفك تدريبي من الصفر للاحتراف في 6 أشهر.
أسلوبك عملي 80% ونظري 20%.

المنهج التفصيلي:
1. الشهر 1 (Excel): التركيز على Pivot Tables, Power Query، وعمل Sales Dashboard احترافي.
2. الشهر 2 (SQL): تعلم Queries, Joins, Window Functions باستخدام قاعدة بيانات Chinook.
3. الشهر 3 (Python): احتراف مكتبات Pandas و NumPy لمعالجة البيانات الضخمة.
4. الشهر 4 (BI Tools): احتراف Power BI أو Tableau لعمل تقارير تفاعلية للمديرين التنفيذيين.
5. الشهر 5 (Statistics & EDA): فهم الإحصاء التطبيقي وعمل تحليل استكشافي لبيانات من Kaggle.
6. الشهر 6 (سوق العمل): بناء Portfolio على GitHub، وتجهيز LinkedIn، والتحضير لمقابلات الشركات الكبرى.

قواعد العمل الصارمة:
- لا تشرح درساً جديداً إلا بعد عمل "اختبار سريع" أو "مهمة عملية" للتأكد من استيعاب الطالب.
- اعتمد دائماً على مصادر موثوقة مثل (Kaggle, IBM, Google Data Analytics).
- وفر روابط لبيانات حقيقية من Kaggle أو UCI Machine Learning Repository.
- شجع الطالب على كتابة كود نظيف وموثق (PEP 8).
- في نهاية كل أسبوع، اطلب من الطالب ملخصاً لما تعلمه ووجهه للخطوة التالية.
- ركز جداً على "Data Storytelling" (كيف نحكي قصة بالبيانات) وليس مجرد أرقام. وضح دائماً "Business Insights".
- تحدث باللغة العربية، ولكن استخدم المصطلحات التقنية باللغة الإنجليزية كما هي.
- كن مشجعاً، محترفاً، وحازماً في نفس الوقت.
`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: 'أهلاً بك يا بطل في برنامج النخبة لتحليل البيانات! أنا د. خبير، وسأكون مرشدك في هذه الرحلة الممتعة لمدة 6 أشهر. هل أنت مستعد للبدء بالشهر الأول (Excel)؟',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY is not set');
      return;
    }

    const ai = new GoogleGenAI({ apiKey });
    chatRef.current = ai.chats.create({
      model: 'gemini-3.1-pro-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatRef.current) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({
        message: userMessage,
      });
      setMessages((prev) => [
        ...prev,
        { role: 'model', text: response.text || 'حدث خطأ غير متوقع.' },
      ]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'model', text: 'عذراً، حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 border-l border-slate-200">
      <div className="p-4 bg-indigo-600 text-white flex items-center gap-3 shadow-sm">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <Bot size={24} />
        </div>
        <div>
          <h2 className="font-semibold text-lg">د. خبير</h2>
          <p className="text-indigo-100 text-sm">مرشدك في تحليل البيانات</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex gap-3 ${
              msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === 'user'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-indigo-600 text-white'
              }`}
            >
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div
              className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                msg.role === 'user'
                  ? 'bg-emerald-500 text-white rounded-tr-none'
                  : 'bg-white border border-slate-100 text-slate-800 rounded-tl-none'
              }`}
              dir="rtl"
            >
              <div
                className={`prose prose-sm max-w-none ${
                  msg.role === 'user' ? 'prose-invert' : ''
                }`}
              >
                <Markdown>{msg.text}</Markdown>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 flex-row">
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <Bot size={16} />
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-4 shadow-sm flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-.3s]" />
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-.5s]" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSend}
        className="p-4 bg-white border-t border-slate-200 flex gap-2"
        dir="rtl"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="اسأل د. خبير أو أرسل إجابتك..."
          className="flex-1 bg-slate-100 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-xl px-4 py-3 outline-none transition-all"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        >
          <Send size={20} className="rotate-180" />
        </button>
      </form>
    </div>
  );
}
