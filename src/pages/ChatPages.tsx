import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot } from 'lucide-react';
import { ChatMessage } from '../types';
import { detectIntent, extractProfile, generateResponse } from '../utils/chatEngine';
import { translate } from '../utils/translations';

interface ChatPageProps {
  language: string;
}

export function ChatPage({ language }: ChatPageProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'assistant',
      content: translate('greeting', language),
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    const allUserMessages = [...messages.filter(m => m.type === 'user').map(m => m.content), input];
    const profile = extractProfile(allUserMessages);
    const intent = detectIntent(input);
    const response = generateResponse(intent, profile, input);

    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 500);

    setInput('');
  };

  const handleDemoClick = (demoType: string) => {
    let demoMessage = '';
    if (demoType === 'student') {
      demoMessage = "I am a 19-year-old student from Tamil Nadu. My family income is 3 lakhs per year. What scholarships can I apply for?";
    } else if (demoType === 'business') {
      demoMessage = "I am a 35-year-old small business owner. My annual income is 8 lakhs. I need a loan to expand my business.";
    } else if (demoType === 'family') {
      demoMessage = "We are a low-income family with annual income of 2 lakhs. My age is 42. What benefits and schemes are we eligible for?";
    }
    setInput(demoMessage);
  };

  const formatMessage = (content: string) => {
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col" style={{ height: 'calc(100vh - 8rem)' }}>
          <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">CivicAI Assistant</h1>
                <p className="text-blue-100 text-sm">Intelligent Government Service Navigation</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' ? 'bg-blue-600' : 'bg-green-600'
                  }`}>
                    {message.type === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <div className="text-sm whitespace-pre-wrap leading-relaxed">
                      {formatMessage(message.content)}
                    </div>
                    <div className={`text-xs mt-2 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t bg-gray-50 p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              <button
                onClick={() => handleDemoClick('student')}
                className="text-xs px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
              >
                {translate('demoStudent', language)}
              </button>
              <button
                onClick={() => handleDemoClick('business')}
                className="text-xs px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
              >
                {translate('demoBusinessOwner', language)}
              </button>
              <button
                onClick={() => handleDemoClick('family')}
                className="text-xs px-3 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
              >
                {translate('demoLowIncome', language)}
              </button>
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={translate('placeholder', language)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-2 text-center">
              {translate('askQuestion', language)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
