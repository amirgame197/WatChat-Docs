import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Documentation" description="Project documentation">
      <main className="hero hero--primary docs-home">
        <div className="container">
          <h1>Documentation</h1>
          <p className="hero__subtitle">Everything you need to know about this project.</p>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Read the docs →
          </Link>
        </div>
      </main>
    </Layout>
  );
}
