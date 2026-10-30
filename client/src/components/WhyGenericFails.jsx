import React from 'react';
import { 
  CheckCircle2, 
  X, 
  ArrowRight,
  TrendingDown,
  Layers,
  FileWarning,
  Receipt,
  Truck
} from 'lucide-react';

export default function WhyGenericFails({ onOpenConsultation }) {
  const comparisons = [
    {
      title: "Plate Remnants & Nesting Scrap",
      icon: <Layers size={18} color="#2563EB" />,
      genericTitle: "Generic ERPs (SAP, Tally, Zoho Books)",
      genericApproach: "Treats steel plates as static SKU inventory. When a 25mm plate is cut into cleats, the irregular 1.4 MT leftover is written off as floor scrap or lost in the yard without geometric dimensions.",
      genericCost: "₹1.2 Cr - ₹2.4 Cr Scrap Written Off",
      keshavTitle: "Keshav Info SteelCore™ Algorithm",
      keshavApproach: "Registers every plate off-cut remnant with a 2D QR tag, geometric dimensions, and Mill Heat Number. Our algorithm reserves it for upcoming bracket jobs, recovering 3.8% raw steel.",
      impact: "₹1.2 Cr - ₹2.4 Cr Scrap Recovery"
    },
    {
      title: "Tekla Model Revisions (R0 to R4)",
      icon: <FileWarning size={18} color="#D97706" />,
      genericTitle: "Manual Spreadsheet Re-entry",
      genericApproach: "When client structural consultants revise drawings, engineers manually re-type thousands of part marks into spreadsheets. Outdated drawings reach the shop floor, resulting in scrapped beams.",
      genericCost: "40 - 80 Man-Hours Lost Per Revision",
      keshavTitle: "Automated 3D Delta-Diffing Engine",
      keshavApproach: "Direct Tekla Structures .IFC and .NC1 model synchronization with automated delta-diffing. If a rafter taper changes, CNC plasma tables are automatically locked with visual revision warnings.",
      impact: "Zero Mismatched Part-Mark Rework"
    },
    {
      title: "Piece-Rate Contractor Duplicate Billing",
      icon: <Receipt size={18} color="#E11D48" />,
      genericTitle: "Handwritten Supervisor Ledgers",
      genericApproach: "Plant supervisors approve contractor invoices on handwritten daily logbooks. Sub-contractors routinely bill twice for the same column fit-up or welding across different fortnights.",
      genericCost: "1.5% - 2.2% Direct Labor Overcharge",
      keshavTitle: "NABL Inspection Gated Payables",
      keshavApproach: "Piece-rate fabrication contractor payables are tied directly to barcoded NABL ultrasonic and visual QA inspection gates. Duplicate claims on the same part mark are mathematically impossible.",
      impact: "1.5% Labor Leakage Plugged"
    },
    {
      title: "Sequence-Wise Dispatch vs Site Ground Reality",
      icon: <Truck size={18} color="#7C3AED" />,
      genericTitle: "Random Trailer Loading",
      genericApproach: "Generic logistics modules ship whatever is completed first. Roof purlins and sag rods arrive on site weeks before base columns and anchor bolts are ready.",
      genericCost: "₹35,000 - ₹50,000/day Crane Detention",
      keshavTitle: "Foundation Sequence Verification",
      keshavApproach: "Our sequence loading engine verifies foundation ground readiness before clearing trailers for dispatch. Base columns and anchor bolts are dispatched first, preventing crane detention penalties.",
      impact: "Zero Mobile Crane Detention Penalties"
    }
  ];

  return (
    <section 
      id="why-generic-fails"
      style={{
        padding: '75px 0',
        backgroundColor: '#F8FAFC',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 48px' }}>
          <div className="badge-tech badge-amber" style={{ marginBottom: '14px' }}>
            <span>THE STRUCTURAL STEEL REALITY</span>
          </div>
          <h2 
            className="heading-font"
            style={{
              fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#0F172A',
              marginBottom: '14px',
              lineHeight: 1.2
            }}
          >
            Structural Steel Bottlenecks Unhandled by Standard Enterprise Software
          </h2>
          <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.65 }}>
            Structural steel fabrication involves non-standard geometries, volatile raw material weights, 
            and sequenced erection loading that generic accounting packages cannot coordinate.
          </p>
        </div>

        {/* High-Contrast Comparison Cards (Zoho ERP Style) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '1060px', margin: '0 auto 48px' }}>
          {comparisons.map((item, idx) => (
            <div 
              key={idx}
              className="card zoho-card-lift"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '30px',
                borderRadius: '16px',
                border: '1.5px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <h3 className="heading-font" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                    {idx + 1}. {item.title}
                  </h3>
                </div>
                <span className="mono" style={{ fontSize: '0.78rem', color: '#059669', padding: '4px 12px', borderRadius: '6px', background: '#ECFDF5', border: '1px solid #A7F3D0', fontWeight: 700 }}>
                  {item.impact}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '20px' }}>
                {/* Generic ERP Flaw */}
                <div 
                  style={{
                    backgroundColor: '#FEF2F2',
                    border: '1.5px solid #FECACA',
                    borderRadius: '12px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#DC2626', fontWeight: 700, fontSize: '0.82rem' }}>
                        <X size={16} />
                        <span>{item.genericTitle}</span>
                      </div>
                      <span className="mono" style={{ fontSize: '0.68rem', color: '#B91C1C', fontWeight: 700, padding: '2px 6px', background: '#FEE2E2', borderRadius: '4px' }}>
                        DEFICIENCY
                      </span>
                    </div>
                    <p style={{ color: '#7F1D1D', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>
                      {item.genericApproach}
                    </p>
                  </div>
                  <div className="mono" style={{ fontSize: '0.74rem', color: '#991B1B', fontWeight: 700, marginTop: '14px', borderTop: '1px dashed #FECACA', paddingTop: '10px' }}>
                    Failure Cost: {item.genericCost}
                  </div>
                </div>

                {/* Keshav Info Engineering */}
                <div 
                  style={{
                    backgroundColor: '#EFF6FF',
                    border: '1.5px solid #BFDBFE',
                    borderRadius: '12px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1D4ED8', fontWeight: 700, fontSize: '0.82rem' }}>
                        <CheckCircle2 size={16} color="#2563EB" />
                        <span>{item.keshavTitle}</span>
                      </div>
                      <span className="mono" style={{ fontSize: '0.68rem', color: '#1D4ED8', fontWeight: 700, padding: '2px 6px', background: '#DBEAFE', borderRadius: '4px' }}>
                        PROPRIETARY ENGINE
                      </span>
                    </div>
                    <p style={{ color: '#1E3A8A', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>
                      {item.keshavApproach}
                    </p>
                  </div>
                  <div className="mono" style={{ fontSize: '0.74rem', color: '#047857', fontWeight: 700, marginTop: '14px', borderTop: '1px dashed #BFDBFE', paddingTop: '10px' }}>
                    Audited Result: {item.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout Bar */}
        <div 
          style={{
            maxWidth: '1060px',
            margin: '0 auto',
            padding: '28px 36px',
            borderRadius: '16px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <TrendingDown size={22} color="#2563EB" />
            </div>
            <div>
              <h4 style={{ color: '#0F172A', fontSize: '1.12rem', fontWeight: 800, marginBottom: '4px' }}>
                Want to see how your plant workflow compares?
              </h4>
              <p style={{ color: '#64748B', fontSize: '0.9rem', margin: 0 }}>
                Our industrial systems architects conduct a confidential 45-minute technical audit of your shop floor.
              </p>
            </div>
          </div>

          <button 
            onClick={onOpenConsultation}
            className="btn btn-primary"
            style={{ padding: '12px 24px', fontSize: '0.92rem', fontWeight: 700 }}
          >
            <span>Schedule Technical Audit</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
