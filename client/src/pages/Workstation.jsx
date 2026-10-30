import React from 'react';
import ErpSimulator from '../components/ErpSimulator';
import { 
  ArrowLeft, 
  Layers,
  Cpu,
  Truck,
  Sparkles,
  ArrowRight,
  Activity,
  Terminal
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Workstation({ onOpenConsultation }) {
  return (
    <div style={{ paddingTop: '86px', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* Workstation Header (Zoho ERP Console Style) */}
      <section style={{ padding: '40px 0 36px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Link to="/" style={{ color: '#64748B', display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', fontSize: '0.86rem', fontWeight: 600 }}>
                  <ArrowLeft size={14} /> Back to Overview
                </Link>
                <span style={{ color: '#CBD5E1' }}>/</span>
                <span className="mono" style={{ fontSize: '0.78rem', color: '#2563EB', fontWeight: 800, letterSpacing: '0.04em' }}>
                  STEELCORE™ OPERATING SANDBOX
                </span>
              </div>
              <h1 className="heading-font" style={{ fontSize: 'clamp(2rem, 3.6vw, 2.8rem)', fontWeight: 800, color: '#0F172A', margin: 0, letterSpacing: '-0.025em' }}>
                Interactive ERP Sandbox &amp; Workstation
              </h1>
              <p style={{ color: '#64748B', fontSize: '0.98rem', margin: '8px 0 0', maxWidth: '720px', lineHeight: 1.6 }}>
                Simulate real PEB shop-floor workflows: ingest Tekla BOQ part marks, gate fabrication stages, and dispatch sequence trailers.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button 
                onClick={onOpenConsultation}
                className="btn btn-primary"
                style={{ padding: '13px 26px', fontSize: '0.94rem', fontWeight: 700 }}
              >
                <span>Request Plant Assessment</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Live Telemetry Bar */}
          <div 
            style={{ 
              marginTop: '28px', 
              padding: '12px 18px', 
              backgroundColor: '#F8FAFC', 
              borderRadius: '10px', 
              border: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              fontSize: '0.82rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#059669', fontWeight: 700 }}>
              <span className="status-pulse" style={{ backgroundColor: '#10B981' }} />
              <span className="mono">SANDBOX ACTIVE • LATENCY: 12ms</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', color: '#64748B' }}>
              <span className="mono" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Terminal size={14} color="#2563EB" /> TEKLA BIM v4.2 CONNECTED
              </span>
              <span className="mono" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Activity size={14} color="#D97706" /> WEIGHBRIDGE COM1: READY
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Simulator */}
      <div style={{ backgroundColor: '#F8FAFC' }}>
        <ErpSimulator />
      </div>

      {/* Guide & Instructions on How to Test the Workstation (Zoho ERP Card Style) */}
      <section style={{ padding: '75px 0 95px', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-label" style={{ marginBottom: '12px' }}>
                <Sparkles size={14} color="#2563EB" />
                <span>HOW TO TEST THE SANDBOX</span>
              </div>
              <h3 className="heading-font" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0F172A', margin: 0, letterSpacing: '-0.02em' }}>
                How This Workstation Mirrors Real PEB Plant Operations
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.98rem', marginTop: '10px' }}>
                Follow these three interactive steps to test the mathematical controls built into the platform
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px' }}>
              {/* Step 1 */}
              <div 
                className="card zoho-card-lift" 
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1.5px solid #E2E8F0', 
                  borderRadius: '16px', 
                  padding: '30px', 
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #1E40AF, #2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)' }}>
                    <Layers size={20} />
                  </div>
                  <div>
                    <span className="mono" style={{ fontSize: '0.74rem', color: '#2563EB', fontWeight: 800 }}>STEP 01</span>
                    <h4 className="heading-font" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                      Tekla Part Mark Sync
                    </h4>
                  </div>
                </div>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                  Search any part mark (e.g. <code>MCL-1</code>, <code>RAF-01</code>). Notice how weights, lengths, grades, and drawing revisions are tied to the exact structural grid.
                </p>
              </div>

              {/* Step 2 */}
              <div 
                className="card zoho-card-lift" 
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1.5px solid #E2E8F0', 
                  borderRadius: '16px', 
                  padding: '30px', 
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #D97706, #F59E0B)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', boxShadow: '0 4px 12px rgba(245, 158, 11, 0.2)' }}>
                    <Cpu size={20} />
                  </div>
                  <div>
                    <span className="mono" style={{ fontSize: '0.74rem', color: '#D97706', fontWeight: 800 }}>STEP 02</span>
                    <h4 className="heading-font" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                      Stage Progression Click
                    </h4>
                  </div>
                </div>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                  Click "Advance &rarr;" on any BOQ item. Watch it progress from Fit-up to Submerged Arc Welding (SAW), Straightening, and Shot Blasting with instant weight tracking.
                </p>
              </div>

              {/* Step 3 */}
              <div 
                className="card zoho-card-lift" 
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1.5px solid #E2E8F0', 
                  borderRadius: '16px', 
                  padding: '30px', 
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #047857, #10B981)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)' }}>
                    <Truck size={20} />
                  </div>
                  <div>
                    <span className="mono" style={{ fontSize: '0.74rem', color: '#059669', fontWeight: 800 }}>STEP 03</span>
                    <h4 className="heading-font" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                      Erection Sequencing
                    </h4>
                  </div>
                </div>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                  Explore Tab 4 to see how trailers are sequenced. Foundation anchor bolts and base columns are always cleared before roof rafters to prevent site crane detention.
                </p>
              </div>
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
                <span style={{ color: '#93C5FD' }}>LIVE ON-SITE DEPLOYMENT</span>
              </div>
              <h3 className="heading-font" style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                Ready to Experience SteelCore™ on Your Factory Tablets?
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
                Schedule a 45-minute live demonstration tailored to your plant's specific machinery, weighbridges, and drawing revision flow.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenConsultation}
                  className="btn btn-primary"
                  style={{ padding: '14px 32px', fontSize: '0.98rem', fontWeight: 700 }}
                >
                  Schedule Live Plant Demonstration &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
