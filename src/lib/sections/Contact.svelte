<script lang="ts">
  import { onMount } from 'svelte';

  let visible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          visible = true;
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
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

<section class="contact" id="contact-section">
  <div class="container">
    <!-- Section Header -->
    <div class="section-header" class:visible>
      <span class="section-badge">Contact</span>
      <h2>let's connect</h2>
      <p>Open for new projects, collaborations, and opportunities</p>
    </div>

    <!-- CTA Button -->
    <div class="cta-row" class:visible>
      <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" class="cta-button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        Connect on LinkedIn
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="arrow">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>

    <!-- Contact Links -->
    <div class="links-grid" class:visible>
      {#each contactLinks as link, i}
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          class="link-card"
          style="--delay: {i * 0.05}s"
        >
          <div class="link-icon">
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
          </div>
          <span class="link-name">{link.name}</span>
          <span class="link-arrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </span>
        </a>
      {/each}
    </div>

    <!-- Footer -->
    <p class="footer-text" class:visible>
      Built with Svelte &bull; &copy; 2025 Artur Arslanov
    </p>
  </div>
</section>

<style>
  .contact {
    padding: 100px 0;
    background: var(--bg-base);
    position: relative;
    overflow: hidden;
  }

  .contact::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 50% 30%, rgba(217, 119, 6, 0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 70%, rgba(184, 92, 56, 0.04) 0%, transparent 50%);
    pointer-events: none;
  }

  .container {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
    text-align: center;
  }

  /* Section Header */
  .section-header {
    margin-bottom: 40px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }

  .section-header.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .section-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: var(--bg-subtle);
    border: 2px solid var(--border-color);
    border-radius: 100px;
    font-size: var(--text-xs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 16px;
    color: var(--color-primary);
  }

  .section-header h2 {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 2.5rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 16px;
    text-transform: lowercase;
  }

  .section-header p {
    font-size: var(--text-lg);
    color: var(--text-muted);
    max-width: 500px;
    margin: 0 auto;
  }

  /* CTA Row */
  .cta-row {
    margin-bottom: 40px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.2s;
  }

  .cta-row.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 16px 32px;
    background: var(--gradient-primary);
    color: white;
    font-size: var(--text-base);
    font-weight: 600;
    border: 2px solid var(--border-color);
    border-radius: 14px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: rgba(255, 255, 255, 0.3);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .cta-button:hover::before {
    transform: scaleX(1);
  }

  .cta-button:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(217, 119, 6, 0.4);
  }

  .cta-button .arrow {
    transition: transform 0.3s ease;
  }

  .cta-button:hover .arrow {
    transform: translateX(4px);
  }

  /* Links Grid */
  .links-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    margin-bottom: 50px;
    opacity: 0;
    transition: opacity 0.6s ease 0.3s;
  }

  .links-grid.visible {
    opacity: 1;
  }

  .links-grid.visible .link-card {
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--delay);
  }

  .link-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 20px 24px;
    background: var(--glass-bg);
    border: 2px solid var(--border-color);
    border-radius: 14px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translateY(20px);
  }

  .link-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .link-card:hover::before {
    transform: scaleX(1);
  }

  .link-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), var(--glow-primary);
    border-color: var(--color-primary);
  }

  .link-icon {
    color: var(--text-muted);
    transition: all 0.3s ease;
  }

  .link-card:hover .link-icon {
    color: var(--color-primary);
    transform: scale(1.1);
  }

  .link-name {
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--text-primary);
  }

  .link-arrow {
    position: absolute;
    top: 8px;
    right: 8px;
    color: var(--text-muted);
    opacity: 0;
    transition: all 0.2s ease;
    transform: translate(-4px, 4px);
  }

  .link-card:hover .link-arrow {
    opacity: 1;
    color: var(--color-primary);
    transform: translate(0, 0);
  }

  /* Footer */
  .footer-text {
    font-size: var(--text-sm);
    color: var(--text-muted);
    opacity: 0;
    transition: opacity 0.6s ease 0.4s;
  }

  .footer-text.visible {
    opacity: 1;
  }

  /* Mobile */
  @media (max-width: 768px) {
    .contact {
      padding: 60px 0;
    }

    .container {
      padding: 0 1.25rem;
    }

    .section-header {
      margin-bottom: 32px;
    }

    .section-header h2 {
      font-size: 1.75rem;
    }

    .cta-row {
      margin-bottom: 32px;
    }

    .cta-button {
      padding: 14px 24px;
      font-size: var(--text-sm);
    }

    .links-grid {
      gap: 8px;
      margin-bottom: 40px;
    }

    .link-card {
      padding: 14px 18px;
    }

    .link-icon svg {
      width: 20px;
      height: 20px;
    }

    .link-name {
      font-size: var(--text-xs);
    }

    .link-arrow {
      display: none;
    }
  }
</style>
