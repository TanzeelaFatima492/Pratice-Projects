import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Minus, Send, Paperclip, Smile, MoreVertical, Trash2 } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('apex_chat_messages');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return [
      {
        id: '1',
        sender: 'bot',
        text: '👋 Welcome to APEX GLOBAL! How can we help you?',
        time: 'Just now'
      }
    ];
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('apex_chat_messages', JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // Simulate smart bot response delay
    setTimeout(() => {
      setIsTyping(false);
      const botResponseText = getSmartBotResponse(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      if (!isOpen) {
        setUnreadCount(prev => prev + 1);
      }
    }, 1200);
  };

  const getSmartBotResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('quote') || q.includes('price') || q.includes('cost') || q.includes('rate')) {
      return 'Our rates start from $0.50/kg (Air) & $200/container (Sea). Want a custom quote? Visit our Quote page or share details!';
    }
    if (q.includes('track') || q.includes('shipment') || q.includes('where') || q.includes('delivery') || q.includes('status')) {
      return 'Please share your tracking number (APX-XXXX). (Demo: Status - In Transit 🚛)';
    }
    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('salam') || q.includes('assalam') || q.includes('good')) {
      return 'Hello! We are APEX GLOBAL Logistics. How can I help? 🚚✈️🚢';
    }
    if (q.includes('service') || q.includes('offer') || q.includes('provide')) {
      return 'We offer: ✈️ Air Freight | 🚢 Sea Freight | 🚛 Road Freight | 🏗️ Project Cargo | 📋 Customs';
    }
    if (q.includes('office') || q.includes('location') || q.includes('address') || q.includes('dubai') || q.includes('china') || q.includes('chicago') || q.includes('philippines')) {
      return '📍 Chicago HQ | 🇨🇳 Guangzhou | 🇦🇪 Dubai | 🇵🇭 Manila';
    }
    if (q.includes('contact') || q.includes('call') || q.includes('phone') || q.includes('number') || q.includes('email')) {
      return '📞 +1 (555) 123-4567 | ✉️ info@apexgloballogistics.com';
    }
    if (q.includes('thanks') || q.includes('thank') || q.includes('shukria')) {
      return "You're welcome! 😊 Anything else?";
    }
    if (q.includes('bye') || q.includes('goodbye') || q.includes('see you')) {
      return "Goodbye! We're here 24/7 if you need us. 👋";
    }

    return "Thanks for your message! A team member will get back to you soon. Meanwhile, check our Services page! 🚚";
  };

  const handleClearChat = () => {
    const initial: Message[] = [
      {
        id: '1',
        sender: 'bot',
        text: '👋 Welcome to APEX GLOBAL! How can we help you?',
        time: 'Just now'
      }
    ];
    setMessages(initial);
    localStorage.setItem('apex_chat_messages', JSON.stringify(initial));
    setShowMenu(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans flex flex-col items-end">
      
      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="absolute -top-12 right-0 bg-[#0A192F] text-[#00E5FF] px-4 py-2 rounded-xl text-xs font-semibold shadow-lg border border-[#00E5FF]/30 animate-in fade-in slide-in-from-bottom-2">
          {toastMessage}
        </div>
      )}

      {/* CHAT WINDOW */}
      {isOpen && !isMinimized && (
        <div className="mb-4 w-[350px] sm:w-[380px] max-h-[calc(100vh-120px)] h-[480px] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* HEADER */}
          <div className="bg-[#0A192F] text-white px-4 py-3 flex items-center justify-between border-b border-white/15">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center font-bold text-sm border border-[#00E5FF]/30">
                  🌐
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#0A192F] rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">APEX GLOBAL</h4>
                <p className="text-[10px] text-emerald-400 font-medium">🟢 Online</p>
              </div>
            </div>

            <div className="flex items-center space-x-1 text-gray-300">
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                  title="Options"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
                {showMenu && (
                  <div className="absolute right-0 top-8 bg-white text-[#0A192F] rounded-xl shadow-xl border border-gray-100 py-1 w-36 z-20">
                    <button
                      onClick={handleClearChat}
                      className="w-full px-4 py-2 text-left text-xs font-medium hover:bg-gray-50 flex items-center space-x-2 text-rose-600"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Clear Chat</span>
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                title="Minimize"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 hover:text-rose-400 rounded-lg transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CHAT BODY */}
          <div className="flex-1 bg-[#F5F7FA] p-4 overflow-y-auto space-y-3">
            
            {messages.map((msg, index) => (
              <div
                key={msg.id || index}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-[#00E5FF] text-[#0A192F] font-medium rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-200/80 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-gray-400 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {/* QUICK REPLY BUTTONS */}
            {messages.length <= 2 && (
              <div className="grid grid-cols-2 gap-2 pt-1">
                {[
                  { label: '📦 Get a Quote', query: 'I want a quote' },
                  { label: '🚚 Track Shipment', query: 'Track shipment' },
                  { label: '💰 Pricing Info', query: 'What are your prices?' },
                  { label: '📞 Contact Support', query: 'Contact support' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(item.query)}
                    className="bg-white hover:bg-[#00E5FF]/10 text-[#0A192F] border border-gray-200 hover:border-[#00E5FF] p-2 rounded-xl text-xs font-semibold text-left transition-all shadow-xs"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            {/* TYPING INDICATOR */}
            {isTyping && (
              <div className="flex flex-col items-start">
                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-none shadow-xs flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  </div>
                  <span className="text-[11px] text-gray-500 font-medium">APEX typing...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* CHAT INPUT AREA */}
          <div className="p-3 bg-white border-t border-gray-200 flex items-center space-x-2">
            <button
              onClick={() => showToast('Attachment coming soon!')}
              className="p-2 text-gray-400 hover:text-[#0A192F] transition-colors rounded-lg hover:bg-gray-100"
              title="Attach File"
            >
              <Paperclip className="w-4 h-4" />
            </button>
            <button
              onClick={() => showToast('Emoji picker coming soon!')}
              className="p-2 text-gray-400 hover:text-[#0A192F] transition-colors rounded-lg hover:bg-gray-100"
              title="Insert Emoji"
            >
              <Smile className="w-4 h-4" />
            </button>
            
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type message..."
              className="flex-1 bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#00E5FF]"
            />

            <button
              onClick={() => handleSend()}
              className="bg-[#00E5FF] hover:bg-[#33edff] text-[#0A192F] p-2.5 rounded-xl font-bold shadow-md transition-all flex items-center justify-center"
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* FLOATING BUTTON */}
      <div className="relative group flex flex-col items-end">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setIsMinimized(false);
            setUnreadCount(0);
          }}
          className="w-14 h-14 bg-[#00E5FF] hover:bg-[#33edff] text-[#0A192F] rounded-full shadow-[0_4px_20px_rgba(0,229,255,0.4)] flex items-center justify-center transition-all transform hover:scale-110 relative"
          aria-label={isOpen ? "Close chat" : "Chat with APEX GLOBAL"}
        >
          {isOpen ? (
            <X className="w-7 h-7 text-[#0A192F] stroke-[2.5]" />
          ) : (
            <MessageSquare className="w-6 h-6 fill-[#0A192F]" />
          )}
          
          {/* Green Pulse Dot */}
          {!isOpen && (
            <>
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full animate-ping"></span>
            </>
          )}

          {/* Unread Badge */}
          {unreadCount > 0 && !isOpen && (
            <span className="absolute -top-1 -left-1 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-md">
              {unreadCount}
            </span>
          )}
        </button>

        {/* Tooltip / Label */}
        {!isOpen && (
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#0A192F] text-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
            Chat with APEX GLOBAL
          </span>
        )}
      </div>

    </div>
  );
}
