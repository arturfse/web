<script lang="ts">
  import { onMount } from 'svelte';
  import { flipReveal, setupScrollAnimation, isMobile } from '../utils/animations';

  onMount(() => {
    if (isMobile()) {
      setupScrollAnimation('#publications', '#publications .bento-card', flipReveal, { delay: 50, staggerDelay: 90 });
    } else {
      flipReveal('#publications .bento-card', { delay: 100, staggerDelay: 100 });
    }
  });

  const publications = [
    {
      title: 'Your Tech Stack Doesn\'t Matter',
      link: 'https://www.linkedin.com/posts/artur-arslanov_your-tech-stack-doesnt-matter-your-users-activity-7359454836905455616-AvJF',
      featured: true
    },
    {
      title: 'The Myth of the 10x Developer',
      link: 'https://www.linkedin.com/posts/artur-arslanov_the-myth-of-the-10x-developer-met-a-10x-activity-7349791548181549056-WR5O'
    }
  ];

  const pubStats = [
    { value: '1M+', label: 'LinkedIn Views', featured: true },
    { value: '2+', label: 'Viral Posts' }
  ];
</script>

<section id="publications" class="publications">
  <!-- Consistent background -->
  <div class="bg-gradient"></div>
  <div class="bg-blob blob-1"></div>
  <div class="bg-blob blob-2"></div>
  <div class="bg-grid"></div>

  <div class="container">
    <h2 class="section-title">Writing</h2>
    <div class="bento-grid">
      <!-- Featured publication -->
      <a href={publications[0].link} target="_blank" rel="noopener noreferrer" class="bento-card featured-card glass">
        <div class="featured-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          Featured
        </div>
        <div class="card-content">
          <h3>{publications[0].title}</h3>
          <p class="description">Thoughts on what really matters when building products</p>
        </div>
        <div class="read-more">
          Read on LinkedIn
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </a>

      <!-- Stats -->
      {#each pubStats as stat}
        <div class="bento-card stat-card glass">
          <span class="stat-value">{stat.value}</span>
          <span class="stat-label">{stat.label}</span>
        </div>
      {/each}

      <!-- Other publications -->
      {#each publications.slice(1) as post}
        <a href={post.link} target="_blank" rel="noopener noreferrer" class="bento-card pub-card glass">
          <div class="card-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="linkedin-icon">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="arrow-icon">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
          <h4>{post.title}</h4>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .publications {
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
    background: radial-gradient(ellipse at 70% 20%, rgba(217, 119, 6, 0.06) 0%, transparent 50%),
                radial-gradient(ellipse at 30% 80%, rgba(184, 92, 56, 0.05) 0%, transparent 50%);
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
    right: -5%;
    width: 35vw;
    height: 35vw;
    background: var(--color-accent-2);
  }

  .blob-2 {
    bottom: -15%;
    left: -10%;
    width: 40vw;
    height: 40vw;
    background: var(--color-primary);
    animation-delay: -10s;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(2%, 3%) scale(1.02); }
    50% { transform: translate(-1%, 5%) scale(0.98); }
    75% { transform: translate(3%, -2%) scale(1.01); }
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
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
  }

  .section-title {
    display: none;
  }

  .bento-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }

  .bento-card {
    padding: 1.5rem;
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

  /* Featured card */
  .featured-card {
    grid-column: span 2;
    grid-row: span 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .featured-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.375rem 0.875rem;
    background: var(--gradient-primary);
    color: white;
    font-size: var(--text-xs);
    font-weight: 600;
    border-radius: 20px;
    width: fit-content;
  }

  .featured-card h3 {
    font-size: var(--text-xl);
    color: var(--text-primary);
    margin: 1rem 0 0.75rem;
    line-height: 1.3;
  }

  .featured-card .description {
    font-size: var(--text-sm);
    color: var(--text-muted);
    line-height: 1.6;
  }

  .read-more {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--color-primary);
    margin-top: auto;
  }

  .read-more svg {
    transition: transform 0.2s ease;
  }

  .featured-card:hover .read-more svg {
    transform: translateX(4px);
  }

  /* Stat cards */
  .stat-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .stat-value {
    font-size: var(--text-2xl);
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Publication cards */
  .pub-card {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .linkedin-icon {
    color: var(--text-muted);
    transition: color 0.2s ease;
  }

  .pub-card:hover .linkedin-icon {
    color: var(--color-primary);
  }

  .arrow-icon {
    color: var(--text-muted);
    transition: all 0.2s ease;
  }

  .pub-card:hover .arrow-icon {
    color: var(--color-primary);
    transform: translateX(4px);
  }

  .pub-card h4 {
    font-size: var(--text-base);
    color: var(--text-primary);
    font-weight: 500;
    margin: 0;
    line-height: 1.4;
  }

  @media (max-width: 900px) {
    .publications {
      height: auto !important;
      min-height: auto !important;
      max-height: none !important;
      padding: 2rem 1rem;
      overflow: visible;
    }

    .bento-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: auto;
      gap: 0.75rem;
    }

    .featured-card {
      grid-column: span 2;
    }

    .pub-card {
      grid-column: span 2;
    }
  }

  @media (max-width: 600px) {
    .publications {
      height: auto;
      min-height: auto;
      padding: 2rem 1rem;
      overflow: visible;
    }

    .container {
      padding: 0;
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
    }

    .bento-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: auto;
      gap: 0.5rem;
    }

    .bento-card {
      padding: 0.875rem;
      border-radius: 0.875rem;
      transition: transform 0.3s ease;
    }

    .bento-card:active {
      transform: scale(0.98);
    }

    .featured-card {
      grid-column: span 2;
      padding: 1rem;
      border: 1px solid transparent;
      background:
        linear-gradient(var(--glass-bg), var(--glass-bg)) padding-box,
        var(--gradient-primary) border-box;
    }

    .featured-badge {
      padding: 0.25rem 0.6rem;
      font-size: 0.55rem;
    }

    .featured-card h3 {
      font-size: var(--text-sm);
      margin: 0.5rem 0 0.35rem;
      line-height: 1.3;
    }

    .featured-card .description {
      font-size: 0.7rem;
      line-height: 1.4;
    }

    .read-more {
      font-size: 0.7rem;
      margin-top: 0.5rem;
    }

    .stat-card {
      padding: 0.875rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
    }

    .stat-value {
      font-size: var(--text-xl);
      margin-bottom: 0;
    }

    .stat-label {
      font-size: var(--text-xs);
      text-align: center;
    }

    .pub-card {
      grid-column: span 2;
      padding: 1rem;
      gap: 0.5rem;
    }

    .pub-card h4 {
      font-size: var(--text-xs);
      line-height: 1.3;
    }

    .blob-1, .blob-2 {
      display: none;
    }

    .bg-grid {
      opacity: 0.3;
    }
  }
</style>
