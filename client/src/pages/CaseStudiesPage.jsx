import React from 'react';
import CaseStudies from '../components/CaseStudies';
import { 
  Building2, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Clock,
  ShieldCheck,
  CheckCircle2,
  X
} from 'lucide-react';

export default function CaseStudiesPage({ onOpenConsultation }) {
  const benchmarks = [
    { label: "Plate & Nesting Scrap Saved", value: "3.6% - 4.1%", note: "Recovered ₹1.42 Cr annual raw steel", icon: <TrendingUp size={22} color="#2563EB" /> },
    { label: "BOQ to Site Turnaround", value: "-22 Days", note: "Direct Tekla delta revision sync", icon: <Clock size={22} color="#059669" /> },
    { label: "Site Crane Idle Downtime", value: "0 Hours", note: "Ground erection sequence loading", icon: <Building2 size={22} color="#D97706" /> },
    { label: "Contractor Duplicate Billing", value: "0 Claims", note: "Locked to NABL ultrasonic test gates", icon: <ShieldCheck size={22} color="#7C3AED" /> }
  ];

  const beforeAfterPoints = [
    {
      metric: "Plate Off-Cut Management",
      traditional: "Irregular 1.2 MT plate remnants written off as scrap or lost in yard",
      keshav: "2D QR-tagged remnant yard automatically re-nests brackets into saved geometry",
      gain: "3.8% Steel Recovered"
    },
    {
      metric: "Drawing Revision Speed",
      traditional: "Manual Excel reconciliation across 2,000 part marks taking 4-6 days",
      keshav: "3D delta-diffing in under 3.2 seconds with automated plasma cutting table freeze",
      gain: "Zero Mismatched Parts"
    },
    {
      metric: "Contractor Labor Verification",
      traditional: "Handwritten daily logbooks with routine duplicate claims across fortnights",
      keshav: "Payables mathematically locked to digital NABL ultrasonic test inspection signoffs",
      gain: "1.5% Direct Labor Saved"
    },
    {
      metric: "Site Erection Dispatch",
      traditional: "Random trailer loading based on whatever members are painted first",
      keshav: "Trailer load planner strictly enforced by foundation anchor bolt readiness",
      gain: "Zero Crane Detention"
    }
  ];

  return (
    <div style={{ paddingTop: '86px', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* Header Banner with Real PEB Plant Visual (Zoho ERP Style) */}
      <section style={{ padding: '70px 0 60px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '52px', alignItems: 'center' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '16px' }}>
                <Sparkles size={14} color="#2563EB" />
                <span>AUDITED CLIENT CASE STUDIES</span>
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
                Audited Deployments Across High-Tonnage PEB Plants
              </h1>
              <p style={{ color: '#475569', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '32px', maxWidth: '600px' }}>
                Explore verifiable production case studies from structural steel fabricators, coil service centers, and industrial EPC contractors running on Keshav Info platforms.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenConsultation}
                  className="btn btn-primary"
                  style={{ padding: '14px 28px', fontSize: '0.96rem', fontWeight: 700 }}
                >
                  <span>Request Technical Plant Audit</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Factory Image Frame */}
            <div className="zoho-img-frame">
              <div style={{ padding: '12px 18px', backgroundColor: '#1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="mono" style={{ fontSize: '0.74rem', color: '#94A3B8', fontWeight: 600 }}>
                    1,200 MT/MO STRUCTURAL FABRICATION BAY &bull; GUJARAT
                  </span>
                </div>
                <span className="badge-tech badge-emerald" style={{ fontSize: '0.62rem', padding: '2px 8px' }}>AUDITED</span>
              </div>
              <img 
                src="/case-study-factory.png" 
                alt="1200 MT Monthly Structural Steel Fabrication Bay" 
                className="zoho-img-zoom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Audited Benchmarks Bar (Zoho ERP Card Style) */}
      <section style={{ padding: '40px 0', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {benchmarks.map((b, idx) => (
              <div 
                key={idx} 
                className="card zoho-card-lift"
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1.5px solid #E2E8F0', 
                  borderRadius: '16px', 
                  padding: '24px',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {b.icon}
                  </div>
                  <div>
                    <div className="heading-font" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', lineHeight: 1 }}>
                      {b.value}
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0F172A' }}>
                  {b.label}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '4px' }}>
                  {b.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Main Case Study Component */}
      <div>
        <CaseStudies onOpenConsultation={onOpenConsultation} />
      </div>

      {/* Operational Before & After Comparison Table (Zoho ERP Style) */}
      <section style={{ padding: '85px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <div className="section-label" style={{ marginBottom: '12px' }}>
                <span>OPERATIONAL COMPARISON</span>
              </div>
              <h2 className="heading-font" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: 0, letterSpacing: '-0.02em' }}>
                Traditional Fabrication Methods vs Keshav Info SteelCore™
              </h2>
              <p style={{ color: '#64748B', fontSize: '0.98rem', marginTop: '10px' }}>
                Audited before-and-after performance across 18 commercial manufacturing deployments
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              {beforeAfterPoints.map((row, idx) => (
                <div 
                  key={idx}
                  className="card zoho-card-lift"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '14px',
                    border: '1.5px solid #E2E8F0',
                    padding: '24px 28px',
                    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                    <h3 className="heading-font" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                      {idx + 1}. {row.metric}
                    </h3>
                    <span className="mono" style={{ fontSize: '0.78rem', color: '#059669', padding: '4px 10px', borderRadius: '6px', backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', fontWeight: 700 }}>
                      {row.gain}
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    <div style={{ backgroundColor: '#FEF2F2', padding: '16px', borderRadius: '10px', border: '1px solid #FECACA' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#DC2626', fontWeight: 700, fontSize: '0.8rem', marginBottom: '6px' }}>
                        <X size={15} />
                        <span>TRADITIONAL PLANT / EXCEL</span>
                      </div>
                      <p style={{ color: '#7F1D1D', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                        {row.traditional}
                      </p>
                    </div>

                    <div style={{ backgroundColor: '#EFF6FF', padding: '16px', borderRadius: '10px', border: '1px solid #BFDBFE' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1D4ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '6px' }}>
                        <CheckCircle2 size={15} color="#2563EB" />
                        <span>KESHAV INFO STEELCORE™</span>
                      </div>
                      <p style={{ color: '#1E3A8A', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                        {row.keshav}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zoho Dark CTA Banner */}
      <section style={{ padding: '85px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="zoho-cta-banner">
            <div style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}>
              <div className="section-label" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '16px' }}>
                <span style={{ color: '#93C5FD' }}>MEASURABLE SHOP-FLOOR ROI</span>
              </div>
              <h3 className="heading-font" style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                Achieve Similar Results for Your Fabrication Bay
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
                Speak directly with an industrial software engineer who understands plate nesting, Tekla revision diffs, and erection sequencing.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenConsultation}
                  className="btn btn-primary"
                  style={{ padding: '14px 32px', fontSize: '0.98rem', fontWeight: 700 }}
                >
                  Schedule Technical Plant Assessment &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
