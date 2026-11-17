import Link from "next/link";
import s from "../legal.module.css";

export const metadata = {
  title: "Privacy Policy — PromoDojo",
  description: "How PromoDojo, a product of Aldebaran Labs LLC, collects, uses and protects your data.",
};

const EMAIL = "info@promo-dojo.com";
const Mail = () => <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;

export default function Privacy() {
  return (
    <div className={s.page}>
      <header className={s.nav}>
        <Link href="/" className={s.brand}>
          <img src="/brand/kicker.png" alt="" className={s.brandMark} />
          PromoDojo
        </Link>
      </header>

      <main className={s.doc}>
        <h1>Privacy Policy — PromoDojo</h1>
        <p className={s.meta}>Effective date: November 1, 2026 · Aldebaran Labs LLC</p>

        <h2>1. Who we are</h2>
        <p>
          PromoDojo is a product of Aldebaran Labs LLC (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;), an AI
          software company. PromoDojo is a multi-tenant platform that uses AI agents to run market
          research, content creation, social media posting, lead intake, and conversion tracking on behalf
          of the businesses that create an account (&quot;workspaces&quot;). Our registered contact is <Mail />.
        </p>
        <p>This policy covers two groups of people differently:</p>
        <ul>
          <li>
            <strong>Workspace users</strong> — people who create a PromoDojo account. Sections 2–11
            describe what we collect and do for you directly.
          </li>
          <li>
            <strong>Leads and contacts of a workspace</strong> — people who comment on, message, or are
            otherwise contacted through a workspace&apos;s connected social accounts, email, or tracking
            links. We process your data only as a service provider acting on that business&apos;s
            instructions, not on our own behalf. See <a href="#leads">section 12</a>.
          </li>
        </ul>

        <h2>2. What data we collect</h2>
        <p>We collect only what&apos;s necessary to provide the Service:</p>
        <ul>
          <li><strong>Account data:</strong> name, email address, and password (or OAuth token if you sign in with a third-party identity provider).</li>
          <li><strong>Workspace data:</strong> product URLs, brand positioning, and the &quot;brand brain&quot; documents you create or approve inside the platform.</li>
          <li><strong>Connected channel accounts:</strong> when you connect Instagram, TikTok, X, Reddit, or an email sending domain, we store an encrypted access token and the account metadata needed to post, read, and reply on your behalf (e.g., account ID, connected scopes, capabilities). We never store your platform password.</li>
          <li><strong>Content you create or approve:</strong> drafts, published posts, captions, and media generated or scheduled through the platform.</li>
          <li><strong>Research data:</strong> findings, sources, and citations our research agent gathers on your behalf (competitors, market signals) — sourced from public web data, not from your private accounts.</li>
          <li><strong>Lead and CRM data:</strong> contacts, leads, messages, and conversion events that come in through your connected channels, tracking links, or billing webhooks (see <a href="#leads">section 12</a>).</li>
          <li><strong>Usage data:</strong> actions taken within the platform, timestamped and linked to your account.</li>
          <li><strong>Billing data:</strong> subscription plan and payment status. Card data is processed entirely by our payment processor (Stripe) and never stored on our servers.</li>
          <li><strong>Communications:</strong> messages you send us by email.</li>
        </ul>
        <p>
          We don&apos;t collect data from visitors to our marketing site who don&apos;t create an account,
          beyond strictly necessary cookies (<a href="#cookies">section 10</a>).
        </p>

        <h2>3. How we use your data</h2>
        <ul>
          <li>To provide, operate, and improve the platform.</li>
          <li>To run AI agents that research your market, draft content, and — only at the autonomy level you configure — publish posts or send replies on your connected accounts.</li>
          <li>To classify, score, and route inbound leads and engagement into your CRM.</li>
          <li>To track conversions against your leads via tracking links and billing webhooks.</li>
          <li>To enforce your plan&apos;s usage limits and handle billing.</li>
          <li>To respond to your support requests.</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <p>
          We do not sell your data or your leads&apos; data. We do not use the content of your workspace or
          your connected accounts for advertising purposes.
        </p>

        <h2>4. AI processing</h2>
        <p>
          Workspace content — brand documents, research findings, draft copy, and inbound messages relevant
          to a task — is processed by Anthropic&apos;s Claude API (SOC 2 Type II, ISO 27001, and ISO 42001
          certified) solely to perform the task you requested (research synthesis, drafting,
          classification, reply drafting). Anthropic does not use API data to train its models.
        </p>
        <p>
          Untrusted content — comments, DMs, emails, and scraped pages — is always passed to the model as
          quoted data, never as instructions, and cannot change an agent&apos;s tools or autonomy level.
          Outbound actions (posting, sending) pass a policy check outside the model before anything goes out.
        </p>
        <p>
          We also use Exa for open-web research discovery (competitors, market signals) and Postmark for
          transactional and automated email delivery.
        </p>

        <h2>5. Data storage and security</h2>
        <ul>
          <li><strong>Database:</strong> Supabase (PostgreSQL), hosted on AWS infrastructure. All data is encrypted at rest and in transit (TLS 1.2+). Row-level security isolates every workspace&apos;s data from every other workspace&apos;s.</li>
          <li><strong>File and media storage:</strong> Cloudflare R2, access scoped to your workspace.</li>
          <li><strong>OAuth tokens and platform credentials:</strong> envelope-encrypted (per-row data key, master key in a cloud KMS), decrypted only inside the adapter call that needs them — never logged, never passed to an LLM.</li>
          <li><strong>Email delivery:</strong> Postmark. Your email address is shared with Postmark solely for message delivery.</li>
          <li><strong>Billing:</strong> Stripe. Card data never reaches our servers.</li>
          <li><strong>Audit log:</strong> every AI agent action, post, and reply is logged with date, time, and the user or system identity responsible.</li>
        </ul>
        <p>
          We webhook-verify every inbound signature (Meta, TikTok, Postmark, Stripe, GitHub) and reject
          replayed requests.
        </p>

        <h2>6. Data retention</h2>
        <p>
          We retain your account data and workspace content while your account is active. If you cancel
          your subscription, your data is retained for 30 days to allow export, then deleted from our
          production systems. Audit logs may be retained for up to 12 months for compliance purposes.
        </p>
        <p>You can request deletion of your data at any time by writing to <Mail />.</p>

        <h2>7. Sharing and disclosure</h2>
        <p>
          We share data only with the following subprocessors, and only to the extent necessary to provide
          the Service:
        </p>
        <ul>
          <li><strong>Anthropic</strong> — AI processing (task content only, not used for training).</li>
          <li><strong>Exa</strong> — open-web research discovery.</li>
          <li><strong>Supabase</strong> — database and file storage.</li>
          <li><strong>Cloudflare</strong> — object storage (R2).</li>
          <li><strong>Postmark</strong> — transactional and automated email delivery.</li>
          <li><strong>Stripe</strong> — billing, subscription management, and conversion webhooks.</li>
          <li><strong>Instagram (Meta), TikTok, X, Reddit</strong> — only the connected accounts you authorize, and only to post, read, or reply as you direct.</li>
          <li><strong>A posting/inbox aggregator</strong> (while our own platform app reviews are pending) — acts strictly as a pass-through to the platforms above.</li>
        </ul>
        <p>
          We may disclose data if required by law, a court order, or to protect the rights and safety of
          our users.
        </p>

        <h2>8. Your rights</h2>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate data.</li>
          <li>Request deletion of your data (right to be forgotten).</li>
          <li>Object to or restrict certain processing.</li>
          <li>Data portability — receive your data in a machine-readable format.</li>
          <li>Withdraw your consent at any time where processing is based on it.</li>
        </ul>
        <p>To exercise any of these rights, write to <Mail />. We&apos;ll respond within 30 days.</p>

        <h2 id="platforms">9. Connected platform data (Instagram, TikTok, X, Reddit)</h2>
        <p>When you connect a social account to PromoDojo:</p>
        <ul>
          <li>We request only the permissions needed for the features you use (e.g., publishing content, reading comments/DMs for engagement, posting replies at your configured autonomy level).</li>
          <li>We never post, message, or act on your connected account except at your direction or within autonomy settings you explicitly configured.</li>
          <li>Disconnecting an account in PromoDojo immediately revokes our stored access token and schedules it for deletion.</li>
          <li>Platform content (posts, comments, DMs) we access is used only to operate the features you enabled — not for advertising, not for training third-party models, and not shared beyond the subprocessors listed in section 7.</li>
        </ul>
        <p id="data-deletion">
          <strong>Data deletion requests.</strong> If a connected platform (or one of its users) requests
          deletion of data obtained through that platform&apos;s API, write to <Mail /> with the platform
          name and account identifier. We will delete the associated stored tokens and cached platform
          content within 30 days and confirm by email.
        </p>

        <h2 id="cookies">10. Cookies</h2>
        <p>
          We use only strictly necessary cookies on our own site — specifically the session token required
          to keep you logged in. We don&apos;t use tracking cookies, advertising pixels, or third-party
          analytics scripts on PromoDojo&apos;s own marketing pages.
        </p>
        <p>
          Separately, workspaces may embed a first-party tracking snippet on <em>their own</em> websites to
          attribute leads and conversions. That snippet is described in section 12 — it collects data on
          behalf of the workspace, not on behalf of PromoDojo.
        </p>

        <h2>11. Children&apos;s privacy</h2>
        <p>
          PromoDojo is a professional platform intended for business use. We don&apos;t knowingly collect
          data from individuals under 16. If you believe a minor has provided us with personal data,
          contact us and we&apos;ll remove it immediately.
        </p>

        <h2 id="leads">12. If you&apos;re a lead or contact of a PromoDojo workspace</h2>
        <p>
          A business using PromoDojo may contact you, reply to you, or track your visit to their website or
          landing page using our platform. In that relationship, <strong>the business is the data
          controller and we are their data processor</strong> — we act only on their instructions.
        </p>
        <p>This means:</p>
        <ul>
          <li>Your messages, replies, and conversion events are stored in that business&apos;s workspace, isolated from every other workspace.</li>
          <li>We do not use your data for our own purposes, including advertising or training our own models.</li>
          <li>To exercise a data-subject right (access, correction, deletion), contact the business you interacted with directly. If you&apos;re unsure which business that is, write to <Mail /> and we&apos;ll route your request or identify the responsible workspace where we&apos;re able to.</li>
        </ul>

        <h2>13. Changes to this policy</h2>
        <p>
          We may update this policy as our technology or legal obligations change. Material changes will be
          communicated by email to active subscribers at least 14 days in advance. The effective date at the
          top of this page will always reflect the current version.
        </p>

        <h2>14. Contact</h2>
        <p>Questions about this policy or your data? Write to us at <Mail />.</p>
        <p>
          Enterprise customers requiring a Data Processing Agreement (DPA) should contact us — we&apos;ll
          provide one within 5 business days.
        </p>
      </main>

      <footer className={s.footer}>
        <span>© {new Date().getFullYear()} Aldebaran Labs LLC</span>
        <nav>
          <Link href="/">Home</Link>
          <a href={`mailto:${EMAIL}`}>Contact</a>
        </nav>
      </footer>
    </div>
  );
}
