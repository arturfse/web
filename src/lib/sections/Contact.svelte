<script lang="ts">
  import { onMount } from 'svelte';
  import { riseReveal, setupScrollAnimation, isMobile } from '../utils/animations';

  onMount(() => {
    if (isMobile()) {
      setupScrollAnimation('#contact', '#contact .bento-card', riseReveal, { delay: 50, staggerDelay: 60 });
    } else {
      riseReveal('#contact .bento-card', { delay: 100, staggerDelay: 70 });
    }
  });

  const contactInfo = {
    email: 'arthur.arslanoov@gmail.com',
    github: 'https://github.com/arslanov-artur',
    linkedin: 'https://linkedin.com/in/artur-arslanov',
    telegramChannel: 'https://t.me/js_arthur',
    telegramAccount: 'https://t.me/arthur_arslanov',
    whatsapp: 'https://wa.me/+4915257550122'
  };

  const contactLinks = [
    { name: 'GitHub', href: contactInfo.github, icon: 'github' },
    { name: 'Telegram', href: contactInfo.telegramAccount, icon: 'telegram' },
    { name: 'WhatsApp', href: contactInfo.whatsapp, icon: 'whatsapp' },
    { name: 'Email', href: `mailto:${contactInfo.email}`, icon: 'email' },
    { name: 'Blog', href: contactInfo.telegramChannel, icon: 'blog' }
  ];
</script>

<section id="contact" class="contact">
  <div class="bg-gradient"></div>
  <div class="bg-blob blob-1"></div>
  <div class="bg-blob blob-2"></div>
  <div class="bg-grid"></div>

  <div class="container">
    <h2 class="section-title">Contact</h2>
    <div class="bento-grid">
      <!-- Main CTA card -->
      <div class="bento-card cta-card glass">
        <div class="cta-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
        </div>
        <h3>Let's work together</h3>
        <p>Open for new projects, collaborations, and opportunities</p>
        <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" class="cta-button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          Connect on LinkedIn
          <span class="btn-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </a>
      </div>

      <!-- Contact links with icons -->
      {#each contactLinks as link, i}
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          class="bento-card link-card glass"
          style="animation-delay: {i * 0.1}s"
        >
          <span class="link-icon">
            {#if link.icon === 'github'}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            {:else if link.icon === 'telegram'}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            {:else if link.icon === 'whatsapp'}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            {:else if link.icon === 'email'}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>
            {:else if link.icon === 'blog'}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                <path d="M2 2l7.586 7.586"/>
                <circle cx="11" cy="11" r="2"/>
              </svg>
            {/if}
          </span>
          <span class="link-name">{link.name}</span>
          <span class="link-arrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </span>
        </a>
      {/each}
    </div>

    <p class="footer-text">
      Built with Svelte &bull; &copy; 2025 Artur Arslanov
    </p>
  </div>
</section>

<style>
  .contact {
    background-color: var(--bg-base);
    height: 100vh;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  /* Background elements - warm tones */
  .bg-gradient {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 30%, rgba(217, 119, 6, 0.08) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 70%, rgba(184, 92, 56, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  .bg-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.1;
    pointer-events: none;
    animation: float 20s ease-in-out infinite;
  }

  .blob-1 {
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
    width: 50vw;
    height: 50vw;
    background: var(--color-primary);
  }

  .blob-2 {
    bottom: -20%;
    left: 50%;
    transform: translateX(-50%);
    width: 45vw;
    height: 45vw;
    background: var(--color-secondary);
    animation-delay: -10s;
  }

  @keyframes float {
    0%, 100% { transform: translateX(-50%) translate(0, 0) scale(1); }
    25% { transform: translateX(-50%) translate(2%, 3%) scale(1.02); }
    50% { transform: translateX(-50%) translate(-1%, 5%) scale(0.98); }
    75% { transform: translateX(-50%) translate(3%, -2%) scale(1.01); }
  }

  .bg-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  :global([data-theme="light"]) .bg-grid {
    background-image:
      linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 700px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    text-align: center;
  }

  .section-title {
    display: none;
  }

  .bento-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .bento-card {
    padding: 1.25rem;
    border-radius: 1.25rem;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
  }

  .bento-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: var(--gradient-border);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .bento-card:hover::before {
    opacity: 1;
  }

  .bento-card:hover {
    transform: translateY(-4px) rotate(-0.5deg);
    box-shadow: var(--shadow-lg), var(--glow-primary);
  }

  /* CTA card */
  .cta-card {
    grid-column: span 5;
    padding: 2.5rem 2rem;
    text-align: center;
  }

  .cta-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background: var(--gradient-primary);
    border-radius: 16px;
    margin-bottom: 1.25rem;
    color: white;
    animation: pulse 3s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(217, 119, 6, 0.4); }
    50% { box-shadow: 0 0 20px 10px rgba(217, 119, 6, 0); }
  }

  .cta-card h3 {
    font-size: var(--text-xl);
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  .cta-card p {
    font-size: var(--text-sm);
    color: var(--text-muted);
    margin-bottom: 1.75rem;
    line-height: 1.5;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 1.75rem;
    background: var(--gradient-primary);
    color: white;
    font-size: var(--text-sm);
    font-weight: 600;
    border-radius: 14px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    overflow: hidden;
  }

  .cta-button::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  .cta-button:hover::before {
    transform: translateX(100%);
  }

  .cta-button:hover {
    transform: translateY(-3px) rotate(-1deg);
    box-shadow: 0 10px 30px rgba(217, 119, 6, 0.4);
  }

  .btn-arrow {
    display: flex;
    transition: transform 0.3s ease;
  }

  .cta-button:hover .btn-arrow {
    transform: translateX(4px);
  }

  /* Link cards */
  .link-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1.5rem 1rem;
    animation: fadeInUp 0.5s ease backwards;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .link-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    transition: all 0.3s ease;
  }

  .link-card:hover .link-icon {
    color: var(--color-primary);
    transform: scale(1.15);
  }

  .link-name {
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--text-primary);
  }

  .link-arrow {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    color: var(--text-muted);
    opacity: 0;
    transition: all 0.3s ease;
    transform: translate(-4px, 4px);
  }

  .link-card:hover .link-arrow {
    opacity: 1;
    color: var(--color-primary);
    transform: translate(0, 0);
  }

  .footer-text {
    font-size: var(--text-sm);
    color: var(--text-muted);
  }

  @media (max-width: 700px) {
    .contact {
      height: auto !important;
      min-height: auto !important;
      max-height: none !important;
      padding: 2rem 1rem;
      overflow: visible;
    }

    .bento-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-auto-rows: auto;
      gap: 0.75rem;
    }

    .cta-card {
      grid-column: span 5;
    }
  }

  @media (max-width: 500px) {
    .contact {
      height: auto;
      min-height: auto;
      padding: 2rem 1rem;
      overflow: visible;
    }

    .container {
      padding: 0;
      text-align: center;
    }

    .section-title {
      display: block;
      font-size: var(--text-sm);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--color-primary);
      margin-bottom: 1.25rem;
      font-family: var(--font-display);
      text-align: left;
    }

    .bento-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-auto-rows: auto;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .bento-card {
      border-radius: 0.875rem;
      transition: transform 0.3s ease;
    }

    .bento-card:active {
      transform: scale(0.98);
    }

    .cta-card {
      grid-column: span 6;
      padding: 1.25rem;
      border: 1px solid transparent;
      background:
        linear-gradient(var(--glass-bg), var(--glass-bg)) padding-box,
        var(--gradient-primary) border-box;
      text-align: center;
    }

    .cta-icon {
      width: 44px;
      height: 44px;
      margin-bottom: 0.75rem;
      border-radius: 12px;
    }

    .cta-card h3 {
      font-size: var(--text-base);
      margin-bottom: 0.35rem;
    }

    .cta-card p {
      font-size: 0.7rem;
      margin-bottom: 1rem;
      line-height: 1.4;
    }

    .cta-button {
      padding: 0.75rem 1rem;
      font-size: var(--text-xs);
      width: 100%;
      justify-content: center;
      border-radius: 8px;
      font-weight: 600;
    }

    .link-card {
      grid-column: span 2;
      padding: 0.75rem 0.5rem;
      gap: 0.35rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .link-icon svg {
      width: 18px;
      height: 18px;
    }

    .link-name {
      font-size: 0.6rem;
    }

    .link-arrow {
      display: none;
    }

    .footer-text {
      font-size: 0.7rem;
      color: var(--text-muted);
    }

    .blob-1, .blob-2 {
      display: none;
    }

    .bg-grid {
      opacity: 0.3;
    }
  }
</style>
