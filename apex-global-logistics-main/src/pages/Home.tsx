import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Globe, Clock, Award, Package, 
  Plane, Ship, Truck, CheckCircle, Star, Users, MapPin, 
  ChevronLeft, ChevronRight, PhoneCall 
} from 'lucide-react';

export default function Home() {
  // Testimonials state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Apex Global Logistics transformed our supply chain reliability. Their project cargo team handled our heavy machinery shipment from Chicago to Dubai flawlessly.",
      name: "Marcus Vance",
      company: "Director of Operations, Titan Industrial Corp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "When we needed urgent air freight clearance across Asia, Apex delivered ahead of schedule with zero hassle. Truly a world-class logistics partner.",
      name: "Elena Rostova",
      company: "Supply Chain Lead, Global Tech Solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Their real-time tracking and dedicated account manager gave us complete peace of mind. We've consolidated all our ocean freight with Apex.",
      name: "David Chen",
      company: "Imports Manager, Pacific Trading Co.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F] text-white pt-24 pb-16 overflow-hidden">
        {/* Animated Background Dots / Particles effect */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none animate-pulse-glow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#00E5FF]/10 border border-[#00E5FF]/30 px-4 py-2 rounded-full text-[#00E5FF] text-xs font-semibold tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Delivering the Future, Today</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Worldwide Cargo & Logistics <span className="text-[#00E5FF] block mt-1">Solutions You Can Trust</span>
              </h1>
              
              <p className="text-gray-300 text-lg sm:text-xl font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Apex Global Logistics delivers reliable freight solutions across air, sea, road, and project cargo worldwide with guaranteed safety and 24/7 expert tracking.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Link
                  to="/services"
                  className="w-full sm:w-auto bg-transparent border-2 border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#0A192F] font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-base shadow-lg"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/quote"
                  className="w-full sm:w-auto bg-[#00E5FF] text-[#0A192F] hover:bg-[#33edff] font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-base shadow-xl shadow-[#00E5FF]/20"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="pt-6 flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-400 border-t border-gray-800">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#00E5FF]" />
                  <span>ISO 9001 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#00E5FF]" />
                  <span>Global Hub Coverage</span>
                </div>
              </div>
            </div>

            {/* Hero Image / Graphic Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-[#112240] p-3">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                  alt="Global Logistics Cargo Ship & Containers"
                  className="rounded-xl w-full h-[380px] object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-[#0A192F]/90 backdrop-blur-md p-4 rounded-xl border border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF]">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Active Global Fleet</h4>
                      <p className="text-xs text-gray-400">Real-time satellite tracking</p>
                    </div>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2.5 py-1 rounded-full font-medium border border-emerald-500/30">
                    ● Live 24/7
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS COUNTER SECTION */}
      <section className="bg-[#0A192F] text-white py-12 border-t border-b border-gray-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div className="p-4 border-r border-gray-800 last:border-r-0">
              <div className="text-3xl lg:text-4xl font-bold text-[#00E5FF] mb-1">5,000+</div>
              <div className="text-sm text-gray-400 font-medium">Successful Shipments</div>
            </div>
            
            <div className="p-4 border-r border-gray-800 last:border-r-0">
              <div className="text-3xl lg:text-4xl font-bold text-[#00E5FF] mb-1">50+</div>
              <div className="text-sm text-gray-400 font-medium">Countries Covered</div>
            </div>
            
            <div className="p-4 border-r border-gray-800 last:border-r-0">
              <div className="text-3xl lg:text-4xl font-bold text-[#00E5FF] mb-1">11+</div>
              <div className="text-sm text-gray-400 font-medium">Years Experience</div>
            </div>
            
            <div className="p-4">
              <div className="text-3xl lg:text-4xl font-bold text-[#00E5FF] mb-1">24/7</div>
              <div className="text-sm text-gray-400 font-medium">Dedicated Support</div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW (4 CARDS) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
            Our Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] mt-4 mb-4">
            Comprehensive Global Freight Solutions
          </h2>
          <p className="text-gray-600 text-base">
            From heavy oversized project cargo to express air deliveries, we engineer efficient logistics pathways tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col group">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
                alt="Project Cargo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#0A192F] text-[#00E5FF] p-2.5 rounded-xl shadow-lg">
                🏗️
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#0A192F] mb-2">Project Cargo</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Heavy & oversized cargo specialists managing complex industrial plant relocations and oversized machinery.
                </p>
              </div>
              <Link
                to="/services"
                className="text-[#0A192F] font-semibold text-sm flex items-center space-x-2 group-hover:text-[#00E5FF] transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col group">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
                alt="Air Freight"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#0A192F] text-[#00E5FF] p-2.5 rounded-xl shadow-lg">
                ✈️
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#0A192F] mb-2">Air Freight</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Fast & secure global air delivery with direct and consolidated options for time-sensitive cargo.
                </p>
              </div>
              <Link
                to="/services"
                className="text-[#0A192F] font-semibold text-sm flex items-center space-x-2 group-hover:text-[#00E5FF] transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col group">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=600&q=80"
                alt="Sea Freight"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#0A192F] text-[#00E5FF] p-2.5 rounded-xl shadow-lg">
                🚢
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#0A192F] mb-2">Sea Freight</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Cost-effective ocean FCL and LCL freight solutions across major trade lanes worldwide.
                </p>
              </div>
              <Link
                to="/services"
                className="text-[#0A192F] font-semibold text-sm flex items-center space-x-2 group-hover:text-[#00E5FF] transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col group">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80"
                alt="Road Freight"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#0A192F] text-[#00E5FF] p-2.5 rounded-xl shadow-lg">
                🚛
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#0A192F] mb-2">Road Freight</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Domestic & cross-border transport with fully modern fleets and real-time GPS tracking.
                </p>
              </div>
              <Link
                to="/services"
                className="text-[#0A192F] font-semibold text-sm flex items-center space-x-2 group-hover:text-[#00E5FF] transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="py-20 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
                  alt="Apex Global Warehouse & Operations"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span className="text-[#00E5FF] font-bold text-sm tracking-widest uppercase">Established 2013</span>
                    <h3 className="text-2xl font-bold">Excellence in Every Shipment</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
                About Apex Global
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] leading-tight">
                Your Trusted Partner for Borderless Logistics
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Headquartered in Chicago with key strategic hubs in China, Dubai, and the Philippines, Apex Global Logistics has grown from a regional carrier to a trusted worldwide logistics leader. We combine robust international infrastructure with personalized customer care.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-gray-800 font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center shrink-0">✓</div>
                  <span>End-to-End Cargo Logistics & Customs Clearance</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-800 font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center shrink-0">✓</div>
                  <span>Secure & Professional Packaging & Containerization</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-800 font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center shrink-0">✓</div>
                  <span>Trusted Global Partner Since 2013 with 99.8% On-Time Record</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 bg-[#0A192F] hover:bg-[#112240] text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg"
                >
                  <span>Read More About Us</span>
                  <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
            Our Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F] mt-4 mb-4">
            Why Businesses Choose Apex
          </h2>
          <p className="text-gray-600 text-base">
            We deliver uncompromising quality, speed, and transparency across every shipping milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow text-center group">
            <div className="w-16 h-16 rounded-2xl bg-[#0A192F] text-[#00E5FF] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00E5FF] group-hover:text-[#0A192F] transition-colors shadow-lg">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#0A192F] mb-3">Reliability</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Guaranteed scheduling, secure handling, and transparent cargo insurance for complete peace of mind.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow text-center group">
            <div className="w-16 h-16 rounded-2xl bg-[#0A192F] text-[#00E5FF] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00E5FF] group-hover:text-[#0A192F] transition-colors shadow-lg">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#0A192F] mb-3">Global Network</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Strategic hubs across the US, China, Middle East, and Southeast Asia connecting major international trade routes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow text-center group">
            <div className="w-16 h-16 rounded-2xl bg-[#0A192F] text-[#00E5FF] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00E5FF] group-hover:text-[#0A192F] transition-colors shadow-lg">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#0A192F] mb-3">Real-Time Tracking</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Advanced tracking portal providing 24/7 visibility into your shipment status, custom clearance, and ETA.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow text-center group">
            <div className="w-16 h-16 rounded-2xl bg-[#0A192F] text-[#00E5FF] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00E5FF] group-hover:text-[#0A192F] transition-colors shadow-lg">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#0A192F] mb-3">Expert Team</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Certified customs brokers and logistics engineers with over a decade of specialized industry expertise.
            </p>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="py-20 bg-[#0A192F] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-12">
            Trusted by Industry Leaders Worldwide
          </h2>

          <div className="bg-[#112240] p-8 sm:p-12 rounded-3xl border border-gray-800 shadow-2xl relative">
            <div className="flex justify-center space-x-1 text-[#00E5FF] mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#00E5FF]" />
              ))}
            </div>

            <p className="text-lg sm:text-xl text-gray-200 italic mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].quote}"
            </p>

            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#00E5FF]"
              />
              <div className="text-left">
                <h4 className="font-bold text-white text-base">{testimonials[currentTestimonial].name}</h4>
                <p className="text-xs text-[#00E5FF] font-medium">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === idx ? 'bg-[#00E5FF] w-8' : 'bg-gray-700'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-[#00E5FF] to-[#00b3cc] text-[#0A192F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Ready to Ship with Apex?
          </h2>
          <p className="text-lg font-medium max-w-2xl mx-auto opacity-90">
            Experience seamless global freight forwarding, competitive rates, and 24/7 dedicated support. Contact our logistics experts today.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="bg-[#0A192F] text-white hover:bg-gray-900 font-bold px-8 py-4 rounded-xl shadow-2xl transition-all flex items-center space-x-2 text-base"
            >
              <PhoneCall className="w-5 h-5 text-[#00E5FF]" />
              <span>Contact Us Today</span>
            </Link>
            <Link
              to="/quote"
              className="bg-white text-[#0A192F] hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-2xl transition-all flex items-center space-x-2 text-base"
            >
              <span>Get an Instant Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
