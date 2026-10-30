import React from 'react';
import WhyGenericFails from '../components/WhyGenericFails';
import { 
  AlertTriangle, 
  ArrowRight,
  Sparkles,
  Layers,
  FileWarning,
  Receipt,
  Truck,
  Scale,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function WhyGenericFailsPage({ onOpenConsultation }) {
  const deepReasons = [
    {
      num: "01",
      icon: <Layers size={20} color="#2563EB" />,
      gradient: "linear-gradient(135deg, #1E40AF, #2563EB)",
      title: "Plate Remnants & Geometric Scrap vs Static SKUs",
      costOfFailure: "₹1.2 Cr - ₹2.4 Cr Lost Annually",
      badgeColor: "#EF4444",
      desc: "In generic ERPs (SAP, Tally, Zoho Books), materials are treated as discrete inventory items (like bolts or boxes). But heavy steel plates (e.g. 2500x12000x25mm) are cut into irregular gussets and stiffeners, leaving non-standard L-shaped remnants. Generic software forces plants to write off this 1.2 MT remnant as floor scrap. Keshav Info tags every remnant with a CNC QR ID, tracks its dimensional geometry, and reserves it for upcoming bracket jobs."
    },
    {
      num: "02",
      icon: <FileWarning size={20} color="#D97706" />,
      gradient: "linear-gradient(135deg, #D97706, #F59E0B)",
      title: "Tekla Model Revision Chaos (R0 -> R4)",
      costOfFailure: "40 - 80 Man-Hours Lost Per Revision",
      badgeColor: "#D97706",
      desc: "When architectural consultants alter a portal span or hole pitch mid-fabrication, generic systems have no CAD bridge. Engineers must manually cross-reference 2,000+ part marks in Excel. Inevitably, outdated drawings reach cutting tables, resulting in scrapped fabricated beams that cannot be salvaged. Keshav Info performs automated 3D delta-diffing between .NC1 models, instantly freezing plasma tables for revised marks."
    },
    {
      num: "03",
      icon: <Receipt size={20} color="#E11D48" />,
      gradient: "linear-gradient(135deg, #BE123C, #F43F5E)",
      title: "Piece-Rate Contractor Duplicate Billing",
      costOfFailure: "1.5% to 2.2% Direct Labor Overcharge",
      badgeColor: "#E11D48",
      desc: "Heavy fabrication labor is contracted by tonnage (e.g. ₹4.80/kg for tacking, ₹6.50/kg for SAW welding). In manual ledgers, contractors frequently bill twice for the same column or rafter across different fortnights. Keshav Info locks contractor payables directly to digital NABL ultrasonic test signoffs. Once a part mark is paid for a stage, the system permanently prevents duplicate claims."
    },
    {
      num: "04",
      icon: <Truck size={20} color="#7C3AED" />,
      gradient: "linear-gradient(135deg, #6D28D9, #8B5CF6)",
      title: "Sequence-Wise Erection Loading vs Site Reality",
      costOfFailure: "₹35,000 - ₹50,000/day Crane Detention",
      badgeColor: "#7C3AED",
      desc: "Generic logistics modules dispatch whatever is finished and painted first. If roof rafters and sag rods arrive on a remote jobsite weeks before foundation anchor bolts and base columns are installed, the developer's 80-tonne mobile crane sits idle at immense daily detention costs. Keshav Info forces trailers to load in foundation sequence order."
    },
    {
      num: "05",
      icon: <Scale size={20} color="#059669" />,
      gradient: "linear-gradient(135deg, #047857, #10B981)",
      title: "Mother Coil Weighbridge & Slitting Scrap Discrepancies",
      costOfFailure: "1.2% - 2.0% Unaccounted Steel Variance",
      badgeColor: "#059669",
      desc: "Generic accounting software records coils by book quantity. It cannot account for the gross-to-tare electronic weighbridge readings, edge trim scrap %, and multi-job nesting optimization required by purlin and roll-forming plants. Keshav Info automates the 2D cutting stock calculation, driving slitting yields above 97%."
    },
    {
      num: "06",
      icon: <ShieldCheck size={20} color="#0284C7" />,
      gradient: "linear-gradient(135deg, #0369A1, #0284C7)",
      title: "Mill Heat Number & NABL Ultrasonic Inspection Pedigree",
      costOfFailure: "Structural Liability & Delayed Retention Payouts",
      badgeColor: "#0284C7",
      desc: "Institutional developers (L&T, Tata Projects) withhold final 15% retention money until every structural member has an audited Mill Test Certificate (MTC) from Tata/JSW. Generic ERPs cannot associate a fabricated beam back to the mother plate's heat number. Keshav Info maintains an immutable digital pedigree from coil inward to site erection."
    }
  ];

  return (
    <div style={{ paddingTop: '86px', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* Header Banner (Zoho ERP Style) */}
      <section style={{ padding: '70px 0 60px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>
            <AlertTriangle size={14} color="#D97706" />
            <span>THE STRUCTURAL STEEL REALITY</span>
          </div>
          <h1 
            className="heading-font" 
            style={{ 
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
              fontWeight: 800, 
              color: '#0F172A', 
              marginBottom: '18px',
              lineHeight: 1.15,
              letterSpacing: '-0.025em'
            }}
          >
            Technical Audit: PEB Fabrication Requirements vs Standard Enterprise ERPs
          </h1>
          <p style={{ color: '#475569', fontSize: '1.08rem', lineHeight: 1.7, maxWidth: '780px', margin: '0 auto 32px' }}>
            Structural steel manufacturing demands geometry-aware remnant tracking, direct CAD revision diffing, 
            and sequenced erection logistics that standard commercial accounting packages cannot coordinate.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenConsultation}
              className="btn btn-primary"
              style={{ padding: '14px 30px', fontSize: '0.96rem', fontWeight: 700 }}
            >
              <span>Schedule Plant Technical Audit</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Embedded Comparison Matrix */}
      <div>
        <WhyGenericFails onOpenConsultation={onOpenConsultation} />
      </div>

      {/* Deep Technical Analysis Grid */}
      <section style={{ padding: '85px 0 95px', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <div className="section-label" style={{ marginBottom: '14px' }}>
                <Sparkles size={14} color="#2563EB" />
                <span>ROOT CAUSE ANALYSIS</span>
              </div>
              <h2 className="heading-font" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', margin: 0 }}>
                The 6 Critical Breakdown Points of Generic Software on Shop Floors
              </h2>
              <p style={{ color: '#64748B', fontSize: '1rem', marginTop: '10px' }}>
                Why standard business ERPs fail to deliver ROI in structural steel and PEB manufacturing
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '26px', marginBottom: '60px' }}>
              {deepReasons.map((item, idx) => (
                <div 
                  key={idx}
                  className="card zoho-card-lift"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #E2E8F0',
                    borderRadius: '18px',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div 
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '12px',
                            background: item.gradient,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFFFFF',
                            boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)'
                          }}
                        >
                          {item.icon}
                        </div>
                        <span className="mono" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>
                          {item.num}
                        </span>
                      </div>
                      <span 
                        className="mono" 
                        style={{ 
                          fontSize: '0.72rem', 
                          fontWeight: 700, 
                          padding: '4px 10px', 
                          borderRadius: '6px', 
                          backgroundColor: `${item.badgeColor}12`, 
                          color: item.badgeColor,
                          border: `1px solid ${item.badgeColor}30`,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {item.costOfFailure}
                      </span>
                    </div>

                    <h3 className="heading-font" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px', lineHeight: 1.3 }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Alternating Visual Highlight Card (Zoho Style) */}
            <div 
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '20px',
                border: '1.5px solid #E2E8F0',
                padding: '44px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '40px',
                alignItems: 'center',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)'
              }}
            >
              <div>
                <div className="badge-tech badge-emerald" style={{ marginBottom: '14px' }}>
                  <span>THE PROVEN SOLUTION</span>
                </div>
                <h3 className="heading-font" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px', lineHeight: 1.25 }}>
                  Mathematical Precision Over Generic Inventory SKUs
                </h3>
                <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '22px' }}>
                  Keshav Info SteelCore™ does not force your plant into a retail box. We engineer dedicated hardware hooks with weighbridges, 
                  native Tekla CAD streaming, and barcode scanning at every physical fabrication bay.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '26px' }}>
                  <div className="zoho-check-item">
                    <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                    <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>3.8% Raw steel recovered from automated plate off-cut reservations</span>
                  </div>
                  <div className="zoho-check-item">
                    <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                    <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>Zero duplicate piece-rate labor billing claims across fortnights</span>
                  </div>
                  <div className="zoho-check-item">
                    <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                    <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>Zero mobile crane detention penalties through sequence loading</span>
                  </div>
                </div>
                <button onClick={onOpenConsultation} className="btn btn-primary" style={{ padding: '13px 26px', fontSize: '0.94rem' }}>
                  Request Shop-Floor Assessment &rarr;
                </button>
              </div>

              <div className="zoho-img-frame">
                <img src="/case-study-factory.png" alt="Heavy PEB Fabrication Plant" className="zoho-img-zoom" />
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
                <span style={{ color: '#93C5FD' }}>BENCHMARK YOUR OPERATION</span>
              </div>
              <h3 className="heading-font" style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                Benchmark Your Shop-Floor Operation Against Industry Leaders
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
                Let our industrial systems engineers evaluate your current ERP or Excel setup during a confidential 45-minute technical review.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenConsultation}
                  className="btn btn-primary"
                  style={{ padding: '14px 32px', fontSize: '0.98rem', fontWeight: 700 }}
                >
                  Schedule Confidential Plant Audit &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
