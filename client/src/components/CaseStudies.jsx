import React, { useState } from 'react';
import { 
  MapPin, 
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Quote
} from 'lucide-react';

export default function CaseStudies({ onOpenConsultation }) {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      title: "1,200 MT/Mo Heavy Structural Steel & PEB Fabrication Facility",
      facilityType: "Turnkey PEB Manufacturer",
      location: "Western Industrial Corridor, Gujarat",
      scale: "32-Acre Yard • 4 Heavy SAW Welding Bays • 1,200 MT/Mo",
      image: "/case-study-factory.png",
      challenge: "The facility was struggling with frequent Tekla drawing revisions (R0 to R3) that failed to reach plasma cutting tables in time, resulting in scrapped plates. Sub-contractor piece-rate welding claims recorded in paper notebooks caused 2% duplicate billing. Dispatches were loaded randomly, causing site cranes to sit idle.",
      solution: "Implemented Keshav Info SteelCore™ ERP with TeklaBridge™ automated 3D model parsing, 8-stage physical barcoded shop-floor gating, and sequence-wise trailer load optimization.",
      metrics: [
        { label: "Plate Scrap Saved", value: "3.6%", note: "Direct ₹1.42 Cr annual raw steel recovery", color: "#2563EB" },
        { label: "Turnaround Time", value: "-22 Days", note: "From BOQ release to final site erection", color: "#059669" },
        { label: "Site Crane Idling", value: "0 Hours", note: "Base columns always arrived first", color: "#D97706" },
        { label: "Contractor Leakage", value: "0 Duplicate", note: "Payables locked to ultrasonic NABL signoffs", color: "#7C3AED" }
      ],
      quote: "Keshav Info understands our shop floor at a level generic software companies never could. They understand plate nesting, submerged arc welding, Tekla revision diffs, and erection sequencing from direct plant experience.",
      author: "Vice President of Operations",
      company: "1,200 MT/Mo Structural Steel Fabricator"
    },
    {
      title: "850 MT/Mo High-Tensile Purlin & Coil Roll-Forming Center",
      facilityType: "Coil Service & Roll-Forming Center",
      location: "Central Industrial Manufacturing Zone, India",
      scale: "18-Acre High-Speed Slitting & Purlin Profiling Facility",
      image: "/coiltrack-slitting.png",
      challenge: "Manual weighbridge data entry created daily reconciliation gaps between incoming JSW/Tata coils and slit purlin output. Reconstructing Mill Test Certificates (MTC) for audits required digging through paper filing cabinets.",
      solution: "Deployed Keshav Info CoilTrack™ with live electronic weighbridge integration, multi-job slitting scrap optimizer, and automated 1-click Dispatch Gate Pass with QR code verification.",
      metrics: [
        { label: "Slitting Scrap Rate", value: "2.92%", note: "Down from 4.8% on standard profiles", color: "#059669" },
        { label: "Gate Pass Speed", value: "90s", note: "Down from 45 minutes of manual paperwork", color: "#2563EB" },
        { label: "Mill Heat Traceability", value: "100%", note: "Audit-ready with instant NABL cert retrieval", color: "#D97706" },
        { label: "Coil Reconciliation", value: "Real-time", note: "Zero inventory discrepancies at month end", color: "#7C3AED" }
      ],
      quote: "Our truck queues used to back up outside the gate for hours while clerks typed e-way bills. Now, our trailers clear security in under two minutes with complete heat number pedigree.",
      author: "Plant Head & General Manager",
      company: "850 MT/Mo High-Tensile Coil Service Center"
    },
    {
      title: "Turnkey EPC Industrial Infrastructure & Warehousing Contractor",
      facilityType: "EPC Logistics Park Developer",
      location: "Industrial Logistics Hub, India",
      scale: "45-Acre Logistics Park • 6 Multi-Bay Warehouses",
      image: "/erectsync-field-app.png",
      challenge: "The developer's client was withholding 15% retention payments because structural milestone progress and non-destructive testing (NDT) reports were buried in email attachments and physical paper folders.",
      solution: "Deployed a dedicated Keshav Info EPC Client Portal featuring an interactive 3D structural model viewer, real-time dispatched vs erected tonnage tracking, and digital NABL inspection sign-offs.",
      metrics: [
        { label: "Milestone Billing Cycle", value: "4 Days", note: "Reduced from 26 days of manual verification", color: "#2563EB" },
        { label: "Retention Release", value: "100%", note: "Instant access to all certified QA documents", color: "#059669" },
        { label: "Client Satisfaction", value: "5 / 5", note: "Praised by institutional investors & consultants", color: "#D97706" },
        { label: "Site DPR Accuracy", value: "Real-time", note: "Geotagged erection photos synced via mobile PWA", color: "#7C3AED" }
      ],
      quote: "Having a dedicated client portal engineered by Keshav Info won us the ₹68 Crore Phase 2 contract. Our enterprise clients were blown away by the live transparency.",
      author: "Managing Director",
      company: "Turnkey Industrial Infrastructure EPC Contractor"
    }
  ];

  return (
    <section 
      id="case-studies"
      style={{
        padding: '85px 0',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="badge-tech" style={{ marginBottom: '14px' }}>
            <span>PROVEN INDUSTRIAL DEPLOYMENTS</span>
          </div>
          <h2 
            className="heading-font"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#0F172A',
              marginBottom: '14px',
              lineHeight: 1.2
            }}
          >
            PEB Plant Deployments &amp; Audited Operational Results
          </h2>
          <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.65 }}>
            Real metrics from structural steel fabricators and coil processors who modernized their operations with Keshav Info.
          </p>
        </div>

        {/* Clean Case Tabs (Zoho Style) */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            marginBottom: '36px'
          }}
        >
          {cases.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCase(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: activeCase === idx ? 700 : 500,
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                backgroundColor: activeCase === idx ? '#2563EB' : '#FFFFFF',
                color: activeCase === idx ? '#FFFFFF' : '#475569',
                border: activeCase === idx ? '1px solid #1D4ED8' : '1px solid #CBD5E1',
                boxShadow: activeCase === idx ? '0 6px 18px rgba(37, 99, 235, 0.25)' : '0 1px 3px rgba(15, 23, 42, 0.04)',
                transform: activeCase === idx ? 'translateY(-2px)' : 'none'
              }}
            >
              <Building2 size={16} />
              <span>Plant 0{idx + 1}: {c.facilityType}</span>
            </button>
          ))}
        </div>

        {/* Active Case Card (Zoho ERP Alternating Layout) */}
        {(() => {
          const item = cases[activeCase];
          return (
            <div 
              className="card zoho-card-lift"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1.5px solid #E2E8F0',
                padding: '40px',
                maxWidth: '1100px',
                margin: '0 auto',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)'
              }}
            >
              {/* Header Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '28px', borderBottom: '1px solid #F1F5F9', paddingBottom: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span className="badge-tech badge-emerald" style={{ fontSize: '0.72rem', padding: '3px 10px' }}>
                      AUDITED PRODUCTION CASE
                    </span>
                    <span className="mono" style={{ fontSize: '0.8rem', color: '#64748B' }}>
                      {item.scale}
                    </span>
                  </div>
                  <h3 className="heading-font" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px', lineHeight: 1.25 }}>
                    {item.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#64748B' }}>
                    <MapPin size={16} color="#2563EB" /> 
                    <span>{item.location}</span>
                  </div>
                </div>

                <button 
                  onClick={onOpenConsultation}
                  className="btn btn-primary"
                  style={{ padding: '11px 22px', fontSize: '0.9rem', fontWeight: 700 }}
                >
                  <span>Request Full Case Study</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* Challenge vs Deployment Side-by-Side */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px', marginBottom: '32px' }}>
                <div style={{ backgroundColor: '#FEF2F2', padding: '22px', borderRadius: '14px', border: '1.5px solid #FEE2E2' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#DC2626', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.04em', marginBottom: '10px' }}>
                    <AlertTriangle size={16} />
                    <span>THE SHOP-FLOOR CHALLENGE</span>
                  </div>
                  <p style={{ color: '#991B1B', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    {item.challenge}
                  </p>
                </div>

                <div style={{ backgroundColor: '#EFF6FF', padding: '22px', borderRadius: '14px', border: '1.5px solid #DBEAFE' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2563EB', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.04em', marginBottom: '10px' }}>
                    <CheckCircle2 size={16} color="#2563EB" />
                    <span>KESHAV INFO DEPLOYMENT</span>
                  </div>
                  <p style={{ color: '#1E3A8A', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* 4 Audited Metric Cards */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '16px',
                  marginBottom: '32px'
                }}
              >
                {item.metrics.map((m, idx) => (
                  <div 
                    key={idx}
                    style={{
                      backgroundColor: '#F8FAFC',
                      padding: '20px',
                      borderRadius: '12px',
                      border: '1px solid #E2E8F0',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div className="heading-font" style={{ fontSize: '1.85rem', fontWeight: 800, color: m.color, lineHeight: 1 }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', marginTop: '8px' }}>
                      {m.label}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '4px', lineHeight: 1.5 }}>
                      {m.note}
                    </div>
                  </div>
                ))}
              </div>

              {/* Executive Testimonial Quote */}
              <div 
                style={{
                  padding: '26px 30px',
                  borderRadius: '14px',
                  backgroundColor: '#F8FAFC',
                  border: '1.5px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '18px'
                }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Quote size={20} color="#2563EB" />
                </div>
                <div>
                  <p style={{ fontStyle: 'italic', color: '#334155', fontSize: '0.96rem', lineHeight: 1.7, margin: '0 0 10px' }}>
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.86rem' }}>
                      {item.author}
                    </span>
                    <span style={{ color: '#CBD5E1' }}>&bull;</span>
                    <span style={{ color: '#64748B', fontSize: '0.84rem' }}>
                      {item.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
