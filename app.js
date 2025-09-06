// Application Data
const appData = {
  "competitors": [
    {
      "id": 1,
      "name": "Cymulate",
      "description": "Security validation platform with exposure management",
      "website": "cymulate.com",
      "status": "active",
      "lastUpdate": "2025-09-05T10:30:00Z",
      "newsCount": 15,
      "category": "Purpose-built CTEM"
    },
    {
      "id": 2,
      "name": "Strobes Security", 
      "description": "Risk-based vulnerability management platform",
      "website": "strobes.co",
      "status": "active",
      "lastUpdate": "2025-09-05T09:15:00Z",
      "newsCount": 12,
      "category": "Purpose-built CTEM"
    },
    {
      "id": 3,
      "name": "Outpost24",
      "description": "Comprehensive exposure management solutions",
      "website": "outpost24.com", 
      "status": "active",
      "lastUpdate": "2025-09-05T08:45:00Z",
      "newsCount": 8,
      "category": "Purpose-built CTEM"
    },
    {
      "id": 4,
      "name": "XM Cyber",
      "description": "Attack path modeling and validation platform",
      "website": "xmcyber.com",
      "status": "active", 
      "lastUpdate": "2025-09-04T16:20:00Z",
      "newsCount": 18,
      "category": "Purpose-built CTEM"
    },
    {
      "id": 5,
      "name": "Safe Security",
      "description": "Autonomous CTEM platform powered by CyberAGI", 
      "website": "safe.security",
      "status": "active",
      "lastUpdate": "2025-09-05T11:10:00Z",
      "newsCount": 22,
      "category": "Purpose-built CTEM"
    },
    {
      "id": 6,
      "name": "Nagomi Security",
      "description": "Combines exposure insight, defense testing, and simulations",
      "website": "nagomisecurity.com",
      "status": "active",
      "lastUpdate": "2025-09-05T07:30:00Z", 
      "newsCount": 6,
      "category": "Purpose-built CTEM"
    },
    {
      "id": 7,
      "name": "Tenable",
      "description": "Exposure Management Suite with vulnerability scanning",
      "website": "tenable.com",
      "status": "active",
      "lastUpdate": "2025-09-05T12:00:00Z",
      "newsCount": 28,
      "category": "Rebranded CTEM"
    },
    {
      "id": 8, 
      "name": "CrowdStrike",
      "description": "EDR-based external asset scanning and exposure detection",
      "website": "crowdstrike.com",
      "status": "active",
      "lastUpdate": "2025-09-05T10:45:00Z",
      "newsCount": 31,
      "category": "Rebranded CTEM"
    },
    {
      "id": 9,
      "name": "SentinelOne",
      "description": "Singularity Platform with exposure management capabilities", 
      "website": "sentinelone.com",
      "status": "active",
      "lastUpdate": "2025-09-05T09:30:00Z",
      "newsCount": 19,
      "category": "Rebranded CTEM"
    },
    {
      "id": 10,
      "name": "Rapid7",
      "description": "Risk scoring and vulnerability management platform",
      "website": "rapid7.com", 
      "status": "active",
      "lastUpdate": "2025-09-04T14:15:00Z",
      "newsCount": 14,
      "category": "Rebranded CTEM"
    }
  ],
  "sampleNews": [
    {
      "id": 1,
      "title": "Cymulate Enhances Exposure Management Platform with New AI-Driven Risk Prioritization",
      "source": "Security Week",
      "publishDate": "2025-09-05T10:30:00Z", 
      "relevanceScore": 95,
      "competitor": "Cymulate",
      "summary": "Cymulate announces new AI capabilities for better threat exposure prioritization and validation",
      "keywords": ["CTEM", "exposure management", "AI", "threat validation"],
      "url": "https://example.com/cymulate-ai-update"
    },
    {
      "id": 2,
      "title": "Safe Security Raises $70M Series C to Pioneer CyberAGI and Autonomous CTEM",
      "source": "TechCrunch",
      "publishDate": "2025-09-05T11:10:00Z",
      "relevanceScore": 98, 
      "competitor": "Safe Security",
      "summary": "Safe Security secures major funding round to advance autonomous threat exposure management capabilities",
      "keywords": ["funding", "CyberAGI", "autonomous CTEM", "Series C"],
      "url": "https://example.com/safe-security-funding"
    },
    {
      "id": 3,
      "title": "XM Cyber Launches Enhanced Attack Path Analysis for Hybrid Cloud Environments",
      "source": "Dark Reading",
      "publishDate": "2025-09-04T16:20:00Z",
      "relevanceScore": 92,
      "competitor": "XM Cyber", 
      "summary": "New capabilities for modeling attack paths across on-premises and cloud infrastructure",
      "keywords": ["attack path", "hybrid cloud", "exposure validation", "CTEM"],
      "url": "https://example.com/xm-cyber-hybrid-cloud"
    },
    {
      "id": 4,
      "title": "Tenable Introduces Real-time Threat Intelligence Integration in Exposure Management Suite", 
      "source": "InfoSecurity Magazine",
      "publishDate": "2025-09-05T12:00:00Z",
      "relevanceScore": 88,
      "competitor": "Tenable",
      "summary": "Enhanced threat intelligence feeds improve vulnerability prioritization and exposure assessment",
      "keywords": ["threat intelligence", "exposure management", "vulnerability prioritization"],
      "url": "https://example.com/tenable-threat-intel"
    }
  ],
  "newsources": [
    {
      "name": "Security Week",
      "type": "RSS", 
      "url": "https://feeds.feedburner.com/securityweek",
      "enabled": true
    },
    {
      "name": "Dark Reading",
      "type": "RSS",
      "url": "https://www.darkreading.com/rss.xml", 
      "enabled": true
    },
    {
      "name": "InfoSecurity Magazine",
      "type": "RSS",
      "url": "https://www.infosecurity-magazine.com/rss/news/",
      "enabled": true
    },
    {
      "name": "The Hacker News",
      "type": "RSS", 
      "url": "https://feeds.feedburner.com/TheHackersNews",
      "enabled": true
    },
    {
      "name": "TechCrunch Security",
      "type": "API",
      "url": "newsapi.org",
      "enabled": true
    }
  ],
  "keywords": [
    "CTEM",
    "continuous threat exposure management", 
    "exposure management",
    "threat exposure",
    "attack surface management",
    "vulnerability management",
    "security validation",
    "attack path analysis",
    "exposure assessment", 
    "threat validation",
    "security posture",
    "cyber resilience",
    "risk prioritization"
  ],
  "slackConfig": {
    "webhookUrl": "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX",
    "channel": "#competitor-intelligence",
    "frequency": "real-time",
    "messageFormat": "detailed"
  }
};

// Application State
let currentSection = 'dashboard';
let filteredNews = [...appData.sampleNews];

// DOM Elements
const navTabs = document.querySelectorAll('.nav__tab');
const sections = document.querySelectorAll('.section');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderCompetitorsDashboard();
    renderCompetitorsManagement();
    renderNewsSources();
    renderKeywords();
    renderNewsPreview();
    loadSlackConfiguration();
    populateCompetitorFilter();
});

// Navigation
function initializeNavigation() {
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            switchSection(sectionId);
        });
    });
}

function switchSection(sectionId) {
    // Update active tab
    navTabs.forEach(tab => {
        tab.classList.remove('nav__tab--active');
        if (tab.getAttribute('data-section') === sectionId) {
            tab.classList.add('nav__tab--active');
        }
    });

    // Update active section
    sections.forEach(section => {
        section.classList.remove('section--active');
        if (section.id === sectionId) {
            section.classList.add('section--active');
        }
    });

    currentSection = sectionId;
}

// Dashboard Functions
function renderCompetitorsDashboard() {
    const grid = document.getElementById('competitorsGrid');
    if (!grid) return;

    grid.innerHTML = appData.competitors.map(competitor => `
        <div class="competitor-card" onclick="viewCompetitorDetails('${competitor.name}')">
            <div class="competitor-card__header">
                <div>
                    <h3 class="competitor-card__name">${competitor.name}</h3>
                    <div class="competitor-card__category">${competitor.category}</div>
                </div>
                <div class="status status--success">
                    ${competitor.status}
                </div>
            </div>
            <p class="competitor-card__description">${competitor.description}</p>
            <div class="competitor-card__metrics">
                <div class="metric">
                    <div class="metric__value">${competitor.newsCount}</div>
                    <div class="metric__label">News Articles</div>
                </div>
                <div class="metric">
                    <div class="metric__value">${getRandomRelevanceScore()}%</div>
                    <div class="metric__label">Avg. Relevance</div>
                </div>
            </div>
            <div class="competitor-card__footer">
                <span>Last updated: ${formatDate(competitor.lastUpdate)}</span>
                <span>${competitor.website}</span>
            </div>
        </div>
    `).join('');
}

function renderCompetitorsManagement() {
    const purposeBuilt = appData.competitors.filter(c => c.category === 'Purpose-built CTEM');
    const rebranded = appData.competitors.filter(c => c.category === 'Rebranded CTEM');

    renderCompetitorCategory('purposeBuiltList', purposeBuilt);
    renderCompetitorCategory('rebrandedList', rebranded);
}

function renderCompetitorCategory(containerId, competitors) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = competitors.map(competitor => `
        <div class="competitor-item">
            <div class="competitor-item__info">
                <h4>${competitor.name}</h4>
                <p>${competitor.description}</p>
            </div>
            <div class="competitor-item__controls">
                <label class="toggle-switch">
                    <input type="checkbox" ${competitor.status === 'active' ? 'checked' : ''} 
                           onchange="toggleCompetitorMonitoring(${competitor.id})">
                    <span class="toggle-slider"></span>
                </label>
            </div>
        </div>
    `).join('');
}

// News Sources Functions
function renderNewsSources() {
    const container = document.getElementById('sourcesList');
    if (!container) return;

    container.innerHTML = appData.newsources.map(source => `
        <div class="source-item">
            <div class="source-item__info">
                <span class="source-type">${source.type}</span>
                <span class="source-name">${source.name}</span>
            </div>
            <label class="toggle-switch">
                <input type="checkbox" ${source.enabled ? 'checked' : ''} 
                       onchange="toggleNewsSource('${source.name}')">
                <span class="toggle-slider"></span>
            </label>
        </div>
    `).join('');
}

// Keywords Functions
function renderKeywords() {
    const container = document.getElementById('keywordsList');
    if (!container) return;

    container.innerHTML = appData.keywords.map(keyword => `
        <div class="keyword-tag">
            ${keyword}
            <button class="keyword-tag__remove" onclick="removeKeyword('${keyword}')">×</button>
        </div>
    `).join('');
}

function addKeyword() {
    const input = document.getElementById('newKeyword');
    const keyword = input.value.trim();
    
    if (keyword && !appData.keywords.includes(keyword)) {
        appData.keywords.push(keyword);
        input.value = '';
        renderKeywords();
        showNotification('Keyword added successfully', 'success');
    }
}

function removeKeyword(keyword) {
    const index = appData.keywords.indexOf(keyword);
    if (index > -1) {
        appData.keywords.splice(index, 1);
        renderKeywords();
        showNotification('Keyword removed', 'info');
    }
}

// News Preview Functions
function renderNewsPreview() {
    const container = document.getElementById('newsFeed');
    if (!container) return;

    container.innerHTML = filteredNews.map(article => `
        <div class="news-article">
            <div class="news-article__header">
                <h3 class="news-article__title">
                    <a href="${article.url}" target="_blank">${article.title}</a>
                </h3>
                <div class="relevance-score">
                    <div class="relevance-bar">
                        <div class="relevance-fill ${getRelevanceClass(article.relevanceScore)}" 
                             style="width: ${article.relevanceScore}%"></div>
                    </div>
                    ${article.relevanceScore}%
                </div>
            </div>
            <div class="news-article__meta">
                <div>
                    <span class="competitor-badge">${article.competitor}</span>
                    <span>${article.source}</span>
                </div>
                <span>${formatDate(article.publishDate)}</span>
            </div>
            <p class="news-article__summary">${article.summary}</p>
            <div class="news-article__keywords">
                ${article.keywords.map(keyword => `
                    <span class="keyword-badge">${keyword}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function populateCompetitorFilter() {
    const select = document.getElementById('competitorFilter');
    if (!select) return;

    const competitors = [...new Set(appData.sampleNews.map(article => article.competitor))];
    
    select.innerHTML = '<option value="">All Competitors</option>' + 
        competitors.map(competitor => `
            <option value="${competitor}">${competitor}</option>
        `).join('');

    select.addEventListener('change', filterNews);
    document.getElementById('relevanceFilter').addEventListener('change', filterNews);
}

function filterNews() {
    const competitorFilter = document.getElementById('competitorFilter').value;
    const relevanceFilter = parseInt(document.getElementById('relevanceFilter').value) || 0;

    filteredNews = appData.sampleNews.filter(article => {
        const matchesCompetitor = !competitorFilter || article.competitor === competitorFilter;
        const matchesRelevance = article.relevanceScore >= relevanceFilter;
        return matchesCompetitor && matchesRelevance;
    });

    renderNewsPreview();
}

// Slack Configuration Functions
function loadSlackConfiguration() {
    const config = appData.slackConfig;
    
    document.getElementById('webhookUrl').value = config.webhookUrl;
    document.getElementById('slackChannel').value = config.channel;
    document.getElementById('notificationFreq').value = config.frequency;
    document.getElementById('messageFormat').value = config.messageFormat;
}

function saveSlackConfig() {
    const webhookUrl = document.getElementById('webhookUrl').value;
    const channel = document.getElementById('slackChannel').value;
    const frequency = document.getElementById('notificationFreq').value;
    const messageFormat = document.getElementById('messageFormat').value;

    appData.slackConfig = {
        webhookUrl,
        channel,
        frequency,
        messageFormat
    };

    showNotification('Slack configuration saved successfully', 'success');
}

function testSlackConnection() {
    const webhookUrl = document.getElementById('webhookUrl').value;
    
    if (!webhookUrl) {
        showNotification('Please enter a webhook URL first', 'error');
        return;
    }

    // Simulate testing connection
    showNotification('Testing Slack connection...', 'info');
    
    setTimeout(() => {
        showNotification('Slack connection test successful!', 'success');
    }, 2000);
}

// Settings Functions
function exportConfig() {
    const config = {
        competitors: appData.competitors,
        keywords: appData.keywords,
        newsources: appData.newsources,
        slackConfig: appData.slackConfig
    };

    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ctem-competitor-config.json';
    a.click();
    URL.revokeObjectURL(url);

    showNotification('Configuration exported successfully', 'success');
}

function importConfig() {
    document.getElementById('configFile').click();
    
    document.getElementById('configFile').onchange = function(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const config = JSON.parse(e.target.result);
                
                // Merge imported configuration
                if (config.competitors) appData.competitors = config.competitors;
                if (config.keywords) appData.keywords = config.keywords;
                if (config.newsources) appData.newsources = config.newsources;
                if (config.slackConfig) appData.slackConfig = config.slackConfig;

                // Re-render affected sections
                renderCompetitorsDashboard();
                renderCompetitorsManagement();
                renderNewsSources();
                renderKeywords();
                loadSlackConfiguration();

                showNotification('Configuration imported successfully', 'success');
            } catch (error) {
                showNotification('Error importing configuration', 'error');
            }
        };
        reader.readAsText(file);
    };
}

// Event Handlers
function toggleCompetitorMonitoring(competitorId) {
    const competitor = appData.competitors.find(c => c.id === competitorId);
    if (competitor) {
        competitor.status = competitor.status === 'active' ? 'inactive' : 'active';
        showNotification(`${competitor.name} monitoring ${competitor.status}`, 'info');
    }
}

function toggleNewsSource(sourceName) {
    const source = appData.newsources.find(s => s.name === sourceName);
    if (source) {
        source.enabled = !source.enabled;
        showNotification(`${sourceName} ${source.enabled ? 'enabled' : 'disabled'}`, 'info');
    }
}

function viewCompetitorDetails(competitorName) {
    // Filter news for this competitor and switch to news preview
    document.getElementById('competitorFilter').value = competitorName;
    filterNews();
    switchSection('news-preview');
    showNotification(`Viewing news for ${competitorName}`, 'info');
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

function getRandomRelevanceScore() {
    return Math.floor(Math.random() * 20) + 80; // 80-99%
}

function getRelevanceClass(score) {
    if (score >= 90) return 'relevance-fill--high';
    if (score >= 70) return 'relevance-fill--medium';
    return 'relevance-fill--low';
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;

    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = 'var(--color-success)';
            break;
        case 'error':
            notification.style.backgroundColor = 'var(--color-error)';
            break;
        case 'warning':
            notification.style.backgroundColor = 'var(--color-warning)';
            break;
        default:
            notification.style.backgroundColor = 'var(--color-info)';
    }

    notification.textContent = message;
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                switchSection('dashboard');
                break;
            case '2':
                e.preventDefault();
                switchSection('competitors');
                break;
            case '3':
                e.preventDefault();
                switchSection('news-config');
                break;
            case '4':
                e.preventDefault();
                switchSection('slack-config');
                break;
            case '5':
                e.preventDefault();
                switchSection('news-preview');
                break;
            case '6':
                e.preventDefault();
                switchSection('settings');
                break;
        }
    }
});

// Handle Enter key in keyword input
document.getElementById('newKeyword')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addKeyword();
    }
});

// ---- Live News Fetcher (RSS) ---- //
async function fetchRSS(feedUrl) {
  // Use allorigins CORS proxy
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    const parser = new DOMParser();
    const xml = parser.parseFromString(data.contents, "text/xml");
    const items = xml.querySelectorAll("item");
    return [...items].map(item => ({
      title: item.querySelector("title")?.textContent,
      link: item.querySelector("link")?.textContent,
      pubDate: item.querySelector("pubDate")?.textContent,
      summary: item.querySelector("description")?.textContent || "",
      source: xml.querySelector("channel > title")?.textContent || feedUrl
    }));
  } catch (e) {
    return [];
  }
}

async function fetchAllNewsSources() {
  const sources = appData.newsources.filter(s => s.enabled !== false);
  let all = [];
  for (let src of sources) {
    if (src.type === 'RSS') {
      const articles = await fetchRSS(src.url);
      all.push(...articles);
    }
  }
  return all;
}

// ---- Competitor Add/Remove ---- //
window.competitorList = [];
function renderCompetitorsUI() {
  const wrap = document.getElementById("competitorList");
  let h = '<ul>';
  competitorList.forEach((c, i) => {
    h += `<li>${c.name} (${c.domain}) <button onclick="removeCompetitor(${i})">Remove</button></li>`;
    if (c.subdomains) h += `<br><small>Subdomains: ${c.subdomains.join(', ')}</small>`;
  });
  h += '</ul>';
  wrap.innerHTML = h;
}
window.removeCompetitor = idx => {
  competitorList.splice(idx, 1);
  renderCompetitorsUI();
};
document.getElementById("addCompetitorForm").onsubmit = e => {
  e.preventDefault();
  const name = document.getElementById('comp-name').value.trim();
  const desc = document.getElementById('comp-desc').value.trim();
  const website = document.getElementById('comp-website').value.trim();
  const domain = document.getElementById('comp-domain').value.trim();
  const subdomains = document.getElementById('comp-subdomains').value.trim().split(',').map(s=>s.trim()).filter(Boolean);
  if (competitorList.some(c => c.domain === domain)) {
    alert('Domain already monitored!');
    return;
  }
  competitorList.push({ name, description: desc, website, domain, subdomains });
  renderCompetitorsUI();
  e.target.reset();
};
// ---- News Source Add/Remove ---- //
window.newsSourceList = appData.newsources || [];
function renderNewsSourceList() {
  const wrap = document.getElementById("newsSourceList");
  let h = '<ul>';
  newsSourceList.forEach((src, i) => {
    h += `<li>${src.name} (${src.url}) <button onclick="removeFeed(${i})">Remove</button></li>`;
  });
  h += '</ul>';
  wrap.innerHTML = h;
}
window.removeFeed = i => {
  newsSourceList.splice(i,1);
  renderNewsSourceList();
};
document.getElementById("addFeedForm").onsubmit = e => {
  e.preventDefault();
  const name = document.getElementById("feed-name").value.trim();
  const url = document.getElementById("feed-url").value.trim();
  if (!/^https?:\/\//.test(url)) {
    alert("Invalid URL");
    return;
  }
  newsSourceList.push({ name, url, type: "RSS", enabled: true });
  renderNewsSourceList();
  e.target.reset();
};
// ---- Slack Frequency ---- //
let slackSendMode = "real-time";
document.querySelectorAll('[name="slack-frequency"]').forEach(r=>{
  r.addEventListener('change',e=>{
    slackSendMode = e.target.value;
    // [Connect this to slack integration config as needed]
  });
});

// ---- OnLoad ---- //
document.addEventListener('DOMContentLoaded',()=>{
  // Load baseline from appData json
  competitorList = appData.competitors.map(c => ({
    ...c,
    subdomains: []
  }));
  renderCompetitorsUI();
  newsSourceList = (appData.newsources || []).slice();
  renderNewsSourceList();
});


// Updated app.js with requested features integrated  -> p.2 additions 

// Application Data (initial competitors, news sources, keywords, slackConfig)
const appData = {
  competitors: [
    { id: 1, name: "Cymulate", description: "Security validation platform with exposure management", website: "https://cymulate.com", domain: "cymulate.com", subdomains: [], status: "active", lastUpdate: "2025-09-05T10:30:00Z", newsCount: 15, category: "Purpose-built CTEM" },
    { id: 2, name: "Strobes Security", description: "Risk-based vulnerability management platform", website: "https://strobes.co", domain: "strobes.co", subdomains: [], status: "active", lastUpdate: "2025-09-05T09:15:00Z", newsCount: 12, category: "Purpose-built CTEM" },
    { id: 3, name: "Outpost24", description: "Comprehensive exposure management solutions", website: "https://outpost24.com", domain: "outpost24.com", subdomains: [], status: "active", lastUpdate: "2025-09-05T08:45:00Z", newsCount: 8, category: "Purpose-built CTEM" },
    { id: 4, name: "XM Cyber", description: "Attack path modeling and validation platform", website: "https://xmcyber.com", domain: "xmcyber.com", subdomains: [], status: "active", lastUpdate: "2025-09-04T16:20:00Z", newsCount: 18, category: "Purpose-built CTEM" },
    { id: 5, name: "Safe Security", description: "Autonomous CTEM platform powered by CyberAGI", website: "https://safe.security", domain: "safe.security", subdomains: [], status: "active", lastUpdate: "2025-09-05T11:10:00Z", newsCount: 22, category: "Purpose-built CTEM" },
    { id: 6, name: "Nagomi Security", description: "Combines exposure insight, defense testing, and simulations", website: "https://nagomisecurity.com", domain: "nagomisecurity.com", subdomains: [], status: "active", lastUpdate: "2025-09-05T07:30:00Z", newsCount: 6, category: "Purpose-built CTEM" },
    { id: 7, name: "Tenable", description: "Exposure Management Suite with vulnerability scanning", website: "https://tenable.com", domain: "tenable.com", subdomains: [], status: "active", lastUpdate: "2025-09-05T12:00:00Z", newsCount: 28, category: "Rebranded CTEM" },
    { id: 8, name: "CrowdStrike", description: "EDR-based external asset scanning and exposure detection", website: "https://crowdstrike.com", domain: "crowdstrike.com", subdomains: [], status: "active", lastUpdate: "2025-09-05T10:45:00Z", newsCount: 31, category: "Rebranded CTEM" },
    { id: 9, name: "SentinelOne", description: "Singularity Platform with exposure management capabilities", website: "https://sentinelone.com", domain: "sentinelone.com", subdomains: [], status: "active", lastUpdate: "2025-09-05T09:30:00Z", newsCount: 19, category: "Rebranded CTEM" },
    { id: 10, name: "Rapid7", description: "Risk scoring and vulnerability management platform", website: "https://rapid7.com", domain: "rapid7.com", subdomains: [], status: "active", lastUpdate: "2025-09-04T14:15:00Z", newsCount: 14, category: "Rebranded CTEM" }
  ],
  newsources: [
    { name: "Security Week", type: "RSS", url: "https://feeds.feedburner.com/securityweek", enabled: true },
    { name: "Dark Reading", type: "RSS", url: "https://www.darkreading.com/rss.xml", enabled: true },
    { name: "InfoSecurity Magazine", type: "RSS", url: "https://www.infosecurity-magazine.com/rss/news/", enabled: true },
    { name: "The Hacker News", type: "RSS", url: "https://feeds.feedburner.com/TheHackersNews", enabled: true },
    { name: "TechCrunch Security", type: "API", url: "newsapi.org", enabled: true }
  ],
  keywords: [
    "CTEM", "continuous threat exposure management", "exposure management", "threat exposure", "attack surface management",
    "vulnerability management", "security validation", "attack path analysis", "exposure assessment",
    "threat validation", "security posture", "cyber resilience", "risk prioritization"
  ],
  slackConfig: {
    webhookUrl: "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX",
    channel: "#competitor-intelligence",
    frequency: "real-time",
    messageFormat: "detailed"
  }
};

// State variables
let competitorList = [...appData.competitors];
let newsSourceList = [...appData.newsources];
let slackSendMode = appData.slackConfig.frequency || 'real-time';
let filteredNews = [];

// Helper: Fetch and parse RSS feed with real live articles via CORS proxy
async function fetchRSS(feedUrl) {
  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`;
  try {
    const response = await fetch(proxyUrl);
    const data = await response.json();
    const parser = new DOMParser();
    const xml = parser.parseFromString(data.contents, "text/xml");
    return [...xml.querySelectorAll("item")].map(item => ({
      title: item.querySelector("title")?.textContent || "No title",
      link: item.querySelector("link")?.textContent || "#",
      pubDate: item.querySelector("pubDate")?.textContent || null,
      description: item.querySelector("description")?.textContent || "",
      source: xml.querySelector("channel > title")?.textContent || feedUrl
    }));
  } catch (error) {
    console.error("Failed to load RSS feed:", feedUrl, error);
    return [];
  }
}

// Fetch all enabled news sources and aggregate articles
async function loadAllNews() {
  let allArticles = [];
  for (const source of newsSourceList.filter(src => src.enabled)) {
    if (source.type === "RSS") {
      const articles = await fetchRSS(source.url);
      allArticles.push(...articles);
    }
    // Add other source types handling here if needed (e.g., API)
  }
  filteredNews = allArticles;
  renderNewsPreview();
}

// Competitor management UI rendering
function renderCompetitorsUI() {
  const container = document.getElementById("competitorList");
  if (!container) return;
  container.innerHTML = competitorList.map((c, i) => `
    <div class="competitor-item">
      <div><strong>${c.name}</strong> (${c.domain})</div>
      <div><button onclick="removeCompetitor(${i})">Remove</button></div>
    </div>`).join("");
}

// Remove competitor by index
window.removeCompetitor = function(index) {
  competitorList.splice(index, 1);
  renderCompetitorsUI();
};

// Add competitor form event handler
document.getElementById("addCompetitorForm").onsubmit = function(event) {
  event.preventDefault();
  const name = event.target['comp-name'].value.trim();
  const description = event.target['comp-desc'].value.trim();
  const website = event.target['comp-website'].value.trim();
  const domain = event.target['comp-domain'].value.trim();

  if (competitorList.some(c => c.domain === domain)) {
    alert("Domain already monitored!");
    return;
  }
  competitorList.push({ name, description, website, domain, subdomains: [] });
  renderCompetitorsUI();
  event.target.reset();
};

// News source management rendering
function renderNewsSourceList() {
  const container = document.getElementById("newsSourceList");
  if (!container) return;
  container.innerHTML = newsSourceList.map((src, i) => `
    <div class="news-source-item">
      <div><strong>${src.name}</strong> - <a href="${src.url}" target="_blank" rel="noopener noreferrer">${src.url}</a></div>
      <div><button onclick="removeNewsSource(${i})">Remove</button></div>
    </div>`).join("");
}

// Remove news source by index
window.removeNewsSource = function(index) {
  newsSourceList.splice(index, 1);
  renderNewsSourceList();
};

// Add news source form event handler
document.getElementById("addFeedForm").onsubmit = function(event) {
  event.preventDefault();
  const name = event.target['feed-name'].value.trim();
  const url = event.target['feed-url'].value.trim();
  if (!/^https?:\/\//.test(url)) {
    alert("Invalid URL");
    return;
  }
  if (newsSourceList.some(s => s.url === url)) {
    alert("Feed already added!");
    return;
  }
  newsSourceList.push({ name, url, type: "RSS", enabled: true });
  renderNewsSourceList();
  event.target.reset();
};

// Slack frequency radio buttons handling
document.querySelectorAll('input[name="slack-frequency"]').forEach(radio => {
  radio.addEventListener('change', (event) => {
    slackSendMode = event.target.value;
    appData.slackConfig.frequency = slackSendMode;
    // Save or update your config persistence here if needed
  });
});

// Render news preview (simple example)
function renderNewsPreview() {
  const container = document.getElementById('newsPreview');
  if (!container) return;

  if (!filteredNews.length) {
    container.innerHTML = '<p>No news articles found.</p>';
    return;
  }

  container.innerHTML = filteredNews.slice(0, 20).map(article => `
    <article class="news-article">
      <h3><a href="${article.link}" target="_blank" rel="noopener noreferrer">${article.title}</a></h3>
      <p><em>${article.source} - ${new Date(article.pubDate).toLocaleDateString() || ''}</em></p>
      <p>${article.description || ''}</p>
    </article>
  `).join('');
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderCompetitorsUI();
  renderNewsSourceList();
  loadAllNews();
});


