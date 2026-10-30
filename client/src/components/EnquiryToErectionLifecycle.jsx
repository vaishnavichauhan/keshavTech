import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Compass, 
  Scale, 
  Scissors, 
  Cpu, 
  ShieldCheck, 
  Truck, 
  HardHat, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EnquiryToErectionLifecycle({ onOpenConsultation }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'enquiry',
      stepNum: '01',
      shortTitle: 'Enquiry & Estimation',
      title: 'Structural Enquiry & Rapid Cost Estimation',
      subtitle: 'From Client RFQ to Accurate Tonnage BOQ in Under 4 Hours',
      icon: <FileSpreadsheet size={20} />,
      color: '#8B5CF6',
      bgLight: '#F5F3FF',
      border: '#DDD6FE',
      badge: 'STAGE 1: SALES & ESTIMATION',
      description: 'Ingests architectural sketches, MBS models, and Excel takeoffs to calculate automated tonnage breakdowns by section type with live steel market price indexes and freight formulas.',
      capabilities: [
        'Multi-section tonnage BOQ: Built-up plates, HR sections & purlins',
        'Dynamic steel rate buffers tied to Tata/JSW base + freight index',
        'Instant client quotation generation with revision tracking (Q0–Q5)'
      ],
      bottleneckSolved: {
        before: 'Manual Excel takeoffs taking 3-5 days with 6-8% estimation errors.',
        after: 'Automated 4-hour quote turnaround with 99.4% tonnage accuracy.'
      },
      telemetrySnippet: 'QUOTE #EST-2026-88 • 840 MT Portal Frame • 99.4% Accuracy'
    },
    {
      id: 'design',
      stepNum: '02',
      shortTitle: 'Tekla 3D & Detailing',
      title: 'Tekla Structures .NC1 & 3D BIM Sync',
      subtitle: 'Automated Delta-Diffing Between Client Drawing Revisions (R0 -> R4)',
      icon: <Compass size={20} />,
      color: '#10B981',
      bgLight: '#ECFDF5',
      border: '#A7F3D0',
      badge: 'STAGE 2: ENGINEERING & DETAILING',
      description: 'Integrates directly with Tekla Structures via .NC1 & .IFC parsers, diffing client drawing revisions in real time and auto-freezing plasma tables for changed part marks.',
      capabilities: [
        'Direct Tekla .NC1 and .IFC model import with zero manual data entry',
        'Automatic 3D revision diffing: identifies altered hole pitches & marks',
        'Instant freeze signal sent directly to CNC cutting bays for revised marks'
      ],
      bottleneckSolved: {
        before: 'Consultant changes drawing; old columns get welded and scrapped (₹4.5L loss).',
        after: 'Instant digital lock on revised parts; operators receive live red alerts on tablet.'
      },
      telemetrySnippet: 'TEKLA REV 03 INGESTED • 1,248 Part Marks Synced • 42 Frozen'
    },
    {
      id: 'inward',
      stepNum: '03',
      shortTitle: 'Weighbridge & Inward',
      title: 'Electronic Weighbridge & Mill MTC Pedigree',
      subtitle: 'Gross-to-Tare Automated Capture & 100% Heat Number Traceability',
      icon: <Scale size={20} />,
      color: '#F97316',
      bgLight: '#FFF7ED',
      border: '#FED7AA',
      badge: 'STAGE 3: RAW MATERIAL INWARD',
      description: 'Direct RS232 electronic weighbridge connection with IP cameras. Locks gross, tare, and net weights to certified Tata/JSW Mill Test Certificates (MTC) with QR tags.',
      capabilities: [
        'Direct hardware drivers for Avery Weigh-Tronix, Essae, and Rice Lake',
        'ANPR truck license plate capture + weighbridge CCTV snapshot archive',
        'MTC verification against IS 2062 Grade E250 / E350 BR standards'
      ],
      bottleneckSolved: {
        before: 'Paper weighbridge slips and manual registers allowing 1.5% - 2.0% pilferage.',
        after: 'Direct serial port lock; weights and heat numbers cannot be manipulated.'
      },
      telemetrySnippet: 'WEIGHBRIDGE INWARD #WB-4910 • 28.45 MT • Heat: HT-8812-C Verified'
    },
    {
      id: 'nesting',
      stepNum: '04',
      shortTitle: '2D Nesting & Slitting',
      title: 'Plate Nesting & Raw Coil Slit Yield Optimizer',
      subtitle: 'Slit Yields Above 97% & Permanent QR Remnant Reservation',
      icon: <Scissors size={20} />,
      color: '#475569',
      bgLight: '#F1F5F9',
      border: '#CBD5E1',
      badge: 'STAGE 4: CUTTING & SLITTING OPTIMIZER',
      description: 'Multi-order 2D cutting stock algorithms for CNC plasma and coil slitting lines. Achieves slit yields above 97% and tags irregular offcuts in a digital remnant yard.',
      capabilities: [
        '2D geometric cutting stock optimization across simultaneous projects',
        'Coil slitting pattern calculator for purlins reducing edge trim scrap',
        'Remnant QR tagging: irregular offcuts auto-nested into upcoming brackets'
      ],
      bottleneckSolved: {
        before: 'Discarding 1.2 MT plate remnants as floor scrap (₹85,000 lost per plate).',
        after: 'Remnant tagged in digital yard; algorithm auto-nests brackets into saved offcuts.'
      },
      telemetrySnippet: 'NESTING JOB #NST-104 • 12mm Plate Yield: 96.8% • Remnant Archived'
    },
    {
      id: 'shopfloor',
      stepNum: '05',
      shortTitle: 'Shop Bay Control',
      title: '8-Stage Physical Bay Control & Barcode Gating',
      subtitle: 'From CNC Cutting Table to Fit-Up, SAW Welding & Sa 2.5 Shot Blast',
      icon: <Cpu size={20} />,
      color: '#F59E0B',
      bgLight: '#FFFBEB',
      border: '#FDE68A',
      badge: 'STAGE 5: SHOP-FLOOR FABRICATION',
      description: 'Enforces strict 8-stage barcode gates across fabrication bays—from CNC cutting and SAW welding to Sa 2.5 shot blasting and painting. Prevents uninspected members from advancing.',
      capabilities: [
        'Rugged shop supervisor tablet UI with high-contrast, glove-friendly buttons',
        'Real-time machine tracking for SAW gantry welders and radial drills',
        'Sub-assembly fit-up checks against Tekla 3D tolerances (±2mm)'
      ],
      bottleneckSolved: {
        before: 'Unfinished beams bypass welding or blasting, discovered only at loading.',
        after: 'Barcoded gate pass required between bays; zero uninspected members pass.'
      },
      telemetrySnippet: 'BAY 02 SAW WELDER • Beam MCL-01 Passed • Flux AWS F7A2-EM12K'
    },
    {
      id: 'qc',
      stepNum: '06',
      shortTitle: 'NABL QC & Testing',
      title: 'NABL Quality Compliance & Metallurgical Records',
      subtitle: 'Digital Ultrasonic UT, MPI, DFT Paint Logs & Contractor Payables Lock',
      icon: <ShieldCheck size={20} />,
      color: '#06B6D4',
      bgLight: '#ECFEFF',
      border: '#A5F3FC',
      badge: 'STAGE 6: QUALITY ASSURANCE & AUDIT',
      description: 'Replaces paper inspection with digital NABL check-sheets for Ultrasonic (UT) and Magnetic Particle testing. Locks contractor payables until QC signs off compliance.',
      capabilities: [
        '100% Ultrasonic Testing (UT) & Magnetic Particle (MPI) digital records',
        'Dry Film Thickness (DFT) paint log capture with Elcometer gauge link',
        'Single-click generation of 200+ page compliance dossiers for retention release'
      ],
      bottleneckSolved: {
        before: 'Contractors paid before ultrasonic tests, leading to defective welds.',
        after: 'Payables locked in software; contractors cannot claim until QC approves UT.'
      },
      telemetrySnippet: 'QC SIGN-OFF #UT-8902 • 100% Joint Penetration Approved'
    },
    {
      id: 'dispatch',
      stepNum: '07',
      shortTitle: 'Sequence Dispatch',
      title: 'Sequence-Wise Trailer Loading & 90-Sec Gate Pass',
      subtitle: 'Foundations & Columns First • Zero Site Crane Detention Delays',
      icon: <Truck size={20} />,
      color: '#EC4899',
      bgLight: '#FDF2F8',
      border: '#FBCFE8',
      badge: 'STAGE 7: LOGISTICS & SEQUENCE DISPATCH',
      description: 'Validates trailer loading strictly in site erection sequence (foundations first). Computes axle loads, conducts weighbridge re-checks, and auto-generates E-Way Bills in 90 seconds.',
      capabilities: [
        'Erection-sequence trailer packing (Foundation → Columns → Rafters)',
        'Axle load distribution calculator preventing highway overloading penalties',
        'Direct GST E-Way Bill and tax invoice generation in under 90 seconds'
      ],
      bottleneckSolved: {
        before: 'Trailers arrive out of sequence, stranding site cranes (₹35,000/day detention).',
        after: 'Software prevents gate pass unless trailer payload matches foundation sequence.'
      },
      telemetrySnippet: 'DISPATCH #GJ-15-X-9902 • Payload: 26.85 MT • E-Way Bill Active'
    },
    {
      id: 'erection',
      stepNum: '08',
      shortTitle: 'Site Erection PWA',
      title: 'Offline Field Mobile PWA & Progressive RA Billing',
      subtitle: 'Trailer Inward Scanning, Anchor Bolt Verification & Erector Payables',
      icon: <HardHat size={20} />,
      color: '#3B82F6',
      bgLight: '#EFF6FF',
      border: '#BFDBFE',
      badge: 'STAGE 8: SITE ERECTION & BILLING',
      description: 'Offline-first field mobile PWA for construction yards. Site engineers scan trailer QR codes, verify foundation anchor bolts, and file DPRs linking erected tonnage to progressive RA billing.',
      capabilities: [
        'Offline-first IndexedDB architecture functioning without 4G mobile signal',
        'Trailer receiving QR scanner matching manifests against physical members',
        'Progressive RA billing calculator linking erected tonnage to cash milestones'
      ],
      bottleneckSolved: {
        before: 'Weeks of WhatsApp disputes over misplaced parts and site delays.',
        after: 'Scan-verified site delivery with real-time 3D erection progress tracking.'
      },
      telemetrySnippet: 'SITE S-147 • 14 Columns Erected (42.8 MT) • RA Bill #04 Triggered'
    }
  ];

  const current = steps[activeStep];

  return (
    <section 
      style={{
        padding: '90px 0',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 48px' }}>
          <div className="badge-tech badge-amber" style={{ marginBottom: '14px' }}>
            <Sparkles size={13} color="#D97706" />
            <span>COMPLETE INDUSTRIAL WORKFLOW &bull; ENQUIRY TO ERECTION</span>
          </div>
          <h2 
            className="heading-font"
            style={{
              fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#0F172A',
              marginBottom: '14px'
            }}
          >
            How Heavy PEB Plants Run On <span style={{ color: '#2563EB' }}>Keshav Info</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.6, margin: 0 }}>
            Explore the 8 interconnected stages of our specialized operating system. 
            Click any stage arrow on the left to inspect shop-floor controls, automated formulas, and bottlenecks eliminated.
          </p>
        </div>

        {/* 2-Column Layout: Left Side Capsule Arrow Pills & Right Side Content */}
        <div 
          className="lifecycle-layout-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 340px) 1fr',
            gap: '32px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: 8 Capsule Pills with Left Circle Icon and Right Arrow */}
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '12px' 
            }}
          >
            {steps.map((st, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={st.id}
                  onClick={() => setActiveStep(idx)}
                  className={`lifecycle-stage-pill ${isActive ? 'active' : ''}`}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 16px 10px 12px',
                    borderRadius: '9999px',
                    border: `1.5px solid ${isActive ? st.color : st.border}`,
                    backgroundColor: isActive ? st.color : st.bgLight,
                    color: isActive ? '#FFFFFF' : '#1E293B',
                    cursor: 'pointer',
                    boxShadow: isActive 
                      ? `0 10px 24px -4px ${st.color}45, 0 4px 10px -2px rgba(15, 23, 42, 0.08)` 
                      : '0 1px 3px rgba(15, 23, 42, 0.04)',
                    transform: isActive ? 'translateX(6px)' : 'none',
                    position: 'relative'
                  }}
                  aria-label={`Select stage ${st.stepNum}: ${st.shortTitle}`}
                >
                  {/* Left: Circle Icon Container */}
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.22)' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : st.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: isActive ? 'none' : '0 1px 4px rgba(15, 23, 42, 0.08)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {st.icon}
                  </div>

                  {/* Center: Stage Number & Short Title */}
                  <div
                    style={{
                      flex: 1,
                      marginLeft: '12px',
                      marginRight: '8px',
                      textAlign: 'left'
                    }}
                  >
                    <div
                      className="mono"
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: isActive ? 'rgba(255, 255, 255, 0.88)' : st.color,
                        marginBottom: '1px'
                      }}
                    >
                      Stage {st.stepNum}
                    </div>
                    <div
                      className="heading-font"
                      style={{
                        fontSize: '0.94rem',
                        fontWeight: 700,
                        color: isActive ? '#FFFFFF' : '#1E293B',
                        lineHeight: 1.25,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {st.shortTitle}
                    </div>
                  </div>

                  {/* Right: Circular Arrow Button */}
                  <div
                    className="lifecycle-pill-arrow"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.26)' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : st.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: isActive ? 'none' : '0 1px 4px rgba(15, 23, 42, 0.06)'
                    }}
                  >
                    <ChevronRight size={18} strokeWidth={2.6} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Sleek Streamlined Stage Card */}
          <div 
            key={current.id}
            className="card stage-content-animate"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1.5px solid #E2E8F0',
              borderRadius: '20px',
              padding: '28px 32px',
              boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)',
              borderTop: `4px solid ${current.color}`
            }}
          >
            {/* Top Stage Header Bar */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '12px',
                borderBottom: '1px solid #F1F5F9',
                paddingBottom: '18px',
                marginBottom: '18px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: current.bgLight,
                    border: `1.5px solid ${current.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: current.color,
                    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                    flexShrink: 0
                  }}
                >
                  {current.icon}
                </div>
                <div>
                  <span 
                    className="mono" 
                    style={{ 
                      fontSize: '0.7rem', 
                      color: current.color, 
                      fontWeight: 700, 
                      letterSpacing: '0.05em',
                      display: 'block',
                      marginBottom: '2px'
                    }}
                  >
                    {current.badge}
                  </span>
                  <h3 className="heading-font" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', margin: 0, lineHeight: 1.25 }}>
                    {current.title}
                  </h3>
                </div>
              </div>

              <span 
                className="badge-tech" 
                style={{ 
                  backgroundColor: current.bgLight, 
                  border: `1px solid ${current.border}`, 
                  color: current.color, 
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  padding: '5px 12px'
                }}
              >
                {current.subtitle}
              </span>
            </div>

            {/* Description */}
            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
              {current.description}
            </p>

            {/* Key Capabilities: Clean Compact Grid */}
            <div style={{ marginBottom: '20px' }}>
              <div 
                className="mono" 
                style={{ 
                  fontSize: '0.72rem', 
                  fontWeight: 700, 
                  color: '#64748B', 
                  letterSpacing: '0.04em', 
                  textTransform: 'uppercase', 
                  marginBottom: '10px' 
                }}
              >
                Key Capabilities:
              </div>
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '8px 16px'
                }}
              >
                {current.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: '#1E293B', lineHeight: 1.45 }}>
                    <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compact Side-by-Side Bottleneck / Impact */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '12px',
                marginBottom: '20px',
                padding: '14px 16px',
                backgroundColor: '#F8FAFC',
                borderRadius: '12px',
                border: '1px solid #E2E8F0'
              }}
            >
              <div style={{ fontSize: '0.82rem', color: '#991B1B', lineHeight: 1.45 }}>
                <strong style={{ color: '#DC2626', display: 'block', fontSize: '0.7rem', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '3px' }}>
                  Before (Manual / Generic ERP):
                </strong>
                {current.bottleneckSolved.before}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#065F46', lineHeight: 1.45 }}>
                <strong style={{ color: '#047857', display: 'block', fontSize: '0.7rem', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '3px' }}>
                  With Keshav Info:
                </strong>
                {current.bottleneckSolved.after}
              </div>
            </div>

            {/* Footer: Live Telemetry + Action Button */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                paddingTop: '16px',
                borderTop: '1px solid #F1F5F9'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="status-pulse" style={{ backgroundColor: current.color }} />
                <span className="mono" style={{ fontSize: '0.76rem', color: '#475569', fontWeight: 600 }}>
                  {current.telemetrySnippet}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <Link 
                  to="/workstation" 
                  className="btn btn-secondary" 
                  style={{ padding: '8px 16px', fontSize: '0.82rem', fontWeight: 600 }}
                >
                  Workstation &rarr;
                </Link>
                <button 
                  onClick={onOpenConsultation}
                  className="btn btn-primary" 
                  style={{ padding: '8px 18px', fontSize: '0.82rem', fontWeight: 700 }}
                >
                  Request Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
