import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      
      {/* PAGE HEADER */}
      <section className="bg-[#0A192F] text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-3 mb-4">
            Global Logistics Services
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive, secure, and cost-effective freight forwarding solutions engineered for international businesses.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mt-4">
            <Link to="/" className="hover:text-[#00E5FF]">Home</Link>
            <span>/</span>
            <span className="text-[#00E5FF]">Services</span>
          </div>
        </div>
      </section>

      {/* SERVICE 1: PROJECT CARGO */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
                alt="Project Cargo Handling"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#0A192F] text-[#00E5FF] px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
                🏗️ Project Cargo
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
              Heavy Lift & Industrial
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F]">
              Project Cargo Handling
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Specializing in heavy-lift, oversized, and complex project cargo. Our expert engineering team plans every intricate detail from route surveys and port clearance to final heavy crane placement on site.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                <span>Heavy Lift Capability</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                <span>Comprehensive Route Planning</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                <span>Engineering Site Surveys</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                <span>Specialized Transport Equipment</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/quote"
                className="inline-flex items-center space-x-2 bg-[#0A192F] hover:bg-[#112240] text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <span>Request Project Cargo Quote</span>
                <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 2: AIR FREIGHT */}
      <section className="py-20 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
                Speed & Precision
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F]">
                Air Freight Solutions
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Time-critical air freight solutions with global reach. We offer direct and consolidated services for urgent shipments, perishable goods, and high-value cargo with guaranteed airline space allocations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                  <span>Door-to-Door Global Delivery</span>
                </div>
                <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                  <span>Express & Priority Options</span>
                </div>
                <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                  <span>Full & Part Aircraft Charter</span>
                </div>
                <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                  <span>Temperature-Controlled Cargo</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/quote"
                  className="inline-flex items-center space-x-2 bg-[#0A192F] hover:bg-[#112240] text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  <span>Get Air Freight Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
                  alt="Air Freight Solutions"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#0A192F] text-[#00E5FF] px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
                  ✈️ Air Freight
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 3: SEA FREIGHT */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800&q=80"
                alt="Sea Freight Solutions"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#0A192F] text-[#00E5FF] px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
                🚢 Sea Freight
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
              Ocean Shipping
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F]">
              Sea Freight & Ocean Cargo
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Full container load (FCL) and less than container load (LCL) services. We secure competitive rates on major international trade lanes with reliable vessel tracking and dependable transit schedules.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                <span>FCL & LCL Flexible Options</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                <span>Port-to-Port & Door-to-Door</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                <span>Bulk & Breakbulk Cargo</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                <span>Container Drayage & Stuffing</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/quote"
                className="inline-flex items-center space-x-2 bg-[#0A192F] hover:bg-[#112240] text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <span>Get Sea Freight Quote</span>
                <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 4: ROAD FREIGHT */}
      <section className="py-20 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
                Overland Transport
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F]">
                Road Freight & Overland Transport
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Reliable domestic and cross-border road transport. Our modern fleet features live GPS tracking, specialized trailer configurations, and experienced drivers ensuring your cargo arrives on schedule.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                  <span>FTL & LTL Truckload Services</span>
                </div>
                <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                  <span>Cross-Border Clearance Support</span>
                </div>
                <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                  <span>Real-Time GPS Tracking</span>
                </div>
                <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                  <span>Express Expedited Delivery</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/quote"
                  className="inline-flex items-center space-x-2 bg-[#0A192F] hover:bg-[#112240] text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  <span>Get Road Freight Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80"
                  alt="Road Freight Transport"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#0A192F] text-[#00E5FF] px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
                  🚛 Road Freight
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 5: CUSTOMS CLEARANCE */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                alt="Customs Clearance"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#0A192F] text-[#00E5FF] px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
                📋 Customs Brokerage
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
              Regulatory Compliance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A192F]">
              Customs Clearance & Brokerage
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Hassle-free customs brokerage services. Our licensed customs experts handle complex documentation, tariff classifications, duty calculations, and compliance verification to ensure seamless border crossings.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                <span>Import & Export Clearance</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                <span>Documentation & Tariff Filing</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                <span>Duty & Tax Calculation</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />
                <span>Regulatory Compliance Audit</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/quote"
                className="inline-flex items-center space-x-2 bg-[#0A192F] hover:bg-[#112240] text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <span>Get Customs Quote</span>
                <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="py-16 bg-[#0A192F] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Not sure which service you need? Contact our experts!
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Our logistics advisors are available 24/7 to analyze your freight requirements and recommend the optimal solution.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-[#00E5FF] hover:bg-[#33edff] text-[#0A192F] font-bold px-8 py-4 rounded-xl shadow-xl transition-all"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Contact Our Experts</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
