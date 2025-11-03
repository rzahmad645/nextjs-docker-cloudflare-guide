// pages/index.js
import Layout from "./shared/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <h1>Header</h1>
      <p className="lede">Docker Website in JS</p>

      <ul className="checklist">
        <li>✅ Running on Docker</li>
        <li>✅ HTTPS via Cloudflare Tunnel</li>
        <li>✅ Next.js pages working</li>
        <li>✅ API health route</li>
        <li>✅ Local Host is Updating</li>
      </ul>

      <div className="card-row">
        <a className="card" href="/projects">Projects</a>
        <a className="card" href="/about">About</a>
        <a className="card" href="/contact">Contact</a>
      </div>
    </Layout>
  );
}
