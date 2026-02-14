// 2026 Federal LIHTC Information by State
// Source: Novogradac (https://www.novoco.com/resource-centers/affordable-housing-tax-credits/2026-federal-lihtc-information-by-state)
// Data from Known LIHTC Ceiling allocations

const stateAllocations2026 = {
    'AL': { 
        name: 'Alabama', 
        credits9pct: 17618699,
        population: 5059903,
        perCapita: 3.48,
        region: 'South'
    },
    'AK': { 
        name: 'Alaska', 
        credits9pct: 3515779,
        population: 733391,
        perCapita: 4.79,
        region: 'West'
    },
    'AR': { 
        name: 'Arkansas', 
        credits9pct: 9500000,
        population: 3038970,
        perCapita: 3.13,
        region: 'South'
    },
    'CA': { 
        name: 'California', 
        credits9pct: 134697194,
        population: 39355703,
        perCapita: 3.42,
        region: 'West'
    },
    'CO': { 
        name: 'Colorado', 
        credits9pct: 20350796,
        population: 6012561,
        perCapita: 3.38,
        region: 'West'
    },
    'CT': { 
        name: 'Connecticut', 
        credits9pct: 12554036,
        population: 3609446,
        perCapita: 3.48,
        region: 'Northeast'
    },
    'FL': { 
        name: 'Florida', 
        credits9pct: 79874812,
        population: 23462518,
        perCapita: 3.40,
        region: 'South'
    },
    'GA': { 
        name: 'Georgia', 
        credits9pct: 39579277,
        population: 11302748,
        perCapita: 3.50,
        region: 'South'
    },
    'IL': { 
        name: 'Illinois', 
        credits9pct: 34000000,
        population: 12719141,
        perCapita: 2.67,
        region: 'Midwest'
    },
    'IA': { 
        name: 'Iowa', 
        credits9pct: 11091056,
        population: 3193079,
        perCapita: 3.48,
        region: 'Midwest'
    },
    'KY': { 
        name: 'Kentucky', 
        credits9pct: 15673879,
        population: 4505837,
        perCapita: 3.48,
        region: 'South'
    },
    'MI': { 
        name: 'Michigan', 
        credits9pct: 34904568,
        population: 10127984,
        perCapita: 3.45,
        region: 'Midwest'
    },
    'MO': { 
        name: 'Missouri', 
        credits9pct: 21334552,
        population: 6170732,
        perCapita: 3.46,
        region: 'Midwest'
    },
    'MT': { 
        name: 'Montana', 
        credits9pct: null, // Data not available
        population: 1106629,
        perCapita: 0,
        region: 'West'
    },
    'NH': { 
        name: 'New Hampshire', 
        credits9pct: 4813253,
        population: 1381189,
        perCapita: 3.48,
        region: 'Northeast'
    },
    'NJ': { 
        name: 'New Jersey', 
        credits9pct: 33032433,
        population: 9548215,
        perCapita: 3.46,
        region: 'Northeast'
    },
    'NM': { 
        name: 'New Mexico', 
        credits9pct: 7276954,
        population: 2203199,
        perCapita: 3.30,
        region: 'West'
    },
    'NY': { 
        name: 'New York', 
        credits9pct: 68066519,
        population: 20002427,
        perCapita: 3.40,
        region: 'Northeast'
    },
    'NC': { 
        name: 'North Carolina', 
        credits9pct: 37733218,
        population: 11197968,
        perCapita: 3.37,
        region: 'South'
    },
    'ND': { 
        name: 'North Dakota', 
        credits9pct: 3953600,
        population: 774948,
        perCapita: 5.10,
        region: 'Midwest'
    },
    'OR': { 
        name: 'Oregon', 
        credits9pct: 14224083,
        population: 4237256,
        perCapita: 3.36,
        region: 'West'
    },
    'SC': { 
        name: 'South Carolina', 
        credits9pct: 18600000,
        population: 5570274,
        perCapita: 3.34,
        region: 'South'
    },
    'TX': { 
        name: 'Texas', 
        credits9pct: 106889479,
        population: 31709821,
        perCapita: 3.37,
        region: 'South'
    },
    'UT': { 
        name: 'Utah', 
        credits9pct: 11968342,
        population: 3538904,
        perCapita: 3.38,
        region: 'West'
    },
    'VA': { 
        name: 'Virginia', 
        credits9pct: 30249230,
        population: 8880107,
        perCapita: 3.41,
        region: 'South'
    },
    'WA': { 
        name: 'Washington', 
        credits9pct: 24580203,
        population: 8001020,
        perCapita: 3.07,
        region: 'West'
    },
    'WV': { 
        name: 'West Virginia', 
        credits9pct: 6046248,
        population: 1788146,
        perCapita: 3.38,
        region: 'South'
    },
    'WY': { 
        name: 'Wyoming', 
        credits9pct: 3953600,
        population: 580456,
        perCapita: 6.81,
        region: 'West'
    },
    
    // Additional states (estimated based on national per-capita average of $3.42)
    'AZ': { name: 'Arizona', credits9pct: 25200000, population: 7359197, perCapita: 3.42, region: 'West' },
    'DE': { name: 'Delaware', credits9pct: 3500000, population: 1018396, perCapita: 3.44, region: 'South' },
    'HI': { name: 'Hawaii', credits9pct: 4900000, population: 1435138, perCapita: 3.42, region: 'West' },
    'ID': { name: 'Idaho', credits9pct: 6800000, population: 1964726, perCapita: 3.46, region: 'West' },
    'IN': { name: 'Indiana', credits9pct: 23500000, population: 6833037, perCapita: 3.44, region: 'Midwest' },
    'KS': { name: 'Kansas', credits9pct: 10100000, population: 2940546, perCapita: 3.43, region: 'Midwest' },
    'LA': { name: 'Louisiana', credits9pct: 15800000, population: 4624047, perCapita: 3.42, region: 'South' },
    'ME': { name: 'Maine', credits9pct: 4800000, population: 1385340, perCapita: 3.47, region: 'Northeast' },
    'MD': { name: 'Maryland', credits9pct: 21200000, population: 6164660, perCapita: 3.44, region: 'South' },
    'MA': { name: 'Massachusetts', credits9pct: 24000000, population: 7001399, perCapita: 3.43, region: 'Northeast' },
    'MN': { name: 'Minnesota', credits9pct: 19500000, population: 5707390, perCapita: 3.42, region: 'Midwest' },
    'MS': { name: 'Mississippi', credits9pct: 10100000, population: 2939690, perCapita: 3.44, region: 'South' },
    'NE': { name: 'Nebraska', credits9pct: 6800000, population: 1978379, perCapita: 3.44, region: 'Midwest' },
    'NV': { name: 'Nevada', credits9pct: 11200000, population: 3194176, perCapita: 3.51, region: 'West' },
    'OH': { name: 'Ohio', credits9pct: 40200000, population: 11785935, perCapita: 3.41, region: 'Midwest' },
    'OK': { name: 'Oklahoma', credits9pct: 13800000, population: 4053824, perCapita: 3.40, region: 'South' },
    'PA': { name: 'Pennsylvania', credits9pct: 44500000, population: 12961683, perCapita: 3.43, region: 'Northeast' },
    'RI': { name: 'Rhode Island', credits9pct: 3800000, population: 1095610, perCapita: 3.47, region: 'Northeast' },
    'SD': { name: 'South Dakota', credits9pct: 3100000, population: 909824, perCapita: 3.41, region: 'Midwest' },
    'TN': { name: 'Tennessee', credits9pct: 24200000, population: 7126489, perCapita: 3.40, region: 'South' },
    'VT': { name: 'Vermont', credits9pct: 2200000, population: 647464, perCapita: 3.40, region: 'Northeast' },
    'WI': { name: 'Wisconsin', credits9pct: 20300000, population: 5910955, perCapita: 3.43, region: 'Midwest' }
};

// Calculate totals
const totals = {
    totalCredits: Object.values(stateAllocations2026).reduce((sum, state) => 
        sum + (state.credits9pct || 0), 0),
    totalPopulation: Object.values(stateAllocations2026).reduce((sum, state) => 
        sum + state.population, 0),
    nationalPerCapita: 0
};
totals.nationalPerCapita = (totals.totalCredits / totals.totalPopulation).toFixed(2);

// Regional summaries
const regionalSummaries = {
    'Northeast': { credits: 0, population: 0, states: [] },
    'South': { credits: 0, population: 0, states: [] },
    'Midwest': { credits: 0, population: 0, states: [] },
    'West': { credits: 0, population: 0, states: [] }
};

Object.entries(stateAllocations2026).forEach(([code, data]) => {
    if (data.region && regionalSummaries[data.region]) {
        regionalSummaries[data.region].credits += data.credits9pct || 0;
        regionalSummaries[data.region].population += data.population;
        regionalSummaries[data.region].states.push(code);
    }
});

// Calculate regional per capita
Object.keys(regionalSummaries).forEach(region => {
    const summary = regionalSummaries[region];
    summary.perCapita = (summary.credits / summary.population).toFixed(2);
});

// Export
if (typeof window !== 'undefined') {
    window.stateAllocations2026 = stateAllocations2026;
    window.lihtcTotals = totals;
    window.regionalSummaries = regionalSummaries;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { stateAllocations2026, totals, regionalSummaries };
}
