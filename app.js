// Merged and updated app.js combining your current app with requested fixes and new features.

// Initial Application Data (from your app)
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
let slackSendMode = appData.slackConfig.frequency || "real-time";
let filteredNews = [...appData.sampleNews];

// Navigation elements and initialization
const navTabs = document.querySelectorAll('.nav__tab');
const sections = document.querySelectorAll('.section');
let currentSection = 'dashboard';

// Initialize navigation
function initializeNavigation() {
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const sectionId = tab.getAttribute('data-section');
      switchSection(sectionId);
    });
  });
}

function switchSection(sectionId) {
  navTabs.forEach(tab => {
    tab.classList.toggle('nav__tab--active', tab.getAttribute('data-section') === sectionId);
  });
  sections.forEach(section => {
    section.classList.toggle('section--active', section.id === sectionId);
  });
  currentSection = sectionId;
}

// RSS fetching logic with CORS proxy
async function fetchRSS(feedUrl) {
  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`;
  try {
    const res = await fetch(proxyUrl);
    const data = await res.json();
    const parser = new DOMParser();
    const xml = parser.parseFromString(data.contents, "text/xml");
    const items = Array.from(xml.querySelectorAll("item"));
    return items.map(item => ({
      title: item.querySelector("title")?.textContent || "No title",
      link: item.querySelector("link")?.textContent || "#",
      pubDate: item.querySelector("pubDate")?.textContent || null,
      summary: item.querySelector("description")?.textContent || "",
      source: xml.querySelector("channel > title")?.textContent || feedUrl
    }));
  } catch (err) {
    console.error(`Failed to fetch RSS feed ${feedUrl}:`, err);
    return [];
  }
}

// Aggregate news from all enabled news sources (RSS)
async function loadAllNews() {
  let allArticles = [];
  for (let src of newsSourceList.filter(s => s.enabled !== false)) {
    if (src.type === "RSS") {
      const articles = await fetchRSS(src.url);
      allArticles.push(...articles);
    }
    // Expand for API sources if needed
  }
  filteredNews = allArticles;
  renderNewsPreview();
}

// Competitor UI rendering
function renderCompetitorsUI() {
  const container = document.getElementById('competitorList');
  if (!container) return;
  container.innerHTML = competitorList.map((c, i) => `
    <div class="competitor-item">
      <div><strong>${c.name}</strong> (${c.domain})</div>
      <button onclick="removeCompetitor(${i})">Remove</button>
    </div>
  `).join('');
}

// Remove competitor
window.removeCompetitor = function(i) {
  competitorList.splice(i, 1);
  renderCompetitorsUI();
};

// Add competitor form handler
document.getElementById('addCompetitorForm').onsubmit = function(e) {
  e.preventDefault();
  const form = e.target;
  const name = form['comp-name'].value.trim();
  const description = form['comp-desc'].value.trim();
  const website = form['comp-website'].value.trim();
  const domain = form['comp-domain'].value.trim();

  if (competitorList.some(c => c.domain === domain)) {
    alert('Domain already monitored!');
    return;
  }
  competitorList.push({ name, description, website, domain, subdomains: [] });
  renderCompetitorsUI();
  form.reset();
};

// News sources UI render
function renderNewsSourceList() {
  const container = document.getElementById('newsSourceList');
  if (!container) return;
  container.innerHTML = newsSourceList.map((s, i) => `
    <div class="news-source-item">
      <div><strong>${s.name}</strong> - <a href="${s.url}" target="_blank">${s.url}</a></div>
      <button onclick="removeNewsSource(${i})">Remove</button>
    </div>
  `).join('');
}

// Remove news source
window.removeNewsSource = function(i) {
  newsSourceList.splice(i, 1);
  renderNewsSourceList();
};

// Add feed form handler
document.getElementById('addFeedForm').onsubmit = function(e) {
  e.preventDefault();
  const form = e.target;
  const name = form['feed-name'].value.trim();
  const url = form['feed-url'].value.trim();
  if (!/^https?:\/\//.test(url)) {
    alert('Invalid URL');
    return;
  }
  if (newsSourceList.some(s => s.url === url)) {
    alert('Feed already added!');
    return;
  }
  newsSourceList.push({ name, url, type: "RSS", enabled: true });
  renderNewsSourceList();
  form.reset();
};

// Slack notification mode handler
slackSendMode = appData.slackConfig.frequency || 'real-time';
document.querySelectorAll('input[name="slack-frequency"]').forEach(radio => {
  radio.addEventListener('change', e => {
    slackSendMode = e.target.value;
    appData.slackConfig.frequency = slackSendMode;
  });
});

// Render news preview
function renderNewsPreview() {
  const container = document.getElementById('newsPreview');
  if (!container) return;
  if (!filteredNews.length) {
    container.innerHTML = '<p>No news articles found.</p>';
    return;
  }
  container.innerHTML = filteredNews.slice(0, 20).map(article => `
    <article class="news-article">
      <h3><a href="${article.link}" target="_blank" rel="noopener">${article.title}</a></h3>
      <p><em>${article.source} - ${new Date(article.pubDate).toLocaleDateString() || ''}</em></p>
      <p>${article.summary || ''}</p>
    </article>
  `).join('');
}

// On page load initialize everything
document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  switchSection(currentSection);
  renderCompetitorsUI();
  renderNewsSourceList();
  loadAllNews();
  // Add extra rendering/initialization lines if your app needs them
});
