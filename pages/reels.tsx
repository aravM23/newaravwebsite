import React, { useEffect } from 'react';
import Layout from '../src/components/Layout';
import Head from 'next/head';

// Add your Instagram reel URLs here
// Format: https://www.instagram.com/reel/REEL_ID/ or https://www.instagram.com/p/POST_ID/
const reelUrls: string[] = [
  'https://www.instagram.com/reel/DRwCYR_jhOm/',
  'https://www.instagram.com/p/DTeMt6FkSHA/',
  'https://www.instagram.com/p/DTjg_W9EXp9/',
  'https://www.instagram.com/p/DTv5k6SDycT/',
];

const Reels: React.FC = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Process embeds when script loads
    script.onload = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <Layout title="Reels - Arav Mathur">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div style={{
        minHeight: '100vh',
        background: `
          linear-gradient(135deg, #0a0a0a 0%, #1a0808 50%, #0a0a0a 100%),
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(220, 0, 0, 0.015) 40px,
            rgba(220, 0, 0, 0.015) 80px
          )
        `,
        padding: '2rem 1rem',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative',
      }}>
        {/* Racing decoration at top */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: `repeating-linear-gradient(
            90deg,
            #DC0000 0px,
            #DC0000 15px,
            #1a1a1a 15px,
            #1a1a1a 30px
          )`,
          opacity: 0.5,
        }} />
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingTop: '1rem',
        }}>
          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: 'clamp(2rem, 5vw, 3rem)',
          }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #E1306C 0%, #F77737 50%, #FCAF45 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FCAF45" />
                    <stop offset="25%" stopColor="#F77737" />
                    <stop offset="50%" stopColor="#E1306C" />
                    <stop offset="75%" stopColor="#C13584" />
                    <stop offset="100%" stopColor="#833AB4" />
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#instagramGradient)"/>
              </svg>
              my reels
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              color: '#b0b0b0',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}>
              i make reels for fun watch pls
            </p>
          </div>

          {/* Reels Grid */}
          {reelUrls.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
              gap: 'clamp(1rem, 3vw, 2rem)',
              justifyItems: 'center',
              padding: '0 1rem',
            }}>
              {reelUrls.map((url, index) => (
                <div 
                  key={index}
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    background: 'rgba(20, 20, 20, 0.6)',
                    borderRadius: '16px',
                    padding: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <blockquote
                    className="instagram-media"
                    data-instgrm-captioned
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                    style={{
                      background: '#0a0a0a',
                      border: 0,
                      borderRadius: '12px',
                      margin: 0,
                      maxWidth: '100%',
                      minWidth: '280px',
                      padding: 0,
                      width: '100%',
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            /* Empty state - shown when no reels are added yet */
            <div style={{
              textAlign: 'center',
              padding: 'clamp(3rem, 10vw, 6rem) 2rem',
            }}>
              <div style={{
                background: 'rgba(20, 20, 20, 0.6)',
                borderRadius: '24px',
                padding: 'clamp(2rem, 5vw, 4rem)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                maxWidth: '600px',
                margin: '0 auto',
              }}>
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '1.5rem',
                }}>
                  🎬
                </div>
                <h2 style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '1rem',
                }}>
                  reels coming soon!
                </h2>
                <p style={{
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                  color: '#888888',
                  marginBottom: '2rem',
                  lineHeight: 1.6,
                }}>
                  in the meantime, check out my instagram directly
                </p>
                <a
                  href="https://www.instagram.com/aravmathurr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: 'clamp(12px, 3vw, 16px) clamp(24px, 5vw, 32px)',
                    background: 'linear-gradient(135deg, #E1306C 0%, #F77737 50%, #FCAF45 100%)',
                    borderRadius: '50px',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 32px rgba(225, 48, 108, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(225, 48, 108, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(225, 48, 108, 0.3)';
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  follow @aravmathurr
                </a>
              </div>
            </div>
          )}

          {/* Follow CTA at bottom */}
          {reelUrls.length > 0 && (
            <div style={{
              textAlign: 'center',
              marginTop: 'clamp(2rem, 5vw, 4rem)',
              paddingBottom: '2rem',
            }}>
              <a
                href="https://www.instagram.com/aravmathurr/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 32px',
                  background: 'linear-gradient(135deg, #E1306C 0%, #F77737 50%, #FCAF45 100%)',
                  borderRadius: '50px',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 32px rgba(225, 48, 108, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(225, 48, 108, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(225, 48, 108, 0.3)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                follow @aravmathurr for more
              </a>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        /* Instagram embed dark mode override */
        :global(.instagram-media) {
          background: #0a0a0a !important;
        }
        :global(.instagram-media iframe) {
          border-radius: 12px !important;
        }
      `}</style>
    </Layout>
  );
};

export default Reels;
