"use client";

import { useState } from "react";

const concepts = [
  {
    id: "aurora",
    number: "01",
    name: "Dhruvi Aurora",
    label: "Expressive flagship",
    eyebrow: "DII · DHruvi Infinity Inspiration",
    headline: <>One company platform for <em>building what comes next.</em></>,
    body: "Bring your operations, people and ideas into one beautifully connected place.",
    note: "The strongest continuation of your ILOVE artwork: luminous, memorable and unmistakably DII.",
    traits: ["Signature 3D identity", "Lavender atmosphere", "Premium launch energy"],
  },
  {
    id: "orbit",
    number: "02",
    name: "Connected Orbit",
    label: "Portfolio ecosystem",
    eyebrow: "FIVE PRODUCTS · ONE FOUNDATION",
    headline: <>Five focused products. <em>One connected business.</em></>,
    body: "Move from planning to finance, people and operations without losing the thread.",
    note: "Makes the relationship between products the hero. Best when DII needs to explain its portfolio quickly.",
    traits: ["Connected product story", "Confident dark mode", "Clear platform metaphor"],
  },
  {
    id: "studio",
    number: "03",
    name: "Product Studio",
    label: "Editorial product proof",
    eyebrow: "ONE PLATFORM · LESS FRAGMENTATION",
    headline: <>Build. Operate. Grow. <em>In one clear system.</em></>,
    body: "Replace scattered tools with focused products that feel like one coherent workspace.",
    note: "A sharp, spacious marketing system where real product screens and outcomes do the persuasion.",
    traits: ["Bold editorial type", "Product-led evidence", "High conversion clarity"],
  },
  {
    id: "intelligence",
    number: "04",
    name: "Calm Intelligence",
    label: "Quiet, capable assistant",
    eyebrow: "DHRUVI WORKS WITH YOU",
    headline: <>A calmer way to <em>move work forward.</em></>,
    body: "Turn complex company work into clear next steps—with control always in your hands.",
    note: "Inspired by your final workflow reference: soft, precise and ideal for communicating trusted AI assistance.",
    traits: ["Human AI language", "Soft workflow panels", "Trust-first presentation"],
  },
  {
    id: "convergence",
    number: "05",
    name: "Bold Convergence",
    label: "Commercial challenger",
    eyebrow: "A CONNECTED COMPANY PLATFORM",
    headline: <>Still running five <em>separate tools?</em></>,
    body: "Bring the essential parts of your business together—and spend more time moving it forward.",
    note: "The clearest sales story: dramatise today’s fragmentation, then reveal Dhruvi OS as the answer.",
    traits: ["Problem-first message", "Immediate value contrast", "Strong product reveal"],
  },
];

const products = ["Startup Builder", "IFV", "DII Accounts", "Rotaplan", "Warewise"];

function Mark() {
  return <span className="mark" aria-hidden="true">∞</span>;
}

function AuroraVisual() {
  return <div className="aurora-art" aria-hidden="true"><i className="arc"/><i className="orb orb-one"/><i className="orb orb-two"/><div className="glass back"/><div className="glass front"><b>DII</b></div></div>;
}

function OrbitVisual() {
  return <div className="orbit-art" aria-label="Five DII products connected through Dhruvi OS"><div className="orbit-ring"/><div className="orbit-core"><Mark/><small>Dhruvi OS</small></div>{products.map((p, i) => <div className={`planet p${i + 1}`} key={p}><b>{i + 1}</b><span>{p}</span></div>)}</div>;
}

function StudioVisual() {
  return <div className="studio-art" aria-label="Dhruvi OS product interface preview"><div className="float-card fc-one"><span>Today</span><strong>12 priorities</strong></div><div className="dashboard"><div className="dash-rail"><Mark/><i/><i/><i/><i/></div><div className="dash-main"><small>Business pulse</small><strong>Good morning, Maciej</strong><div className="metrics"><i/><i/><i/></div><div className="chart"><span/><span/><span/><span/></div></div></div><div className="float-card fc-two"><span>Products</span><strong>5 connected</strong></div></div>;
}

function IntelligenceVisual() {
  return <div className="intelligence-art" aria-label="Dhruvi AI workflow preview"><div className="ai-hive"><span>AI</span><i/><i/><i/></div><button tabIndex={-1}>Generate plan</button><div className="task active"><i/><p><b>Review this week’s priorities</b><small>Dhruvi is preparing a concise briefing</small></p><span>Working…</span></div><div className="task"><i/><p><b>Prepare cash-flow summary</b><small>Ready for your review</small></p><span>Done</span></div></div>;
}

function ConvergenceVisual() {
  return <div className="convergence-art" aria-label="Five separate tools converging into Dhruvi OS"><div className="tool-stack">{products.map((p, i) => <div key={p}><b>{i + 1}</b><span>{p}</span><i>···</i></div>)}</div><div className="flow-arrow">→</div><div className="unified"><div className="u-rail"><Mark/><i/><i/><i/><i/></div><div className="u-main"><small>YOUR COMPANY, CONNECTED</small><strong>Dhruvi OS</strong><div className="u-cards"><i/><i/><i/></div><div className="u-chart"/></div></div></div>;
}

function ConceptVisual({ id }: { id: string }) {
  if (id === "orbit") return <OrbitVisual />;
  if (id === "studio") return <StudioVisual />;
  if (id === "intelligence") return <IntelligenceVisual />;
  if (id === "convergence") return <ConvergenceVisual />;
  return <AuroraVisual />;
}

export default function Home() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const concept = concepts[active];

  return (
    <div className={`site theme-${concept.id}`}>
      <a className="skip-link" href="#main">Skip to concept</a>
      <aside className="chooser" aria-label="Design concept selector">
        <div className="chooser-title"><span>DII public website</span><strong>Choose a direction</strong></div>
        <div className="concept-tabs" role="tablist" aria-label="Five design concepts">
          {concepts.map((item, index) => <button role="tab" aria-selected={active === index} aria-controls="main" key={item.id} onClick={() => setActive(index)}><b>{item.number}</b><span>{item.name}</span></button>)}
        </div>
        <div className="counter"><b>{active + 1}</b><span>/ 5</span></div>
      </aside>

      <header className="public-nav">
        <a className="brand" href="#main" aria-label="DII home"><Mark/><span><b>DII</b><small>Dhruvi Infinity Inspiration</small></span></a>
        <nav aria-label="Public website"><a href="#products">Products</a><a href="#why">About</a><a href="#why">Articles</a><a href="#why">Pricing</a></nav>
        <div className="nav-actions"><a href="#why">Sign in</a><a className="button small" href="#products">Explore products</a></div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero">
          <div className="hero-copy"><span className="eyebrow">{concept.eyebrow}</span><h1>{concept.headline}</h1><p>{concept.body}</p><div className="hero-actions"><a className="button" href="#products">Explore products <span>↗</span></a><a className="text-link" href="#why">Discover DII <span>→</span></a></div><div className="trust-line"><span>Designed for UK businesses</span><i/><span>One account</span><i/><span>Five connected products</span></div></div>
          <div className="hero-visual"><ConceptVisual id={concept.id}/></div>
        </section>

        <section className="product-ribbon" id="products" aria-label="DII products"><p>Built as focused products. Connected through Dhruvi OS.</p><div>{products.map((product, i) => <span key={product}><b>0{i + 1}</b>{product}</span>)}</div></section>

        <section className="decision" id="why">
          <div><span className="eyebrow">{concept.label}</span><h2>{concept.name}</h2><p>{concept.note}</p></div>
          <ul>{concept.traits.map(trait => <li key={trait}><span>✓</span>{trait}</li>)}</ul>
          <button className={`choose-button ${selected === active ? "chosen" : ""}`} onClick={() => setSelected(active)}>{selected === active ? "Selected as favourite ✓" : "Choose this direction"}</button>
        </section>
        {selected !== null && <div className="selection-note" role="status"><span>Your current choice</span><strong>{concepts[selected].number} · {concepts[selected].name}</strong><button onClick={() => setActive(selected)}>View again</button></div>}
      </main>
      <footer><a className="brand" href="#main"><Mark/><span><b>DII</b><small>Dhruvi Infinity Inspiration Ltd</small></span></a><p>Concept explorer for the future signed-out dii.ltd website.</p><span>Discovery only · No live-site changes</span></footer>
    </div>
  );
}
