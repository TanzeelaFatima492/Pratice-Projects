import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Globe, Users, ArrowRight, CheckCircle2, Linkedin } from 'lucide-react';
import { TeamMember } from '../types';

export default function About() {
  const values = [
    {
      icon: '🎯',
      title: 'Integrity',
      description: 'Transparent operations, honest communication, and strict adherence to international trade compliance.'
    },
    {
      icon: '💪',
      title: 'Excellence',
      description: 'Uncompromising commitment to the highest service standards across air, sea, and project cargo.'
    },
    {
      icon: '🌍',
      title: 'Global Mindset',
      description: 'Deep understanding of diverse regional markets, cultural nuances, and complex international trade lanes.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Building lasting client relationships rooted in trust, responsiveness, and mutual growth.'
    }
  ];

  const team: TeamMember[] = [
    {
      name: 'Alexander Sterling',
      position: 'Chief Executive Officer & Founder',
      bio: 'Over 25 years of executive leadership in international freight forwarding and global supply chain orchestration.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      linkedin: '#linkedin'
    },
    {
      name: 'Victoria Lin',
      position: 'Chief Operating Officer',
      bio: 'Directs global operations across Chicago, China, and Middle Eastern hubs with precision logistics expertise.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      linkedin: '#linkedin'
    },
    {
      name: 'Mateo Alva',
      position: 'Head of Global Air & Sea Freight',
      bio: 'Mastermind behind our multi-carrier partnerships, securing priority space and competitive rates for clients.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      linkedin: '#linkedin'
    },
    {
      name: 'Dr. Fatima Al-Mansoor',
      position: 'Director of Compliance & Customs',
      bio: 'Expert in international customs brokerage, regulatory compliance, and duty optimization strategies.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      linkedin: '#linkedin'
    }
  ];

  const milestones = [
    { year: '2013', title: 'Company Founded', desc: 'Started operations in Chicago as a dedicated regional carrier with 3 trucks.' },
    { year: '2015', title: 'Middle East Expansion', desc: 'Opened our regional headquarters in Dubai to manage Gulf trade lanes.' },
    { year: '2018', title: 'Air Freight Division', desc: 'Launched dedicated air charter partnerships across Europe and North America.' },
    { year: '2021', title: 'Asia Hubs Established', desc: 'Opened strategic sourcing & export offices in Guangzhou and Yiwu, China.' },
    { year: '2024', title: 'Global Network Complete', desc: 'Integrated Manila office and reached over 5,000 successful global shipments.' }
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      
      {/* PAGE HEADER */}
      <section className="bg-[#0A192F] text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-3 mb-4">
            About Apex Global Logistics
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Delivering the future, today through relentless dedication, global infrastructure, and expert logistics engineering.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mt-4">
            <Link to="/" className="hover:text-[#00E5FF]">Home</Link>
            <span>/</span>
            <span className="text-[#00E5FF]">About Us</span>
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80"
                alt="Our Story - Apex Logistics Team"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-[#0A192F]/95 backdrop-blur-md p-6 rounded-xl border border-gray-700 text-white">
                <h4 className="text-[#00E5FF] font-bold text-lg mb-1">11+ Years of Excellence</h4>
                <p className="text-xs text-gray-300">From local carrier to trusted global logistics leader across 50+ countries.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] leading-tight">
              Pioneering Reliable Freight Solutions Since 2013
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Founded in Chicago, Apex Global Logistics was established with a singular vision: to eliminate the friction and uncertainty of international shipping. Over the past decade, we have expanded our footprint across the US, China, Dubai, and the Philippines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#0A192F] text-lg mb-1 flex items-center space-x-2">
                  <span className="text-[#00E5FF]">🎯</span> <span>Our Mission</span>
                </h4>
                <p className="text-gray-600 text-sm">
                  To deliver excellence in global logistics through continuous innovation, transparent communication, and unyielding reliability.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#0A192F] text-lg mb-1 flex items-center space-x-2">
                  <span className="text-[#00E5FF]">🌟</span> <span>Our Vision</span>
                </h4>
                <p className="text-gray-600 text-sm">
                  To be the world’s most trusted logistics partner, connecting businesses across continents with zero operational friction.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] mt-4 mb-4">
              Our Guiding Values
            </h2>
            <p className="text-gray-600 text-base">
              The foundational pillars that drive our daily operations and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-[#F5F7FA] p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all group">
                <div className="text-4xl mb-4 p-4 rounded-xl bg-white inline-block shadow-sm group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A192F] mb-3">{val.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] mt-4 mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-gray-600 text-base">
            Seasoned industry executives guiding our global workforce towards operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-100 flex flex-col group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <a
                    href={member.linkedin}
                    className="w-9 h-9 rounded-full bg-[#00E5FF] text-[#0A192F] flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0A192F] mb-1">{member.name}</h3>
                  <p className="text-xs text-[#00E5FF] font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-20 bg-[#0A192F] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
              Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
              Our Growth Timeline
            </h2>
            <p className="text-gray-300 text-base">
              Key operational milestones that shaped Apex Global Logistics into an international powerhouse.
            </p>
          </div>

          <div className="relative border-l-2 border-[#00E5FF]/40 ml-4 sm:ml-32 space-y-12">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-12 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#00E5FF] border-4 border-[#0A192F] group-hover:scale-125 transition-transform"></div>
                <div className="sm:absolute sm:-left-32 sm:text-right sm:w-24 text-[#00E5FF] font-bold text-xl mb-1 sm:mb-0">
                  {item.year}
                </div>
                <div className="bg-[#112240] p-6 rounded-2xl border border-gray-800 shadow-xl">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
