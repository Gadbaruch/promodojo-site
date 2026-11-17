import Link from "next/link";
import { Inter, Silkscreen } from "next/font/google";
import s from "./landing.module.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const pixel = Silkscreen({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-pixel" });

const CONTACT_EMAIL = "info@promo-dojo.com";

const agents = [
  { key: "scout", name: "Scout", role: "Finds the communities, competitors and channels where your audience already hangs out." },
  { key: "analyze", name: "Analyze", role: "Turns signals and results into insights you can act on." },
  { key: "copy", name: "Copy", role: "Drafts posts, hooks and messaging in your audience's own language." },
  { key: "test", name: "Test", role: "Frames every campaign as an experiment with a clear hypothesis." },
  { key: "optimize", name: "Optimize", role: "Doubles down on what works and cuts what doesn't." },
  { key: "scale", name: "Scale", role: "Takes proven campaigns to more channels and audiences." },
];

const loop = ["Understand", "Prepare", "Ship", "Measure", "Learn", "Improve"];

const channels = ["Instagram", "TikTok", "X", "Reddit", "Email"];

export default function Landing() {
  return (
    <div className={`${s.page} ${inter.variable} ${pixel.variable}`}>
      <header className={s.nav}>
        <Link href="/" className={s.brand}>
          <img src="/brand/kicker.png" alt="" className={s.brandMark} />
          <span className={s.brandName}>
            <span>Promo</span> <span className={s.orange}>Dojo</span>
          </span>
        </Link>
        <nav className={s.navLinks}>
          <a href="#how">How it works</a>
          <a href="#agents">Agents</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className={s.navCta}>Get early access</a>
        </nav>
      </header>

      <main>
        <section className={s.hero}>
          <div className={s.heroText}>
            <p className={s.kicker}>Product growth ninja agents</p>
            <h1 className={s.heroTitle}>
              Promotion that learns<br />from every move.
            </h1>
            <p className={s.lede}>
              PromoDojo is a team of AI agents that research your audience, draft campaigns, ship them
              to the channels that matter, and learn from the results. You approve every move.
            </p>
            <div className={s.ctaRow}>
              <a href={`mailto:${CONTACT_EMAIL}`} className={s.btnPrimary}>Get early access</a>
              <a href="#how" className={s.btnGhost}>See how it works</a>
            </div>
          </div>
          <div className={s.heroArt}>
            <img src="/brand/kicker.png" alt="PromoDojo ninja mid-kick" className={s.heroImg} />
          </div>
        </section>

        <div className={s.mantra}>
          <span className={s.orange}>Sharpen.</span> <span className={s.coral}>Test.</span>{" "}
          <span className={s.purple}>Grow.</span> <span>Repeat.</span>
        </div>

        <section id="how" className={s.section}>
          <h2 className={s.h2}>Promotion as an experiment loop</h2>
          <p className={s.sectionLede}>
            Most promotion runs on memory and gut feel. PromoDojo keeps a living Project Brain, so every
            campaign starts from evidence and every result makes the next one sharper.
          </p>
          <ol className={s.loop}>
            {loop.map((step, i) => (
              <li key={step} className={s.loopStep}>
                <span className={s.loopNum}>{String(i + 1).padStart(2, "0")}</span>
                <span className={s.loopName}>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="agents" className={s.section}>
          <h2 className={s.h2}>Meet the dojo</h2>
          <p className={s.sectionLede}>Six specialist agents, one shared brain.</p>
          <div className={s.agents}>
            {agents.map((a) => (
              <article key={a.key} className={s.agent}>
                <img src={`/brand/agent-${a.key}.png`} alt={`${a.name} agent`} className={s.agentImg} />
                <h3 className={s.agentName}>{a.name}</h3>
                <p className={s.agentRole}>{a.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${s.section} ${s.control}`}>
          <div>
            <h2 className={s.h2}>You stay in control</h2>
            <ul className={s.checks}>
              <li>Nothing ships without your approval.</li>
              <li>Every post, result and learning is logged.</li>
              <li>Connect accounts only for the actions you authorize, and disconnect any time.</li>
            </ul>
          </div>
          <div>
            <p className={s.channelsLabel}>Built for the channels creators live on</p>
            <div className={s.channels}>
              {channels.map((c) => (
                <span key={c} className={s.chip}>{c}</span>
              ))}
            </div>
          </div>
        </section>

        <section className={s.final}>
          <h2 className={s.finalTitle}>Ready to train?</h2>
          <p>PromoDojo is in private beta for creators and indie products.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className={s.btnPrimary}>Get early access</a>
        </section>
      </main>

      <footer className={s.footer}>
        <span>© {new Date().getFullYear()} PromoDojo · Aldebaran Labs LLC</span>
        <nav className={s.footerLinks}>
          <Link href="/privacy">Privacy</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
        </nav>
      </footer>
    </div>
  );
}
