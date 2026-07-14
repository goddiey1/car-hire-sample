'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

type Message = {
  role: 'user' | 'ai';
  content: string;
};

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: 'Hello! Welcome to Godfrey Hire. What kind of car are you looking for today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, history: messages })
      });

      const data = await response.json();
      
      if (response.ok && data.reply) {
        setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'ai', content: 'Oops! I am having trouble connecting to the system. Please try again or reach out on WhatsApp.' }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', content: 'An error occurred. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col border border-neutral-200 overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 flex justify-between items-center shadow-sm z-10">
            <div>
              <h3 className="font-bold text-lg leading-tight">Godfrey Hire Assistant</h3>
              <p className="text-emerald-100 text-xs">Usually replies instantly</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-emerald-100 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-neutral-50/50 flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-emerald-600 text-white self-end rounded-tr-sm' 
                    : 'bg-white border border-neutral-200 text-neutral-800 self-start rounded-tl-sm shadow-sm'
                }`}
              >
                {/* Basic markdown-like rendering for bold text and lists */}
                {msg.content.split('\\n').map((line, i) => (
                  <p key={i} className="mb-1 last:mb-0">
                    {line.replace(/\\*\\*(.*?)\\*\\*/g, '$1')} {/* Strip bold markdown for simple rendering */}
                  </p>
                ))}
              </div>
            ))}
            {isLoading && (
              <div className="bg-white border border-neutral-200 text-neutral-500 self-start rounded-2xl rounded-tl-sm p-3 shadow-sm flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-emerald-500" />
                <span className="text-xs font-medium">Typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={sendMessage} className="p-3 bg-white border-t border-neutral-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our cars..."
              className="flex-1 bg-neutral-100 border-transparent focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-xl px-4 py-2 text-sm outline-none transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-neutral-300 text-white p-2 rounded-xl transition-colors flex items-center justify-center min-w-[40px]"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-neutral-800' : 'bg-emerald-600 hover:bg-emerald-700 hover:scale-105'} text-white p-4 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center`}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
