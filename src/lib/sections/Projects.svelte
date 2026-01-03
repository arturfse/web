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

    const section = document.getElementById('projects-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });

  const projects = [
    {
      title: 'StickIO Bot',
      description: 'AI-powered Telegram bot that turns ideas into vibrant sticker packs. Generates custom stickers from text prompts using advanced image generation.',
      technologies: ['Node.js', 'NestJS', 'Telegram API', 'AI'],
      link: 'https://t.me/stickio_bot',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
      featured: true,
      badge: 'Telegram Bot'
    },
    {
      title: 'UI Collection',
      description: 'Production-ready headless UI components for React. Focus on accessibility and flexibility.',
      technologies: ['React', 'TypeScript', 'A11y'],
      link: 'https://github.com/arslanov-artur/react-headless-ui-collection',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`
    },
    {
      title: 'Messenger PWA',
      description: 'Real-time messenger with offline support. WebSocket-based communication with PWA capabilities.',
      technologies: ['PWA', 'WebSockets', 'IndexedDB'],
      link: 'https://github.com/arslanov-artur/messenger-pwa',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
    }
  ];
</script>

<section class="projects" id="projects-section">
  <div class="container">
    <!-- Section Header -->
    <div class="section-header" class:visible>
      <span class="section-badge">Projects</span>
      <h2>things I've built</h2>
      <p>Side projects and open source contributions</p>
    </div>

    <!-- Projects Grid -->
    <div class="projects-grid" class:visible>
      {#each projects as project, i}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          class="project-card"
          class:featured={project.featured}
          style="--delay: {i * 0.1}s"
        >
          {#if project.badge}
            <div class="project-badge">
              {@html project.icon}
              {project.badge}
            </div>
          {/if}
          <div class="project-icon">
            {@html project.icon}
          </div>
          <h3>{project.title}</h3>
          <p class="project-description">{project.description}</p>
          <div class="tech-stack">
            {#each project.technologies as tech}
              <span class="tech-tag">{tech}</span>
            {/each}
          </div>
          <div class="project-link">
            <span>View Project</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7"/>
              <path d="M7 7h10v10"/>
            </svg>
          </div>
        </a>
      {/each}
    </div>

    <!-- Open Source Note -->
    <div class="oss-note" class:visible>
      <p>More projects on <a href="https://github.com/arslanov-artur" target="_blank" rel="noopener noreferrer">GitHub</a></p>
    </div>
  </div>
</section>

<style>
  .projects {
    padding: 100px 0;
    background: var(--bg-base);
    position: relative;
    overflow: hidden;
  }

  .projects::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 30%, rgba(234, 88, 12, 0.05) 0%, transparent 50%),
      radial-gradient(ellipse at 70% 70%, rgba(217, 119, 6, 0.04) 0%, transparent 50%);
    pointer-events: none;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }

  /* Section Header */
  .section-header {
    text-align: center;
    margin-bottom: 60px;
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
    border: 1px solid var(--border-color);
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

  /* Projects Grid */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
    margin-bottom: 40px;
  }

  .projects-grid.visible .project-card {
    opacity: 1;
    transform: translateY(0);
  }

  .project-card {
    background: var(--glass-bg);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 28px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
    transition-delay: var(--delay);
  }

  .project-card::before {
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

  .project-card:hover::before {
    transform: scaleX(1);
  }

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg), var(--glow-primary);
    border-color: var(--color-primary);
  }

  .project-card.featured {
    grid-column: span 2;
  }

  .project-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    background: var(--gradient-primary);
    color: white;
    font-size: var(--text-xs);
    font-weight: 600;
    border-radius: 100px;
    width: fit-content;
    margin-bottom: 16px;
  }

  .project-badge svg {
    width: 14px;
    height: 14px;
  }

  .project-icon {
    width: 56px;
    height: 56px;
    background: var(--bg-subtle);
    border: 1px solid var(--border-color);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
    transition: all 0.3s ease;
    color: var(--color-primary);
  }

  .project-card.featured .project-icon {
    display: none;
  }

  .project-card:hover .project-icon {
    background: var(--gradient-primary);
    color: white;
    transform: translateY(-4px) rotate(-3deg);
    box-shadow: 0 8px 20px rgba(217, 119, 6, 0.3);
  }

  .project-card h3 {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 10px;
  }

  .project-card.featured h3 {
    font-size: var(--text-2xl);
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .project-description {
    font-size: var(--text-sm);
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 16px;
    flex: 1;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
  }

  .tech-tag {
    padding: 4px 10px;
    border-radius: 100px;
    font-size: var(--text-xs);
    color: var(--text-secondary);
    background: var(--bg-subtle);
    border: 1px solid var(--border-color);
    transition: all 0.2s ease;
  }

  .project-card:hover .tech-tag {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  .project-link {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-muted);
    margin-top: auto;
    transition: all 0.2s ease;
  }

  .project-link svg {
    transition: transform 0.2s ease;
  }

  .project-card:hover .project-link {
    color: var(--color-primary);
  }

  .project-card:hover .project-link svg {
    transform: translate(2px, -2px);
  }

  /* OSS Note */
  .oss-note {
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.4s;
  }

  .oss-note.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .oss-note p {
    font-size: var(--text-base);
    color: var(--text-muted);
  }

  .oss-note a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 500;
    position: relative;
  }

  .oss-note a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--color-primary);
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  .oss-note a:hover::after {
    transform: scaleX(1);
  }

  /* Mobile */
  @media (max-width: 768px) {
    .projects {
      padding: 60px 0;
    }

    .container {
      padding: 0 1.25rem;
    }

    .section-header {
      margin-bottom: 40px;
    }

    .section-header h2 {
      font-size: 1.75rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .project-card {
      padding: 20px;
    }

    .project-card.featured {
      grid-column: span 1;
    }

    .project-icon {
      width: 48px;
      height: 48px;
      margin-bottom: 14px;
    }

    .project-card h3 {
      font-size: var(--text-lg);
    }

    .project-card.featured h3 {
      font-size: var(--text-xl);
    }

    .project-description {
      font-size: var(--text-xs);
    }

    .tech-stack {
      gap: 6px;
    }

    .tech-tag {
      font-size: 0.65rem;
      padding: 3px 8px;
    }
  }
</style>
