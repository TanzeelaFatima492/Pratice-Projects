import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { OfficeItem } from '../types';

export default function Offices() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const offices: OfficeItem[] = [
    {
      city: 'Chicago Headquarters',
      title: 'North American Operations',
      address: '1234 Trade Center Drive, Chicago, IL 60607, USA',
      phone: '+1 (555) 123-4567',
      email: 'chicago@apexgloballogistics.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM CST',
      flag: '🇺🇸',
      image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=600&q=80'
    },
    {
      city: 'China Offices',
      title: 'Guangzhou & Yiwu Sourcing Hubs',
      address: 'Guangzhou International Trade Center & Yiwu Export Hub, China',
      phone: '+86 20 8888 7777',
      email: 'china@apexgloballogistics.com',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM CST',
      flag: '🇨🇳',
      image: 'https://images.unsplash.com/photo-1508803194165-8b273412a87a?auto=format&fit=crop&w=600&q=80'
    },
    {
      city: 'Dubai Office',
      title: 'Middle East Logistics Gateway',
      address: 'Al Qusais Industrial Area, Dubai, UAE',
      phone: '+971 4 555 6789',
      email: 'dubai@apexgloballogistics.com',
      hours: 'Sun-Thu: 8:00 AM - 5:00 PM GST',
      flag: '🇦🇪',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80'
    },
    {
      city: 'Philippines Office',
      title: 'Southeast Asia Operations',
      address: 'Suites 501/502 Metropolitan Tower, 1746 A. Mabini St, Malate, Manila',
      phone: '+63 2 8888 9999',
      email: 'manila@apexgloballogistics.com',
      hours: 'Mon-Sat: 8:00 AM - 6:00 PM PHT',
      flag: '🇵🇭',
      image: 'https://images.unsplash.com/photo-1583532450453-29e2f5b4f63c?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      
      {/* PAGE HEADER */}
      <section className="bg-[#0A192F] text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
            Global Presence
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-3 mb-4">
            Our Global Offices
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Strategic operations hubs located in key international trade centers across North America, Asia, and the Middle East.
          </p>
        </div>
      </section>

      {/* WORLD MAP SECTION */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A192F] rounded-3xl p-6 shadow-2xl border border-gray-800 relative overflow-hidden">
          <div className="absolute top-4 left-6 z-10 text-white">
            <h3 className="font-bold text-lg">Apex Worldwide Network</h3>
            <p className="text-xs text-[#00E5FF]">Hover pins for regional hub details</p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden h-[450px] bg-[#0A192F] flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
              alt="World Map Network"
              className="w-full h-full object-cover filter brightness-50 contrast-125"
            />
            {/* Map Pins overlay */}
            <div className="absolute inset-0 flex items-center justify-around pointer-events-none p-12">
              <div className="absolute left-[22%] top-[35%] bg-[#0A192F]/90 border border-[#00E5FF] text-white p-3 rounded-xl shadow-2xl animate-bounce pointer-events-auto">
                <span className="text-xl">🇺🇸</span>
                <p className="text-xs font-bold text-[#00E5FF]">Chicago HQ</p>
              </div>
              <div className="absolute left-[78%] top-[42%] bg-[#0A192F]/90 border border-[#00E5FF] text-white p-3 rounded-xl shadow-2xl animate-bounce pointer-events-auto">
                <span className="text-xl">🇨🇳</span>
                <p className="text-xs font-bold text-[#00E5FF]">China Hub</p>
              </div>
              <div className="absolute left-[58%] top-[48%] bg-[#0A192F]/90 border border-[#00E5FF] text-white p-3 rounded-xl shadow-2xl animate-bounce pointer-events-auto">
                <span className="text-xl">🇦🇪</span>
                <p className="text-xs font-bold text-[#00E5FF]">Dubai Office</p>
              </div>
              <div className="absolute left-[85%] top-[58%] bg-[#0A192F]/90 border border-[#00E5FF] text-white p-3 rounded-xl shadow-2xl animate-bounce pointer-events-auto">
                <span className="text-xl">🇵🇭</span>
                <p className="text-xs font-bold text-[#00E5FF]">Manila Office</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE CARDS 2x2 GRID */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offices.map((office, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all border border-gray-100 overflow-hidden flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={office.image}
                  alt={office.city}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#0A192F] text-white px-3 py-1.5 rounded-lg text-lg shadow-md flex items-center space-x-1">
                  <span>{office.flag}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-[#0A192F]/90 text-white px-3 py-1 rounded-md text-xs font-semibold">
                  {office.title}
                </div>
              </div>
              
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A192F] mb-4 flex items-center space-x-2">
                    <span>{office.city}</span>
                  </h3>
                  
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-[#00E5FF] shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-[#00E5FF] shrink-0" />
                      <span className="font-semibold text-gray-800">{office.phone}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-[#00E5FF] shrink-0" />
                      <span className="text-blue-600 hover:underline">{office.email}</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-[#00E5FF] shrink-0" />
                      <span className="text-gray-500 text-xs font-medium">{office.hours}</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <a
                    href={`mailto:${office.email}`}
                    className="w-full bg-[#0A192F] hover:bg-[#112240] text-white text-center py-2.5 rounded-xl font-semibold text-sm transition-colors block shadow-md"
                  >
                    Email This Office
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM BELOW CARDS */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 sm:p-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-[#0A192F] mb-2">Send Us a Message from Anywhere</h2>
            <p className="text-gray-600 text-sm">Have a general inquiry or need regional assistance? Drop us a line below.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Inquiry regarding Chicago / China shipment"
                required
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Type your message here..."
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

            {formSubmitted && (
              <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl text-center font-medium text-sm flex items-center justify-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Message received successfully! Our regional team will contact you within 2 hours.</span>
              </div>
            )}
          </form>
        </div>
      </section>

    </div>
  );
}
