import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/15551234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-[55px] h-[55px] bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-7 h-7 fill-white" />
      
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-3 bg-[#0A192F] text-white text-xs px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 font-medium">
        Chat on WhatsApp
      </span>
    </a>
  );
}
