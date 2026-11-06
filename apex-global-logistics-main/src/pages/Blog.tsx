import React, { useState } from 'react';
import { Search, Calendar, Clock, ArrowRight, Tag, Send, CheckCircle2 } from 'lucide-react';
import { BlogPost } from '../types';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const posts: BlogPost[] = [
    {
      id: '1',
      title: '5 Supply Chain Optimization Strategies for 2024',
      category: 'Supply Chain',
      date: 'Jan 15, 2024',
      readTime: '5 min read',
      excerpt: 'Discover actionable strategies to streamline international shipping, reduce demurrage costs, and enhance supply chain resilience.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: '2',
      title: 'Air Freight vs Sea Freight: Making the Right Choice',
      category: 'Freight Guide',
      date: 'Jan 10, 2024',
      readTime: '6 min read',
      excerpt: 'A comprehensive comparative guide helping logistics managers balance transit speed, cargo weight, and shipping budgets.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: '3',
      title: 'Understanding Project Cargo Logistics & Heavy Lifts',
      category: 'Project Cargo',
      date: 'Jan 5, 2024',
      readTime: '8 min read',
      excerpt: 'Navigating regulatory permits, specialized transport equipment, and route surveys for oversized industrial machinery.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: '4',
      title: 'Sustainable Logistics: The Green Future of Shipping',
      category: 'Sustainability',
      date: 'Dec 28, 2023',
      readTime: '4 min read',
      excerpt: 'How modern logistics providers are adopting low-emission vessels, electric fleets, and green packaging to reduce carbon footprints.',
      image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: '5',
      title: 'Customs Clearance Documentation Checklist for Importers',
      category: 'Customs',
      date: 'Dec 20, 2023',
      readTime: '7 min read',
      excerpt: 'Avoid costly border delays with our definitive documentation checklist covering commercial invoices, bills of lading, and tariff codes.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: '6',
      title: 'Benefits of Multimodal Transport in Global Trade',
      category: 'Logistics',
      date: 'Dec 15, 2023',
      readTime: '5 min read',
      excerpt: 'Combining air, sea, and rail freight to optimize delivery timelines and reduce overall landed transportation costs.',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [
    { name: 'Freight', count: 12 },
    { name: 'Supply Chain', count: 8 },
    { name: 'Customs', count: 5 },
    { name: 'Company News', count: 4 },
    { name: 'Sustainability', count: 3 }
  ];

  const recentPosts = [
    '5 Supply Chain Optimization Strategies for 2024',
    'Air Freight vs Sea Freight: Making the Right Choice',
    'Understanding Project Cargo Logistics',
    'Sustainable Logistics: The Green Future',
    'Customs Clearance Documentation Checklist'
  ];

  const tags = ['logistics', 'cargo', 'shipping', 'freight', 'air freight', 'sea freight', 'supply chain', 'customs'];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      
      {/* PAGE HEADER */}
      <section className="bg-[#0A192F] text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
            Insights & News
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-3 mb-3">
            Apex Logistics Insights
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Expert advice, industry news, and logistics trends to keep your supply chain ahead of the curve.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT + SIDEBAR LAYOUT */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT 70% MAIN BLOG GRID */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 overflow-hidden flex flex-col group">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#0A192F] text-[#00E5FF] px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-[#00E5FF]" />
                          <span>{post.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3.5 h-3.5 text-[#00E5FF]" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#0A192F] group-hover:text-[#00E5FF] transition-colors leading-snug">
                        <a href="#post">{post.title}</a>
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <a
                        href="#read"
                        className="text-[#0A192F] font-semibold text-sm flex items-center space-x-2 group-hover:text-[#00E5FF] transition-colors"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center items-center space-x-2 pt-8">
              <button className="px-4 py-2 rounded-xl bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 text-sm font-medium">« Prev</button>
              <button className="w-10 h-10 rounded-xl bg-[#0A192F] text-[#00E5FF] font-bold text-sm shadow-md">1</button>
              <button className="w-10 h-10 rounded-xl bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 text-sm font-medium">2</button>
              <button className="w-10 h-10 rounded-xl bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 text-sm font-medium">3</button>
              <span className="text-gray-500">...</span>
              <button className="w-10 h-10 rounded-xl bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 text-sm font-medium">8</button>
              <button className="px-4 py-2 rounded-xl bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 text-sm font-medium">Next »</button>
            </div>
          </div>

          {/* RIGHT 30% SIDEBAR */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* 1. Search Bar */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A192F] mb-4 border-l-4 border-[#00E5FF] pl-3">Search Insights</h3>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            {/* 2. Recent Posts */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A192F] mb-4 border-l-4 border-[#00E5FF] pl-3">Recent Posts</h3>
              <ul className="space-y-3 text-sm">
                {recentPosts.map((title, idx) => (
                  <li key={idx} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                    <a href="#post" className="text-gray-700 hover:text-[#00E5FF] transition-colors font-medium block">
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Categories with counts */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A192F] mb-4 border-l-4 border-[#00E5FF] pl-3">Categories</h3>
              <ul className="space-y-2.5 text-sm">
                {categories.map((cat, idx) => (
                  <li key={idx} className="flex items-center justify-between text-gray-700 hover:text-[#00E5FF] transition-colors cursor-pointer py-1 border-b border-gray-50 last:border-b-0">
                    <span>{cat.name}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-semibold">({cat.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Newsletter box */}
            <div className="bg-[#0A192F] text-white p-6 rounded-2xl shadow-xl">
              <h3 className="text-lg font-bold mb-3 border-l-4 border-[#00E5FF] pl-3">Weekly Newsletter</h3>
              <p className="text-gray-300 text-xs mb-4">Get logistics news and customs alerts straight to your inbox.</p>
              <form onSubmit={handleNewsletter} className="space-y-3">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00E5FF]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#00E5FF] hover:bg-[#33edff] text-[#0A192F] font-bold py-2.5 rounded-xl text-sm transition-colors flex items-center justify-center space-x-2 shadow-md"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {subscribed && (
                <div className="flex items-center space-x-2 text-emerald-400 text-xs mt-3 animate-pulse">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed successfully!</span>
                </div>
              )}
            </div>

            {/* 5. Tags Cloud */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A192F] mb-4 border-l-4 border-[#00E5FF] pl-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 hover:bg-[#00E5FF]/20 hover:text-[#0A192F] text-gray-700 text-xs px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
