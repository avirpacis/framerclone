import { HeroScrollImage } from "./components/HeroScrollImage";

export default function Home() {
  const navItems = ["All Pages", "Product", "Pricing"];
  const logos = ["Veltriq", "Fyntra", "Nexora", "Fluxenta"];
  const faqItems = [
    {
      question: "Is my data safe on Salix?",
      answer:
        "Yes. We use industry-grade encryption, secure servers, and role-based access controls.",
    },
    {
      question: "How do I get started?",
      answer:
        "Sign up for a free trial, connect your team, and start managing your pipeline in minutes.",
    },
    {
      question: "Does it work with my CRM?",
      answer:
        "Yes. Salix supports integrations with popular CRMs and can sync your leads automatically.",
    },
    {
      question: "Can I track sales goals?",
      answer:
        "Absolutely. Build team goals, monitor progress, and generate reports from one dashboard.",
    },
  ];

  return (
    <div className="page">
      <header className="top-nav-wrap">
        <nav className="top-nav">
          <div className="brand">
            <span className="brand-mark">✣</span>
            <span className="brand-name">Salix</span>
          </div>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="nav-actions">
            <button className="btn-link">Login</button>
            <button className="btn-primary">Get 14 Days Free Trial</button>
          </div>
        </nav>
      </header>

      <main className="site-main">
        <section className="hero">
          <span className="eyebrow">Join +1000 scaling business</span>
          <h1>The Smartest Way to Bring Best ROI for Sales</h1>
          <p>
            The smarter way to manage sales starts with using tools that
            streamline every step of the process.
          </p>
          <button className="btn-primary hero-cta">Get 14 Days Free Trial</button>
          <span className="subtle">No Credit Card Required</span>
          <HeroScrollImage />
        </section>

        <section className="trusted">
          <p>Trusted by 17,000+ founders &amp; business owners</p>
          <div className="logo-row">
            {logos.map((logo) => (
              <div key={logo} className="logo-pill">
                {logo}
              </div>
            ))}
          </div>
        </section>

        <section className="why-section">
          <span className="eyebrow">Power Pack</span>
          <h2>Why businesses choose Salix</h2>
          <p>
            Businesses choose Salix because it simplifies the complexity of
            sales management.
          </p>
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Today's Task</h3>
              <p>Designing team meetings, priorities, and ownership.</p>
            </article>
            <article className="feature-card">
              <h3>Traffic</h3>
              <p>Real-time visibility into engagement and activity levels.</p>
            </article>
            <article className="feature-card">
              <h3>Sales Overview</h3>
              <p>Live transaction monitoring with monthly comparisons.</p>
            </article>
          </div>
        </section>

        <section className="tools-section">
          <div className="tools-left">
            <span className="eyebrow">Key Tools</span>
            <h2>AI that moves sales forward &amp; faster</h2>
            <ul>
              <li className="active">Sales Automation</li>
              <li>Deal Tracking</li>
              <li>CRM Integration</li>
            </ul>
          </div>
          <div className="tools-right">
            <h3>Sales Automation</h3>
            <p>
              Automate repetitive tasks like follow-ups, reminders, and data
              entry to save time and increase efficiency.
            </p>
            <div className="demo-image compact">
              <div className="placeholder-title">Tools Demo Preview</div>
              <div className="placeholder-note">
                Insert your custom screenshot URL or local image.
              </div>
            </div>
          </div>
        </section>

        <section className="analytics">
          <span className="eyebrow">Growth Gear</span>
          <h2>Advanced analytics &amp; reporting</h2>
          <p>
            Give your team visibility into deals, pipeline changes, and
            performance trends.
          </p>
          <div className="analytics-tabs">
            <button className="chip active">Meeting Scheduler</button>
            <button className="chip">Territory Management</button>
            <button className="chip">Lead Enrichment</button>
          </div>
          <div className="demo-image">
            <div className="placeholder-title">Analytics Table Preview</div>
            <div className="placeholder-note">
              Replace with your own report/table screenshot.
            </div>
          </div>
        </section>

        <section className="pricing">
          <h2>Choose the Perfect Plan</h2>
          <div className="pricing-toggle">
            <span>Monthly</span>
            <span className="toggle-dot" />
            <span>Yearly</span>
            <span className="save-badge">SAVE 20%</span>
          </div>
          <div className="pricing-grid">
            <article className="plan-card">
              <h3>Starter</h3>
              <p>Perfect for individuals and small teams just getting started.</p>
              <div className="price">
                $39<span>/mo/user</span>
              </div>
              <button className="btn-ghost">Get 14 Days Free Trial</button>
            </article>
            <article className="plan-card featured">
              <div className="popular">MOST POPULAR</div>
              <h3>Ultimate</h3>
              <p>Best for teams that need advanced automation and reporting.</p>
              <div className="price">
                $79<span>/mo/user</span>
              </div>
              <button className="btn-primary">Get 14 Days Free Trial</button>
            </article>
          </div>
        </section>

        <section className="faq">
          <div className="faq-copy">
            <span className="eyebrow">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common questions here.</p>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question} open={item.question.includes("safe")}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <h2>Try Salix Free for 14 Days</h2>
          <p>Start taking control of your business today.</p>
          <button className="btn-primary">Get 14 Days Free Trial</button>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark">✣</span>
            <span className="brand-name">Salix</span>
          </div>
          <p>Salix AI is designed to revolutionize how businesses operate.</p>
        </div>
        <div>
          <h4>Info</h4>
          <ul>
            <li>Product</li>
            <li>Company</li>
            <li>Career</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>Blog &amp; Article</li>
            <li>Case Studies</li>
            <li>Contact Us</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>Terms conditions</li>
            <li>404</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
