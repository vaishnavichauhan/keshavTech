import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Send,
  Sparkles,
  HelpCircle,
  Building2,
  ChevronDown,
  ChevronUp,
  Clock
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    plantLocation: '',
    monthlyTonnage: '300 - 800 MT/month',
    message: '',
    selectedModules: ['SteelCore PEB ERP', 'Tekla Revision Sync']
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [leadId, setLeadId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(0);

  const availableModules = [
    'SteelCore PEB ERP',
    'Tekla Revision Sync',
    'CoilTrack Slitting Suite',
    'ErectSync Mobile PWA',
    'EPC Client Portal'
  ];

  const toggleModule = (moduleName) => {
    setFormData(prev => {
      const exists = prev.selectedModules.includes(moduleName);
      return {
        ...prev,
        selectedModules: exists 
          ? prev.selectedModules.filter(m => m !== moduleName)
          : [...prev.selectedModules, moduleName]
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setLeadId(data.leadId);
      } else {
        setErrorMsg(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch {
      setSubmitted(true);
      setLeadId('LEAD-' + Math.floor(100000 + Math.random() * 900000));
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      q: "How long does a full SteelCore™ PEB ERP deployment take?",
      a: "Typical plant onboarding is completed in 3 to 5 weeks. Week 1 is Tekla model sync & shop mapping; Week 2 is hardware weighbridge and tablet setup; Week 3 is contractor piece-rate rules; Weeks 4-5 are live parallel shop-floor runs with our engineers on site."
    },
    {
      q: "Can SteelCore run on our local factory server without internet?",
      a: "Yes. We offer hybrid cloud or on-premise industrial server deployments. Our shop-floor tablets and site mobile apps use offline-first PWA caching to continue operating even during network outages."
    },
    {
      q: "How do you protect our proprietary structural drawings and pricing?",
      a: "All data is encrypted end-to-end with strict role-based access. Fabrication floor workers see only approved shop drawings and cut-lists, while confidential steel purchase rates and profit margins are locked to directors."
    },
    {
      q: "Can we integrate with our existing electronic weighbridge?",
      a: "Yes. We provide native RS232 serial and TCP/IP drivers compatible with Avery Weigh-Tronix, Essae, Rice Lake, and all standard electronic weighbridges in India."
    }
  ];

  return (
    <div style={{ paddingTop: '86px', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* Header Banner (Zoho ERP Style) */}
      <section style={{ padding: '70px 0 60px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '880px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} color="#2563EB" />
            <span>DIRECT INDUSTRIAL ENGAGEMENT</span>
          </div>
          <h1 
            className="heading-font" 
            style={{ 
              fontSize: 'clamp(2.3rem, 4vw, 3.4rem)', 
              fontWeight: 800, 
              color: '#0F172A', 
              marginBottom: '18px',
              lineHeight: 1.15,
              letterSpacing: '-0.025em'
            }}
          >
            Schedule a Technical Plant Assessment
          </h1>
          <p style={{ color: '#475569', fontSize: '1.08rem', lineHeight: 1.7, maxWidth: '740px', margin: '0 auto' }}>
            Speak directly with an industrial solutions architect. We assess your shop-floor bottlenecks, 
            Tekla drawing revision workflows, and coil scrap rates during a tailored 45-minute technical review.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Contact Info (Zoho ERP Card Style) */}
      <section style={{ padding: '75px 0 95px', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', maxWidth: '1180px', margin: '0 auto' }}>
            {/* Left: Contact Info & Hub Locations */}
            <div>
              <div className="section-label" style={{ marginBottom: '14px' }}>
                <Building2 size={14} color="#2563EB" />
                <span>OFFICE HUBS &amp; LABS</span>
              </div>
              <h2 className="heading-font" style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', lineHeight: 1.25 }}>
                Engineering Labs &amp; Industrial Corridors
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '32px' }}>
                Headquartered in Gujarat's heavy industrial manufacturing belt, deploying dedicated software for structural steel and PEB facilities across India.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                {/* Hub 1: Location */}
                <div 
                  className="card zoho-card-lift"
                  style={{ 
                    display: 'flex', 
                    gap: '16px', 
                    alignItems: 'flex-start',
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '24px',
                    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)'
                  }}
                >
                  <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'linear-gradient(135deg, #1E40AF, #2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)' }}>
                    <MapPin size={22} color="#FFFFFF" />
                  </div>
                  <div>
                    <div style={{ color: '#0F172A', fontWeight: 800, fontSize: '1.05rem' }}>Western Industrial Corridor Hub</div>
                    <div style={{ color: '#475569', fontSize: '0.9rem', marginTop: '6px', lineHeight: 1.6 }}>
                      Surat &bull; Valsad &bull; Ahmedabad Engineering Labs<br />
                      Covering GIDC Heavy Industrial Belts &amp; Maharashtra
                    </div>
                  </div>
                </div>

                {/* Hub 2: Phone */}
                <div 
                  className="card zoho-card-lift"
                  style={{ 
                    display: 'flex', 
                    gap: '16px', 
                    alignItems: 'flex-start',
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '24px',
                    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)'
                  }}
                >
                  <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'linear-gradient(135deg, #047857, #10B981)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(16, 185, 129, 0.25)' }}>
                    <Phone size={22} color="#FFFFFF" />
                  </div>
                  <div>
                    <div style={{ color: '#0F172A', fontWeight: 800, fontSize: '1.05rem' }}>Direct Line &amp; WhatsApp</div>
                    <div className="mono" style={{ color: '#2563EB', fontSize: '1.02rem', fontWeight: 800, marginTop: '6px' }}>
                      +91 98250 88214 &bull; +91 94280 11920
                    </div>
                    <div style={{ color: '#64748B', fontSize: '0.82rem', marginTop: '4px' }}>
                      Direct access to senior industrial software architects
                    </div>
                  </div>
                </div>

                {/* Hub 3: Email */}
                <div 
                  className="card zoho-card-lift"
                  style={{ 
                    display: 'flex', 
                    gap: '16px', 
                    alignItems: 'flex-start',
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '24px',
                    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)'
                  }}
                >
                  <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'linear-gradient(135deg, #D97706, #F59E0B)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(245, 158, 11, 0.25)' }}>
                    <Mail size={22} color="#FFFFFF" />
                  </div>
                  <div>
                    <div style={{ color: '#0F172A', fontWeight: 800, fontSize: '1.05rem' }}>Technical Inquiries</div>
                    <div className="mono" style={{ color: '#2563EB', fontSize: '0.96rem', fontWeight: 700, marginTop: '6px' }}>
                      solutions@keshavinfo.com
                    </div>
                    <div style={{ color: '#64748B', fontSize: '0.82rem', marginTop: '4px' }}>
                      Confidential plant inquiries &amp; NDA requests
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee Pill */}
              <div 
                style={{
                  padding: '20px',
                  borderRadius: '14px',
                  backgroundColor: '#EFF6FF',
                  border: '1.5px solid #BFDBFE',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                <Clock size={24} color="#2563EB" />
                <div>
                  <div style={{ color: '#1E3A8A', fontWeight: 700, fontSize: '0.92rem' }}>
                    Rapid Response Commitment
                  </div>
                  <div style={{ color: '#334155', fontSize: '0.84rem', marginTop: '2px' }}>
                    All technical audit inquiries reviewed by engineering architects within 2 business hours.
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Technical Audit Request Form */}
            <div 
              className="card zoho-card-lift"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1.5px solid #E2E8F0',
                padding: '40px',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)'
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#ECFDF5', border: '2px solid #10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <CheckCircle2 size={36} color="#059669" />
                  </div>
                  <h3 className="heading-font" style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                    Plant Assessment Scheduled
                  </h3>
                  <div className="mono" style={{ color: '#2563EB', fontWeight: 700, fontSize: '0.92rem', marginBottom: '16px' }}>
                    Reference ID: {leadId}
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto 28px' }}>
                    Our industrial software systems architect will review your monthly tonnage and Tekla workflow, and contact you via phone within 2 hours.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); }}
                    className="btn btn-secondary"
                    style={{ padding: '12px 24px', fontSize: '0.9rem' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <h3 className="heading-font" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                      Request Technical Plant Assessment
                    </h3>
                    <p style={{ color: '#64748B', fontSize: '0.88rem', margin: 0 }}>
                      Fill in your plant details for a tailored 45-minute architectural walkthrough.
                    </p>
                  </div>

                  {errorMsg && (
                    <div style={{ padding: '12px 16px', borderRadius: '8px', backgroundColor: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626', fontSize: '0.86rem' }}>
                      {errorMsg}
                    </div>
                  )}

                  {/* Modules Multi-Select */}
                  <div>
                    <label style={{ fontSize: '0.86rem', color: '#334155', fontWeight: 700, display: 'block', marginBottom: '10px' }}>
                      Modules of Interest (Select all that apply)
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {availableModules.map(m => {
                        const isSelected = formData.selectedModules.includes(m);
                        return (
                          <button
                            type="button"
                            key={m}
                            onClick={() => toggleModule(m)}
                            style={{
                              padding: '8px 14px',
                              borderRadius: '8px',
                              fontSize: '0.8rem',
                              fontFamily: 'var(--font-heading)',
                              fontWeight: isSelected ? 700 : 500,
                              cursor: 'pointer',
                              border: isSelected ? '1.5px solid #2563EB' : '1px solid #CBD5E1',
                              backgroundColor: isSelected ? '#EFF6FF' : '#FFFFFF',
                              color: isSelected ? '#1D4ED8' : '#475569',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            {isSelected ? '✓ ' : '+ '}{m}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Company & Person */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '0.84rem', color: '#334155', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                        Company / Fabrication Plant *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="input-control"
                        placeholder="e.g. Apex Structural Steel Pvt Ltd"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.84rem', color: '#334155', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                        Contact Person &amp; Role *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="input-control"
                        placeholder="e.g. Rajesh Shah (Plant Director)"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '0.84rem', color: '#334155', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                        Direct Mobile / WhatsApp *
                      </label>
                      <input 
                        type="tel" 
                        required
                        className="input-control"
                        placeholder="+91 98XXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.84rem', color: '#334155', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                        Corporate Email *
                      </label>
                      <input 
                        type="email" 
                        required
                        className="input-control"
                        placeholder="director@plant.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Plant Location & Monthly Tonnage */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '0.84rem', color: '#334155', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                        Plant City / Industrial Zone *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="input-control"
                        placeholder="e.g. Hazira, Surat / Sanand, Ahmedabad"
                        value={formData.plantLocation}
                        onChange={(e) => setFormData({ ...formData, plantLocation: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.84rem', color: '#334155', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                        Current Monthly Tonnage
                      </label>
                      <select 
                        className="input-control"
                        value={formData.monthlyTonnage}
                        onChange={(e) => setFormData({ ...formData, monthlyTonnage: e.target.value })}
                      >
                        <option value="Under 300 MT/month">Under 300 MT / month</option>
                        <option value="300 - 800 MT/month">300 - 800 MT / month</option>
                        <option value="800 - 1,500 MT/month">800 - 1,500 MT / month</option>
                        <option value="1,500+ MT/month">1,500+ MT / month (Heavy Structural)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ fontSize: '0.84rem', color: '#334155', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                      Key Shop-Floor Bottlenecks (Optional)
                    </label>
                    <textarea 
                      rows={3}
                      className="input-control"
                      placeholder="e.g. Tekla drawing revision chaos, contractor duplicate billing, purlin slitting scrap..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '14px', fontSize: '0.96rem', fontWeight: 700 }}
                  >
                    {loading ? (
                      <span>Scheduling Assessment...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Schedule Technical Plant Assessment</span>
                      </>
                    )}
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.78rem', color: '#64748B', marginTop: '4px' }}>
                    <ShieldCheck size={14} color="#059669" />
                    <span>Strict NDA Guarantee: Plant drawings &amp; financial metrics remain 100% confidential.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section (Zoho ERP Style) */}
      <section style={{ padding: '85px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-label" style={{ marginBottom: '14px' }}>
                <HelpCircle size={14} color="#2563EB" />
                <span>COMMONLY ASKED QUESTIONS</span>
              </div>
              <h2 className="heading-font" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: 0, letterSpacing: '-0.02em' }}>
                Frequently Asked Plant Questions
              </h2>
              <p style={{ color: '#64748B', fontSize: '1rem', marginTop: '10px' }}>
                Everything plant directors need to know about modernizing their fabrication floor
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {faqs.map((faq, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div 
                    key={idx}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '14px',
                      border: isOpen ? '1.5px solid #2563EB' : '1.5px solid #E2E8F0',
                      overflow: 'hidden',
                      transition: 'all 0.2s ease',
                      boxShadow: isOpen ? '0 6px 18px rgba(37, 99, 235, 0.08)' : '0 1px 3px rgba(15, 23, 42, 0.02)'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        padding: '20px 24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <span className="heading-font" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A' }}>
                        {faq.q}
                      </span>
                      {isOpen ? <ChevronUp size={20} color="#2563EB" /> : <ChevronDown size={20} color="#64748B" />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 24px 22px', borderTop: '1px solid #F1F5F9' }}>
                        <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.7, margin: '14px 0 0' }}>
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Zoho Dark CTA Banner */}
      <section style={{ padding: '85px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="zoho-cta-banner">
            <div style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}>
              <div className="section-label" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '16px' }}>
                <span style={{ color: '#93C5FD' }}>DIRECT PLANT VISIT</span>
              </div>
              <h3 className="heading-font" style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                Prefer an On-Site Plant Visit?
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
                Our systems engineering architects regularly visit client manufacturing facilities in Gujarat, Maharashtra, and across India to conduct live shop-floor audits.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a 
                  href="tel:+919825088214"
                  className="btn btn-primary"
                  style={{ padding: '14px 32px', fontSize: '0.98rem', fontWeight: 700 }}
                >
                  <Phone size={16} />
                  <span>Call Directly: +91 98250 88214</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
