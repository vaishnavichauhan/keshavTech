import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ onOpenConsultation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Workstation', path: '/workstation', badge: 'LIVE' },
    { name: 'System Breakdown', path: '/why-generic-fails' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'ROI Calculator', path: '/roi-calculator' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid #E2E8F0' : '1px solid rgba(226, 232, 240, 0.7)',
        boxShadow: scrolled ? '0 2px 12px rgba(15, 23, 42, 0.05)' : 'none'
      }}
    >
      <div 
        className="zoho-header-inner"
        style={{ 
          paddingTop: scrolled ? '10px' : '16px',
          paddingBottom: scrolled ? '10px' : '14px',
          transition: 'all 0.2s ease'
        }}
      >
        {/* Left: Brand Logo (Zoho ERP layout style) */}
        <Link 
          to="/" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            textDecoration: 'none', 
            color: 'inherit',
            marginRight: '16px'
          }}
        >
          <BrandLogo size={36} showText={true} subtitle="PEB SYSTEMS" />
        </Link>

        {/* Center: Modern Clean Navigation Links (Zoho ERP style) */}
        <nav 
          style={{ 
            display: 'none', 
            alignItems: 'center', 
            gap: '6px' 
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="zoho-nav-item"
              style={({ isActive }) => ({
                color: isActive ? '#2563EB' : '#1E293B',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: isActive ? 600 : 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '8px 12px',
                borderRadius: '6px',
                backgroundColor: isActive ? 'rgba(37, 99, 235, 0.06)' : 'transparent',
                transition: 'all 0.16s ease'
              })}
            >
              <span>{link.name}</span>
              {link.badge && (
                <span 
                  className="mono" 
                  style={{ 
                    fontSize: '0.62rem', 
                    padding: '1px 5px', 
                    borderRadius: '4px', 
                    backgroundColor: '#ECFDF5', 
                    color: '#059669', 
                    border: '1px solid #A7F3D0',
                    fontWeight: 700
                  }}
                >
                  {link.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right: Primary Action Button (Matching Zoho ERP's clean "Sign up now" blue button) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: '16px' }}>
          <button
            onClick={onOpenConsultation}
            className="zoho-header-cta"
            style={{ 
              backgroundColor: '#2563EB',
              color: '#FFFFFF',
              border: '1px solid #1D4ED8',
              borderRadius: '6px',
              padding: '9px 20px', 
              fontSize: '0.88rem',
              fontWeight: 600,
              fontFamily: 'var(--font-heading)',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(37, 99, 235, 0.25)',
              transition: 'all 0.18s ease'
            }}
          >
            Book Plant Demo
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#0F172A',
              cursor: 'pointer',
              padding: '6px'
            }}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid #E2E8F0',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 10px 25px rgba(15, 23, 42, 0.08)'
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              style={({ isActive }) => ({
                color: isActive ? '#2563EB' : '#0F172A',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: isActive ? 700 : 500,
                padding: '10px 0',
                borderBottom: '1px solid #F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              })}
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="badge-emerald" style={{ fontSize: '0.65rem' }}>{link.badge}</span>
              )}
            </NavLink>
          ))}
          <div style={{ paddingTop: '12px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              style={{
                width: '100%',
                backgroundColor: '#2563EB',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '6px',
                padding: '12px',
                fontSize: '0.92rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Book Plant Demo
            </button>
          </div>
        </div>
      )}

      <style>{`
        .zoho-header-inner {
          width: 100%;
          max-width: 1520px;
          margin: 0 auto;
          padding-left: 60px;
          padding-right: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .zoho-nav-item:hover {
          color: #2563EB !important;
          background-color: rgba(37, 99, 235, 0.05) !important;
        }
        .zoho-header-cta:hover {
          background-color: #1D4ED8 !important;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35) !important;
          transform: translateY(-1px);
        }
        @media (min-width: 1040px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 1039px) {
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (max-width: 1280px) {
          .zoho-header-inner {
            padding-left: 40px;
            padding-right: 40px;
          }
        }
        @media (max-width: 768px) {
          .zoho-header-inner {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}</style>
    </header>
  );
}
