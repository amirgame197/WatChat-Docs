import React, {useEffect} from 'react';
import Head from '@docusaurus/Head';

export default function RootPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/intro');
    }
  }, []);

  return (
    <>
      <Head>
        <meta property="og:site_name" content="WatChat" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="WatChat Docs" />
        <meta property="og:description" content="Documentation for WatChat: chat, stream, voice call and watch party." />
        <meta property="og:url" content="https://docs.watchat.c0s.me/" />
        <meta property="og:image" content="https://docs.watchat.c0s.me/img/social-card.png" />
        <meta property="og:image:alt" content="WatChat logo" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WatChat Docs" />
        <meta name="twitter:description" content="Documentation for WatChat: chat, stream, voice call and watch party." />
        <meta name="twitter:image" content="https://docs.watchat.c0s.me/img/social-card.png" />
        <meta name="twitter:image:alt" content="WatChat logo" />
        <meta name="description" content="Documentation for WatChat: chat, stream, voice call and watch party." />
      </Head>

      <main
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          textAlign: 'center',
          padding: '2rem',
          color: '#f5f7ff',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div>
          <h1>Redirecting to WatChat Docs…</h1>
          <p>
            If you are not redirected automatically,{' '}
            <a href="/intro" style={{color: '#8ab4ff'}}>open the introduction page</a>.
          </p>
        </div>
      </main>
    </>
  );
}
