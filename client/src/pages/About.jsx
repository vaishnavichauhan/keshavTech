import React from 'react';
import TechArchitecture from '../components/TechArchitecture';
import { 
  Factory, 
  Sparkles,
  ArrowRight,
  Cpu,
  WifiOff,
  Lock,
  Compass,
  CheckCircle2,
  Users,
  HardHat,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About({ onOpenConsultation }) {
  const values = [
    {
      title: "Deep Domain Grounding",
      icon: <Compass size={22} color="#FFFFFF" />,
      gradient: "linear-gradient(135deg, #1E40AF, #2563EB)",
      desc: "We don't build generic software for retail or e-commerce. Every engineer on our team understands Tekla .NC1 part marks, plate nesting kerf allowances, Submerged Arc Welding (SAW), and foundation anchor bolt tolerances from direct plant experience."
    },
    {
      title: "Zero Fluff Engineering",
      icon: <Cpu size={22} color="#FFFFFF" />,
      gradient: "linear-gradient(135deg, #047857, #10B981)",
      desc: "Real industrial software requires mathematical precision, immutable database audit trails, and native hardware integration with electronic weighbridges and CNC plasma tables rather than abstract marketing claims."
    },
    {
      title: "Dust-Proof & Offline-First",
      icon: <WifiOff size={22} color="#FFFFFF" />,
      gradient: "linear-gradient(135deg, #D97706, #F59E0B)",
      desc: "We design software for noisy fabrication bays and remote building sites with intermittent 4G. Our offline-first PWA caching guarantees zero work stoppages, syncing securely when connectivity resumes."
    },
    {
      title: "Confidentiality & Non-Disclosure",
      icon: <Lock size={22} color="#FFFFFF" />,
      gradient: "linear-gradient(135deg, #6D28D9, #8B5CF6)",
      desc: "Our clients include premier infrastructure leaders and high-tonnage PEB manufacturers. We maintain strict non-disclosure policies, never leaking client proprietary structural designs or commercial profit margins."
    }
  ];

  const specialists = [
    {
      role: "Structural Detailing & BIM Architect",
      focus: "Tekla .NC1 Parsing & Revision Delta Engine",
      icon: <Compass size={20} color="#2563EB" />,
      desc: "Specializes in algorithmic 3D geometry extraction, automated plate nesting cut-lists, and instant plasma table freeze signals during architectural drawing revisions."
    },
    {
      role: "Hardware & IoT Systems Specialist",
      focus: "Serial RS-232 Weighbridges & ANPR Gates",
      icon: <HardHat size={20} color="#059669" />,
      desc: "Architects direct serial port drivers for Avery Weigh-Tronix and Essae weighbridges, ensuring unalterable gross-to-tare vehicle weight capture and zero steel pilferage."
    },
    {
      role: "NABL Quality & Metallurgy Auditor",
      focus: "WPS / PQR Records & Mill MTC Vault",
      icon: <Award size={20} color="#D97706" />,
      desc: "Standardizes digital ultrasonic inspection workflows (IS 800:2007 / AWS D1.1), binding raw steel manufacturer heat numbers directly to fabricated part marks."
    }
  ];

  return (
    <div style={{ paddingTop: '86px', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* Header Banner with Real Lab Image (Zoho ERP Style) */}
      <section style={{ padding: '70px 0 60px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '52px', alignItems: 'center' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '16px' }}>
                <Sparkles size={14} color="#2563EB" />
                <span>ABOUT KESHAV INFO</span>
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
                Software Engineering for the Heavy Metal Backbone of Infrastructure
              </h1>
              <p style={{ color: '#475569', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '32px', maxWidth: '600px' }}>
                Keshav Info is a dedicated industrial systems and enterprise software engineering lab developing proprietary operating systems for Pre-Engineered Building (PEB) manufacturers, heavy structural steel fabricators, and coil processing plants.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenConsultation}
                  className="btn btn-primary"
                  style={{ padding: '14px 28px', fontSize: '0.96rem', fontWeight: 700 }}
                >
                  <span>Meet Our Engineering Team</span>
                  <ArrowRight size={16} />
                </button>
                <Link 
                  to="/contact" 
                  className="btn btn-secondary"
                  style={{ padding: '14px 24px', fontSize: '0.96rem', fontWeight: 600 }}
                >
                  Office Hubs &amp; Labs
                </Link>
              </div>
            </div>

            {/* Lab Image Frame */}
            <div className="zoho-img-frame">
              <div style={{ padding: '12px 18px', backgroundColor: '#1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="mono" style={{ fontSize: '0.74rem', color: '#94A3B8', fontWeight: 600 }}>
                  KESHAV INFO &bull; PEB ENGINEERING DESIGN LAB
                </span>
                <span className="badge-tech badge-emerald" style={{ fontSize: '0.62rem', padding: '2px 8px' }}>ACTIVE LAB</span>
              </div>
              <img 
                src="/about-lab.png" 
                alt="Keshav Info Industrial Software Engineering Team" 
                className="zoho-img-zoom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story Section (Alternating Zoho Image-and-Text Style) */}
      <section style={{ padding: '85px 0', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'center' }}>
              <div>
                <div className="section-label" style={{ marginBottom: '14px' }}>
                  <span>OUR ORIGIN &amp; PHILOSOPHY</span>
                </div>
                <h2 className="heading-font" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginBottom: '18px', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                  Born Inside the Fabrication Bay, Not a Generic Tech Incubator
                </h2>
                <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '16px' }}>
                  We didn't start Keshav Info to build another generic accounting tool or retail app. 
                  We spent countless hours walking fabrication bays, watching cranes haul 20-tonne girders, 
                  and observing the intense frustration of shop managers when drawing revisions were lost in messy WhatsApp chats.
                </p>
                <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '24px' }}>
                  We realized that generic ERPs like SAP and Tally completely broke down on shop floors because they treated structural steel like static retail inventory. 
                  We set out to engineer dedicated software that speaks the authentic language of structural steel: 
                  part marks, mill heat numbers, weld test records, and sequence-wise erection loading.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div className="zoho-check-item">
                    <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                    <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>Engineered specifically for IS 800:2007 and AISC 360-16 PEB standards</span>
                  </div>
                  <div className="zoho-check-item">
                    <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                    <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>Direct RS-232 serial integration with all major Indian weighbridges</span>
                  </div>
                </div>
              </div>

              {/* Lab Metrics Card */}
              <div 
                className="card zoho-card-lift"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid #E2E8F0',
                  borderRadius: '20px',
                  padding: '38px',
                  boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                  <Factory size={24} color="#2563EB" />
                  <span className="mono" style={{ fontSize: '0.84rem', color: '#1D4ED8', fontWeight: 800, letterSpacing: '0.04em' }}>
                    KESHAV INFO AUDITED STATS
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <div>
                    <div className="heading-font" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#2563EB', lineHeight: 1 }}>
                      185,400+ MT
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#0F172A', marginTop: '6px', fontWeight: 700 }}>
                      Fabricated Steel Tracked Across Client Facilities
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px' }}>
                      Across industrial warehouses, airport hangars &amp; metro structures
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '18px' }}>
                    <div className="heading-font" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#D97706', lineHeight: 1 }}>
                      18 Plants
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#0F172A', marginTop: '6px', fontWeight: 700 }}>
                      Active Commercial Deployments Across India
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px' }}>
                      Western corridor, Gujarat, Maharashtra, and Central belts
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '18px' }}>
                    <div className="heading-font" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#059669', lineHeight: 1 }}>
                      100% Traceability
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#0F172A', marginTop: '6px', fontWeight: 700 }}>
                      Mill Heat Numbers From Coil Inward to Site Erection
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px' }}>
                      Audit-ready NABL ultrasonic and radiographic testing vaults
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Values (Zoho ERP Card Style) */}
      <section style={{ padding: '85px 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 52px' }}>
            <div className="section-label" style={{ marginBottom: '14px' }}>
              <span>OUR CORE VALUES</span>
            </div>
            <h2 className="heading-font" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#0F172A', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              Our Engineering Principles
            </h2>
            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.65 }}>
              How we approach software development for heavy structural steel environments.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', maxWidth: '1120px', margin: '0 auto' }}>
            {values.map((v, idx) => (
              <div 
                key={idx} 
                className="card zoho-card-lift" 
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1.5px solid #E2E8F0', 
                  borderRadius: '18px', 
                  padding: '30px', 
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div 
                    className="zoho-icon-badge"
                    style={{ background: v.gradient }}
                  >
                    {v.icon}
                  </div>
                  <h3 className="heading-font" style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                    {v.title}
                  </h3>
                </div>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Engineering Team Specialists */}
      <section style={{ padding: '85px 0', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
            <div className="section-label" style={{ marginBottom: '14px' }}>
              <Users size={14} color="#2563EB" />
              <span>THE SPECIALISTS BEHIND THE SYSTEM</span>
            </div>
            <h2 className="heading-font" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#0F172A', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              Domain Experts, Not Generic Web Developers
            </h2>
            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.65 }}>
              Our engineering team is composed of structural detailers, shop-floor automation leads, and NABL quality compliance experts.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', maxWidth: '1120px', margin: '0 auto' }}>
            {specialists.map((s, idx) => (
              <div 
                key={idx}
                className="card zoho-card-lift"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1.5px solid #E2E8F0',
                  padding: '30px',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)'
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  {s.icon}
                </div>
                <h3 className="heading-font" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                  {s.role}
                </h3>
                <div className="mono" style={{ fontSize: '0.78rem', color: '#2563EB', fontWeight: 700, marginBottom: '14px' }}>
                  {s.focus}
                </div>
                <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <TechArchitecture />

      {/* Zoho Dark CTA Banner */}
      <section style={{ padding: '85px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="zoho-cta-banner">
            <div style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}>
              <div className="section-label" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '16px' }}>
                <span style={{ color: '#93C5FD' }}>DIRECT ENGAGEMENT</span>
              </div>
              <h3 className="heading-font" style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                Meet With Our Industrial Systems Team
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
                We welcome plant directors, general managers, and structural engineers to visit our software engineering labs or book an on-site operational review.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenConsultation}
                  className="btn btn-primary"
                  style={{ padding: '14px 32px', fontSize: '0.98rem', fontWeight: 700 }}
                >
                  Book Plant Assessment Walkthrough &rarr;
                </button>
                <Link 
                  to="/contact"
                  className="btn btn-secondary"
                  style={{ padding: '14px 28px', fontSize: '0.98rem', fontWeight: 600 }}
                >
                  Office Hubs &amp; Direct Numbers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
