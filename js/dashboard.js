// Dashboard Charts and Interactions

document.addEventListener('DOMContentLoaded', function() {
    // Chart.js default configuration
    Chart.defaults.font.family = "'DM Sans', sans-serif";
    Chart.defaults.color = '#6c7a89';
    
    const colors = {
        primary: '#1a3a52',
        primaryLight: '#2d5573',
        accent: '#d4a574',
        success: '#27ae60',
        warning: '#f39c12',
        error: '#c0392b',
        info: '#3498db'
    };
    
    // LIHTC Allocations by State Chart
    const allocationsCtx = document.getElementById('allocations-chart');
    if (allocationsCtx) {
        new Chart(allocationsCtx, {
            type: 'bar',
            data: {
                labels: ['CA', 'NY', 'TX', 'FL', 'IL', 'PA', 'OH', 'GA', 'NC', 'MI'],
                datasets: [{
                    label: 'Total Allocation ($M)',
                    data: [1842, 1456, 1289, 987, 845, 732, 689, 654, 612, 587],
                    backgroundColor: colors.primary,
                    borderColor: colors.primaryLight,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return '$' + context.parsed.y + 'M';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value + 'M';
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
    
    // Tax Credit Pricing Trends Chart
    const pricingCtx = document.getElementById('pricing-chart');
    if (pricingCtx) {
        new Chart(pricingCtx, {
            type: 'line',
            data: {
                labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025'],
                datasets: [
                    {
                        label: '9% Credit Price',
                        data: [0.88, 0.89, 0.90, 0.91, 0.89, 0.90, 0.92, 0.92, 0.94],
                        borderColor: colors.primary,
                        backgroundColor: 'rgba(26, 58, 82, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: '4% Credit Price',
                        data: [0.84, 0.85, 0.86, 0.87, 0.85, 0.86, 0.88, 0.87, 0.89],
                        borderColor: colors.accent,
                        backgroundColor: 'rgba(212, 165, 116, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        align: 'end'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': $' + context.parsed.y.toFixed(2);
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 0.80,
                        max: 1.00,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toFixed(2);
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
    
    // Housing Starts by Quarter Chart
    const startsCtx = document.getElementById('starts-chart');
    if (startsCtx) {
        new Chart(startsCtx, {
            type: 'line',
            data: {
                labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025'],
                datasets: [{
                    label: 'Multifamily Starts (000s)',
                    data: [128, 135, 142, 138, 145, 152, 148, 141, 156],
                    borderColor: colors.info,
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y + 'K units';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 120,
                        ticks: {
                            callback: function(value) {
                                return value + 'K';
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
    
    // Credit Type Distribution Chart
    const creditTypeCtx = document.getElementById('credit-type-chart');
    if (creditTypeCtx) {
        new Chart(creditTypeCtx, {
            type: 'doughnut',
            data: {
                labels: ['9% Competitive', '4% Non-Competitive', 'Other Programs'],
                datasets: [{
                    data: [62, 33, 5],
                    backgroundColor: [
                        colors.primary,
                        colors.accent,
                        colors.info
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Filter functionality
    const yearFilter = document.getElementById('year-filter');
    const regionFilter = document.getElementById('region-filter');
    const metricFilter = document.getElementById('metric-filter');
    
    function updateDashboard() {
        const year = yearFilter ? yearFilter.value : '2025';
        const region = regionFilter ? regionFilter.value : 'national';
        const metric = metricFilter ? metricFilter.value : 'allocations';
        
        console.log('Updating dashboard:', { year, region, metric });
        
        // In a real application, this would fetch new data from an API
        // and update the charts accordingly
        
        // Update key metrics based on filters (demo)
        updateKeyMetrics(year, region);
    }
    
    function updateKeyMetrics(year, region) {
        // This would normally fetch from an API
        // For demo purposes, we're using static values
        
        const metrics = {
            '2025': {
                'national': {
                    allocations: '$12.4B',
                    pricing: '$0.94',
                    starts: '142K',
                    foreclosures: '0.8%'
                },
                'northeast': {
                    allocations: '$2.8B',
                    pricing: '$0.96',
                    starts: '32K',
                    foreclosures: '0.6%'
                },
                'south': {
                    allocations: '$4.2B',
                    pricing: '$0.93',
                    starts: '48K',
                    foreclosures: '0.9%'
                },
                'midwest': {
                    allocations: '$2.1B',
                    pricing: '$0.92',
                    starts: '28K',
                    foreclosures: '0.7%'
                },
                'west': {
                    allocations: '$3.3B',
                    pricing: '$0.95',
                    starts: '34K',
                    foreclosures: '0.8%'
                }
            }
        };
        
        const data = metrics[year] && metrics[year][region] ? metrics[year][region] : metrics['2025']['national'];
        
        const totalAllocations = document.getElementById('total-allocations');
        const avgPricing = document.getElementById('avg-pricing');
        const housingStarts = document.getElementById('housing-starts');
        const foreclosureRate = document.getElementById('foreclosure-rate');
        
        if (totalAllocations) totalAllocations.textContent = data.allocations;
        if (avgPricing) avgPricing.textContent = data.pricing;
        if (housingStarts) housingStarts.textContent = data.starts;
        if (foreclosureRate) foreclosureRate.textContent = data.foreclosures;
    }
    
    // Add event listeners to filters
    if (yearFilter) yearFilter.addEventListener('change', updateDashboard);
    if (regionFilter) regionFilter.addEventListener('change', updateDashboard);
    if (metricFilter) metricFilter.addEventListener('change', updateDashboard);
});
