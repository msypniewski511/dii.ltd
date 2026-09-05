"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  ["hero", "⌂", "Home"],
  ["platform", "◫", "Platform"],
  ["products", "◉", "Products"],
  ["journey", "⌁", "How it works"],
  ["knowledge", "▤", "Knowledge"],
  ["principles", "◇", "Principles"],
  ["company", "○", "Company"],
  ["contact", "✉", "Contact"],
] as const;

const products = [
  { number:"01", name:"Startup Builder", label:"Founder planning", description:"Turn an early business idea into a clearer plan, launch path and next set of decisions.", for:"Early-stage founders validating or structuring an idea.", problem:"Scattered thinking needs a workable business structure.", outcome:"Clearer validation, strategy, forecasts and launch direction.", url:"https://www.dhruviinfinity.com/" },
  { number:"02", name:"IFV", label:"Founder-visa preparation", description:"Build a stronger Innovator Founder Visa venture case with clearer evidence and founder readiness.", for:"Founders preparing for the UK Innovator Founder Visa route.", problem:"Venture logic and endorsement preparation need to work together.", outcome:"A better-structured, evidence-aware founder case.", url:"https://www.dhruviinfinity.com/ifv" },
  { number:"03", name:"DII Accounts", label:"Finance operations", description:"Keep invoices, expenses, CSV bank activity and review-ready records together.", for:"UK freelancers, sole traders and growing businesses.", problem:"Daily finance records are fragmented across tools and spreadsheets.", outcome:"A calmer record of what came in, went out and needs attention.", url:"https://accounts.dii.ltd/" },
  { number:"04", name:"Rotaplan", label:"People operations", description:"Plan shifts, coverage and allowance-aware work with less day-to-day coordination friction.", for:"Managers and teams running shift-based operations.", problem:"Rota changes and coverage gaps are difficult to follow.", outcome:"Clearer weekly planning and team coordination.", url:"https://www.aryabiz.co.uk/" },
  { number:"05", name:"Warewise", label:"Warehouse operations", description:"Keep stock, locations and warehouse movement visible as operations grow.", for:"Warehouse and stock-handling teams.", problem:"Inventory activity becomes hard to see and control.", outcome:"Clearer stock visibility and fewer operational blind spots.", url:"https://www.northstarwms.co/wms" },
] as const;

type ThemeChoice = "system" | "light" | "dark";

function Mark() {
  return <span className="mark" aria-hidden="true">∞</span>;
}

export default function Home() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeChoice>("system");
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let stored: string | null = null;
    try { stored = window.localStorage?.getItem("dii-theme") ?? null; } catch { stored = null; }
    const timer = window.setTimeout(() => {
      if (stored === "light" || stored === "dark" || stored === "system") setTheme(stored);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      const resolved = theme === "system" ? (media.matches ? "dark" : "light") : theme;
      document.documentElement.dataset.theme = resolved;
      document.documentElement.style.colorScheme = resolved;
    };
    try { window.localStorage?.setItem("dii-theme", theme); } catch { /* Storage can be unavailable in privacy-restricted contexts. */ }
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [theme]);

  useEffect(() => {
    const pageSections = [...document.querySelectorAll<HTMLElement>("main section[id]")];
    let frame = 0;
    const update = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const readingLine = Math.min(window.innerHeight * .42, 420);
        const current = pageSections.reduce((match, section) =>
          section.getBoundingClientRect().top <= readingLine ? section : match
        , pageSections[0]);
        if (current) setActive(current.id);
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    frame = window.requestAnimationFrame(update);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    if (menuOpen) window.setTimeout(() => firstLink.current?.focus(), 50);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const chooseTheme = (choice: ThemeChoice) => setTheme(choice);

  return (
    <div className="site">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="site-sidebar" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMenuOpen(!menuOpen)}><span aria-hidden="true">{menuOpen ? "×" : "☰"}</span></button>
      <div className={"backdrop " + (menuOpen ? "show" : "")} aria-hidden="true" onClick={() => setMenuOpen(false)}/>

      <aside className={"sidebar " + (menuOpen ? "open" : "")} id="site-sidebar">
        <a className="brand" href="#hero" onClick={() => setMenuOpen(false)}>
          <Mark/><span><strong>Dhruvi Infinity<br/>Inspiration Ltd.</strong><small>Connected products for building and running real businesses.</small></span>
        </a>
        <nav className="side-nav" aria-label="Primary">
          {sections.map(([id,icon,label],index) => <a ref={index === 0 ? firstLink : undefined} href={"#"+id} key={id} className={active === id ? "active" : ""} aria-current={active === id ? "location" : undefined} onClick={() => setMenuOpen(false)}><span aria-hidden="true">{icon}</span>{label}</a>)}
        </nav>
        <div className="theme-panel">
          <span>Appearance</span>
          <div role="group" aria-label="Colour theme">
            {(["system","light","dark"] as ThemeChoice[]).map(choice => <button key={choice} className={theme === choice ? "active" : ""} aria-pressed={theme === choice} onClick={() => chooseTheme(choice)}>{choice === "system" ? "◐" : choice === "light" ? "☀" : "☾"}<small>{choice}</small></button>)}
          </div>
          <p>Your choice is remembered on this browser.</p>
        </div>
        <div className="ecosystem">
          <b>Live ecosystem</b><p>Five focused routes connected through one company platform.</p>
          {products.map(product => <a href={product.url} target="_blank" rel="noopener noreferrer" key={product.name}><span><strong>{product.name}</strong><small>{product.label}</small></span><span aria-hidden="true">↗</span></a>)}
        </div>
        <p className="sidebar-foot">London HQ · NW10 0JT</p>
      </aside>

      <main className="main" id="main-content" tabIndex={-1}>
        <section className="hero" id="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow">ONE COMPANY PLATFORM · FIVE FOCUSED PRODUCTS</span>
            <h1 id="hero-title">Build the business.<br/><em>Keep it moving.</em></h1>
            <p>Dhruvi OS brings planning, finance, people and operations into one calm, connected place—without forcing every business into the same shape.</p>
            <div className="actions"><a className="button" href="#products">Explore the products <span>↗</span></a><a className="soft-button" href="#journey">See how it connects <span>→</span></a></div>
            <p className="microcopy">Built in the UK · One account · Your products stay focused</p>
          </div>
          <div className="hero-art" aria-label="Dhruvi OS connects five focused DII products">
            <div className="infinity-glow"><Mark/><span>Dhruvi OS</span></div><div className="glass-orbit orbit-one"/><div className="glass-orbit orbit-two"/>
            <div className="product-glass top"><b>01</b><span>Ideas become plans</span></div><div className="product-glass middle"><b>03</b><span>Records stay clear</span></div><div className="product-glass bottom"><b>05</b><span>Operations keep moving</span></div>
            <i className="sphere s-one"/><i className="sphere s-two"/>
          </div>
        </section>

        <section className="section platform" id="platform">
          <div className="section-heading"><span className="eyebrow">THE PLATFORM</span><h2>Less switching.<br/>More forward motion.</h2><p>Dhruvi OS gives every DII product a shared foundation while each one stays focused on the job it does best.</p></div>
          <div className="outcome-grid">
            <article><span className="icon-chip">◎</span><b>One identity</b><h3>Enter through one trusted front door</h3><p>Move between products available to you without rebuilding your company context.</p></article>
            <article><span className="icon-chip">↗</span><b>Clear next steps</b><h3>See what needs your attention</h3><p>Turn separate signals into a calmer view of priorities, progress and decisions.</p></article>
            <article><span className="icon-chip">∞</span><b>Connected by design</b><h3>Keep specialist tools working together</h3><p>One visual language and company platform—not one oversized workflow.</p></article>
          </div>
        </section>

        <section className="section product-section" id="products">
          <div className="section-heading"><span className="eyebrow">THE PRODUCT FAMILY</span><h2>Choose the route that fits today.</h2><p>Each product owns a specific business problem. Together they support a wider journey from first idea to everyday operations.</p></div>
          <div className="product-grid">{products.map(product => <article key={product.name}><div className="product-top"><span>{product.number}</span><b>{product.label}</b></div><h3>{product.name}</h3><p>{product.description}</p><dl><div><dt>For</dt><dd>{product.for}</dd></div><div><dt>Problem</dt><dd>{product.problem}</dd></div><div><dt>Outcome</dt><dd>{product.outcome}</dd></div></dl><a href={product.url} target="_blank" rel="noopener noreferrer">Open {product.name} <span>↗</span></a></article>)}</div>
        </section>

        <section className="section journey" id="journey">
          <div className="section-heading"><span className="eyebrow">HOW IT WORKS</span><h2>From uncertainty to a clearer operating rhythm.</h2><p>Start with the need, enter through the right product and keep the wider company journey visible.</p></div>
          <ol className="steps">
            <li><b>01</b><div><span>Recognise the need</span><h3>Start with the business question in front of you</h3><p>An idea, visa pathway, scheduling problem, stock challenge or finance process becomes the starting point.</p></div></li>
            <li><b>02</b><div><span>Choose the route</span><h3>Enter the focused product built for that work</h3><p>Clear product boundaries make it easier to understand where to begin and what result to expect.</p></div></li>
            <li><b>03</b><div><span>Build useful structure</span><h3>Turn scattered work into decisions and evidence</h3><p>Guided workflows help people organise the information that matters without hiding human judgement.</p></div></li>
            <li><b>04</b><div><span>Keep moving</span><h3>Connect the next part when the business needs it</h3><p>Dhruvi OS keeps identity, access and the wider product family within reach as operations evolve.</p></div></li>
          </ol>
        </section>

        <section className="section knowledge" id="knowledge">
          <div className="section-heading row"><div><span className="eyebrow">KNOWLEDGE & GUIDANCE</span><h2>Understand the problem before choosing the tool.</h2></div><a className="soft-button" href="#contact">Suggest a topic <span>→</span></a></div>
          <div className="knowledge-grid">
            <article><span>FOUNDERS</span><h3>How do I validate a startup idea before building?</h3><p>Practical guidance for testing demand, shaping a business model and finding the next useful decision.</p><a href="#contact">Explore this path →</a></article>
            <article><span>VISA PATHWAYS</span><h3>What should a strong IFV venture case demonstrate?</h3><p>Evidence-aware explainers around innovation, viability, scalability and founder readiness.</p><a href="#contact">Explore this path →</a></article>
            <article><span>OPERATIONS</span><h3>When have rotas and warehouse workflows outgrown spreadsheets?</h3><p>Clear comparisons for shift-based teams, stock operations and growing day-to-day complexity.</p><a href="#contact">Explore this path →</a></article>
            <article><span>FINANCE</span><h3>How can a small business keep records review-ready?</h3><p>Grounded explanations for invoices, expenses, CSV activity and working effectively with an accountant.</p><a href="https://accounts.dii.ltd/articles" target="_blank" rel="noopener noreferrer">Read Accounts articles ↗</a></article>
          </div>
        </section>

        <section className="section principles" id="principles">
          <div className="section-heading"><span className="eyebrow">WHAT DII STANDS FOR</span><h2>Technology that creates room for better work.</h2></div>
          <div className="principle-grid"><article><b>01</b><h3>Structured thinking</h3><p>Fewer false starts, clearer decisions and a next action people can actually follow.</p></article><article><b>02</b><h3>Practical delivery</h3><p>Every route should produce something useful: a plan, case, workflow or clearer record.</p></article><article><b>03</b><h3>Connected systems</h3><p>Planning, operations and finance should support one another without becoming the same thing.</p></article><article><b>04</b><h3>Human control</h3><p>Automation can assist, but authority, judgement and important decisions remain visible.</p></article></div>
        </section>

        <section className="section company" id="company">
          <div><span className="eyebrow">THE COMPANY</span><h2>Dhruvi Infinity Inspiration builds connected software for real company work.</h2></div>
          <div className="company-copy"><p>We design practical tools for founders, operators and growing businesses. Our products cover early business planning, Innovator Founder Visa preparation, finance records, people planning and warehouse operations.</p><p>The shared Dhruvi OS platform is the connecting layer: a consistent place for identity, product discovery and the wider company relationship, while specialist data and decisions stay inside the products that own them.</p><dl><div><dt>Registered company</dt><dd>Dhruvi Infinity Inspiration Ltd.</dd></div><div><dt>Company number</dt><dd>16113201</dd></div><div><dt>Registered office</dt><dd>264 North Circular Road, London, NW10 0JT, United Kingdom</dd></div></dl></div>
        </section>

        <section className="section contact" id="contact">
          <div><span className="eyebrow">START ONE CONVERSATION</span><h2>You do not need to know the perfect route first.</h2><p>Choose a named inbox when you know what you need. Use general contact when you want DII to help direct the first conversation.</p><a className="button" href="mailto:contact@dii.ltd">Contact DII <span>↗</span></a></div>
          <div className="contact-grid"><a href="mailto:contact@dii.ltd"><span>GENERAL</span><strong>contact@dii.ltd</strong><small>Partnerships, introductions and first contact.</small></a><a href="mailto:sales@dii.ltd"><span>SALES</span><strong>sales@dii.ltd</strong><small>Product questions, demos and commercial discussions.</small></a><a href="mailto:support@dii.ltd"><span>SUPPORT</span><strong>support@dii.ltd</strong><small>Existing product, access and account support.</small></a><a href="mailto:legal@dii.ltd"><span>LEGAL</span><strong>legal@dii.ltd</strong><small>Legal, privacy and formal correspondence.</small></a></div>
        </section>

        <footer><div><a className="brand footer-brand" href="#hero"><Mark/><span><strong>DII</strong><small>Dhruvi Infinity Inspiration Ltd.</small></span></a><p>made with ♾ by Dhruvi Infinity Inspiration for a better life.</p></div><div><strong>Public website</strong><a href="#products">Products</a><a href="#company">About</a><a href="#knowledge">Articles</a><a href="#contact">Contact</a></div><div><strong>Trust</strong><a id="security" href="#security">Security</a><a id="privacy" href="#privacy">Privacy</a><a id="terms" href="#terms">Terms</a></div><div><strong>Dhruvi Infinity Inspiration Ltd.</strong><p>Registered in England and Wales<br/>Company number 16113201</p><p>© 2026 DII</p></div></footer>
      </main>
    </div>
  );
}
