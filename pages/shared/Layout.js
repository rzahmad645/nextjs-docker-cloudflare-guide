// shared/Layout.js
import Head from "next/head";

export default function Layout({ title, children }) {
  const siteName = "Next.js Docker Guide";
  const siteTagline = "Example portfolio deployed with Docker and Cloudflare";
  const fullTitle = title ? `${title} · ${siteName}` : siteName;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={siteTagline} />
      </Head>

      <header className="topbar" role="banner">
        <a className="brand" href="/" aria-label="Home">
          NDG
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/api/health" target="_blank" rel="noopener noreferrer">
            Health
          </a>
        </nav>
      </header>

      <main className="container" role="main">
        {children}
      </main>

      <footer className="footer" role="contentinfo">
        <span>© {new Date().getFullYear()} Next.js Docker Guide</span>
        <span className="muted"> · Example deployment using Docker + Cloudflare</span>
      </footer>
    </>
  );
}
