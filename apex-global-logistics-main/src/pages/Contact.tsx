import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Clock } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ fullName: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      
      {/* PAGE HEADER */}
      <section className="bg-[#0A192F] text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-3 mb-3">
            Contact Apex Logistics
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Our global support team is available 24/7 to answer your freight and shipping inquiries.
          </p>
        </div>
      </section>

      {/* TWO COLUMN LAYOUT */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN - CONTACT FORM */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-[#0A192F] mb-2">Send Us a Message</h2>
            <p className="text-gray-600 text-sm mb-8">Fill out the form below and our logistics specialists will respond within 2 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Cargo">Project Cargo</option>
                    <option value="Air Freight">Air Freight</option>
                    <option value="Sea Freight">Sea Freight</option>
                    <option value="Road Freight">Road Freight</option>
                    <option value="Customs">Customs</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your shipment details or inquiry..."
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00E5FF] hover:bg-[#33edff] text-[#0A192F] font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 text-base"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>

              {submitted && (
                <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl text-center font-medium text-sm flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Message sent successfully! We'll respond within 2 hours.</span>
                </div>
              )}
            </form>
          </div>

          {/* RIGHT COLUMN - CONTACT INFO CARDS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Phone */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#0A192F] text-[#00E5FF] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#0A192F] text-lg mb-1">Phone Support</h3>
                <p className="text-gray-600 text-sm font-medium">+1 (555) 123-4567 <span className="text-xs text-gray-400">(Main)</span></p>
                <p className="text-gray-600 text-sm font-medium">+1 (555) 987-6543 <span className="text-xs text-gray-400">(Support)</span></p>
                <span className="text-xs text-emerald-600 font-semibold mt-1 block">● Available 24/7</span>
              </div>
            </div>

            {/* Card 2: Email */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#0A192F] text-[#00E5FF] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#0A192F] text-lg mb-1">Email Inquiries</h3>
                <p className="text-gray-600 text-sm font-medium">info@apexgloballogistics.com</p>
                <p className="text-gray-600 text-sm font-medium">support@apexgloballogistics.com</p>
                <span className="text-xs text-blue-600 font-semibold mt-1 block">Response within 2 hours</span>
              </div>
            </div>

            {/* Card 3: Headquarters */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#0A192F] text-[#00E5FF] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#0A192F] text-lg mb-1">Headquarters</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  1234 Trade Center Drive<br />
                  Chicago, IL 60607, USA
                </p>
                <span className="text-xs text-gray-500 font-medium mt-1 block">Mon-Fri: 8AM - 6PM CST</span>
              </div>
            </div>

            {/* Card 4: WhatsApp */}
            <div className="bg-emerald-500 text-white p-6 rounded-2xl shadow-xl flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 fill-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-0.5">WhatsApp Chat</h3>
                  <p className="text-xs opacity-90">+1 (555) 123-4567 • Instant reply</p>
                </div>
              </div>
              <a
                href="#whatsapp"
                className="bg-white text-emerald-700 hover:bg-gray-100 font-bold px-4 py-2.5 rounded-xl text-xs shadow-md transition-colors"
              >
                Start Chat
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* GOOGLE MAP EMBED PLACEHOLDER */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A192F] rounded-3xl overflow-hidden shadow-2xl border border-gray-800 p-4">
          <div className="relative h-96 rounded-2xl overflow-hidden bg-gray-900 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
              alt="Chicago HQ Map Location"
              className="w-full h-full object-cover filter brightness-70"
            />
            <div className="absolute inset-0 bg-[#0A192F]/40 flex flex-col items-center justify-center text-center p-6">
              <div className="bg-[#0A192F]/95 border-2 border-[#00E5FF] p-6 rounded-2xl shadow-2xl max-w-md">
                <MapPin className="w-10 h-10 text-[#00E5FF] mx-auto mb-2 animate-bounce" />
                <h3 className="text-white font-bold text-lg mb-1">Apex Global Logistics Chicago HQ</h3>
                <p className="text-gray-300 text-xs mb-3">1234 Trade Center Drive, Chicago, IL 60607, USA</p>
                <span className="bg-[#00E5FF] text-[#0A192F] font-semibold text-xs px-3 py-1.5 rounded-full inline-block">
                  Interactive Map Location Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE HOURS TABLE */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden p-8 sm:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#0A192F]">Global Office Hours</h3>
            <p className="text-gray-600 text-sm">Operating hours across our primary regional hubs</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0A192F] text-white">
                  <th className="py-4 px-6 rounded-l-xl text-sm font-semibold">Day</th>
                  <th className="py-4 px-6 text-sm font-semibold">Chicago HQ</th>
                  <th className="py-4 px-6 text-sm font-semibold">Dubai Office</th>
                  <th className="py-4 px-6 rounded-r-xl text-sm font-semibold">China Hub</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0A192F]">Mon - Fri</td>
                  <td className="py-4 px-6">8:00 AM - 6:00 PM CST</td>
                  <td className="py-4 px-6">8:00 AM - 5:00 PM GST</td>
                  <td className="py-4 px-6">9:00 AM - 7:00 PM CST</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0A192F]">Saturday</td>
                  <td className="py-4 px-6 text-gray-400">Closed</td>
                  <td className="py-4 px-6 text-gray-400">Closed</td>
                  <td className="py-4 px-6">9:00 AM - 5:00 PM CST</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0A192F]">Sunday</td>
                  <td className="py-4 px-6 text-gray-400">Closed</td>
                  <td className="py-4 px-6">8:00 AM - 2:00 PM GST</td>
                  <td className="py-4 px-6 text-gray-400">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
