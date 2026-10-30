import React, { useState } from 'react';
import {
  Terminal,
  CheckCircle2,
  BarChart3,
  PieChart,
  Activity,
  Scale,
  ShieldCheck,
  TrendingDown,
  Zap,
  Building2,
  Cpu,
  Sparkles,
  FileText
} from 'lucide-react';

export default function Hero({ onOpenConsultation, onExploreSimulator }) {
  // Tabs to interactively switch views inside the hero dashboard
  const [activeTab, setActiveTab] = useState('stages'); // 'stages' | 'production' | 'donut' | 'telemetry'

  return (
    <section className="zoho-hero-section">
      {/* 3D Blueprint Wireframe Grid Floor (Perspective receding into distance, like Zoho ERP) */}
      <div className="zoho-grid-floor-wrapper" aria-hidden="true">
        <div className="zoho-grid-floor" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Centered Hero Header (Zoho ERP layout) */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 12px' }}>
          {/* Section Label (Zoho ERP style) */}
          <h1
            className="heading-font"
            style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.6rem)',
              fontWeight: 800,
              lineHeight: 1.14,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              color: '#0F172A'
            }}
          >
            Enterprise Operating Systems for PEB &amp; Heavy Steel Plants
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.02rem, 1.3vw, 1.15rem)',
              lineHeight: 1.65,
              color: '#475569',
              marginBottom: '32px',
              fontWeight: 400,
              maxWidth: '780px',
              margin: '0 auto 32px'
            }}
          >
            Tekla 3D model revision bridges, shop-floor SAW welding trackers, coil slitting yield optimizers,
            and erection-sequence trailer dispatch. Built for structural steel plants processing 300 to 3,000 MT per month.
          </p>

          {/* Action CTAs (Zoho ERP pill button styling) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '28px'
            }}
          >
            <button
              onClick={onExploreSimulator}
              className="btn-zoho-dark"
              style={{ fontSize: '0.96rem' }}
            >
              Launch Live Workstation
            </button>

            <button
              onClick={onOpenConsultation}
              className="btn-zoho-peach"
              style={{ fontSize: '0.96rem' }}
            >
              Schedule Plant Walkthrough
            </button>
          </div>



        </div>

        {/* 3D Floating Dashboard Showcase Deck (Zoho ERP Screenshot Match) */}
        <div className="zoho-stage-deck">
          {/* Left Flanking Perspective Card (Displays hero1.png Team Production + Live Job metrics) */}
          <div
            className="zoho-side-card-left"
            onClick={() => setActiveTab('production')}
            title="Click to view Team Production"
          >
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                border: '1px solid #CBD5E1',
                boxShadow: '0 16px 36px -6px rgba(15, 23, 42, 0.12), 0 0 20px rgba(59, 130, 246, 0.1)',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  padding: '10px 14px',
                  backgroundColor: '#F8FAFC',
                  borderBottom: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <BarChart3 size={14} color="#7C3AED" />
                  <span className="mono" style={{ fontSize: '0.72rem', fontWeight: 700, color: '#334155' }}>
                    Team Production &bull; S-146
                  </span>
                </div>
                <span className="badge-tech" style={{ fontSize: '0.62rem', padding: '1px 6px' }}>OCTOBER</span>
              </div>
              <div style={{ padding: '8px', backgroundColor: '#FFFFFF' }}>
                <img
                  src="/hero1.png"
                  alt="Team Production Chart"
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                />
              </div>
              <div style={{ padding: '10px 14px', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#475569', fontFamily: 'var(--font-mono)' }}>
                  <span>Tonnage: <strong style={{ color: '#0F172A' }}>480.5 MT</strong></span>
                  <span>Fabricated: <strong style={{ color: '#059669' }}>71.2%</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Main Dashboard Showcase (Browser card with tabs, image / telemetry, and circular Play button) */}
          <div className="zoho-center-card">
            {/* Top Window Bar with macOS traffic lights and View Switcher Tabs */}
            <div
              style={{
                padding: '12px 18px',
                backgroundColor: '#F8FAFC',
                borderBottom: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px'
              }}
            >


              {/* View Selector Tabs (Matches real ERP interactive experience) */}


              {/* Status Indicator */}

            </div>

            {/* View Content Display */}
            <div style={{ position: 'relative', backgroundColor: '#FFFFFF', minHeight: '380px' }}>
              {/* Tab 1: Stage Breakdown Image (hero2.png) */}
              {activeTab === 'stages' && (
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img
                    src="/hero2.png"
                    alt="Production and Dispatch Stage Breakdown"
                    style={{
                      width: '100%',
                      maxHeight: '440px',
                      objectFit: 'contain',
                      borderRadius: '10px',
                      boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      paddingTop: '12px',
                      marginTop: '10px',
                      borderTop: '1px solid #F1F5F9',
                      fontSize: '0.78rem',
                      color: '#64748B',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <span>Active Stage: <strong style={{ color: '#D97706' }}>SAW Beam Welder Bay 02</strong></span>
                    <span>Verified: <strong style={{ color: '#059669' }}>WPS-PEB-01 &bull; 100% UT</strong></span>
                    <span>Ready for Dispatch: <strong style={{ color: '#2563EB' }}>5,899 Pcs (65%)</strong></span>
                  </div>
                </div>
              )}

              {/* Tab 2: Monthly Team Production Image (hero1.png) */}
              {activeTab === 'production' && (
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img
                    src="/hero1.png"
                    alt="Monthly Team Production Overview"
                    style={{
                      width: '100%',
                      maxHeight: '440px',
                      objectFit: 'contain',
                      borderRadius: '10px',
                      boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      paddingTop: '12px',
                      marginTop: '10px',
                      borderTop: '1px solid #F1F5F9',
                      fontSize: '0.78rem',
                      color: '#64748B',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <span>Alpha (M): <strong style={{ color: '#7C3AED' }}>592 Pcs (15.59 MT)</strong></span>
                    <span>Bravo (H): <strong style={{ color: '#2563EB' }}>236 Pcs (25.13 MT)</strong></span>
                    <span>Shreeji: <strong style={{ color: '#059669' }}>1 Pcs (0.04 MT)</strong></span>
                  </div>
                </div>
              )}

              {/* Tab 3: Fabrication Allocation Donut Image (hero3.png) */}
              {activeTab === 'donut' && (
                <div style={{ padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img
                    src="/hero3.png"
                    alt="Fabrication Allocation Donut"
                    style={{
                      maxWidth: '460px',
                      width: '100%',
                      maxHeight: '440px',
                      objectFit: 'contain',
                      borderRadius: '10px',
                      boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
                    }}
                  />
                </div>
              )}

              {/* Tab 4: Live Telemetry Console (Original Console Body Intact) */}
              {activeTab === 'telemetry' && (
                <div style={{ padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '0.84rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {/* Job Info */}
                    <div style={{ backgroundColor: '#F8FAFC', padding: '14px 16px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                      <div style={{ color: '#64748B', fontSize: '0.72rem', fontWeight: 600, marginBottom: '4px' }}>PROJECT IN EXECUTION</div>
                      <div style={{ color: '#0F172A', fontWeight: 700, fontSize: '0.94rem', marginBottom: '4px' }}>
                        JOB S-147: Industrial Bay (Valsad, Guj.)
                      </div>
                      <div style={{ color: '#2563EB', fontSize: '0.8rem', fontWeight: 600, marginBottom: '8px' }}>
                        Tekla Model: <span style={{ color: '#D97706' }}>Rev R2.nc1 (842 Part Marks Synced)</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#475569' }}>
                        <span>Tonnage: <strong style={{ color: '#0F172A' }}>480.5 MT</strong></span>
                        <span>Fabricated: <strong style={{ color: '#059669' }}>71.2%</strong></span>
                      </div>
                    </div>

                    {/* Stage Gate */}
                    <div style={{ backgroundColor: '#F8FAFC', padding: '14px 16px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                      <div style={{ color: '#64748B', fontSize: '0.72rem', fontWeight: 600, marginBottom: '4px' }}>ACTIVE STAGE GATE</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#D97706', fontWeight: 700, fontSize: '0.88rem', marginBottom: '4px' }}>
                        <span className="status-pulse" style={{ backgroundColor: '#D97706' }} />
                        SAW Beam Welder Bay 02 &bull; MCL-01..14
                      </div>
                      <p style={{ color: '#475569', fontSize: '0.76rem', lineHeight: 1.5, margin: 0 }}>
                        WPS-PEB-01 Qualified &bull; 100% Ultrasonic Testing (UT) &bull; Verified Piece-Rate Payables
                      </p>
                    </div>

                    {/* Dispatch Status */}
                    <div style={{ backgroundColor: '#F8FAFC', padding: '14px 16px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                      <div style={{ color: '#64748B', fontSize: '0.72rem', fontWeight: 600, marginBottom: '4px' }}>ERECTION DISPATCH SEQUENCE</div>
                      <div style={{ color: '#059669', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', marginBottom: '4px' }}>
                        <CheckCircle2 size={15} /> Trailer 04 Loaded (GJ-15)
                      </div>
                      <p style={{ color: '#475569', fontSize: '0.76rem', lineHeight: 1.5, margin: 0 }}>
                        Payload: 26.85 MT &bull; Base Stubs &amp; Columns sequenced first for site mobile cranes.
                      </p>
                    </div>

                    {/* Terminal Log */}
                    <div
                      style={{
                        padding: '9px 12px',
                        borderRadius: '6px',
                        backgroundColor: '#F1F5F9',
                        border: '1px solid #E2E8F0',
                        color: '#334155',
                        fontSize: '0.74rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <Terminal size={14} color="#2563EB" />
                      <span>Mother Coil JSW-98421 (24.62 MT) de-coiled &bull; Slit Yield: 96.88% &bull; Tag REM-24B-01 archived</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Flanking Perspective Card (Displays hero3.png Donut + Dispatch Stats) */}
          <div
            className="zoho-side-card-right"
            onClick={() => setActiveTab('donut')}
            title="Click to view Allocation Donut"
          >
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                border: '1px solid #CBD5E1',
                boxShadow: '0 16px 36px -6px rgba(15, 23, 42, 0.12), 0 0 20px rgba(56, 189, 248, 0.12)',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  padding: '10px 14px',
                  backgroundColor: '#F8FAFC',
                  borderBottom: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <PieChart size={14} color="#059669" />
                  <span className="mono" style={{ fontSize: '0.72rem', fontWeight: 700, color: '#334155' }}>
                    Allocation Donut &bull; 9,012 Parts
                  </span>
                </div>
                <span className="badge-tech badge-emerald" style={{ fontSize: '0.62rem', padding: '1px 6px' }}>100% SYNC</span>
              </div>
              <div style={{ padding: '8px', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
                <img
                  src="/hero3.png"
                  alt="Fabrication Allocation Donut Chart"
                  style={{ width: '100%', maxHeight: '220px', objectFit: 'contain', display: 'block', borderRadius: '8px' }}
                />
              </div>
              <div style={{ padding: '10px 14px', backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#475569', fontFamily: 'var(--font-mono)' }}>
                  <span>Dispatched: <strong style={{ color: '#059669' }}>2,493 (28%)</strong></span>
                  <span>Ready: <strong style={{ color: '#D97706' }}>5,899 (65%)</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Metrics Cards with Refined Zoho-Grade Styling */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '18px',
            marginBottom: '36px',
            position: 'relative',
            zIndex: 2
          }}
        >
          <div className="card border-top-cobalt" style={{ padding: '22px', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Scale size={20} color="#2563EB" />
              </div>
              {/* <span className="mono" style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 600 }}>01 &bull; VOLUME</span> */}
            </div>
            <div className="heading-font" style={{ fontSize: '1.95rem', fontWeight: 800, color: '#2563EB', lineHeight: 1 }}>
              185,400+ <span style={{ fontSize: '0.95rem', color: '#64748B' }}>MT</span>
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', marginTop: '6px' }}>
              Heavy Steel Tracked
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '3px' }}>
              Across 18 high-capacity plants
            </div>
          </div>

          <div className="card border-top-amber" style={{ padding: '22px', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: '#FFFBEB', border: '1px solid #FDE68A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingDown size={20} color="#D97706" />
              </div>
              {/* <span className="mono" style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 600 }}>02 &bull; YIELD</span> */}
            </div>
            <div className="heading-font" style={{ fontSize: '1.95rem', fontWeight: 800, color: '#D97706', lineHeight: 1 }}>
              3.8% - 4.2%
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', marginTop: '6px' }}>
              Scrap Loss Reduction
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '3px' }}>
              Plate &amp; HR coil nesting recovery
            </div>
          </div>

          <div className="card border-top-emerald" style={{ padding: '22px', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={20} color="#059669" />
              </div>
              {/* <span className="mono" style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 600 }}>03 &bull; SPEED</span> */}
            </div>
            <div className="heading-font" style={{ fontSize: '1.95rem', fontWeight: 800, color: '#059669', lineHeight: 1 }}>
              68% Faster
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', marginTop: '6px' }}>
              Dispatch Turnaround
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '3px' }}>
              90-second gate pass generation
            </div>
          </div>

          <div className="card border-top-cyan" style={{ padding: '22px', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: '#F0F9FF', border: '1px solid #BAE6FD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={20} color="#0284C7" />
              </div>
              {/* <span className="mono" style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 600 }}>04 &bull; QUALITY</span> */}
            </div>
            <div className="heading-font" style={{ fontSize: '1.95rem', fontWeight: 800, color: '#0284C7', lineHeight: 1 }}>
              100% Heat
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', marginTop: '6px' }}>
              Mill MTC Traceability
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '3px' }}>
              Coil inward to site erection
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
