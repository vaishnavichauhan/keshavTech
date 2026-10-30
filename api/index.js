import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());

// Ephemeral lead storage for serverless environments
const tmpLeadsFile = path.join('/tmp', 'leads.json');
let inMemoryLeads = [];

try {
  if (!fs.existsSync(tmpLeadsFile)) {
    fs.writeFileSync(tmpLeadsFile, JSON.stringify([], null, 2));
  }
} catch {
  // If filesystem is restricted, in-memory array serves as fallback
}

// Global System Statistics
app.get('/api/stats', (req, res) => {
  res.json({
    tonnageTrackedMT: '185,400+',
    activeBOMParts: '2.4M+',
    averageScrapReductionPct: 4.2,
    dispatchDelayReductionPct: 68,
    plantsPowered: 18,
    uptimePct: '99.98%'
  });
});

// Interactive ROI & Tonnage Calculator
app.post('/api/calculate-roi', (req, res) => {
  try {
    const {
      monthlyTonnage = 500,
      steelPricePerMT = 58000,
      activeProjects = 6,
      currentTracking = 'excel'
    } = req.body;

    const tonnage = Number(monthlyTonnage) || 500;
    const price = Number(steelPricePerMT) || 58000;
    const projects = Number(activeProjects) || 6;

    const scrapSavingsPct = currentTracking === 'excel' ? 0.038 : currentTracking === 'generic_erp' ? 0.018 : 0.025;
    const contractorLeakagePct = 0.015;
    const craneDetentionDaysSaved = projects * 2.5;

    const annualSteelValue = tonnage * 12 * price;
    const annualScrapSavings = annualSteelValue * scrapSavingsPct;
    const annualContractorSavings = annualSteelValue * contractorLeakagePct;
    const dispatchDetentionSavings = craneDetentionDaysSaved * 35000;

    const totalAnnualSavings = Math.round(annualScrapSavings + annualContractorSavings + dispatchDetentionSavings);
    const paybackWeeks = Math.max(3, Math.round((280000 / (totalAnnualSavings / 52)) * 10) / 10);

    res.json({
      tonnageMonthly: tonnage,
      annualSteelTurnoverINR: annualSteelValue,
      scrapSavingsINR: Math.round(annualScrapSavings),
      contractorBillingRecoveryINR: Math.round(annualContractorSavings),
      siteDetentionSavedINR: Math.round(dispatchDetentionSavings),
      totalEstimatedAnnualSavingsINR: totalAnnualSavings,
      projectedPaybackWeeks: paybackWeeks,
      metricTonsSavedYearly: Math.round(tonnage * 12 * scrapSavingsPct)
    });
  } catch (err) {
    res.status(400).json({ error: 'Calculation failed', details: err.message });
  }
});

// Case Studies
app.get('/api/case-studies', (req, res) => {
  res.json([
    {
      id: 'peb-heavy-fabrication',
      title: '1,200 MT/Month Heavy Structural Steel & PEB Manufacturer',
      location: 'Western Industrial Corridor, India',
      facilitySize: '32-Acre Fabrication Yard & 4 Automated Bays',
      challenges: [
        'CAD/Tekla BOQ revisions manually entered into spreadsheets causing cutting mismatches',
        'Plate remnants and heat numbers untraceable across CNC plasma tables',
        'Trailers dispatched without verified site erection sequence, leading to crane idling'
      ],
      solution: 'Custom deployment of Keshav Info SteelCore ERP with Tekla Multi-level sync, Shop-Floor Stage Barcoding, and Sequence Dispatch Engine.',
      results: [
        '3.6% direct reduction in plate scrap loss (saving ₹1.42 Cr annually)',
        'Zero missing part-mark complaints on site erection erection teams',
        'Real-time billing approval tied directly to NABL-certified ultrasonic/WPS inspection stages'
      ],
      metrics: {
        scrapReduction: '3.6%',
        turnaroundTime: '-22 Days',
        annualSavings: '₹1.42 Cr'
      }
    },
    {
      id: 'coil-slitting-infrastructure',
      title: 'Roll-Forming & High-Tensile Purlin Infrastructure Facility',
      location: 'Central Industrial Zone, India',
      facilitySize: '18-Acre Profiling & Coil Processing Hub',
      challenges: [
        'Heavy coil slitting weight discrepancies between inward weighbridge and shop output',
        'Customer revision changes mid-roll resulting in obsolete cut lengths',
        'Manual GST e-way bill generation causing 4-hour dispatch queues'
      ],
      solution: 'Integrated Keshav Info CoilTrack module with electronic weighbridge hooks, automated slitting plan yield calculation, and instant 1-click Dispatch Challan.',
      results: [
        '100% coil master heat number pedigree from JSW/Tata Steel through to profiled sheet bundles',
        'Dispatch gate pass generation dropped from 45 minutes to 90 seconds',
        'Zero billing leakages on slit coil edge scrap reconciliation'
      ],
      metrics: {
        gatePassSpeed: '90s (was 45m)',
        coilTraceability: '100% Mill Heat #',
        auditReadiness: '100%'
      }
    }
  ]);
});

// Demo / Consultation Booking
app.post('/api/demo-request', (req, res) => {
  try {
    const {
      companyName,
      contactPerson,
      phone,
      email,
      industryCategory,
      monthlyTonnage,
      message,
      selectedModules = []
    } = req.body;

    if (!companyName || !contactPerson || !phone || !email) {
      return res.status(400).json({ error: 'Please provide company name, contact person, phone number, and email.' });
    }

    const lead = {
      id: 'LEAD-' + Date.now(),
      companyName,
      contactPerson,
      phone,
      email,
      industryCategory: industryCategory || 'Pre-Engineered Buildings (PEB)',
      monthlyTonnage: monthlyTonnage || 'Under 500 MT',
      message: message || '',
      selectedModules,
      createdAt: new Date().toISOString()
    };

    inMemoryLeads.unshift(lead);

    try {
      let existingLeads = [];
      if (fs.existsSync(tmpLeadsFile)) {
        const raw = fs.readFileSync(tmpLeadsFile, 'utf8');
        existingLeads = JSON.parse(raw);
      }
      existingLeads.unshift(lead);
      fs.writeFileSync(tmpLeadsFile, JSON.stringify(existingLeads, null, 2));
    } catch {
      // In-memory array already updated
    }

    console.log(`[Lead Captured on Vercel] ${lead.companyName} by ${lead.contactPerson}`);

    res.status(201).json({
      success: true,
      message: 'Demo consultation booked successfully. Our industrial systems architect will reach out within 4 business hours.',
      leadId: lead.id
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error processing consultation request', details: err.message });
  }
});

export default app;
