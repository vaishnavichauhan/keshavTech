import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Truck,
  Sparkles
} from 'lucide-react';

export default function RoiCalculator({ onOpenConsultation }) {
  const [monthlyTonnage, setMonthlyTonnage] = useState(650);
  const [steelPrice, setSteelPrice] = useState(58000);
  const [activeProjects, setActiveProjects] = useState(6);
  const [currentSystem, setCurrentSystem] = useState('excel');
  const [results, setResults] = useState(null);

  useEffect(() => {
    const scrapPct = currentSystem === 'excel' ? 0.038 : currentSystem === 'generic_erp' ? 0.022 : 0.032;
    const contractorPct = 0.015;
    const craneDays = activeProjects * 2.5;

    const annualTurnover = monthlyTonnage * 12 * steelPrice;
    const scrapSavings = annualTurnover * scrapPct;
    const contractorSavings = annualTurnover * contractorPct;
    const craneSavings = craneDays * 35000;
    const totalSavings = Math.round(scrapSavings + contractorSavings + craneSavings);
    const paybackWeeks = Math.max(2.5, Math.round((350000 / (totalSavings / 52)) * 10) / 10);
    const metricTonsSaved = Math.round(monthlyTonnage * 12 * scrapPct);

    setResults({
      annualTurnover,
      scrapSavings: Math.round(scrapSavings),
      contractorSavings: Math.round(contractorSavings),
      craneSavings: Math.round(craneSavings),
      totalSavings,
      paybackWeeks,
      metricTonsSaved
    });

    fetch('/api/calculate-roi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        monthlyTonnage,
        steelPricePerMT: steelPrice,
        activeProjects,
        currentTracking: currentSystem
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data && data.totalEstimatedAnnualSavingsINR) {
        setResults({
          annualTurnover: data.annualSteelTurnoverINR,
          scrapSavings: data.scrapSavingsINR,
          contractorSavings: data.contractorBillingRecoveryINR,
          craneSavings: data.siteDetentionSavedINR,
          totalSavings: data.totalEstimatedAnnualSavingsINR,
          paybackWeeks: data.projectedPaybackWeeks,
          metricTonsSaved: data.metricTonsSavedYearly
        });
      }
    })
    .catch(() => {});
  }, [monthlyTonnage, steelPrice, activeProjects, currentSystem]);

  const formatINR = (val) => {
    if (!val) return '₹ 0';
    if (val >= 10000000) {
      return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹ ${(val / 100000).toFixed(2)} Lakhs`;
    }
    return `₹ ${val.toLocaleString('en-IN')}`;
  };

  return (
    <section 
      id="roi-calculator"
      style={{
        padding: '80px 0',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="badge-tech" style={{ marginBottom: '14px' }}>
            <span>FINANCIAL BENCHMARK TOOL</span>
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
            Calculate Your Plant's Cashflow Retention
          </h2>
          <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.65 }}>
            Adjust your monthly structural steel tonnage and tracking methods to quantify recoverable working capital.
          </p>
        </div>

        {/* 2-Column High-Impact Card Layout (Zoho ERP Style) */}
        <div 
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
            alignItems: 'stretch'
          }}
        >
          {/* Controls Side */}
          <div 
            className="card zoho-card-lift"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1.5px solid #E2E8F0',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={18} color="#2563EB" />
              </div>
              <h3 className="heading-font" style={{ color: '#0F172A', fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>
                Operational Parameters
              </h3>
            </div>

            {/* Slider 1: Monthly Tonnage */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <label style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>
                  Monthly Fabrication Tonnage
                </label>
                <span className="mono" style={{ fontSize: '1.05rem', fontWeight: 800, color: '#2563EB', padding: '3px 10px', backgroundColor: '#EFF6FF', borderRadius: '6px', border: '1px solid #BFDBFE' }}>
                  {monthlyTonnage} MT / mo
                </span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="2500" 
                step="50"
                value={monthlyTonnage} 
                onChange={(e) => setMonthlyTonnage(Number(e.target.value))} 
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#64748B', marginTop: '6px' }}>
                <span>100 MT</span>
                <span>1,200 MT</span>
                <span>2,500 MT</span>
              </div>
            </div>

            {/* Slider 2: Steel Base Price */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <label style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>
                  Average Steel Base Price
                </label>
                <span className="mono" style={{ fontSize: '1.05rem', fontWeight: 800, color: '#2563EB', padding: '3px 10px', backgroundColor: '#EFF6FF', borderRadius: '6px', border: '1px solid #BFDBFE' }}>
                  ₹ {steelPrice.toLocaleString('en-IN')} / MT
                </span>
              </div>
              <input 
                type="range" 
                min="48000" 
                max="85000" 
                step="1000"
                value={steelPrice} 
                onChange={(e) => setSteelPrice(Number(e.target.value))} 
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#64748B', marginTop: '6px' }}>
                <span>₹48,000 / MT</span>
                <span>₹66,000 / MT</span>
                <span>₹85,000 / MT</span>
              </div>
            </div>

            {/* Slider 3: Active Projects */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <label style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>
                  Active Sites in Progress Concurrently
                </label>
                <span className="mono" style={{ fontSize: '1.05rem', fontWeight: 800, color: '#2563EB', padding: '3px 10px', backgroundColor: '#EFF6FF', borderRadius: '6px', border: '1px solid #BFDBFE' }}>
                  {activeProjects} Projects
                </span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="25" 
                step="1"
                value={activeProjects} 
                onChange={(e) => setActiveProjects(Number(e.target.value))} 
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#64748B', marginTop: '6px' }}>
                <span>1 Site</span>
                <span>12 Sites</span>
                <span>25 Sites</span>
              </div>
            </div>

            {/* Current Method Switcher */}
            <div>
              <label style={{ fontSize: '0.92rem', color: '#334155', display: 'block', marginBottom: '12px', fontWeight: 600 }}>
                Current Shop-Floor Tracking Method
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {[
                  { id: 'excel', label: 'Excel / Sheets' },
                  { id: 'generic_erp', label: 'Tally / SAP' },
                  { id: 'manual', label: 'Manual Ledgers' }
                ].map((sys) => (
                  <button
                    key={sys.id}
                    onClick={() => setCurrentSystem(sys.id)}
                    style={{
                      padding: '12px 10px',
                      borderRadius: '10px',
                      border: currentSystem === sys.id ? '2px solid #2563EB' : '1.5px solid #CBD5E1',
                      backgroundColor: currentSystem === sys.id ? '#EFF6FF' : '#FFFFFF',
                      color: currentSystem === sys.id ? '#1D4ED8' : '#334155',
                      fontSize: '0.84rem',
                      fontWeight: currentSystem === sys.id ? 700 : 500,
                      cursor: 'pointer',
                      textAlign: 'center',
                      boxShadow: currentSystem === sys.id ? '0 4px 12px rgba(37,99,235,0.15)' : 'none',
                      transition: 'all 0.18s ease'
                    }}
                  >
                    {sys.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Side (Zoho ERP Elevated Financial Card) */}
          {results && (
            <div 
              className="card zoho-card-lift"
              style={{
                backgroundColor: '#EFF6FF',
                borderRadius: '20px',
                border: '1.5px solid #BFDBFE',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 12px 32px rgba(37, 99, 235, 0.08)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
                  <span className="mono" style={{ fontSize: '0.78rem', color: '#1E40AF', fontWeight: 800, letterSpacing: '0.04em' }}>
                    PROJECTED ANNUAL CASH RECOVERY
                  </span>
                  <span className="mono" style={{ fontSize: '0.76rem', color: '#047857', padding: '4px 10px', borderRadius: '6px', background: '#ECFDF5', border: '1px solid #A7F3D0', fontWeight: 700 }}>
                    PAYBACK: ~{results.paybackWeeks} WEEKS
                  </span>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontSize: '0.92rem', color: '#475569', fontWeight: 600 }}>
                    Total Estimated Annual Cashflow Retention
                  </div>
                  <div 
                    className="heading-font"
                    style={{
                      fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
                      fontWeight: 800,
                      color: '#1D4ED8',
                      lineHeight: 1.1,
                      marginTop: '8px',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {formatINR(results.totalSavings)}
                    <span style={{ fontSize: '1rem', color: '#64748B', fontWeight: 500 }}> / year</span>
                  </div>
                  <div className="mono" style={{ fontSize: '0.84rem', color: '#059669', fontWeight: 700, marginTop: '8px' }}>
                    ~{results.metricTonsSaved} Metric Tonnes of prime steel scrap saved yearly
                  </div>
                </div>

                {/* Detailed Recovery Breakdown Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  <div 
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 16px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '10px',
                      border: '1px solid #DBEAFE',
                      fontSize: '0.9rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <TrendingUp size={16} color="#2563EB" />
                      <span style={{ color: '#334155', fontWeight: 600 }}>Plate &amp; Coil Scrap Salvage</span>
                    </div>
                    <span className="mono" style={{ color: '#0F172A', fontWeight: 800 }}>{formatINR(results.scrapSavings)}</span>
                  </div>

                  <div 
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 16px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '10px',
                      border: '1px solid #DBEAFE',
                      fontSize: '0.9rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <ShieldCheck size={16} color="#059669" />
                      <span style={{ color: '#334155', fontWeight: 600 }}>Contractor Duplicate Claims Plugged</span>
                    </div>
                    <span className="mono" style={{ color: '#0F172A', fontWeight: 800 }}>{formatINR(results.contractorSavings)}</span>
                  </div>

                  <div 
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '14px 16px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '10px',
                      border: '1px solid #DBEAFE',
                      fontSize: '0.9rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Truck size={16} color="#D97706" />
                      <span style={{ color: '#334155', fontWeight: 600 }}>Site Crane &amp; Trailer Detention Avoidance</span>
                    </div>
                    <span className="mono" style={{ color: '#0F172A', fontWeight: 800 }}>{formatINR(results.craneSavings)}</span>
                  </div>
                </div>
              </div>

              {/* Consultation Trigger */}
              <button 
                onClick={onOpenConsultation}
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px 20px', fontSize: '0.95rem', fontWeight: 700 }}
              >
                <span>Request Detailed Plant Audit Report</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
