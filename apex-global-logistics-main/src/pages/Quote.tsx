import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Award, Phone } from 'lucide-react';

export default function Quote() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [quoteData, setQuoteData] = useState({
    serviceType: 'Air Freight',
    origin: '',
    destination: '',
    cargoType: 'General',
    weight: '',
    weightUnit: 'kg',
    length: '',
    width: '',
    height: '',
    quantity: '1',
    companyName: '',
    fullName: '',
    email: '',
    phone: '',
    contactMethod: 'Email',
    notes: '',
    agreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quoteData.agreed) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      
      {/* PAGE HEADER */}
      <section className="bg-[#0A192F] text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1.5 rounded-full">
            Instant Estimate
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-3 mb-3">
            Get a Shipping Quote
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Fill out our step-by-step freight estimator and receive a competitive quotation within 24 hours.
          </p>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT 75% FORM */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* STEP PROGRESS INDICATOR */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                  <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-[#0A192F] font-bold' : 'text-gray-400'}`}>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-[#00E5FF] text-[#0A192F]' : 'bg-gray-200'}`}>1</span>
                    <span className="hidden sm:inline text-sm">Service</span>
                  </div>
                  <div className={`w-8 h-0.5 ${step >= 2 ? 'bg-[#00E5FF]' : 'bg-gray-200'}`}></div>
                  <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-[#0A192F] font-bold' : 'text-gray-400'}`}>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-[#00E5FF] text-[#0A192F]' : 'bg-gray-200'}`}>2</span>
                    <span className="hidden sm:inline text-sm">Shipment</span>
                  </div>
                  <div className={`w-8 h-0.5 ${step >= 3 ? 'bg-[#00E5FF]' : 'bg-gray-200'}`}></div>
                  <div className={`flex items-center space-x-2 ${step >= 3 ? 'text-[#0A192F] font-bold' : 'text-gray-400'}`}>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-[#00E5FF] text-[#0A192F]' : 'bg-gray-200'}`}>3</span>
                    <span className="hidden sm:inline text-sm">Contact</span>
                  </div>
                </div>

                {/* STEP 1: SERVICE TYPE */}
                {step === 1 && (
                  <div className="space-y-6 animate-in fade-in">
                    <h3 className="text-xl font-bold text-[#0A192F]">Step 1: Select Service Type</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { id: 'Project Cargo', icon: '🏗️', desc: 'Heavy lift & oversized' },
                        { id: 'Air Freight', icon: '✈️', desc: 'Fast & secure global' },
                        { id: 'Sea Freight', icon: '🚢', desc: 'FCL & LCL ocean' },
                        { id: 'Road Freight', icon: '🚛', desc: 'Domestic & cross-border' },
                        { id: 'Customs Clearance', icon: '📋', desc: 'Brokerage & compliance' }
                      ].map((item) => (
                        <label
                          key={item.id}
                          className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                            quoteData.serviceType === item.id
                              ? 'border-[#00E5FF] bg-[#00E5FF]/5 shadow-md'
                              : 'border-gray-200 hover:border-gray-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-3xl">{item.icon}</span>
                            <input
                              type="radio"
                              name="serviceType"
                              value={item.id}
                              checked={quoteData.serviceType === item.id}
                              onChange={(e) => setQuoteData({ ...quoteData, serviceType: e.target.value })}
                              className="accent-[#0A192F]"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#0A192F] text-base">{item.id}</h4>
                            <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="bg-[#0A192F] hover:bg-[#112240] text-white px-8 py-3.5 rounded-xl font-semibold text-sm flex items-center space-x-2 shadow-lg"
                      >
                        <span>Next: Shipment Details</span>
                        <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: SHIPMENT DETAILS */}
                {step === 2 && (
                  <div className="space-y-6 animate-in fade-in">
                    <h3 className="text-xl font-bold text-[#0A192F]">Step 2: Shipment Details</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Origin (City, Country) *</label>
                        <input
                          type="text"
                          value={quoteData.origin}
                          onChange={(e) => setQuoteData({ ...quoteData, origin: e.target.value })}
                          placeholder="e.g. Chicago, USA"
                          required
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Destination (City, Country) *</label>
                        <input
                          type="text"
                          value={quoteData.destination}
                          onChange={(e) => setQuoteData({ ...quoteData, destination: e.target.value })}
                          placeholder="e.g. Dubai, UAE"
                          required
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Cargo Type *</label>
                        <select
                          value={quoteData.cargoType}
                          onChange={(e) => setQuoteData({ ...quoteData, cargoType: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                        >
                          <option value="General">General Cargo</option>
                          <option value="Dangerous">Dangerous Goods (DG)</option>
                          <option value="Perishable">Perishable Goods</option>
                          <option value="Fragile">Fragile Cargo</option>
                          <option value="Oversized">Oversized / Heavy Lift</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Total Weight *</label>
                        <div className="flex space-x-2">
                          <input
                            type="number"
                            value={quoteData.weight}
                            onChange={(e) => setQuoteData({ ...quoteData, weight: e.target.value })}
                            placeholder="500"
                            required
                            className="flex-1 bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                          />
                          <select
                            value={quoteData.weightUnit}
                            onChange={(e) => setQuoteData({ ...quoteData, weightUnit: e.target.value })}
                            className="w-24 bg-gray-50 border border-gray-300 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                          >
                            <option value="kg">kg</option>
                            <option value="lbs">lbs</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Dimensions (L × W × H in cm)</label>
                      <div className="grid grid-cols-3 gap-4">
                        <input
                          type="number"
                          value={quoteData.length}
                          onChange={(e) => setQuoteData({ ...quoteData, length: e.target.value })}
                          placeholder="Length"
                          className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                        />
                        <input
                          type="number"
                          value={quoteData.width}
                          onChange={(e) => setQuoteData({ ...quoteData, width: e.target.value })}
                          placeholder="Width"
                          className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                        />
                        <input
                          type="number"
                          value={quoteData.height}
                          onChange={(e) => setQuoteData({ ...quoteData, height: e.target.value })}
                          placeholder="Height"
                          className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="bg-[#0A192F] hover:bg-[#112240] text-white px-8 py-3.5 rounded-xl font-semibold text-sm flex items-center space-x-2 shadow-lg"
                      >
                        <span>Next: Contact Info</span>
                        <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: CONTACT INFORMATION */}
                {step === 3 && (
                  <div className="space-y-6 animate-in fade-in">
                    <h3 className="text-xl font-bold text-[#0A192F]">Step 3: Contact Information & Submission</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                        <input
                          type="text"
                          value={quoteData.companyName}
                          onChange={(e) => setQuoteData({ ...quoteData, companyName: e.target.value })}
                          placeholder="Global Imports LLC"
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          value={quoteData.fullName}
                          onChange={(e) => setQuoteData({ ...quoteData, fullName: e.target.value })}
                          placeholder="John Doe"
                          required
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          value={quoteData.email}
                          onChange={(e) => setQuoteData({ ...quoteData, email: e.target.value })}
                          placeholder="john@company.com"
                          required
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          value={quoteData.phone}
                          onChange={(e) => setQuoteData({ ...quoteData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          required
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Contact Method</label>
                      <div className="flex space-x-6">
                        {['Email', 'Phone', 'WhatsApp'].map((method) => (
                          <label key={method} className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
                            <input
                              type="radio"
                              name="contactMethod"
                              value={method}
                              checked={quoteData.contactMethod === method}
                              onChange={(e) => setQuoteData({ ...quoteData, contactMethod: e.target.value })}
                              className="accent-[#0A192F]"
                            />
                            <span>{method}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes / Special Instructions</label>
                      <textarea
                        rows={3}
                        value={quoteData.notes}
                        onChange={(e) => setQuoteData({ ...quoteData, notes: e.target.value })}
                        placeholder="Any special handling or customs requirements..."
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF]"
                      ></textarea>
                    </div>

                    <div className="flex items-center space-x-3 pt-2">
                      <input
                        type="checkbox"
                        id="agreed"
                        checked={quoteData.agreed}
                        onChange={(e) => setQuoteData({ ...quoteData, agreed: e.target.checked })}
                        required
                        className="w-4 h-4 rounded accent-[#0A192F]"
                      />
                      <label htmlFor="agreed" className="text-xs text-gray-600">
                        I agree to Terms & Privacy Policy and consent to Apex Global Logistics contacting me regarding this quote.
                      </label>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors"
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        className="bg-[#00E5FF] hover:bg-[#33edff] text-[#0A192F] font-bold px-10 py-4 rounded-xl shadow-xl transition-all flex items-center space-x-2 text-base"
                      >
                        <span>Submit Quote Request</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}

              </form>
            ) : (
              /* SUCCESS MESSAGE */
              <div className="text-center py-12 space-y-6 animate-in fade-in">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-[#0A192F]">Quote Request Submitted Successfully!</h3>
                <p className="text-gray-600 text-base max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#0A192F]">{quoteData.fullName}</span>. Our logistics team is analyzing your <span className="font-semibold text-[#0A192F]">{quoteData.serviceType}</span> request from <span className="font-semibold text-[#0A192F]">{quoteData.origin || 'Origin'}</span> to <span className="font-semibold text-[#0A192F]">{quoteData.destination || 'Destination'}</span>. We will respond within 2 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setStep(1); }}
                  className="bg-[#0A192F] hover:bg-[#112240] text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-lg"
                >
                  Submit Another Quote
                </button>
              </div>
            )}

          </div>

          {/* RIGHT 25% SIDEBAR */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Why Request a Quote */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-4">
              <h3 className="text-lg font-bold text-[#0A192F] border-l-4 border-[#00E5FF] pl-3">Why Request a Quote?</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-[#00E5FF] font-bold">✓</span>
                  <span>Guaranteed competitive carrier rates across global trade lanes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#00E5FF] font-bold">✓</span>
                  <span>Customized route planning and transit time estimates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#00E5FF] font-bold">✓</span>
                  <span>Transparent customs brokerage and documentation support</span>
                </li>
              </ul>
            </div>

            {/* What Happens Next */}
            <div className="bg-[#0A192F] text-white p-6 rounded-2xl shadow-xl space-y-4">
              <h3 className="text-lg font-bold border-l-4 border-[#00E5FF] pl-3">What Happens Next?</h3>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-[#00E5FF] text-[#0A192F] font-bold text-xs flex items-center justify-center shrink-0">1</span>
                  <p>Submit your precise shipment details via our secure form.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-[#00E5FF] text-[#0A192F] font-bold text-xs flex items-center justify-center shrink-0">2</span>
                  <p>Our logistics engineers analyze capacity and carrier rates.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-[#00E5FF] text-[#0A192F] font-bold text-xs flex items-center justify-center shrink-0">3</span>
                  <p>Receive your competitive quotation within 24 hours.</p>
                </div>
              </div>
            </div>

            {/* Urgent Inquiries Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[#0A192F] text-base">Urgent Inquiry?</h4>
              <p className="text-xs text-gray-500">Need immediate booking assistance? Call our 24/7 hotline directly.</p>
              <div className="text-[#0A192F] font-extrabold text-lg">+1 (555) 123-4567</div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
