import React from 'react';
import RoiCalculator from '../components/RoiCalculator';
import { 
  Calculator, 
  TrendingDown, 
  ShieldCheck, 
  Truck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Factory
} from 'lucide-react';

export default function RoiCalculatorPage({ onOpenConsultation }) {
  const assumptions = [
    {
      title: "Plate & Coil Nesting Scrap (3.8% Recovery)",
      icon: <TrendingDown size={20} color="#2563EB" />,
      gradient: "linear-gradient(135deg, #1E40AF, #2563EB)",
      detail: "Based on empirical data across 18 heavy structural plants replacing manual nesting with Keshav Info's automated 2D remnant reservation algorithm, recovering off-cuts as reusable geometry."
    },
    {
      title: "Piece-Rate Contractor Overcharge (1.5% Recovery)",
      icon: <ShieldCheck size={20} color="#059669" />,
      gradient: "linear-gradient(135deg, #047857, #10B981)",
      detail: "Eliminates duplicate billing claims, inflated part weights, and unverified stage progression by mathematically locking contractor payouts directly to digital NABL ultrasonic test signoffs."
    },
    {
      title: "Crane & Trailer Detention Avoidance (₹35,000/day Saved)",
      icon: <Truck size={20} color="#D97706" />,
      gradient: "linear-gradient(135deg, #D97706, #F59E0B)",
      detail: "Mobile site cranes never sit idle waiting for missing foundation anchor bolts or base columns because trailers are strictly dispatched in ground erection sequence order."
    }
  ];

  const plantTiers = [
    {
      scale: "Small Plant / Job Shop",
      tonnage: "250 MT / Month",
      projectedSavings: "₹28.4 Lakhs / Year",
      payback: "~3.8 Weeks",
      features: [
        "Plate off-cut QR remnant yard",
        "Weighbridge gross/tare capture",
        "Piece-rate contractor gate check"
      ]
    },
    {
      scale: "Mid-Size PEB Manufacturer",
      tonnage: "750 MT / Month",
      projectedSavings: "₹85.2 Lakhs / Year",
      payback: "~3.1 Weeks",
      featured: true,
      features: [
        "Tekla 3D model revision delta diffing",
        "8-stage physical bay barcode gates",
        "Multi-order coil slitting optimizer",
        "Sequence trailer dispatch planner"
      ]
    },
    {
      scale: "Heavy Infrastructure Facility",
      tonnage: "1,500+ MT / Month",
      projectedSavings: "₹1.72 Cr+ / Year",
      payback: "~2.4 Weeks",
      features: [
        "All enterprise modules included",
        "Dedicated EPC client transparency portal",
        "Offline-first field erection PWA",
        "NABL & MTC metallurgical audit vault"
      ]
    }
  ];

  return (
    <div style={{ paddingTop: '86px', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* Header Banner (Zoho ERP Style) */}
      <section style={{ padding: '70px 0 60px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '880px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>
            <Calculator size={14} color="#2563EB" />
            <span>ENTERPRISE FINANCIAL MODELING</span>
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
            Interactive PEB Tonnage &amp; Cashflow Calculator
          </h1>
          <p style={{ color: '#475569', fontSize: '1.08rem', lineHeight: 1.7, maxWidth: '760px', margin: '0 auto 32px' }}>
            Quantify how much capital is leaking from your fabrication bays into scrap bins, 
            contractor duplicate billing, and sequence delays. Adjust monthly tonnage to see instant projected savings.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenConsultation}
              className="btn btn-primary"
              style={{ padding: '14px 28px', fontSize: '0.96rem', fontWeight: 700 }}
            >
              <span>Validate Model for Your Facility</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Embedded Calculator */}
      <div>
        <RoiCalculator onOpenConsultation={onOpenConsultation} />
      </div>

      {/* Tonnage Benchmark Tier Cards (Zoho ERP Style) */}
      <section style={{ padding: '85px 0', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
            <div className="section-label" style={{ marginBottom: '14px' }}>
              <Factory size={14} color="#2563EB" />
              <span>SAVINGS BY FACILITY TONNAGE</span>
            </div>
            <h2 className="heading-font" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', margin: 0 }}>
              Expected Annual Cash Recovery by Plant Capacity
            </h2>
            <p style={{ color: '#64748B', fontSize: '1rem', marginTop: '10px' }}>
              Based on audited production records across commercial PEB plants in India
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '26px', maxWidth: '1120px', margin: '0 auto 60px' }}>
            {plantTiers.map((tier, idx) => (
              <div 
                key={idx}
                className="card zoho-card-lift"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  border: tier.featured ? '2px solid #2563EB' : '1.5px solid #E2E8F0',
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: tier.featured ? '0 12px 36px rgba(37, 99, 235, 0.12)' : '0 4px 14px rgba(15, 23, 42, 0.03)',
                  position: 'relative'
                }}
              >
                {tier.featured && (
                  <span 
                    className="mono" 
                    style={{ 
                      position: 'absolute', 
                      top: '-12px', 
                      right: '24px', 
                      backgroundColor: '#2563EB', 
                      color: '#FFFFFF', 
                      fontSize: '0.72rem', 
                      fontWeight: 800, 
                      padding: '3px 12px', 
                      borderRadius: '9999px',
                      boxShadow: '0 2px 8px rgba(37, 99, 235, 0.4)'
                    }}
                  >
                    MOST COMMON
                  </span>
                )}

                <div>
                  <div style={{ fontSize: '0.88rem', color: '#64748B', fontWeight: 600 }}>{tier.scale}</div>
                  <div className="heading-font" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginTop: '4px', marginBottom: '16px' }}>
                    {tier.tonnage}
                  </div>

                  <div style={{ padding: '16px', backgroundColor: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '22px' }}>
                    <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>ESTIMATED ANNUAL CASHFLOW RETENTION</div>
                    <div className="heading-font" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#2563EB', marginTop: '4px' }}>
                      {tier.projectedSavings}
                    </div>
                    <div className="mono" style={{ fontSize: '0.76rem', color: '#059669', fontWeight: 700, marginTop: '4px' }}>
                      Payback Period: {tier.payback}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                    {tier.features.map((f, fIdx) => (
                      <div key={fIdx} className="zoho-check-item" style={{ padding: '4px 0' }}>
                        <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                        <span style={{ fontSize: '0.88rem', color: '#334155', fontWeight: 500 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={onOpenConsultation}
                  className={tier.featured ? "btn btn-primary" : "btn btn-secondary"}
                  style={{ width: '100%', padding: '12px', fontSize: '0.92rem', fontWeight: 700 }}
                >
                  Model This Tonnage &rarr;
                </button>
              </div>
            ))}
          </div>

          {/* Methodology & Assumptions */}
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <div className="section-label" style={{ marginBottom: '12px' }}>
                <Sparkles size={14} color="#2563EB" />
                <span>AUDITED PLANT BENCHMARKS</span>
              </div>
              <h3 className="heading-font" style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                Calculation Methodology &amp; Empirical Assumptions
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {assumptions.map((item, idx) => (
                <div 
                  key={idx} 
                  className="card zoho-card-lift" 
                  style={{ 
                    backgroundColor: '#FFFFFF', 
                    border: '1.5px solid #E2E8F0', 
                    borderRadius: '16px', 
                    padding: '28px', 
                    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: item.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.12)' }}>
                      {item.icon}
                    </div>
                    <div style={{ color: '#0F172A', fontWeight: 800, fontSize: '1.05rem', lineHeight: 1.3 }}>
                      {item.title}
                    </div>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                    {item.detail}
                  </p>
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
                <span style={{ color: '#93C5FD' }}>VALIDATE YOUR BUSINESS CASE</span>
              </div>
              <h3 className="heading-font" style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                Schedule a Plant Financial Feasibility Review
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
                Our systems architects work with your CFO and plant directors to plug in your exact steel purchase invoices, plate scrap logs, and contractor rates.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenConsultation}
                  className="btn btn-primary"
                  style={{ padding: '14px 32px', fontSize: '0.98rem', fontWeight: 700 }}
                >
                  Validate Financial Model for Your Plant &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
