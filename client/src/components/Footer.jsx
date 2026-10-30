import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

export default function Footer({ onOpenConsultation }) {
  const stats = [
    { value: '185K+ MT', label: 'Tonnage Processed' },
    { value: '18+', label: 'Heavy PEB Plants' },
    { value: '100%', label: 'Mill Heat Traceability' },
    { value: '4.2%', label: 'Raw Steel Salvaged' },
    { value: '0', label: 'Duplicate Invoices' }
  ];

  return (
    <footer 
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E5E7EB',
        color: '#4B5563',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.88rem'
      }}
    >
      {/* 1. Top Enterprise Metrics Row (Matches Zoho ERP Top Counter Strip) */}
      <div style={{ borderBottom: '1px solid #E5E7EB', padding: '40px 0' }}>
        <div className="container footer-container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            {stats.map((s, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '10px 14px',
                  borderRight: idx < stats.length - 1 ? '1px solid #E5E7EB' : 'none'
                }}
                className="zoho-footer-stat-col"
              >
                <div 
                  className="heading-font" 
                  style={{ 
                    fontSize: 'clamp(1.9rem, 2.6vw, 2.5rem)', 
                    fontWeight: 800, 
                    color: '#0F172A',
                    lineHeight: 1.15
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#6B7280', marginTop: '6px', fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Main 5-Column Navigation Grid (Exact Zoho ERP Column Layout) */}
      <div style={{ padding: '52px 0 32px' }}>
        <div className="container footer-container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '40px 24px',
              marginBottom: '48px'
            }}
          >
            {/* Column 1: SOLUTIONS */}
            <div>
              <div style={{ marginBottom: '22px' }}>
                <div 
                  className="heading-font"
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase'
                  }}
                >
                  SOLUTIONS
                </div>
                <div style={{ width: '32px', height: '2px', backgroundColor: '#0F172A', marginTop: '8px' }} />
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li>
                  <Link to="/solutions" className="zoho-footer-link">
                    SteelCore™ Enterprise ERP
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="zoho-footer-link">
                    TeklaBridge™ 3D BIM Sync
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="zoho-footer-link">
                    CoilTrack™ Slitting &amp; Nesting
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="zoho-footer-link">
                    ErectSync™ Mobile Field PWA
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="zoho-footer-link">
                    Dedicated EPC Client Portals
                  </Link>
                </li>
                <li>
                  <Link to="/workstation" className="zoho-footer-link">
                    Interactive Workstation Sandbox
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: VERTICALS */}
            <div>
              <div style={{ marginBottom: '22px' }}>
                <div 
                  className="heading-font"
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase'
                  }}
                >
                  VERTICALS
                </div>
                <div style={{ width: '32px', height: '2px', backgroundColor: '#0F172A', marginTop: '8px' }} />
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li>
                  <Link to="/solutions" className="zoho-footer-link">
                    Heavy PEB Structural Plants
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="zoho-footer-link">
                    Purlin &amp; Cold Roll-Forming
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="zoho-footer-link">
                    Coil Service Centers &amp; Slitting
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="zoho-footer-link">
                    Turnkey EPC Infrastructure
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: QUICK LINKS */}
            <div>
              <div style={{ marginBottom: '22px' }}>
                <div 
                  className="heading-font"
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase'
                  }}
                >
                  QUICK LINKS
                </div>
                <div style={{ width: '32px', height: '2px', backgroundColor: '#0F172A', marginTop: '8px' }} />
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li>
                  <Link to="/roi-calculator" className="zoho-footer-link">
                    Tonnage ROI Calculator
                  </Link>
                </li>
                <li>
                  <Link to="/why-generic-fails" className="zoho-footer-link">
                    Why Generic ERPs Break Down
                  </Link>
                </li>
                <li>
                  <Link to="/workstation" className="zoho-footer-link">
                    Shop-Floor 8-Stage Tracker
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="zoho-footer-link">
                    Tekla Revision Diffing
                  </Link>
                </li>
                <li>
                  <Link to="/why-generic-fails" className="zoho-footer-link">
                    Piece-Rate Contractor Rules
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: RESOURCES */}
            <div>
              <div style={{ marginBottom: '22px' }}>
                <div 
                  className="heading-font"
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase'
                  }}
                >
                  RESOURCES
                </div>
                <div style={{ width: '32px', height: '2px', backgroundColor: '#0F172A', marginTop: '8px' }} />
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li>
                  <Link to="/about" className="zoho-footer-link">
                    Help document &amp; Tech Specs
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies" className="zoho-footer-link">
                    1,200 MT/Mo Plant Case Study
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="zoho-footer-link">
                    API &amp; Weighbridge Protocols
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: CONTACT US ON (Zoho ERP Box Layout + Social Icons) */}
            <div>
              <div style={{ marginBottom: '22px' }}>
                <div 
                  className="heading-font"
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase'
                  }}
                >
                  CONTACT US ON
                </div>
                <div style={{ width: '32px', height: '2px', backgroundColor: '#0F172A', marginTop: '8px' }} />
              </div>

              {/* Phone Card */}
              <a 
                href="tel:+919825088214"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  textDecoration: 'none',
                  color: 'inherit',
                  marginBottom: '16px'
                }}
                className="zoho-contact-item"
              >
                <div 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    border: '1.5px solid #D1D5DB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: '#FFFFFF',
                    transition: 'all 0.18s ease'
                  }}
                  className="zoho-icon-box"
                >
                  <Phone size={18} color="#0F172A" />
                </div>
                <div>
                  <div style={{ fontSize: '0.86rem', color: '#0F172A', fontWeight: 700, lineHeight: 1.3 }}>
                    Mon-Sat <span style={{ fontWeight: 400, color: '#4B5563', fontSize: '0.8rem' }}>(9:00AM to 7:30PM)</span>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#4B5563', marginTop: '2px' }}>
                    Direct: <strong style={{ color: '#0F172A' }}>+91 98250 88214</strong>
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a 
                href="mailto:engineering@keshavinfo.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  textDecoration: 'none',
                  color: 'inherit',
                  marginBottom: '26px'
                }}
                className="zoho-contact-item"
              >
                <div 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    border: '1.5px solid #D1D5DB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    backgroundColor: '#FFFFFF',
                    transition: 'all 0.18s ease'
                  }}
                  className="zoho-icon-box"
                >
                  <Mail size={18} color="#0F172A" />
                </div>
                <div>
                  <div style={{ fontSize: '0.86rem', color: '#0F172A', fontWeight: 700, lineHeight: 1.3 }}>
                    Email us
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#4B5563', marginTop: '2px' }}>
                    engineering@keshavinfo.com
                  </div>
                </div>
              </a>

              {/* FOLLOW US ON */}
              <div>
                <div style={{ marginBottom: '14px' }}>
                  <div 
                    className="heading-font"
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase'
                    }}
                  >
                    FOLLOW US ON
                  </div>
                  <div style={{ width: '28px', height: '2px', backgroundColor: '#0F172A', marginTop: '6px' }} />
                </div>

                {/* Social SVG Icons (Matches Zoho ERP Screenshot: X, LinkedIn, Instagram, YouTube) */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  {/* X / Twitter */}
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label="Follow us on X"
                    className="zoho-social-link"
                    style={{ color: '#4B5563', transition: 'color 0.15s ease', display: 'flex', alignItems: 'center' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label="Follow us on LinkedIn"
                    className="zoho-social-link"
                    style={{ color: '#4B5563', transition: 'color 0.15s ease', display: 'flex', alignItems: 'center' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.25 1.63 1.63 0 0 0 0-3.25z"/>
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label="Follow us on Instagram"
                    className="zoho-social-link"
                    style={{ color: '#4B5563', transition: 'color 0.15s ease', display: 'flex', alignItems: 'center' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label="Follow us on YouTube"
                    className="zoho-social-link"
                    style={{ color: '#4B5563', transition: 'color 0.15s ease', display: 'flex', alignItems: 'center' }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Bottom Legal & Compliance Strip (Exact Zoho ERP Pipe Separated Layout) */}
          <div 
            style={{
              paddingTop: '32px',
              borderTop: '1px solid #E5E7EB',
              textAlign: 'center'
            }}
          >
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '8px 12px',
                fontSize: '0.8rem',
                color: '#4B5563'
              }}
            >
              <Link to="/contact" className="zoho-sub-link">Contact</Link>
              <span style={{ color: '#D1D5DB' }}>|</span>
              <Link to="/about" className="zoho-sub-link">Security</Link>
              <span style={{ color: '#D1D5DB' }}>|</span>
              <Link to="/about" className="zoho-sub-link">Compliance</Link>
              <span style={{ color: '#D1D5DB' }}>|</span>
              <span className="zoho-sub-link">IS 800:2007</span>
              <span style={{ color: '#D1D5DB' }}>|</span>
              <span className="zoho-sub-link">AISC 360-16</span>
              <span style={{ color: '#D1D5DB' }}>|</span>
              <span className="zoho-sub-link">MBMA 2012</span>
              <span style={{ color: '#D1D5DB' }}>|</span>
              <span className="zoho-sub-link">ISO 9001:2015</span>
              <span style={{ color: '#D1D5DB' }}>|</span>
              <Link to="/about" className="zoho-sub-link">Terms of Service</Link>
              <span style={{ color: '#D1D5DB' }}>|</span>
              <Link to="/about" className="zoho-sub-link">Privacy Policy</Link>
              <span style={{ color: '#D1D5DB' }}>|</span>
              <Link to="/about" className="zoho-sub-link">Cookie Policy</Link>
              <span style={{ color: '#D1D5DB' }}>|</span>
              <button 
                type="button" 
                onClick={onOpenConsultation}
                style={{ background: 'none', border: 'none', padding: 0, color: '#2563EB', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
                className="zoho-sub-link"
              >
                Schedule Assessment
              </button>
            </div>

            {/* Copyright Line */}
            <div 
              style={{
                marginTop: '18px',
                fontSize: '0.8rem',
                color: '#6B7280'
              }}
            >
              &copy; 2026, Keshav Information Systems Pvt. Ltd. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
