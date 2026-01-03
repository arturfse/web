<script lang="ts">
  import { onMount } from 'svelte';
  import { cascadeReveal, setupScrollAnimation, isMobile } from '../utils/animations';

  onMount(() => {
    if (isMobile()) {
      setupScrollAnimation('#projects', '#projects .bento-card', cascadeReveal, { delay: 50, staggerDelay: 80 });
    } else {
      cascadeReveal('#projects .bento-card', { delay: 100, staggerDelay: 90 });
    }
  });

  const projects = [
    {
      title: 'StickIO Bot',
      description: 'AI-powered Telegram bot that turns ideas into vibrant sticker packs',
      technologies: ['Node.js', 'NestJS', 'Telegram API'],
      link: 'https://t.me/stickio_bot',
      type: 'telegram',
      featured: true
    },
    {
      title: 'UI Collection',
      description: 'Production-ready headless UI components for React',
      technologies: ['React', 'TypeScript', 'A11y'],
      link: 'https://github.com/arslanov-artur/react-headless-ui-collection'
    },
    {
      title: 'Messenger PWA',
      description: 'Real-time messenger with offline support',
      technologies: ['PWA', 'WebSockets'],
      link: 'https://github.com/arslanov-artur/messenger-pwa'
    }
  ];

  const projectStats = [
    { value: '3', label: 'Open Source' },
    { value: '∞', label: 'Ideas in Mind' }
  ];
</script>

<section id="projects" class="projects">
  <!-- Warm background -->
  <div class="bg-gradient"></div>
  <div class="bg-blob blob-1"></div>
  <div class="bg-blob blob-2"></div>
  <div class="bg-grid"></div>

  <div class="container">
    <h2 class="section-title">Projects</h2>
    <div class="bento-grid">
      <!-- Featured project -->
      <a href={projects[0].link} target="_blank" rel="noopener noreferrer" class="bento-card featured-card glass">
        <div class="featured-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          Telegram Bot
        </div>
        <div class="card-content">
          <h3>{projects[0].title}</h3>
          <p class="description">{projects[0].description}</p>
        </div>
        <div class="tech-stack">
          {#each projects[0].technologies as tech}
            <span class="tech-tag">{tech}</span>
          {/each}
        </div>
      </a>

      <!-- Stats -->
      {#each projectStats as stat}
        <div class="bento-card stat-card glass">
          <span class="stat-value">{stat.value}</span>
          <span class="stat-label">{stat.label}</span>
        </div>
      {/each}

      <!-- Other projects -->
      {#each projects.slice(1) as project}
        <a href={project.link} target="_blank" rel="noopener noreferrer" class="bento-card project-card glass">
          <div class="card-header">
            <h4>{project.title}</h4>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </div>
          <p class="description">{project.description}</p>
          <div class="tech-stack">
            {#each project.technologies as tech}
              <span class="tech-tag">{tech}</span>
            {/each}
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .projects {
    background-color: var(--bg-base);
    height: 100vh;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }

  /* Background elements - warm tones */
  .bg-gradient {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 20% 30%, rgba(234, 88, 12, 0.06) 0%, transparent 50%),
                radial-gradient(ellipse at 70% 70%, rgba(217, 119, 6, 0.05) 0%, transparent 50%);
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
    left: -5%;
    width: 35vw;
    height: 35vw;
    background: var(--color-accent-1);
  }

  .blob-2 {
    bottom: -15%;
    right: -10%;
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
      linear-gradient(rgba(217, 119, 6, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(217, 119, 6, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  :global([data-theme="light"]) .bg-grid {
    background-image:
      linear-gradient(rgba(180, 83, 9, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(180, 83, 9, 0.05) 1px, transparent 1px);
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 1000px;
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
    border-radius: 16px;
    border: 2px solid var(--border-color);
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
  }

  /* Gradient border on hover */
  .bento-card::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 18px;
    background: var(--gradient-border);
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }

  .bento-card:hover::before {
    opacity: 0.6;
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
    border-top: 3px solid var(--color-primary);
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
    border-radius: 100px;
    width: fit-content;
  }

  .featured-card h3 {
    font-size: var(--text-2xl);
    font-family: var(--font-display);
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 1rem 0 0.75rem;
  }

  .featured-card .description {
    font-size: var(--text-base);
    color: var(--text-secondary);
    line-height: 1.6;
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
    font-family: var(--font-display);
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

  /* Project cards */
  .project-card {
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

  .project-card h4 {
    font-size: var(--text-lg);
    font-family: var(--font-display);
    color: var(--text-primary);
    font-weight: 600;
    margin: 0;
  }

  .icon {
    color: var(--text-muted);
    transition: color 0.2s ease;
  }

  .project-card:hover .icon {
    color: var(--color-primary);
  }

  .description {
    font-size: var(--text-sm);
    color: var(--text-muted);
    line-height: 1.5;
    margin: 0;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto;
  }

  .tech-tag {
    padding: 0.25rem 0.625rem;
    border-radius: 100px;
    font-size: var(--text-xs);
    color: var(--text-secondary);
    background: var(--bg-subtle);
    border: 1px solid var(--border-color);
    transition: all 0.2s ease;
  }

  .bento-card:hover .tech-tag {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  @media (max-width: 900px) {
    .projects {
      height: auto !important;
      min-height: auto !important;
      max-height: none !important;
      padding: 2rem 1rem;
      overflow: visible;
    }

    .bento-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .featured-card, .project-card {
      width: 100%;
    }

    .stat-card {
      width: calc(50% - 0.25rem);
    }
  }

  @media (max-width: 600px) {
    .projects {
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
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .bento-card {
      padding: 0.875rem;
      border-radius: 12px;
      transition: transform 0.3s ease;
    }

    .featured-card, .project-card {
      width: 100%;
    }

    .stat-card {
      width: calc(50% - 0.25rem);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0.875rem;
    }

    .bento-card:active {
      transform: scale(0.98);
    }

    .featured-card {
      width: 100%;
      padding: 1rem;
      border: 2px solid transparent;
      background:
        linear-gradient(var(--glass-bg), var(--glass-bg)) padding-box,
        var(--gradient-primary) border-box;
    }

    .featured-badge {
      padding: 0.25rem 0.6rem;
      font-size: 0.55rem;
    }

    .featured-card h3 {
      font-size: var(--text-base);
      margin: 0.5rem 0 0.35rem;
    }

    .featured-card .description {
      font-size: var(--text-xs);
      line-height: 1.4;
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

    .project-card {
      width: 100%;
      padding: 1rem;
      gap: 0.5rem;
    }

    .project-card h4 {
      font-size: var(--text-sm);
    }

    .description {
      font-size: 0.7rem;
      line-height: 1.4;
    }

    .tech-tag {
      font-size: 0.55rem;
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
    }

    .blob-1, .blob-2 {
      display: none;
    }

    .bg-grid {
      opacity: 0.3;
    }
  }
</style>
