const products = [
  ["01", "Startup Builder", "Shape the business"],
  ["02", "IFV", "Test the opportunity"],
  ["03", "DII Accounts", "Keep records clear"],
  ["04", "Rotaplan", "Plan people well"],
  ["05", "Warewise", "Run stock confidently"],
];

function Mark() {
  return <span className="mark" aria-hidden="true">∞</span>;
}

export default function Home() {
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="header">
        <a className="brand" href="#main-content" aria-label="DII home">
          <Mark />
          <span><strong>DII</strong><small>Dhruvi Infinity Inspiration</small></span>
        </a>
        <nav aria-label="Public">
          <a href="#products">Products</a><a href="#platform">How it works</a>
          <a href="#about">About</a><a href="#articles">Articles</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions"><a href="#signin">Sign in</a><a className="button compact" href="#products">Explore DII</a></div>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow">ONE COMPANY PLATFORM · FIVE FOCUSED PRODUCTS</span>
            <h1 id="hero-title">Build the business.<br/><em>Keep it moving.</em></h1>
            <p>Dhruvi OS brings planning, finance, people and operations into one calm, connected place—without forcing every business into the same shape.</p>
            <div className="hero-actions">
              <a className="button" href="#products">Explore the products <span>↗</span></a>
              <a className="soft-button" href="#platform">See how it connects <span>→</span></a>
            </div>
            <p className="microcopy">Built in the UK · One account · Your products stay focused</p>
          </div>
          <div className="hero-art" aria-label="Dhruvi OS connects five focused DII products">
            <div className="infinity-glow"><Mark/><span>Dhruvi OS</span></div>
            <div className="glass-orbit orbit-one"/>
            <div className="glass-orbit orbit-two"/>
            <div className="product-glass top"><b>01</b><span>Ideas become plans</span></div>
            <div className="product-glass middle"><b>03</b><span>Records stay clear</span></div>
            <div className="product-glass bottom"><b>05</b><span>Operations keep moving</span></div>
            <i className="sphere s-one"/><i className="sphere s-two"/>
          </div>
        </section>

        <section className="product-strip" id="products" aria-label="DII products">
          <p>Focused products, connected by one company platform.</p>
          <div>{products.map(([number, name, detail]) => <article key={name}><b>{number}</b><span><strong>{name}</strong><small>{detail}</small></span></article>)}</div>
        </section>

        <section className="outcomes section" id="platform">
          <div className="section-heading">
            <span className="eyebrow">ONE CLEARER PLACE TO WORK</span>
            <h2>Less switching.<br/>More forward motion.</h2>
            <p>Dhruvi OS gives every DII product a shared foundation while each one stays focused on the job it does best.</p>
          </div>
          <div className="outcome-grid">
            <article><span className="icon-chip">◎</span><b>One identity</b><h3>Enter through one trusted front door</h3><p>Move between the DII products available to you without rebuilding your company context.</p></article>
            <article><span className="icon-chip">↗</span><b>Clear next steps</b><h3>See what needs your attention</h3><p>Turn separate signals into a calmer view of priorities, progress and decisions.</p></article>
            <article><span className="icon-chip">∞</span><b>Connected by design</b><h3>Keep specialist tools working together</h3><p>Focused products share a visual language and platform—not one oversized workflow.</p></article>
          </div>
        </section>

        <section className="connection section" aria-labelledby="connection-title">
          <div className="connection-copy">
            <span className="eyebrow">THE CONNECTION</span>
            <h2 id="connection-title">A shared centre.<br/>Five ways forward.</h2>
            <p>Start with the product you need today. Dhruvi OS keeps the wider business within reach as your needs grow.</p>
            <ul><li><span>✓</span>One recognisable DII experience</li><li><span>✓</span>Access and permissions remain server-owned</li><li><span>✓</span>Each product keeps its specialist depth</li></ul>
            <a className="soft-button" href="#about">Meet Dhruvi OS <span>→</span></a>
          </div>
          <div className="connection-map" aria-label="Five products connected through Dhruvi OS">
            <div className="map-core"><Mark/><strong>Dhruvi OS</strong><small>Your company platform</small></div>
            {products.map(([number,name],index)=><div className={"map-node n"+(index+1)} key={name}><b>{number}</b><span>{name}</span></div>)}
            <i className="map-ring r1"/><i className="map-ring r2"/>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about-quote"><span className="eyebrow">WHY DII EXISTS</span><blockquote>“Technology should give people more clarity, more agency and more room for a better life.”</blockquote></div>
          <div className="about-copy"><p>Dhruvi Infinity Inspiration builds practical products for the work behind a growing business—from shaping an idea to understanding records, people and stock.</p><a href="#contact">About the company <span>→</span></a></div>
        </section>

        <section className="articles section" id="articles">
          <div className="section-heading row"><div><span className="eyebrow">FROM DII</span><h2>Ideas for building<br/>with more clarity.</h2></div><a className="soft-button" href="#articles">Read all articles <span>→</span></a></div>
          <div className="article-grid">
            <article><span>PLATFORM THINKING · 6 MIN</span><h3>Why focused products work better together</h3><p>A practical look at connection without turning every workflow into the same tool.</p><a href="#articles">Read article →</a></article>
            <article><span>FOUNDERS · 5 MIN</span><h3>From a promising idea to an operating rhythm</h3><p>The small decisions that make progress visible before complexity takes over.</p><a href="#articles">Read article →</a></article>
            <article><span>OPERATIONS · 4 MIN</span><h3>Clarity is a feature, not decoration</h3><p>How calm interfaces help people make better business decisions.</p><a href="#articles">Read article →</a></article>
          </div>
        </section>

        <section className="final-cta section" id="contact">
          <div><span className="eyebrow">START WHERE YOU ARE</span><h2>Find the DII product<br/>that moves you forward.</h2><p>Explore the portfolio or speak with us about where your business needs clarity next.</p></div>
          <div><a className="button" href="#products">Explore products <span>↗</span></a><a className="soft-button" href="mailto:hello@dii.ltd">Contact DII <span>→</span></a></div>
        </section>
      </main>
      <footer>
        <div className="footer-brand"><a className="brand" href="#main-content"><Mark/><span><strong>DII</strong><small>Dhruvi Infinity Inspiration Ltd</small></span></a><p>made with ♾ by Dhruvi Infinity Inspiration for a better life.</p></div>
        <div><strong>Company</strong><a href="#about">About</a><a href="#articles">Articles</a><a href="#contact">Contact</a></div>
        <div><strong>Trust</strong><a href="#security">Security</a><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div>
        <div className="legal"><strong>Dhruvi Infinity Inspiration Ltd</strong><p>Registered in England and Wales<br/>Company number 16113201</p><p>© 2026 DII</p></div>
      </footer>
    </div>
  );
}
