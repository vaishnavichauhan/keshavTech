import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import EnquiryToErectionLifecycle from '../components/EnquiryToErectionLifecycle';
import IntegrationsEcosystem from '../components/IntegrationsEcosystem';
import {
  Building2,
  Layers,
  Disc,
  HardHat,
  TrendingUp,
  TrendingDown,
  ShieldCheck,
  Compass,
  Smartphone,
  Calculator,
  ArrowRight,
  FileWarning,
  Receipt,
  Truck,
  Zap,
  MapPin,
  Calendar,
  Activity
} from 'lucide-react';

// Zoho ERP-style 3D Geometric Wireframe Illustrations with Glowing Golden Core (Fine line-art match)
function WireframeAtom() {
  return (
    <svg viewBox="0 0 160 140" width="130" height="110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gold-core-atom" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="45%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </radialGradient>
        <filter id="glow-atom" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="80" cy="70" r="16" fill="#FEF3C7" opacity="0.35" />
      <ellipse cx="80" cy="70" rx="58" ry="22" stroke="#1D6DEB" strokeWidth="1.2" opacity="0.85" />
      <ellipse cx="80" cy="70" rx="58" ry="22" stroke="#1D6DEB" strokeWidth="1.2" opacity="0.85" transform="rotate(60 80 70)" />
      <ellipse cx="80" cy="70" rx="58" ry="22" stroke="#1D6DEB" strokeWidth="1.2" opacity="0.85" transform="rotate(120 80 70)" />
      <circle cx="80" cy="70" r="28" stroke="#38BDF8" strokeWidth="1.0" strokeDasharray="3 3" opacity="0.75" />
      <circle cx="80" cy="70" r="44" stroke="#93C5FD" strokeWidth="0.9" strokeDasharray="2 4" opacity="0.5" />
      <circle cx="138" cy="70" r="2.2" fill="#2563EB" />
      <circle cx="51" cy="20" r="2.2" fill="#2563EB" />
      <circle cx="109" cy="120" r="2.2" fill="#2563EB" />
      <circle cx="80" cy="70" r="8" fill="url(#gold-core-atom)" filter="url(#glow-atom)" />
      <circle cx="80" cy="70" r="3" fill="#FFFFFF" opacity="0.95" />
    </svg>
  );
}

function WireframeGlobe() {
  return (
    <svg viewBox="0 0 160 140" width="130" height="110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gold-core-globe" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="45%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </radialGradient>
        <filter id="glow-globe" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="80" cy="70" r="48" stroke="#1D4ED8" strokeWidth="1.3" opacity="0.9" />
      <ellipse cx="80" cy="70" rx="48" ry="14" stroke="#1D6DEB" strokeWidth="1.2" opacity="0.85" />
      <ellipse cx="80" cy="70" rx="42" ry="28" stroke="#38BDF8" strokeWidth="1.1" opacity="0.75" />
      <ellipse cx="80" cy="70" rx="30" ry="40" stroke="#60A5FA" strokeWidth="1.0" opacity="0.65" />
      <ellipse cx="80" cy="46" rx="42" ry="10" stroke="#93C5FD" strokeWidth="0.9" strokeDasharray="3 3" opacity="0.6" />
      <ellipse cx="80" cy="94" rx="42" ry="10" stroke="#93C5FD" strokeWidth="0.9" strokeDasharray="3 3" opacity="0.6" />
      <ellipse cx="80" cy="70" rx="16" ry="48" stroke="#1D6DEB" strokeWidth="1.2" opacity="0.85" />
      <ellipse cx="80" cy="70" rx="34" ry="48" stroke="#38BDF8" strokeWidth="1.0" opacity="0.7" />
      <line x1="80" y1="22" x2="80" y2="118" stroke="#1E40AF" strokeWidth="1.2" opacity="0.75" />
      <line x1="32" y1="70" x2="128" y2="70" stroke="#1E40AF" strokeWidth="1.2" opacity="0.75" />
      <circle cx="76" cy="66" r="13" fill="#FEF3C7" opacity="0.35" />
      <circle cx="76" cy="66" r="7.5" fill="url(#gold-core-globe)" filter="url(#glow-globe)" />
      <circle cx="76" cy="66" r="3" fill="#FFFFFF" opacity="0.95" />
    </svg>
  );
}

function WireframeFunnel() {
  return (
    <svg viewBox="0 0 160 140" width="130" height="110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gold-core-funnel" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="45%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </radialGradient>
        <filter id="glow-funnel" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d="M 28 24 Q 80 50 132 24 Q 106 70 132 116 Q 80 90 28 116 Q 54 70 28 24 Z" stroke="#1D4ED8" strokeWidth="1.3" opacity="0.9" />
      <path d="M 40 34 Q 80 56 120 34 Q 100 70 120 106 Q 80 84 40 106 Q 60 70 40 34 Z" stroke="#1D6DEB" strokeWidth="1.2" opacity="0.8" />
      <path d="M 52 46 Q 80 60 108 46 Q 94 70 108 94 Q 80 80 52 94 Q 66 70 52 46 Z" stroke="#38BDF8" strokeWidth="1.1" opacity="0.75" />
      <path d="M 64 56 Q 80 64 96 56 Q 88 70 96 84 Q 80 76 64 84 Q 72 70 64 56 Z" stroke="#60A5FA" strokeWidth="1.0" opacity="0.7" />
      <line x1="28" y1="24" x2="132" y2="116" stroke="#93C5FD" strokeWidth="0.9" strokeDasharray="3 3" opacity="0.65" />
      <line x1="132" y1="24" x2="28" y2="116" stroke="#93C5FD" strokeWidth="0.9" strokeDasharray="3 3" opacity="0.65" />
      <line x1="80" y1="24" x2="80" y2="116" stroke="#1D6DEB" strokeWidth="1.1" opacity="0.7" />
      <line x1="28" y1="70" x2="132" y2="70" stroke="#1D6DEB" strokeWidth="1.1" opacity="0.7" />
      <circle cx="80" cy="70" r="13" fill="#FEF3C7" opacity="0.35" />
      <circle cx="80" cy="70" r="7.5" fill="url(#gold-core-funnel)" filter="url(#glow-funnel)" />
      <circle cx="80" cy="70" r="3" fill="#FFFFFF" opacity="0.95" />
    </svg>
  );
}

function WireframeLattice() {
  return (
    <svg viewBox="0 0 160 140" width="130" height="110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gold-core-lattice" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="45%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </radialGradient>
        <filter id="glow-lattice" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <polygon points="80,20 128,48 128,96 80,122 32,96 32,48" stroke="#1D4ED8" strokeWidth="1.3" opacity="0.9" fill="rgba(37, 99, 235, 0.02)" />
      <line x1="80" y1="20" x2="80" y2="70" stroke="#1D6DEB" strokeWidth="1.2" opacity="0.85" />
      <line x1="128" y1="48" x2="80" y2="70" stroke="#1D6DEB" strokeWidth="1.2" opacity="0.85" />
      <line x1="128" y1="96" x2="80" y2="70" stroke="#1D6DEB" strokeWidth="1.2" opacity="0.85" />
      <line x1="80" y1="122" x2="80" y2="70" stroke="#1D6DEB" strokeWidth="1.2" opacity="0.85" />
      <line x1="32" y1="96" x2="80" y2="70" stroke="#1D6DEB" strokeWidth="1.2" opacity="0.85" />
      <line x1="32" y1="48" x2="80" y2="70" stroke="#1D6DEB" strokeWidth="1.2" opacity="0.85" />
      <polygon points="80,36 112,54 112,90 80,106 48,90 48,54" stroke="#38BDF8" strokeWidth="1.0" strokeDasharray="3 3" opacity="0.75" />
      <polygon points="80,50 98,60 98,80 80,90 62,80 62,60" stroke="#93C5FD" strokeWidth="0.9" opacity="0.6" />
      <circle cx="80" cy="20" r="2.2" fill="#2563EB" />
      <circle cx="128" cy="48" r="2.2" fill="#2563EB" />
      <circle cx="128" cy="96" r="2.2" fill="#2563EB" />
      <circle cx="80" cy="122" r="2.2" fill="#2563EB" />
      <circle cx="32" cy="96" r="2.2" fill="#2563EB" />
      <circle cx="32" cy="48" r="2.2" fill="#2563EB" />
      <circle cx="80" cy="70" r="13" fill="#FEF3C7" opacity="0.35" />
      <circle cx="80" cy="70" r="7.5" fill="url(#gold-core-lattice)" filter="url(#glow-lattice)" />
      <circle cx="80" cy="70" r="3" fill="#FFFFFF" opacity="0.95" />
    </svg>
  );
}

export default function Home({ onOpenConsultation }) {
  const navigate = useNavigate();
  const industries = [
    {
      title: "Pre-Engineered Building (PEB) Plants",
      icon: <Building2 size={22} color="#2563EB" />,
      tag: "PRIMARY NICHE",
      desc: "Plants fabricating custom portal frames, tapered columns, rafters, mezzanine girders, crane runways, and cold-formed purlins.",
      stats: "12 Plants Powered &bull; 110,000+ MT"
    },
    {
      title: "Heavy Structural Steel Fabricators",
      icon: <Layers size={22} color="#D97706" />,
      tag: "HEAVY FABRICATION",
      desc: "Facilities welding heavy built-up plate girders, box columns, trusses, and industrial crane infrastructure requiring strict WPS & NABL testing.",
      stats: "4 Heavy Yards &bull; 48,000+ MT"
    },
    {
      title: "Coil Service Centers & Profiling Lines",
      icon: <Disc size={22} color="#059669" />,
      tag: "COIL & ROLL-FORM",
      desc: "High-speed purlin roll-forming (C/Z sections) and trapezoidal sheet profiling with mother coil slitting scrap optimization.",
      stats: "6 Slitting Lines &bull; 2.9% Avg Scrap"
    },
    {
      title: "Turnkey EPC Infrastructure Contractors",
      icon: <HardHat size={22} color="#7C3AED" />,
      tag: "SITE ERECTION",
      desc: "EPC enterprises requiring ground-reality alignment between factory trailer dispatch sequencing and on-site foundation bolt readiness.",
      stats: "350+ Buildings Erected On-Time"
    }
  ];

  const solutionsPreview = [
    {
      name: "SteelCore™ PEB ERP",
      desc: "Complete shop-floor operating system linking Tekla BOQs to 8 physical fabrication stages, contractor piece-rate payables, and progressive GST billing.",
      actionText: "Explore SteelCore™ ERP",
      gradient: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 45%, #F472B6 100%)",
      icon: <Layers size={22} color="#FFFFFF" strokeWidth={2.2} />
    },
    {
      name: "TeklaBridge™ 3D BIM Sync",
      desc: "Ingests .NC1 and .IFC models. Performs automated delta-diffing when clients revise drawings (R0 to R4), automatically locking CNC cutting tables.",
      actionText: "Explore TeklaBridge™ BIM",
      gradient: "linear-gradient(135deg, #06B6D4 0%, #38BDF8 40%, #34D399 100%)",
      icon: <Compass size={22} color="#FFFFFF" strokeWidth={2.2} />
    },
    {
      name: "CoilTrack™ Slitting Suite",
      desc: "Electronic weighbridge integration and 2D slitting pattern optimization for high-tensile coils. Reduces purlin edge trim scrap below 3%.",
      actionText: "Explore CoilTrack™ Slitting",
      gradient: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 45%, #FBBF24 100%)",
      icon: <Disc size={22} color="#FFFFFF" strokeWidth={2.2} />
    },
    {
      name: "ErectSync™ Mobile Field PWA",
      desc: "Offline-capable progressive web app for site engineers. Scans trailer QR codes, verifies foundation anchor bolt readiness, and logs daily DPR.",
      actionText: "Explore ErectSync™ Field PWA",
      gradient: "linear-gradient(135deg, #2563EB 0%, #818CF8 50%, #FB7185 100%)",
      icon: <Smartphone size={22} color="#FFFFFF" strokeWidth={2.2} />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        onOpenConsultation={onOpenConsultation}
        onExploreSimulator={() => navigate('/workstation')}
      />

      {/* 1. Who We Serve: Industry Categories (Zoho ERP Screenshot Match) */}
      <section className="zoho-erp-industry-section">
        {/* Top Banner with Blue Wireframe Grid and Fluid White Tab Cutout */}
        <div className="zoho-erp-top-banner">
          {/* Blue Wireframe Background on the top right */}
          <div className="zoho-erp-banner-blue-bg" aria-hidden="true">
            <div className="zoho-erp-grid-mesh" />
          </div>

          {/* Fluid SVG White Tab Mask (100% white on left, smooth curve to bottom right) */}
          <div className="zoho-erp-tab-svg-wrap" aria-hidden="true">
            <svg className="zoho-erp-tab-svg" viewBox="0 0 1440 230" preserveAspectRatio="none" fill="none">
              <path
                d="M 0 0 L 760 0 C 800 0 830 15 850 45 L 900 180 C 915 210 940 230 980 230 L 1440 230 L 1440 240 L 0 240 Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>

          {/* Banner Content inside the Tab */}
          <div className="container zoho-erp-banner-content">
            <div className="zoho-erp-tab-inner">

              <h2 className="heading-font zoho-erp-title">
                Dedicated Software for <span style={{ color: '#2563EB' }}>Heavy Metal Enterprises</span>
              </h2>
              <p className="zoho-erp-desc">
                We do not build generic software. Every module is tailored specifically for heavy structural steel fabricators, coil service centers, and turnkey EPC builders.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Column Zoho ERP Clean Grid */}
        <div className="zoho-erp-columns-wrap">
          <div className="container">
            <div className="zoho-erp-grid">
              {industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="zoho-erp-card"
                >
                  <div>
                    {/* Wireframe Graphic (Delicate Zoho ERP line-art with glowing golden core) */}
                    <div className="zoho-erp-svg-wrap">
                      {idx === 0 && <WireframeAtom />}
                      {idx === 1 && <WireframeGlobe />}
                      {idx === 2 && <WireframeFunnel />}
                      {idx === 3 && <WireframeLattice />}
                    </div>

                    {/* Tag badge */}
                    <div style={{ marginBottom: '14px' }}>
                      <span className="mono" style={{ fontSize: '0.68rem', padding: '3px 8px', borderRadius: '4px', backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', color: '#475569', fontWeight: 600 }}>
                        {ind.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="heading-font zoho-erp-card-title">
                      {ind.title}
                    </h3>

                    {/* Description */}
                    <p className="zoho-erp-card-desc">
                      {ind.desc}
                    </p>
                  </div>

                  {/* Operational Stats Strip */}
                  <div className="mono zoho-erp-card-stats">
                    <Activity size={14} color="#2563EB" />
                    <span>{ind.stats}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Complete Enquiry to Erection Lifecycle Pipeline */}
      <EnquiryToErectionLifecycle onOpenConsultation={onOpenConsultation} />

      {/* 2. Solutions Preview Section (Zoho ERP 4-Card Style Match) */}
      <section style={{ padding: '80px 0', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '38px' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '10px' }}>
                <span>MODULAR INDUSTRIAL ARCHITECTURE</span>
              </div>
              <h2 className="heading-font" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                Our 4 Specialized Software Solutions
              </h2>
            </div>

            <Link to="/solutions" className="btn btn-secondary" style={{ fontSize: '0.88rem', fontWeight: 600 }}>
              Explore Detailed Specs &rarr;
            </Link>
          </div>

          {/* 2x2 Grid Matching Zoho ERP Screenshot */}
          <div 
            className="zoho-solutions-grid"
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '24px' 
            }}
          >
            {solutionsPreview.map((sol, idx) => (
              <Link 
                to="/solutions" 
                key={idx} 
                className="zoho-solution-card"
              >
                {/* Card Body */}
                <div style={{ padding: '30px 30px 24px' }}>
                  {/* Header Row: Gradient Icon + Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                    <div 
                      style={{ 
                        width: '48px', 
                        height: '48px', 
                        borderRadius: '12px', 
                        background: sol.gradient, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.15)'
                      }}
                    >
                      {sol.icon}
                    </div>
                    <h3 
                      className="heading-font" 
                      style={{ 
                        fontSize: '1.24rem', 
                        fontWeight: 700, 
                        color: '#0F172A', 
                        margin: 0,
                        lineHeight: 1.3
                      }}
                    >
                      {sol.name}
                    </h3>
                  </div>

                  {/* Description Paragraph */}
                  <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.65, margin: 0 }}>
                    {sol.desc}
                  </p>
                </div>

                {/* Card Footer: Explore Link + Arrow */}
                <div 
                  style={{ 
                    padding: '16px 30px', 
                    borderTop: '1px solid #F1F5F9',
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  <span style={{ color: '#2563EB', fontSize: '0.9rem', fontWeight: 600 }}>
                    {sol.actionText}
                  </span>
                  <ArrowRight size={18} color="#2563EB" className="zoho-card-arrow" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certified Third-Party Ecosystem & Machine Integrations */}
      <IntegrationsEcosystem />

      {/* 4. Why Generic ERPs Break Down (Summary) */}
      <section style={{ padding: '75px 0', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div className="section-label">
                <span>THE STRUCTURAL STEEL REALITY</span>
              </div>
              <h2 className="heading-font" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
                Operational Differences: Dedicated PEB Systems vs General Accounting Tools
              </h2>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '22px' }}>
                Standard enterprise packages assume discrete retail inventory and uniform assemblies. Structural steel plants require geometry-aware remnant tagging, CAD revision diffing, and sequenced dispatch loading:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '26px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: '#1E293B' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '8px', backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Layers size={17} color="#2563EB" />
                  </div>
                  <span>Plate remnants are treated as lost scrap instead of reusable geometry</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: '#1E293B' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '8px', backgroundColor: '#FFFBEB', border: '1px solid #FDE68A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <FileWarning size={17} color="#D97706" />
                  </div>
                  <span>Tekla drawing revisions (R0 to R4) cause costly beam cutting mismatches</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: '#0F172A', fontWeight: 600 }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '8px', backgroundColor: '#FFF1F2', border: '1px solid #FECDD3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Receipt size={17} color="#E11D48" />
                  </div>
                  <span>Contractors bill duplicate piece-rate claims on handwritten logs</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: '#1E293B' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '8px', backgroundColor: '#F5F3FF', border: '1px solid #DDD6FE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Truck size={17} color="#7C3AED" />
                  </div>
                  <span>Trailers ship out of sequence, idling site mobile cranes at ₹35,000/day</span>
                </div>
              </div>

              <Link to="/why-generic-fails" className="btn btn-primary" style={{ fontSize: '0.92rem', padding: '12px 22px', fontWeight: 600 }}>
                Read Full Technical Breakdown &rarr;
              </Link>
            </div>

            {/* Right Side: Workstation Image & Audited Metric Proof */}
            <div 
              style={{ 
                backgroundColor: '#FFFFFF', 
                borderRadius: '18px', 
                border: '1.5px solid #E2E8F0', 
                padding: '24px', 
                boxShadow: '0 12px 36px rgba(15, 23, 42, 0.06)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="status-pulse" style={{ backgroundColor: '#2563EB', width: '8px', height: '8px' }} />
                  <span className="mono" style={{ fontSize: '0.74rem', color: '#0F172A', fontWeight: 700, letterSpacing: '0.03em' }}>
                    STEELCORE™ PEB WORKSTATION vs GENERIC LEDGER
                  </span>
                </div>
                <span className="badge-tech badge-emerald" style={{ fontSize: '0.68rem', fontWeight: 700 }}>AUDITED PROOF</span>
              </div>

              {/* Main Image Container */}
              <div 
                style={{ 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  border: '1px solid #CBD5E1', 
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
                  backgroundColor: '#0F172A',
                  position: 'relative',
                  marginBottom: '18px'
                }}
              >
                <img 
                  src="/peb-workstation-operational.png" 
                  alt="SteelCore Dedicated PEB Industrial Workstation Interface" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    display: 'block',
                    transition: 'transform 0.3s ease'
                  }}
                  className="workstation-operational-img"
                />
              </div>

              {/* 3 Field Comparison Metric Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                <div style={{ backgroundColor: '#F8FAFC', padding: '12px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                    <TrendingDown size={14} color="#2563EB" />
                    <span>PLATE SCRAP</span>
                  </div>
                  <div className="heading-font" style={{ fontSize: '1.08rem', fontWeight: 800, color: '#2563EB', marginTop: '3px' }}>
                    3.8% - 4.2% Saved
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '2px' }}>
                    Geometry-aware nesting
                  </div>
                </div>

                <div style={{ backgroundColor: '#F8FAFC', padding: '12px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                    <ShieldCheck size={14} color="#059669" />
                    <span>PIECE BILLING</span>
                  </div>
                  <div className="heading-font" style={{ fontSize: '1.08rem', fontWeight: 800, color: '#059669', marginTop: '3px' }}>
                    0 Duplicate Claims
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '2px' }}>
                    NABL NDT UT signoffs
                  </div>
                </div>

                <div style={{ backgroundColor: '#F8FAFC', padding: '12px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                    <Zap size={14} color="#D97706" />
                    <span>GATE PASS SPEED</span>
                  </div>
                  <div className="heading-font" style={{ fontSize: '1.08rem', fontWeight: 800, color: '#D97706', marginTop: '3px' }}>
                    90s vs 45 min
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '2px' }}>
                    Instant e-Way Bill
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tonnage ROI Teaser Banner */}
      <section style={{ padding: '60px 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: '#EFF6FF',
              borderRadius: '16px',
              border: '1px solid #BFDBFE',
              padding: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', maxWidth: '680px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#DBEAFE', border: '1px solid #BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '4px' }}>
                <Calculator size={26} color="#1E40AF" />
              </div>
              <div>
                <div className="section-label" style={{ marginBottom: '8px' }}>
                  <span>FINANCIAL BENCHMARK TOOL</span>
                </div>
                <h3 className="heading-font" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1E3A8A', marginBottom: '8px' }}>
                  Calculate Your Plant's Bottom-Line Working Capital Retention
                </h3>
                <p style={{ color: '#334155', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  Input your monthly fabrication tonnage and current shop-floor tracking methods to see estimated annual savings on scrap, contractor billing, and crane detention.
                </p>
              </div>
            </div>

            <Link to="/roi-calculator" className="btn btn-primary" style={{ padding: '13px 26px', fontSize: '0.94rem', fontWeight: 700 }}>
              Launch Full ROI Calculator &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Case Studies Preview */}
      <section style={{ padding: '75px 0', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <div>
              <div className="section-label">
                <span>PROVEN INDUSTRIAL DEPLOYMENTS</span>
              </div>
              <h2 className="heading-font" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                Audited Plant Results Across India
              </h2>
            </div>

            <Link to="/case-studies" className="btn btn-secondary" style={{ fontSize: '0.88rem', fontWeight: 600 }}>
              View All Case Studies &rarr;
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '22px' }}>
            {[
              {
                title: "1,200 MT/Mo Heavy Structural Steel Plant",
                loc: "Western Industrial Corridor, Gujarat",
                res: "₹1.42 Cr Saved Annually",
                detail: "3.6% reduction in plate scrap loss and zero duplicate contractor claims across 4 heavy welding bays.",
                icon: <TrendingUp size={16} color="#059669" />
              },
              {
                title: "850 MT/Mo High-Tensile Purlin Center",
                loc: "Central Industrial Manufacturing Zone",
                res: "90s Gate Pass Dispatch",
                detail: "100% electronic weighbridge integration and real-time mill heat number traceability for JSW/Tata coils.",
                icon: <Zap size={16} color="#059669" />
              },
              {
                title: "45-Acre Logistics Park EPC Contractor",
                loc: "Industrial Warehousing Hub",
                res: "4-Day Milestone Billing",
                detail: "Deployed dedicated 3D EPC client portal, reducing milestone verification cycle from 26 days to 4 days.",
                icon: <Calendar size={16} color="#059669" />
              }
            ].map((c, idx) => (
              <div key={idx} className="card" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#D97706', fontWeight: 700, fontSize: '0.8rem', marginBottom: '6px' }}>
                  <MapPin size={14} color="#D97706" />
                  <span>{c.loc}</span>
                </div>
                <h3 className="heading-font" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                  {c.title}
                </h3>
                <div className="mono" style={{ fontSize: '0.95rem', color: '#059669', fontWeight: 800, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {c.icon}
                  <span>{c.res}</span>
                </div>
                <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <div className="section-label">
            <span>TAILORED INDUSTRIAL IMPLEMENTATION</span>
          </div>
          <h2 className="heading-font" style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
            Ready to Streamline Your Fabrication Bays?
          </h2>
          <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '28px' }}>
            Schedule a confidential 45-minute technical review with our industrial solutions architects.
            We analyze your drawing revision workflows, scrap rates, and shop stages.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenConsultation}
              className="btn btn-primary"
              style={{ padding: '13px 30px', fontSize: '0.96rem', fontWeight: 700 }}
            >
              Book Plant Assessment Walkthrough &rarr;
            </button>
            <Link to="/contact" className="btn btn-secondary" style={{ padding: '13px 26px', fontSize: '0.96rem', fontWeight: 600 }}>
              Contact Labs & Locations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
