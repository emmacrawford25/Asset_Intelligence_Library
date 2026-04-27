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
 tags: [{ l: "GPT-4o", c: "ga" }, { l: "RAG", c: "ag" }, { l: "Azure AI Search", c: "az" }, { l: "React", c: "re" }],
 links: { demo: "#", deck: "#", video: "#" },
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
 <div class="tags">${tagsHTML}</div>
 <div class="actions">${actionHTML}</div>
 <div class="card-foot">
 <div class="c-contact">
 <div class="c-avatar">${a.contact.ini}</div>
 <div>
 <div class="c-name">${a.contact.name}</div>
 <div class="c-role">${a.contact.role}</div>
 </div>
 </div>
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

 const getAssetByElement = (el) => {
 const card = el.closest('.asset-card');
 if (!card) return null;
 return ASSETS.find(a => a.id === Number(card.dataset.assetId));
 };

 const openModal = (asset) => {
 if (!asset) return;
 const tagsHTML = asset.tags.map(t => `<span class="tag ${t.c}">${t.l}</span>`).join('');
 const actionsHTML = buildActionLinks(asset.links);
 const statusText = asset.status === 'wip' ? 'In Progress' : 'Live';
 const ownerRole = asset.contact?.role || 'Asset Owner';
 const ownerName = asset.contact?.name || 'TBD';
 const ownerIni = asset.contact?.ini || 'NA';

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
	 <h3 class="asset-modal-title" id="assetModalTitle">${asset.title}</h3>
	 <p class="asset-modal-desc">${asset.desc}</p>

	 <div class="asset-modal-columns">
		 <section class="asset-modal-block">
			 <div class="asset-modal-kicker">Owner</div>
			 <div class="asset-modal-owner">
				 <div class="c-avatar">${ownerIni}</div>
				 <div>
					 <div class="c-name">${ownerName}</div>
					 <div class="c-role">${ownerRole}</div>
				 </div>
			 </div>
		 </section>

		 <section class="asset-modal-block">
			 <div class="asset-modal-kicker">Key Tech Stack</div>
			 <div class="tags">${tagsHTML || '<span class="tag">TBD</span>'}</div>
		 </section>
	 </div>

	 <section class="asset-modal-block">
		 <div class="asset-modal-kicker">About This Asset</div>
		 <p class="asset-modal-placeholder">
			 Placeholder: expand with use cases, architecture, data flows, known limitations, and expected business impact.
		 </p>
	 </section>

	 <div class="actions asset-modal-actions">${actionsHTML}</div>

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

 grid.addEventListener('click', (e) => {
 if (e.target.closest('.actions a')) return;
 const asset = getAssetByElement(e.target);
 if (!asset) return;
 openModal(asset);
 });

 grid.addEventListener('keydown', (e) => {
 const card = e.target.closest('.asset-card');
 if (!card) return;
 if (e.key !== 'Enter' && e.key !== ' ') return;
 e.preventDefault();
 const asset = ASSETS.find(a => a.id === Number(card.dataset.assetId));
 openModal(asset);
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
});