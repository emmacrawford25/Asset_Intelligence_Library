// ── Asset Data ──
const ASSETS = [
 {
 id: 1,
 title: "Intelligent Document Processor",
 desc: "AI-powered document extraction and classification engine leveraging GPT-4o and Azure Document Intelligence for automated data capture from unstructured docs.",
 category: "gen-ai", catLabel: "Gen AI", status: "live",
 img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
 tags: [{ l: "GPT-4o", c: "ga" }, { l: "Azure AI", c: "az" }, { l: "Python", c: "py" }, { l: "LangChain", c: "lc" }],
 links: { demo: "#", deck: "#", repo: "#", video: "#" },
 contact: { name: "Ishan Babbar", ini: "IB", role: "AI Lead" },
 updated: "2026-04-15"
 },
 {
 id: 2,
 title: "Multi-Agent Orchestration Platform",
 desc: "Autonomous agent framework enabling multi-step reasoning, tool use, and collaborative problem-solving across enterprise workflows using CrewAI and AutoGen.",
 category: "agentic-ai", catLabel: "Agentic AI", status: "live",
 img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
 tags: [{ l: "Agentic AI", c: "ag" }, { l: "CrewAI", c: "ga" }, { l: "Python", c: "py" }, { l: "Azure", c: "az" }],
 links: { demo: "#", deck: "#", repo: "#" },
 contact: { name: "Ishan Babbar", ini: "IB", role: "AI Lead" },
 updated: "2026-04-12"
 },
 {
 id: 3,
 title: "Conversational AI Assistant",
 desc: "Enterprise-grade chatbot with RAG architecture, grounded in proprietary knowledge bases, featuring citation tracking and hallucination guardrails.",
 category: "gen-ai", catLabel: "Gen AI", status: "live",
 img: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&q=80",
 tags: [],
 techStack: {
 frontend: [
 { name: "GOV.UK", logo: "assets/tech_logos/governement.webp" },
 { name: "Node.js", logo: "assets/tech_logos/Node-Node.JS-Logo-Vector.svg-.png" }
 ],
 backend: [
 { name: "Python", logo: "assets/tech_logos/python.webp" },
 { name: "Flask", logo: "assets/tech_logos/flask-logo-png-transparent.png" },
 { name: "OpenAI", logo: "assets/tech_logos/openai-icon.png" },
 { name: "Microsoft Azure", logo: "assets/tech_logos/Azure-Logo.png" },
 { name: "FAISS" }
 ]
 },
 links: { demo: "https://govpolicyfrontend.yellowhill-f75bda2b.ukwest.azurecontainerapps.io/chat", deck: "https://capgemini-my.sharepoint.com/:p:/r/personal/emma_crawford_capgemini_com/Documents/Policy%20Deck.pptx?d=w94b76c9d321b4a89a91ae87afd97ec60&csf=1&web=1&e=nhJSZt", repo: "#" },
 moreAbout: `<p>The solution leverages carefully curated DEFRA-specific data, structured rules, and tailored instructions. When combined with the user's query, it generates highly contextual, precise, and aware responses.</p>
<p><strong>Use Cases</strong></p>
<ul>
 <li><strong>Knowledge Search:</strong> Automates and augments the meta-analysis and discovery process usually undertaken by policy teams, rapidly creating early policy hypotheses to test in the lab.</li>
 <li><strong>Compare, Contrast and Summarise:</strong> Automates comparative analysis across multiple policies or legislative texts to surface gaps, overlaps, and potential conflicts. Rapidly synthesises complex policy landscapes by summarising large volumes of legislation and documentation.</li>
 <li><strong>URL Summarisation:</strong> Automates evidence synthesis from curated online sources by ingesting and summarising content directly from provided URLs. Rapidly surfaces key insights, trends, and narratives from targeted web materials to support early-stage policy exploration.</li>
</ul>
<p><strong>Features</strong></p>
<ul>
 <li>Contextual retrieval engine with similarity detection and ranking.</li>
 <li>Query rewriting and intent detection to ensure accurate input.</li>
 <li>Routing logic to ensure the best method is used for each query.</li>
 <li>Citation validation and repair.</li>
 <li>User interaction logging to support user analysis.</li>
 <li>Evaluation workflows to ensure models are performing well.</li>
 <li>Landing page with user instructions.</li>
 <li>Carefully formatted chat window for easy user interaction.</li>
 <li>GOV.UK prototype used to match the GOV.UK UI look and feel.</li>
 <li>Chat history stored in a sidebar so users can return to previous chats.</li>
 <li>Citations listed to show answers are supported by documentation.</li>
</ul>
<p><strong>Impact</strong></p>
<p>We see this tool driving impact both for users, by deepening understanding and empowering informed engagement, and for outcomes, by shaping more targeted interventions and campaigns.</p>
<p>The tool transforms how users engage with complex policy landscapes. By delivering context-aware responses, it empowers a wide range of users to:</p>
<ul>
 <li>Access accurate information instantly.</li>
 <li>Explore policies and legislation confidently.</li>
 <li>Learn from key insights returned during interaction.</li>
</ul>
<p>The tool helps shape better policy outcomes. By surfacing relevant legislation, comparing interventions, and identifying gaps, it supports:</p>
<ul>
 <li>Smarter campaign design.</li>
 <li>Evidence-based interventions.</li>
 <li>Stronger cross-policy and legislation awareness.</li>
</ul>`,
 contact: { name: "Emma Crawford", ini: "EC", role: "Senior AI Engineer" },
 updated: "2026-04-10"
 },
 {
 id: 4,
 title: "Predictive Analytics Dashboard",
 desc: "Real-time forecasting engine with interactive Power BI dashboards, ML-driven anomaly detection, and automated alerting for operational KPIs.",
 category: "data", catLabel: "Data & Analytics", status: "live",
 img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
 tags: [{ l: "Python", c: "py" }, { l: "Azure ML", c: "az" }, { l: "Power BI", c: "az" }, { l: "SQL", c: "" }],
 links: { demo: "#", deck: "#" },
 contact: { name: "Rudy Kotra", ini: "RK", role: "AI Engineer" },
 },
 {
 id: 5,
 title: "AI Code Review Agent",
 desc: "Autonomous code review agent that analyses pull requests, detects vulnerabilities, suggests optimisations, and enforces coding standards using LLM-powered static analysis.",
 category: "agentic-ai", catLabel: "Agentic AI", status: "wip",
 img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
 tags: [{ l: "Agentic AI", c: "ag" }, { l: "OpenAI", c: "oa" }, { l: "Python", c: "py" }, { l: "GitHub API", c: "" }],
 links: { demo: "#", deck: "#", repo: "#" },
 contact: { name: "Rudy Kotra", ini: "RK", role: "AI Engineer" },
 updated: "2026-04-08"
 },
 {
 id: 6,
 title: "Cloud Migration Accelerator",
 desc: "Automated assessment and migration toolkit for legacy workloads to Azure, featuring dependency mapping, cost estimation, and infrastructure-as-code generation.",
 category: "cloud", catLabel: "Cloud / Azure", status: "live",
 img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
 tags: [{ l: "Azure", c: "az" }, { l: "Terraform", c: "" }, { l: "Python", c: "py" }, { l: "Gen AI", c: "ga" }],
 links: { demo: "#", deck: "#", video: "#" },
 contact: { name: "Rudy Kotra", ini: "RK", role: "AI Engineer" },
 updated: "2026-04-01"
 },
 {
 id: 7,
 title: "Intelligent Process Automation",
 desc: "End-to-end workflow automation combining RPA with Gen AI for cognitive document processing, decision routing, and exception handling across business processes.",
 category: "automation", catLabel: "Automation", status: "live",
 img: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80",
 tags: [{ l: "Gen AI", c: "ga" }, { l: "UiPath", c: "" }, { l: "Azure", c: "az" }, { l: "Python", c: "py" }],
 links: { demo: "#", deck: "#" },
 contact: { name: "Emma Crawford", ini: "EC", role: "Senior AI Engineer" },
 updated: "2026-03-20"
 },
 {
 id: 8,
 title: "Knowledge Graph Builder",
 desc: "Automated enterprise knowledge graph construction using NLP entity extraction, relationship mapping, and graph neural networks for connected intelligence.",
 category: "gen-ai", catLabel: "Gen AI", status: "wip",
 img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
 tags: [{ l: "Neo4j", c: "" }, { l: "LangChain", c: "lc" }, { l: "Python", c: "py" }, { l: "OpenAI", c: "oa" }],
 links: { demo: "#", deck: "#", repo: "#" },
 contact: { name: "Ishan Babbar", ini: "IB", role: "AI Lead" },
 updated: "2026-04-18"
 },
 {
 id: 9,
 title: "AI-Powered Test Automation",
 desc: "Self-healing test framework leveraging computer vision and LLMs to generate, execute, and maintain end-to-end test suites with minimal human intervention.",
 category: "automation", catLabel: "Automation", status: "live",
 img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
 tags: [{ l: "Gen AI", c: "ga" }, { l: "Selenium", c: "" }, { l: "Python", c: "py" }, { l: "Azure DevOps", c: "az" }],
 links: { demo: "#", deck: "#", video: "#" },
 contact: { name: "Rudy Kotra", ini: "RK", role: "AI Engineer" },
 },
 {
 id: 10,
 title: "Voice of the Customer 2.0",
 desc: "Real-time GenAI insight engine turning social and review signals into actionable customer intelligence for strategy and operations.",
 category: "data", catLabel: "Data & Analytics", status: "live",
 img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
 tags: [],
 techStack: {
 frontend: [
 { name: "Power BI", logo: "assets/tech_logos/Power-BI-Logo.png" }
 ],
 backend: [
 { name: "OpenAI", logo: "assets/tech_logos/openai-icon.png" },
 { name: "Python", logo: "assets/tech_logos/python.webp" },
 { name: "Export Comments", logo: "assets/tech_logos/export_comments.png" }
 ]
 },
 links: { demo: "https://app.powerbi.com/groups/me/reports/4e7eb987-d50c-45c8-bd73-500cc65cd37b/ReportSectionb83a6681526a520a0631?ctid=76a2ae5a-9f00-4f6b-95ed-5d33d77c4d61&experience=power-bi", deck: "https://capgemini.sharepoint.com/:p:/r/sites/frogTech/Shared%20Documents/frog%20Data/Pillars/Marketing%20%26%20PR/Make%20your%20Mark%20Awards/Make%20your%20mark%20-%20MOC.pptx?d=wd5b42e5e664546b8a06babfaed574963&csf=1&web=1&e=giaSMn", repo: "#" },
 moreAbout: `<p><strong>Background</strong></p>
<p>The Ministry of Culture needed a clearer, more mature view of visitor sentiment across Saudi Arabia's cultural landmarks and events.</p>
<p><strong>Solution</strong></p>
<p>We built a tailored Voice of Customer platform that analyses 21,000+ data points from five online sources across 30 sites over two years.</p>
<ul>
 <li><strong>Sources:</strong> Instagram, TikTok, Google Reviews, TripAdvisor, and X.</li>
 <li><strong>Data processing:</strong> A robust preprocessing pipeline tags feedback by site to enable regional and location-level drill-down.</li>
 <li><strong>Intelligence layer:</strong> Pre-trained sentiment and emotion models, plus custom thematic analysis and GenAI-assisted workflows for translation, theme discovery, and outlier detection.</li>
 <li><strong>Delivery:</strong> A custom Power BI dashboard with rich filtering and embedded Copilot support.</li>
</ul>
<p><strong>Impact</strong></p>
<p>The platform turns unstructured multilingual feedback into actionable insight, helping senior stakeholders explore trends faster and make more evidence-based decisions.</p>`,
 contact: { name: "Emma Crawford", ini: "EC", role: "Senior AI Engineer" },
 updated: "2026-04-27"
 }
];

const CAPS = [
 { icon: "psychology", lbl: "Generative AI", desc: "GPT-4o, Claude, Gemini — text, image & code generation", color: "#33CE2A", iconFile: "technology.svg" },
 { icon: "smart_toy", lbl: "Agentic AI", desc: "Autonomous agents, multi-agent orchestration, tool use", color: "#1B2FDB", iconFile: "problem_solving.svg" },
 { icon: "cloud", lbl: "Azure Cloud", desc: "Azure OpenAI, Cognitive Services, ML Studio, Functions", color: "#079592", iconFile: "scaling.svg" },
 { icon: "code", lbl: "Python Ecosystem", desc: "LangChain, FastAPI, Pandas, Scikit-learn, PyTorch", color: "#F8570E", iconFile: "Development_and_retention.svg" },
 { icon: "hub", lbl: "RAG & Search", desc: "Vector databases, semantic search, knowledge retrieval", color: "#0AC4B4", iconFile: "Content_asset_management.svg" },
 { icon: "precision_manufacturing",lbl: "Automation", desc: "RPA, workflow orchestration, intelligent process mining", color: "#FF01B0", iconFile: "Organisation_activation.svg" },
 { icon: "analytics", lbl: "Data & Analytics", desc: "Real-time dashboards, predictive modelling, anomaly detection", color: "#6E7CF6", iconFile: "finance.svg" },
 { icon: "security", lbl: "AI Safety", desc: "Guardrails, content filtering, responsible AI frameworks", color: "#00F900", iconFile: "community.svg" }
];

function buildActionLinks(links) {
 return [
 links.demo ? `<a href="${encodeURI(links.demo)}" class="act pri" target="_blank" rel="noopener"><span class="material-symbols-outlined">play_circle</span>Demo</a>` : '',
 links.deck ? `<a href="${encodeURI(links.deck)}" class="act sec" target="_blank" rel="noopener"><span class="material-symbols-outlined">slideshow</span>Deck</a>` : '',
 links.repo ? `<a href="${encodeURI(links.repo)}" class="act sec" target="_blank" rel="noopener"><span class="material-symbols-outlined">code</span>Repo</a>` : '',
 links.video ? `<a href="${encodeURI(links.video)}" class="act sec" target="_blank" rel="noopener"><span class="material-symbols-outlined">videocam</span>Video</a>` : ''
 ].join('');
}

function buildTechStackLogosHTML(techStack, variant = 'card') {
 if (variant === 'card') {
 const items = [...(techStack.backend || []), ...(techStack.frontend || [])];
 const logos = items.map(item => `
 <div class="tech-logo-chip ${variant}">
	 ${item.logo ? `<img src="${item.logo}" alt="${item.name} logo" loading="lazy"/>` : ''}
	 <span>${item.name}</span>
 </div>`).join('');

 return `
 <div class="tech-stack ${variant}">
	 <div class="tech-group-label">Tech Stack</div>
	 <div class="tech-logo-row ${variant}">${logos}</div>
 </div>`;
 }

 const groupHTML = (label, items) => {
 if (!items?.length) return '';
 const logos = items.map(item => `
 <div class="tech-logo-chip ${variant}">
	 ${item.logo ? `<img src="${item.logo}" alt="${item.name} logo" loading="lazy"/>` : ''}
	 <span>${item.name}</span>
 </div>`).join('');

 return `
 <div class="tech-group ${variant}">
	 <div class="tech-group-label">${label}</div>
	 <div class="tech-logo-row ${variant}">${logos}</div>
 </div>`;
 };

 return `<div class="tech-stack ${variant}">${groupHTML('Back-end', techStack.backend)}${groupHTML('Front-end', techStack.frontend)}</div>`;
}

// ── Render Assets ──
function renderAssets(list) {
 const grid = document.getElementById('assetsGrid');
 grid.innerHTML = '';
 if (!list.length) {
 grid.innerHTML = '<div class="no-results">// No assets match your query</div>';
 return;
 }
 list.forEach((a, i) => {
 const actionHTML = buildActionLinks(a.links);

 const tagsHTML = a.tags.map(t => `<span class="tag ${t.c}">${t.l}</span>`).join('');
 const techStackHTML = a.techStack ? buildTechStackLogosHTML(a.techStack, 'card') : `<div class="tags">${tagsHTML}</div>`;
 const isWip = a.status === 'wip';

 const el = document.createElement('div');
 el.className = 'asset-card';
 el.setAttribute('role', 'button');
 el.setAttribute('tabindex', '0');
 el.dataset.assetId = String(a.id);
 el.style.transitionDelay = `${i * 0.06}s`;
 el.innerHTML = `
 <div class="card-glow"></div>
 <div class="thumb">
 <img src="${a.img}" alt="${a.title}" loading="lazy"/>
 <div class="thumb-ov"></div>
 <div class="card-cat">${a.catLabel}</div>
 <div class="card-stat ${isWip ? 'wip' : ''}">
 <div class="sdot"></div>${isWip ? 'In Progress' : 'Live'}
 </div>
 </div>
 <div class="card-body">
 <div class="card-title">${a.title}</div>
 <div class="card-desc">${a.desc}</div>
 <div class="actions">${actionHTML}</div>
 ${techStackHTML}
 <div class="card-foot">
 <a href="#contact-us" class="c-contact owner-jump" aria-label="Go to contact section">
 <div class="c-avatar">${a.contact.ini}</div>
 <div>
 <div class="c-name">${a.contact.name}</div>
 <div class="c-role">${a.contact.role}</div>
 </div>
 </a>
 <div class="c-ts">${a.updated}</div>
 </div>
 </div>`;
 grid.appendChild(el);
 });
 observeCards('.asset-card');
}

function initAssetModal() {
 const modal = document.getElementById('assetModal');
 const modalBody = document.getElementById('assetModalBody');
 const closeBtn = document.getElementById('assetModalClose');
 const backdrop = document.getElementById('assetModalBackdrop');
 const grid = document.getElementById('assetsGrid');
 const contactSection = document.getElementById('contact-us');

 const getAssetByElement = (el) => {
 const card = el.closest('.asset-card');
 if (!card) return null;
 return ASSETS.find(a => a.id === Number(card.dataset.assetId));
 };

 const openModal = (asset) => {
 if (!asset) return;
 const tagsHTML = asset.tags.map(t => `<span class="tag ${t.c}">${t.l}</span>`).join('');
 const techStackHTML = asset.techStack
 ? buildTechStackLogosHTML(asset.techStack, 'modal')
 : `<div class="tags">${tagsHTML || '<span class="tag">TBD</span>'}</div>`;
 const actionsHTML = buildActionLinks(asset.links);
 const statusText = asset.status === 'wip' ? 'In Progress' : 'Live';
 const ownerRole = asset.contact?.role || 'Asset Owner';
 const ownerName = asset.contact?.name || 'TBD';
 const ownerIni = asset.contact?.ini || 'NA';
 const moreAboutContent = asset.moreAbout || 'Placeholder: expand with use cases, architecture, data flows, known limitations, and expected business impact.';
 const moreAboutHTML = /<[^>]+>/.test(moreAboutContent)
 ? moreAboutContent
 : `<p class="asset-modal-placeholder">${moreAboutContent}</p>`;

 modalBody.innerHTML = `
 <div class="asset-modal-hero">
	 <img src="${asset.img}" alt="${asset.title}" loading="lazy"/>
	 <div class="asset-modal-ov"></div>
	 <div class="asset-modal-cat">${asset.catLabel}</div>
	 <div class="asset-modal-stat ${asset.status === 'wip' ? 'wip' : ''}">
		 <div class="sdot"></div>${statusText}
	 </div>
 </div>
 <div class="asset-modal-content">
	 <div class="asset-modal-head-row">
		 <h3 class="asset-modal-title" id="assetModalTitle">${asset.title}</h3>
			 <a href="#contact-us" class="asset-modal-owner-inline owner-jump" aria-label="Go to contact section">
			 <div class="c-avatar">${ownerIni}</div>
			 <div>
				 <div class="c-name">${ownerName}</div>
				 <div class="c-role">${ownerRole}</div>
			 </div>
			 </a>
	 </div>
	 <p class="asset-modal-desc">${asset.desc}</p>

	 <div class="actions asset-modal-actions">${actionsHTML}</div>

	 <section class="asset-modal-block asset-modal-tech-stack-block">
		 <div class="asset-modal-kicker">Key Tech Stack</div>
		 ${techStackHTML}
	 </section>

	 <section class="asset-modal-block asset-modal-about-block">
		 <div class="asset-modal-kicker">More About This Asset</div>
		 <div class="asset-modal-richtext">${moreAboutHTML}</div>
	 </section>

	 <div class="card-foot asset-modal-foot">
		 <div class="c-ts">Last updated ${asset.updated || 'TBD'}</div>
	 </div>
 </div>`;

 modal.classList.add('open');
 modal.setAttribute('aria-hidden', 'false');
 document.body.classList.add('modal-open');
 closeBtn.focus();
 };

 const closeModal = () => {
 modal.classList.remove('open');
 modal.setAttribute('aria-hidden', 'true');
 document.body.classList.remove('modal-open');
 };

 const jumpToContacts = () => {
 closeModal();
 if (contactSection) {
 contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
 }
 };

 grid.addEventListener('click', (e) => {
 if (e.target.closest('.actions a, .owner-jump')) return;
 const asset = getAssetByElement(e.target);
 if (!asset) return;
 openModal(asset);
 });

 grid.addEventListener('keydown', (e) => {
 const card = e.target.closest('.asset-card');
 if (!card) return;
 if (e.target.closest('.actions a, .owner-jump')) return;
 if (e.key !== 'Enter' && e.key !== ' ') return;
 e.preventDefault();
 const asset = ASSETS.find(a => a.id === Number(card.dataset.assetId));
 openModal(asset);
 });

 document.addEventListener('click', (e) => {
 const ownerJump = e.target.closest('.owner-jump');
 if (!ownerJump) return;
 e.preventDefault();
 jumpToContacts();
 });

 closeBtn.addEventListener('click', closeModal);
 backdrop.addEventListener('click', closeModal);

 addEventListener('keydown', (e) => {
 if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
 });
}

// ── Render Capabilities ──
function renderCaps() {
 const grid = document.getElementById('capGrid');
 CAPS.forEach((c, i) => {
 const iconHTML = c.iconFile
 ? `<img class="cap-icon-img" src="assets/Icons/${encodeURIComponent(c.iconFile)}" alt="${c.lbl} icon" loading="lazy"/>`
 : `<span class="material-symbols-outlined" style="font-size:1.8rem;color:${c.color}">${c.icon}</span>`;

 const el = document.createElement('div');
 el.className = 'cap-card';
 el.style.transitionDelay = `${i * 0.05}s`;
 el.innerHTML = `
 <div class="card-glow"></div>
 <div class="cap-icon" style="color:${c.color}">${iconHTML}</div>
 <div class="cap-lbl">${c.lbl}</div>
 <div class="cap-desc">${c.desc}</div>`;
 grid.appendChild(el);
 });
 observeCards('.cap-card');
}

// ── Intersection Observer (scroll reveal) ──
function observeCards(sel) {
 const obs = new IntersectionObserver(entries => {
 entries.forEach(e => {
 if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
 });
 }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
 document.querySelectorAll(sel + ':not(.vis)').forEach(el => obs.observe(el));
}

// ── Filter & Search ──
let activeFilter = 'all';

document.getElementById('chips').addEventListener('click', e => {
 const chip = e.target.closest('.chip');
 if (!chip) return;
 document.querySelectorAll('.chip').forEach(c => c.classList.remove('on'));
 chip.classList.add('on');
 activeFilter = chip.dataset.f;
 applyFilter();
});

document.getElementById('searchInput').addEventListener('input', applyFilter);

function applyFilter() {
 const q = document.getElementById('searchInput').value.toLowerCase().trim();
 let list = activeFilter === 'all' ? ASSETS : ASSETS.filter(a => a.category === activeFilter);
 if (q) list = list.filter(a =>
 a.title.toLowerCase().includes(q) ||
 a.desc.toLowerCase().includes(q) ||
 a.tags.some(t => t.l.toLowerCase().includes(q)) ||
 a.contact.name.toLowerCase().includes(q)
 );
 renderAssets(list);
}

// ── Animated Counters ──
function runCounters() {
 document.querySelectorAll('.ctr').forEach(el => {
 const target = +el.dataset.t;
 const dur = 2000;
 const t0 = performance.now();
 const tick = now => {
 const p = Math.min((now - t0) / dur, 1);
 el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
 if (p < 1) requestAnimationFrame(tick);
 };
 requestAnimationFrame(tick);
 });
}

// ── Particle Canvas ──
function initCanvas() {
 const cv = document.getElementById('canvas');
 const ctx = cv.getContext('2d');
 let W, H, pts = [];

 const resize = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; };
 resize();
 addEventListener('resize', resize);

 class Pt {
 constructor() { this.r(); }
 r() {
 this.x = Math.random() * W;
 this.y = Math.random() * H;
 this.sz = Math.random() * 1.4 + 0.3;
 this.vx = (Math.random() - 0.5) * 0.28;
 this.vy = (Math.random() - 0.5) * 0.28;
 this.op = Math.random() * 0.45 + 0.08;
 this.hue = Math.random() > 0.5 ? 268 : 188;
 }
 step() {
 this.x += this.vx; this.y += this.vy;
 if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.r();
 }
 draw() {
 ctx.beginPath();
 ctx.arc(this.x, this.y, this.sz, 0, Math.PI * 2);
 ctx.fillStyle = `hsla(${this.hue},70%,65%,${this.op})`;
 ctx.fill();
 }
 }

 const N = Math.min(110, Math.floor(W * H / 13000));
 for (let i = 0; i < N; i++) pts.push(new Pt());

 const frame = () => {
 ctx.clearRect(0, 0, W, H);
 for (let i = 0; i < pts.length; i++) {
 for (let j = i + 1; j < pts.length; j++) {
 const dx = pts[i].x - pts[j].x;
 const dy = pts[i].y - pts[j].y;
 const d = Math.sqrt(dx * dx + dy * dy);
 if (d < 115) {
 ctx.beginPath();
 ctx.moveTo(pts[i].x, pts[i].y);
 ctx.lineTo(pts[j].x, pts[j].y);
 ctx.strokeStyle = `rgba(139,92,246,${0.055 * (1 - d / 115)})`;
 ctx.lineWidth = 0.5;
 ctx.stroke();
 }
 }
 pts[i].step();
 pts[i].draw();
 }
 requestAnimationFrame(frame);
 };
 frame();
}

// ── Nav Scroll Effect ──
function initNav() {
 const nav = document.getElementById('mainNav');
 addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 50));
}

// ── 3D Tilt on Cards ──
function initTilt() {
 addEventListener('mousemove', e => {
 document.querySelectorAll('.asset-card.vis').forEach(card => {
 const r = card.getBoundingClientRect();
 const x = e.clientX - r.left;
 const y = e.clientY - r.top;
 if (x < 0 || x > r.width || y < 0 || y > r.height) {
 card.style.transform = '';
 return;
 }
 const rx = ((y - r.height / 2) / r.height) * -4;
 const ry = ((x - r.width / 2) / r.width) * 4;
 card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
 });
 });
}

// ── Keyboard Shortcuts ──
addEventListener('keydown', e => {
 if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
 e.preventDefault();
 document.getElementById('searchInput').focus();
 document.getElementById('assets').scrollIntoView({ behavior: 'smooth', block: 'start' });
 }
});

// ── Hero Counter Trigger ──
new IntersectionObserver(([e]) => {
 if (e.isIntersecting) runCounters();
}, { threshold: 0.3 }).observe(document.querySelector('.hero'));

// ── Feedback Carousel ──
function initFeedbackCarousel() {
 const carousel = document.getElementById('feedbackCarousel');
 const dotsContainer = document.getElementById('feedbackDots');
 const cards = carousel.querySelectorAll('.feedback-card');
 let currentIndex = 0;

 // Create dots
 cards.forEach((_, i) => {
 const dot = document.createElement('div');
 dot.className = `feedback-dot ${i === 0 ? 'active' : ''}`;
 dot.addEventListener('click', () => showCard(i));
 dotsContainer.appendChild(dot);
 });

 const dots = dotsContainer.querySelectorAll('.feedback-dot');

 function showCard(index) {
 cards.forEach(card => card.classList.remove('active'));
 dots.forEach(dot => dot.classList.remove('active'));
 cards[index].classList.add('active');
 dots[index].classList.add('active');
 currentIndex = index;
 }

 function nextCard() {
 currentIndex = (currentIndex + 1) % cards.length;
 showCard(currentIndex);
 }

 setInterval(nextCard, 5000);
}

function initOutlookEmailLinks() {
 const emailLinks = document.querySelectorAll('.email-outlook');

 emailLinks.forEach(link => {
 link.addEventListener('click', (e) => {
 e.preventDefault();

 const to = link.dataset.to;
 const name = link.dataset.name || 'there';
 const subject = 'Quick chat about frog Data asset';
 const body = `Hello ${name},\n\nI have been looking at the frog Data Asset Intelligence Hub and I am particularly interested in talking more about asset [FILL IN ASSET HERE].\n\nDo you have time to meet up for a quick chat about this?\n\nMany thanks,`;

 const encTo = encodeURIComponent(to);
 const encSubject = encodeURIComponent(subject);
 const encBody = encodeURIComponent(body);

 // Try common Outlook desktop URI schemes first, then fall back to Outlook Web.
 const appLinks = [
 `ms-outlook://compose?to=${encTo}&subject=${encSubject}&body=${encBody}`,
 `outlook://compose?to=${encTo}&subject=${encSubject}&body=${encBody}`,
 `microsoft-outlook://compose?to=${encTo}&subject=${encSubject}&body=${encBody}`
 ];
 const webFallback = `https://outlook.office.com/mail/deeplink/compose?to=${encTo}&subject=${encSubject}&body=${encBody}`;

 let launchedApp = false;
 const onVisibilityChange = () => {
 if (document.hidden) {
 launchedApp = true;
 document.removeEventListener('visibilitychange', onVisibilityChange);
 }
 };
 document.addEventListener('visibilitychange', onVisibilityChange);

 const tryLaunch = (url) => {
 if (launchedApp) return;
 window.location.href = url;
 };

 setTimeout(() => tryLaunch(appLinks[0]), 0);
 setTimeout(() => tryLaunch(appLinks[1]), 350);
 setTimeout(() => tryLaunch(appLinks[2]), 700);

 setTimeout(() => {
 if (launchedApp) return;
 document.removeEventListener('visibilitychange', onVisibilityChange);
 window.open(webFallback, '_blank', 'noopener');
 }, 1400);
 });
 });
}

// ── Boot ──
document.addEventListener('DOMContentLoaded', () => {
 initCanvas();
 initNav();
 initTilt();
 renderAssets(ASSETS);
 initAssetModal();
 renderCaps();
 observeCards('.contact-card');
 initFeedbackCarousel();
 initOutlookEmailLinks();
});