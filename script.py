# The user uploaded their app.js, index.html, and style.css.
# Plan:
# - Update app.js to fetch live RSS feeds using CORS proxy and display correct article links
# - Implement UI logic to add/remove competitors (with website/domain) and validate uniqueness
# - Add news source management (add/remove feeds in UI and news fetching)
# - Add Slack sending mode (real-time, daily, weekly), store in config and display in integration panel
# - Keep in-memory state in appData, fallback to localStorage for persistence
#
# As the files are not too large and mostly JS/HTML/CSS, let's modify the JS to accommodate these features.
# We'll also add basic UI in index.html for new competitor and news source modals/forms and slack options if missing.
#
# Will produce updated versions for all three files.

# Read user files
def read_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        return f.read()

orig_js = read_file('app.js')
orig_html = read_file('index.html')
orig_css = read_file('style.css')

# --- PREPARE UPDATE ---

# 1. Core RSS live feed logic (replace sampleNews fetching)
# 2. Competitor add/delete, uniqueness check, subdomain display
# 3. News sources: UI + dynamic feed list
# 4. Slack options

# Note: This will be a simulated update - focus on producing an improved app.js and necessary html sections.

# Add to index.html:
add_comp_form_html = '''
<!-- Add competitor Modal/Form -->
<form id="addCompetitorForm">
  <input type="text" id="comp-name" placeholder="Name" required>
  <input type="text" id="comp-desc" placeholder="Description" required>
  <input type="text" id="comp-website" placeholder="Website (e.g. cymulate.com)" required>
  <input type="text" id="comp-domain" placeholder="Main Domain (e.g. cymulate.com)" required>
  <input type="text" id="comp-subdomains" placeholder="Subdomains (comma-separated, optional)">
  <button type="submit">Add Competitor</button>
</form>
<div id="competitorList"></div>
'''

add_feed_form_html = '''
<!-- Add RSS Feed Form -->
<form id="addFeedForm">
  <input type="url" id="feed-url" placeholder="RSS Feed URL" required>
  <input type="text" id="feed-name" placeholder="Source Name" required>
  <button type="submit">Add Feed</button>
</form>
<div id="newsSourceList"></div>
'''

slack_mode_html = '''
<!-- Slack frequency options -->
<div id="slack-frequency-modes">
  <label>Slack notifications:</label>
  <label><input name="slack-frequency" type="radio" value="real-time" checked> Real-time</label>
  <label><input name="slack-frequency" type="radio" value="daily"> Daily</label>
  <label><input name="slack-frequency" type="radio" value="weekly"> Weekly</label>
</div>
'''

# Insert forms into appropriate sections
import re
html = orig_html

# Simple way: insert forms after Competitor Management and News Sources Configuration headers
html = re.sub(r'(##\s*Competitor Management.*?)(##|$)',
              r'\1' + add_comp_form_html + r'\2', html, flags=re.DOTALL)
html = re.sub(r'(##\s*News Sources Configuration.*?)(##|$)',
              r'\1' + add_feed_form_html + r'\2', html, flags=re.DOTALL)
html = re.sub(r'(##\s*Slack Integration.*?)(##|$)',
              r'\1' + slack_mode_html + r'\2', html, flags=re.DOTALL)

# JS upgrade core: Add functions for fetchLiveNews, competitor/news source CRUD, Slack mode UI
js_patch = '''
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
'''

# Patch app.js: append relevant sections
js_updated = orig_js + "\n" + js_patch

# Write new files to be packed for the user
def write_file(filename, text):
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(text)
write_file('index.html', html)
write_file('app.js', js_updated)

# Output: ready for serving in a zip file
print('READY_FOR_EXPORT')