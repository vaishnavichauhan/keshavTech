import React, { useState } from 'react';
import EnquiryToErectionLifecycle from '../components/EnquiryToErectionLifecycle';
import IntegrationsEcosystem from '../components/IntegrationsEcosystem';
import { 
  Layers, 
  Compass, 
  Disc, 
  Smartphone, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Cpu,
  FileCode,
  Factory
} from 'lucide-react';

export default function Solutions({ onOpenConsultation }) {
  const [selectedProduct, setSelectedProduct] = useState('steelcore');

  const products = [
    {
      id: 'steelcore',
      name: 'SteelCore™ Enterprise PEB ERP',
      shortName: 'SteelCore™ ERP',
      headline: 'The Complete Shop-Floor & Commercial Operating System for Heavy Steel Fabricators',
      badge: 'ENTERPRISE OPERATING SYSTEM',
      badgeColor: '#2563EB',
      gradient: 'linear-gradient(135deg, #1E40AF, #2563EB)',
      icon: <Layers size={22} color="#FFFFFF" />,
      image: '/peb-workstation-operational.png',
      imageCaption: 'SteelCore™ Bay Tracking & CNC Plasma Workstation Console',
      description: 'SteelCore™ replaces disconnected spreadsheets, accounting software, and manual paper trails with a unified industrial operating platform purpose-built for Pre-Engineered Building plants. From Tekla BOQ ingestion to physical bay stage gating, piece-rate contractor verification, and erection-sequenced trailer dispatch.',
      capabilities: [
        {
          title: 'Tekla & CAD Multi-Level BOQ Ingestion',
          desc: 'Directly parses structural part marks (Columns MCL-1, Rafters RAF-1, Crane Girders CRG-1, Purlins Z-200) with grade, length, unit weight, and paint specification.'
        },
        {
          title: '8-Stage Physical Shop-Floor Gate Control',
          desc: 'Enforces strict physical stage gates: CNC Cutting -> Fit-up -> SAW Welding -> Straightening -> Drilling -> Sa 2.5 Shot Blast -> Painting -> Dispatch Yard.'
        },
        {
          title: 'NABL Quality & Ultrasonic UT Check-sheets',
          desc: 'Prevents beam movement to the next bay until digital weld test records (WPS / PQR), ultrasonic testing, and dry film thickness (DFT) paint logs are approved.'
        },
        {
          title: 'Piece-Rate Contractor Duplicate Prevention',
          desc: 'Calculates labor payouts by exact part-mark weight (e.g. ₹4.80/kg). Automatically blocks duplicate billing claims across multiple fortnights.'
        },
        {
          title: 'Progressive Milestone & Retention Billing',
          desc: 'Tracks commercial dispatch milestones, client mobilization advance, bank guarantee expirations, and retention releases with automated GST invoicing.'
        }
      ],
      specs: [
        { label: 'Deployment Model', val: 'Hybrid Cloud (AWS) or Industrial On-Premise' },
        { label: 'Hardware Hooks', val: 'Electronic Weighbridges, Rugged Barcode / 2D QR' },
        { label: 'Engineering Codes', val: 'IS 800:2007, AISC 360-16, MBMA, AWS D1.1' },
        { label: 'Role Segregation', val: 'Plant GM, Shop Supervisor, QA Inspector, Accounts' }
      ]
    },
    {
      id: 'teklabridge',
      name: 'TeklaBridge™ 3D BIM & NC1 Delta Sync',
      shortName: 'TeklaBridge™ BIM',
      headline: 'Automated 3D Detailing Model Ingestion & Drawing Revision Control',
      badge: 'CAD / CAM BRIDGE',
      badgeColor: '#0284C7',
      gradient: 'linear-gradient(135deg, #0369A1, #0284C7)',
      icon: <Compass size={22} color="#FFFFFF" />,
      image: '/solutions-cad-bim.png',
      imageCaption: 'Tekla 3D BIM Structural Framing & Multi-Layer Plate Nesting',
      description: 'TeklaBridge™ bridges the dangerous gap between the structural detailing office and the physical cutting floor. Ingests 3D structural models (.NC1, .IFC, .DSTV) and performs automated delta-diffing when clients issue drawing revisions (R0 to R4), instantly halting plasma cutting on modified marks.',
      capabilities: [
        {
          title: 'Direct .NC1, .IFC & .DSTV Ingestion',
          desc: 'Ingests complex 3D BIM models containing 15,000+ structural members in seconds, extracting part marks, gusset stiffeners, cleat angles, and hole pitch matrices.'
        },
        {
          title: 'Automated Revision Delta-Diffing Engine',
          desc: 'Compares revision R2 against R1. Instantly highlights modified flange thicknesses, rafter tapers, or hole pitches, preventing scrapped beams on shop tables.'
        },
        {
          title: 'Automated Cut-Lists & Plate Nesting Exports',
          desc: 'Generates optimized cut-lists grouped by plate thickness (10mm, 16mm, 25mm, 40mm) and steel grade (IS 2062 E350BR, E250) for CNC plasma and oxy-fuel tables.'
        },
        {
          title: 'Digital Drawing Vault on Rugged Tablet',
          desc: 'Shop supervisors view version-controlled PDF fabrication drawings directly on shop-floor tablets, ensuring obsolete drawings are never used.'
        }
      ],
      specs: [
        { label: 'Supported Formats', val: 'Tekla Structures .NC1, .IFC 2x3/4, DSTV, DXF' },
        { label: 'Processing Speed', val: '15,000+ parts parsed in under 3.2 seconds' },
        { label: 'Revision Tracking', val: 'Infinite revision history with delta audit logs' },
        { label: 'CAM Integration', val: 'Direct export to FastCAM, ProNest, Hypertherm' }
      ]
    },
    {
      id: 'coiltrack',
      name: 'CoilTrack™ Slitting & Roll-Forming Suite',
      shortName: 'CoilTrack™ Slitting',
      headline: 'High-Tensile Raw Coil Traceability & Purlin Slitting Optimization',
      badge: 'INVENTORY & SLITTING',
      badgeColor: '#059669',
      gradient: 'linear-gradient(135deg, #047857, #10B981)',
      icon: <Disc size={22} color="#FFFFFF" />,
      image: '/coiltrack-slitting.png',
      imageCaption: 'High-Tensile Raw Coil Slitting & Automated Profiling Center',
      description: 'CoilTrack™ is purpose-built for coil service centers, purlin roll-formers (C/Z sections), and trapezoidal roofing profile lines. Connects directly to electronic weighbridges, tracks mother coils by mill heat number, and optimizes 2D slitting patterns to reduce scrap loss to under 3%.',
      capabilities: [
        {
          title: 'Mother Coil Inward & Weighbridge Integration',
          desc: 'Captures gross and tare weights from electronic weighbridges via RS232/TCP API. Stores manufacturer heat numbers and Mill Test Certificates (JSW, Tata, AM/NS).'
        },
        {
          title: 'Multi-Job Slitting Pattern Yield Optimizer',
          desc: 'Solves the 2D cutting stock problem across multiple client orders concurrently, minimizing edge trim waste and calculating exact prime yield percentages.'
        },
        {
          title: 'Remnant Slit Coil & Off-cut Tracking',
          desc: 'Tags leftover mother coil rolls and plate off-cuts with unique QR identifiers, making them instantly searchable for future small-tonnage purlin orders.'
        },
        {
          title: 'Purlin Pre-Punching & Profiling Generator',
          desc: 'Generates automated hole punching and cut-to-length instructions for cold roll-forming machines based on Tekla roof framing layouts.'
        }
      ],
      specs: [
        { label: 'Coil Types', val: 'CR-GI, HRPO, Galvalume (AZ150), Prepainted (PPGI)' },
        { label: 'Steel Grades', val: '250 MPa, 350 MPa, 550 MPa High-Tensile' },
        { label: 'Weighbridge Protocols', val: 'Avery Weigh-Tronix, Essae, Rice Lake, Toledo' },
        { label: 'Average Scrap Yield', val: 'Reduced from 4.8% down to 2.92%' }
      ]
    },
    {
      id: 'erectsync',
      name: 'ErectSync™ Offline Field Companion',
      shortName: 'ErectSync™ Mobile',
      headline: 'Offline-First Progressive Web App for Site Engineers & Erection Crews',
      badge: 'MOBILE FIELD PWA',
      badgeColor: '#7C3AED',
      gradient: 'linear-gradient(135deg, #6D28D9, #8B5CF6)',
      icon: <Smartphone size={22} color="#FFFFFF" />,
      image: '/erectsync-field-app.png',
      imageCaption: 'Field Engineer Inspecting Erection Alignment with Rugged Tablet PWA',
      description: 'ErectSync™ brings real-time shop-floor transparency to remote, dusty construction sites. Built as an offline-first PWA, site engineers scan trailer QR codes upon arrival, verify foundation anchor-bolt alignment, and file geotagged Daily Progress Reports (DPR).',
      capabilities: [
        {
          title: 'Offline-First IndexedDB Architecture',
          desc: 'Operates reliably in remote industrial corridors without mobile internet. Automatically synchronizes site logs when 4G or Wi-Fi reconnects.'
        },
        {
          title: 'Sequence Loading QR Verification',
          desc: 'Scans delivered structural parts at the site gate. Immediately alerts the project manager if a trailer arrived out of sequence before foundation clearance.'
        },
        {
          title: 'Foundation Anchor Bolt Sign-Off Matrix',
          desc: 'Digital pre-erection checklist verifying bolt pitch, center-to-center diagonal tolerances, and grout pad readiness before heavy columns are staged.'
        },
        {
          title: 'Daily Progress Reports (DPR) with Geotagged Photos',
          desc: 'Logs erected columns, rafters, purlins, crane hours, weather downtime, and contractor crew counts into standardized daily executive PDF reports.'
        }
      ],
      specs: [
        { label: 'Platform Architecture', val: 'Progressive Web App (PWA) on iOS, Android & Windows' },
        { label: 'Offline Persistence', val: 'Full project BOQ stored locally via Service Worker' },
        { label: 'Barcode Scanner', val: 'High-speed camera QR reader (rugged 2D tags)' },
        { label: 'Sync Engine', val: 'Background WebSocket delta synchronization' }
      ]
    },
    {
      id: 'epc-portal',
      name: 'Dedicated Enterprise Web & EPC Portals',
      shortName: 'EPC Client Portals',
      headline: 'Custom Branded Progress & QA Transparency Portals for Infrastructure Developers',
      badge: 'CLIENT TRANSPARENCY',
      badgeColor: '#E11D48',
      gradient: 'linear-gradient(135deg, #BE123C, #F43F5E)',
      icon: <Globe size={22} color="#FFFFFF" />,
      image: '/solutions-cad-bim.png',
      imageCaption: 'WebGL 3D Interactive Model Viewer with Color-Coded Erection Milestones',
      description: 'Strengthen client trust on large infrastructure tenders. We engineer dedicated client portals where institutional developers, EPC contractors (such as L&T and Tata Projects), and structural consultants view 3D erection progress and download certified NABL test reports.',
      capabilities: [
        {
          title: 'Interactive 3D Structural Progress Viewer',
          desc: 'Web-based 3D digital twin of the building. Parts are color-coded in real-time: Fabricated (Yellow), Dispatched (Blue), Erected on Site (Green).'
        },
        {
          title: '1-Click NABL & MTC Quality Vault',
          desc: 'Clients download non-destructive ultrasonic testing reports, welder qualification logs, and raw steel mill certificates directly, eliminating payment withholding.'
        },
        {
          title: 'Live Trailer Dispatch & Sequence Tracking',
          desc: 'Dispatched trailer manifests with GPS location, driver contact, and estimated site arrival time so client cranes are ready on the ground.'
        },
        {
          title: 'Digital Milestone Approvals & Audit Trail',
          desc: 'Formal client sign-offs on structural completion stages with immutable timestamps, accelerating retention money release by up to 22 days.'
        }
      ],
      specs: [
        { label: 'Security Model', val: 'Encrypted multi-tenant access with strict isolation' },
        { label: '3D Graphics Engine', val: 'Lightweight WebGL structural viewer (runs on mobile)' },
        { label: 'Document Engine', val: 'Instant PDF generation with cryptographic signatures' },
        { label: 'Enterprise Identity', val: 'White-labeled with your plant branding & custom domain' }
      ]
    }
  ];

  const current = products.find(p => p.id === selectedProduct) || products[0];

  return (
    <div style={{ paddingTop: '86px', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* Hero Showcase with Zoho ERP High-Contrast Style */}
      <section style={{ padding: '70px 0 60px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '52px', alignItems: 'center' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '16px' }}>
                <Sparkles size={14} color="#2563EB" />
                <span>COMPLETE INDUSTRIAL OPERATING SUITE</span>
              </div>
              <h1 
                className="heading-font" 
                style={{ 
                  fontSize: 'clamp(2.3rem, 4vw, 3.4rem)', 
                  fontWeight: 800, 
                  color: '#0F172A', 
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  marginBottom: '20px' 
                }}
              >
                Specialized Enterprise Software Engineered for Heavy PEB Plants
              </h1>
              <p style={{ color: '#475569', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '32px', maxWidth: '600px' }}>
                Explore our purpose-built engineering modules. Deploy individually to eliminate specific fabrication bottlenecks, or unify your entire enterprise under the SteelCore™ plant operating system.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenConsultation}
                  className="btn btn-primary"
                  style={{ padding: '14px 28px', fontSize: '0.96rem', fontWeight: 700 }}
                >
                  <span>Schedule Architectural Walkthrough</span>
                  <ArrowRight size={16} />
                </button>
                <a 
                  href="#product-breakdown" 
                  className="btn btn-secondary"
                  style={{ padding: '14px 24px', fontSize: '0.96rem', fontWeight: 600 }}
                >
                  Explore Modules &darr;
                </a>
              </div>
            </div>

            {/* Hero Image Showcase with Zoho Window Frame */}
            <div className="zoho-img-frame">
              <div style={{ padding: '12px 18px', backgroundColor: '#1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
                  <span className="mono" style={{ fontSize: '0.74rem', color: '#94A3B8', marginLeft: '10px', fontWeight: 600 }}>
                    TEKLA 3D BIM &bull; CNC NESTING ENGINE v4.2
                  </span>
                </div>
                <span className="badge-tech badge-emerald" style={{ fontSize: '0.64rem', padding: '2px 8px' }}>LIVE CAD SYNC</span>
              </div>
              <img 
                src="/solutions-cad-bim.png" 
                alt="Tekla 3D BIM Structural Framing and CNC Nesting Layout" 
                className="zoho-img-zoom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modern Product Selector Grid (Zoho ERP Tab Style) */}
      <section id="product-breakdown" style={{ padding: '28px 0', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: '70px', zIndex: 40, boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '12px' 
            }}
          >
            {products.map(p => {
              const isSelected = selectedProduct === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedProduct(p.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: isSelected ? '2px solid #2563EB' : '1.5px solid #E2E8F0',
                    cursor: 'pointer',
                    backgroundColor: '#FFFFFF',
                    textAlign: 'left',
                    boxShadow: isSelected ? '0 6px 18px rgba(37, 99, 235, 0.14)' : '0 1px 3px rgba(15, 23, 42, 0.02)',
                    transform: isSelected ? 'translateY(-2px)' : 'none',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div 
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: p.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: isSelected ? '0 4px 12px rgba(37, 99, 235, 0.3)' : 'none'
                    }}
                  >
                    {React.cloneElement(p.icon, { size: 19 })}
                  </div>
                  <div>
                    <div 
                      className="heading-font" 
                      style={{ 
                        fontSize: '0.88rem', 
                        fontWeight: 700, 
                        color: isSelected ? '#2563EB' : '#0F172A',
                        lineHeight: 1.2
                      }}
                    >
                      {p.shortName}
                    </div>
                    <div className="mono" style={{ fontSize: '0.68rem', color: '#64748B', marginTop: '2px' }}>
                      {p.badge}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Selected Product Deep-Dive (Alternating Zoho Image-and-Text Style) */}
      <section style={{ padding: '75px 0 90px' }}>
        <div className="container">
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            {/* Top Interactive Overview Panel */}
            <div 
              className="card zoho-card-lift"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1.5px solid #E2E8F0',
                padding: '44px',
                marginBottom: '50px',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <span 
                      className="mono" 
                      style={{ 
                        fontSize: '0.74rem', 
                        padding: '4px 12px', 
                        borderRadius: '6px', 
                        backgroundColor: `${current.badgeColor}12`, 
                        color: current.badgeColor, 
                        border: `1px solid ${current.badgeColor}30`, 
                        fontWeight: 700,
                        letterSpacing: '0.03em'
                      }}
                    >
                      {current.badge}
                    </span>
                    <span className="mono" style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                      v4.2 ENTERPRISE READY
                    </span>
                  </div>

                  <h2 
                    className="heading-font" 
                    style={{ 
                      fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)', 
                      fontWeight: 800, 
                      color: '#0F172A', 
                      marginBottom: '10px',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2
                    }}
                  >
                    {current.name}
                  </h2>
                  <div style={{ fontSize: '1.05rem', color: '#2563EB', fontWeight: 700, marginBottom: '20px' }}>
                    {current.headline}
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '30px' }}>
                    {current.description}
                  </p>

                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    <button 
                      onClick={onOpenConsultation}
                      className="btn btn-primary"
                      style={{ padding: '13px 28px', fontSize: '0.95rem', fontWeight: 700 }}
                    >
                      <span>Request Live Demonstration</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Right Visual Image */}
                <div className="zoho-img-frame">
                  <div style={{ padding: '10px 16px', backgroundColor: '#1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <span className="mono" style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 600 }}>
                      {current.imageCaption}
                    </span>
                    <span className="badge-tech badge-emerald" style={{ fontSize: '0.62rem', padding: '2px 6px' }}>VERIFIED</span>
                  </div>
                  <img 
                    src={current.image} 
                    alt={current.name} 
                    className="zoho-img-zoom"
                    style={{ maxHeight: '380px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

            {/* Core Capabilities Grid (Zoho ERP Card Style) */}
            <div style={{ marginBottom: '50px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div className="zoho-icon-badge" style={{ background: current.gradient }}>
                  <Cpu size={22} color="#FFFFFF" />
                </div>
                <div>
                  <h3 className="heading-font" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                    Core Engineering Capabilities
                  </h3>
                  <div style={{ fontSize: '0.86rem', color: '#64748B', marginTop: '2px' }}>
                    Mathematical precision and shop-floor automation for high-tonnage fabrication
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
                {current.capabilities.map((cap, idx) => (
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
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                      <div 
                        style={{ 
                          width: '32px', 
                          height: '32px', 
                          borderRadius: '8px', 
                          backgroundColor: '#EFF6FF', 
                          border: '1px solid #BFDBFE', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          flexShrink: 0 
                        }}
                      >
                        <CheckCircle2 size={16} color="#2563EB" />
                      </div>
                      <h4 className="heading-font" style={{ fontSize: '1.08rem', fontWeight: 700, color: '#0F172A', margin: '4px 0 0' }}>
                        {cap.title}
                      </h4>
                    </div>
                    <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.65, margin: 0, paddingLeft: '44px' }}>
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Matrix */}
            <div 
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                border: '1.5px solid #E2E8F0',
                padding: '36px',
                boxShadow: '0 6px 22px rgba(15, 23, 42, 0.03)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
                <FileCode size={22} color="#059669" />
                <h4 className="heading-font" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  Technical Architecture &amp; System Compatibility
                </h4>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
                {current.specs.map((spec, sIdx) => (
                  <div key={sIdx} style={{ backgroundColor: '#F8FAFC', padding: '20px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                    <div className="mono" style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 700, marginBottom: '6px', letterSpacing: '0.04em' }}>
                      {spec.label.toUpperCase()}
                    </div>
                    <div style={{ color: '#0F172A', fontSize: '0.94rem', fontWeight: 600 }}>
                      {spec.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Alternating Zoho ERP Feature Stories */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
            <div className="section-label" style={{ marginBottom: '14px' }}>
              <Factory size={14} color="#2563EB" />
              <span>THE 5 SPECIALIZED SOLUTIONS IN DETAIL</span>
            </div>
            <h2 className="heading-font" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', marginBottom: '14px' }}>
              How Each Module Solves a Shop-Floor Bottleneck
            </h2>
            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.65 }}>
              Engineered exclusively for structural steel, heavy PEB, and coil slitting plants.
            </p>
          </div>

          {/* Alternating Story 1: SteelCore ERP */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '50px', alignItems: 'center', marginBottom: '80px' }}>
            <div>
              <div className="badge-tech" style={{ marginBottom: '14px' }}>
                <span>01. SHOP-FLOOR OPERATING SYSTEM</span>
              </div>
              <h3 className="heading-font" style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px', lineHeight: 1.25 }}>
                SteelCore™ Enterprise PEB ERP
              </h3>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '20px' }}>
                Replaces disconnected ledgers and generic accounting software with an authentic shop-floor operating system. 
                Coordinates Tekla BOQs, enforces 8-stage physical gating, locks piece-rate contractor payables to ultrasonic testing, 
                and optimizes sequenced trailer dispatches.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                <div className="zoho-check-item">
                  <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                  <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>8-stage physical barcode gates (Cutting to Dispatch Yard)</span>
                </div>
                <div className="zoho-check-item">
                  <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                  <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>Automated piece-rate contractor duplicate billing lock</span>
                </div>
                <div className="zoho-check-item">
                  <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                  <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>Foundation-sequenced trailer dispatch loading engine</span>
                </div>
              </div>
              <button onClick={onOpenConsultation} className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '0.92rem' }}>
                Explore SteelCore Deployment &rarr;
              </button>
            </div>
            <div className="zoho-img-frame">
              <img src="/peb-workstation-operational.png" alt="SteelCore ERP Workstation" className="zoho-img-zoom" />
            </div>
          </div>

          {/* Alternating Story 2: TeklaBridge 3D BIM (Reversed Layout) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '50px', alignItems: 'center', marginBottom: '80px' }}>
            <div className="zoho-img-frame" style={{ order: 2 }}>
              <img src="/solutions-cad-bim.png" alt="TeklaBridge 3D BIM Delta Sync" className="zoho-img-zoom" />
            </div>
            <div style={{ order: 1 }}>
              <div className="badge-tech badge-cyan" style={{ marginBottom: '14px' }}>
                <span>02. 3D BIM &amp; CAD/CAM BRIDGE</span>
              </div>
              <h3 className="heading-font" style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px', lineHeight: 1.25 }}>
                TeklaBridge™ 3D Model &amp; NC1 Delta Sync
              </h3>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '20px' }}>
                Directly parses Tekla Structures .NC1, .IFC, and .DSTV models. When consulting architects issue drawing revisions (R0 to R4), 
                our delta-diffing engine instantly locks CNC cutting tables, highlights modified hole pitches, and generates updated plate nesting cut-lists.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                <div className="zoho-check-item">
                  <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                  <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>15,000+ structural members parsed in under 3.2 seconds</span>
                </div>
                <div className="zoho-check-item">
                  <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                  <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>Instant cutting freeze on shop tables for revised marks</span>
                </div>
                <div className="zoho-check-item">
                  <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                  <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>Export directly to Hypertherm, FastCAM, and ProNest</span>
                </div>
              </div>
              <button onClick={onOpenConsultation} className="btn btn-secondary" style={{ padding: '12px 24px', fontSize: '0.92rem' }}>
                View BIM Sync Demo &rarr;
              </button>
            </div>
          </div>

          {/* Alternating Story 3: CoilTrack Slitting */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '50px', alignItems: 'center', marginBottom: '80px' }}>
            <div>
              <div className="badge-tech badge-emerald" style={{ marginBottom: '14px' }}>
                <span>03. RAW COIL &amp; SLITTING SUITE</span>
              </div>
              <h3 className="heading-font" style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px', lineHeight: 1.25 }}>
                CoilTrack™ Slitting &amp; Roll-Forming Suite
              </h3>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '20px' }}>
                Connects directly to electronic weighbridges via RS-232 serial drivers, logs mother coil heat numbers from Tata/JSW, 
                and optimizes 2D slitting patterns across multiple client orders concurrently to slash edge trim scrap to under 3%.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                <div className="zoho-check-item">
                  <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                  <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>Unalterable electronic weighbridge gross-to-tare capture</span>
                </div>
                <div className="zoho-check-item">
                  <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                  <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>2D multi-job cutting stock optimization engine</span>
                </div>
                <div className="zoho-check-item">
                  <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                  <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>100% Mill Test Certificate (MTC) audit traceability</span>
                </div>
              </div>
              <button onClick={onOpenConsultation} className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '0.92rem' }}>
                Calculate Slitting Savings &rarr;
              </button>
            </div>
            <div className="zoho-img-frame">
              <img src="/coiltrack-slitting.png" alt="CoilTrack Slitting Facility" className="zoho-img-zoom" />
            </div>
          </div>

          {/* Alternating Story 4: ErectSync Mobile PWA (Reversed Layout) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div className="zoho-img-frame" style={{ order: 2 }}>
              <img src="/erectsync-field-app.png" alt="ErectSync Field Companion App" className="zoho-img-zoom" />
            </div>
            <div style={{ order: 1 }}>
              <div className="badge-tech badge-amber" style={{ marginBottom: '14px' }}>
                <span>04. OFFLINE-FIRST FIELD COMPANION</span>
              </div>
              <h3 className="heading-font" style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px', lineHeight: 1.25 }}>
                ErectSync™ Offline-First Field PWA
              </h3>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '20px' }}>
                Engineered for dusty, remote building sites with patchy mobile network. Site engineers scan trailer QR codes upon arrival, 
                verify foundation anchor bolt pitch tolerances, and generate geotagged Daily Progress Reports (DPR) with photo proof.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                <div className="zoho-check-item">
                  <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                  <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>Zero 4G dependence with local IndexedDB offline storage</span>
                </div>
                <div className="zoho-check-item">
                  <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                  <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>Sequence verification prevents out-of-order trailer unloading</span>
                </div>
                <div className="zoho-check-item">
                  <div className="zoho-check-icon"><CheckCircle2 size={13} /></div>
                  <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>Instant executive PDF DPR reports sent to plant directors</span>
                </div>
              </div>
              <button onClick={onOpenConsultation} className="btn btn-secondary" style={{ padding: '12px 24px', fontSize: '0.92rem' }}>
                Request Field PWA Demo &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Enquiry to Erection Lifecycle Pipeline */}
      <EnquiryToErectionLifecycle onOpenConsultation={onOpenConsultation} />

      {/* Interoperable Industrial Ecosystem */}
      <IntegrationsEcosystem />

      {/* Zoho ERP Style Bottom Dark CTA Banner */}
      <section style={{ padding: '85px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="zoho-cta-banner">
            <div style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}>
              <div className="section-label" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', marginBottom: '16px' }}>
                <span style={{ color: '#93C5FD' }}>START YOUR PLANT TRANSFORMATION</span>
              </div>
              <h3 className="heading-font" style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                Ready to Modernize Your Heavy Fabrication Facility?
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
                Book a 45-minute confidential architectural walkthrough with our industrial software engineers. 
                We review your current Tekla cut-lists, slitting scrap percentages, and bay routing.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button 
                  onClick={onOpenConsultation}
                  className="btn btn-primary"
                  style={{ padding: '14px 32px', fontSize: '0.98rem', fontWeight: 700 }}
                >
                  Book Plant Assessment Walkthrough &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
