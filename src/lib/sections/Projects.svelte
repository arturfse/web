<script lang="ts">
  import { onMount } from 'svelte';

  let visible = false;
  let hoveredProject: number | null = null;

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
      description: 'AI-powered Telegram bot that turns ideas into vibrant sticker packs. Uses advanced image processing and neural networks.',
      technologies: ['Node.js', 'NestJS', 'Telegram API', 'AI/ML'],
      link: 'https://t.me/stickio_bot',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
      badge: 'Live',
      badgeType: 'live',
      stats: { users: '2K+', rating: '4.9' }
    },
    {
      title: 'UI Collection',
      description: 'Production-ready headless UI components for React. Fully accessible, customizable, and zero-dependency.',
      technologies: ['React', 'TypeScript', 'A11y', 'Storybook'],
      link: 'https://github.com/arslanov-artur/react-headless-ui-collection',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
      badge: 'Open Source',
      badgeType: 'oss',
      stats: { stars: '150+', downloads: '5K+' }
    },
    {
      title: 'Messenger PWA',
      description: 'Real-time messenger with offline support, push notifications, and end-to-end encryption. Works seamlessly offline.',
      technologies: ['PWA', 'WebSockets', 'IndexedDB', 'E2E'],
      link: 'https://github.com/arslanov-artur/messenger-pwa',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
      badge: 'Featured',
      badgeType: 'featured',
      stats: { messages: '1M+', uptime: '99.9%' }
    }
  ];
</script>

<section class="projects" id="projects-section">
  <div class="container">
    <!-- Section Header -->
    <div class="section-header" class:visible>
      <div class="section-badge">Projects</div>
      <h2>things I've built</h2>
      <p>Side projects, open source contributions, and experiments</p>
    </div>

    <!-- Projects Grid -->
    <div class="projects-grid" class:visible>
      {#each projects as project, i}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          class="project-card"
          class:hovered={hoveredProject === i}
          style="--delay: {i * 0.15}s"
          on:mouseenter={() => hoveredProject = i}
          on:mouseleave={() => hoveredProject = null}
        >
          <!-- Scan overlay -->
          <div class="scan-overlay">
            <div class="scan-line"></div>
          </div>

          <!-- Corner accents -->
          <div class="corner-accent top-left"></div>
          <div class="corner-accent bottom-right"></div>

          <!-- Badge -->
          <div class="project-badge {project.badgeType}">{project.badge}</div>

          <!-- Header -->
          <div class="project-header">
            <div class="project-icon">
              {@html project.icon}
            </div>
            <div class="project-title-row">
              <h3>{project.title}</h3>
              <div class="project-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Description -->
          <p class="project-description">{project.description}</p>

          <!-- Tech tags -->
          <div class="tech-row">
            {#each project.technologies as tech}
              <span class="tech-tag">{tech}</span>
            {/each}
          </div>

          <!-- Stats row -->
          <div class="stats-row">
            {#each Object.entries(project.stats) as [key, value]}
              <div class="stat-pill">
                <span class="stat-value">{value}</span>
                <span class="stat-key">{key}</span>
              </div>
            {/each}
          </div>

          <!-- RGB bar on hover -->
          <div class="rgb-bar"></div>
        </a>
      {/each}
    </div>

    <!-- GitHub CTA -->
    <div class="github-cta" class:visible>
      <div class="cta-content">
        <div class="cta-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>
        <div class="cta-text">
          <h4>Explore more on GitHub</h4>
          <p>30+ repositories, contributions, and experiments</p>
        </div>
      </div>
      <a href="https://github.com/arslanov-artur" target="_blank" rel="noopener noreferrer" class="cta-button">
        <span>View Profile</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
</section>

<style>
  .projects {
    padding: 100px 0;
    background: var(--bg-muted);
    position: relative;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Section Header */
  .section-header {
    text-align: center;
    margin-bottom: 50px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .section-header.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .section-badge {
    display: inline-block;
    padding: 10px 20px;
    background: var(--bg-elevated);
    border: 3px solid var(--color-primary);
    border-radius: 100px;
    font-size: var(--text-xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--color-primary);
    margin-bottom: 24px;
    box-shadow: var(--shadow-sm);
  }

  .section-header h2 {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 16px;
    text-transform: lowercase;
  }

  .section-header p {
    font-size: var(--text-base);
    color: var(--text-muted);
    max-width: 450px;
    margin: 0 auto;
  }

  /* Projects Grid */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 50px;
    opacity: 0;
    transition: opacity 0.6s ease 0.2s;
  }

  .projects-grid.visible {
    opacity: 1;
  }

  .projects-grid.visible .project-card {
    opacity: 1;
    transform: translateY(0);
  }

  /* Project Card */
  .project-card {
    background: var(--bg-elevated);
    border: 3px solid var(--border-color);
    border-radius: 20px;
    padding: 28px;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: var(--delay);
  }

  .project-card:hover {
    transform: translate(3px, 3px);
    box-shadow: 3px 3px 0 var(--color-primary);
    border-color: var(--color-primary);
  }

  /* Scan overlay */
  .scan-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    overflow: hidden;
  }

  .project-card:hover .scan-overlay {
    opacity: 1;
  }

  .scan-line {
    position: absolute;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(
      180deg,
      transparent,
      rgba(217, 119, 6, 0.1),
      transparent
    );
    animation: scan-down 2s linear infinite;
    transform: translateY(-100%);
  }

  @keyframes scan-down {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(400%); }
  }

  /* Corner accents */
  .corner-accent {
    position: absolute;
    width: 40px;
    height: 40px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card:hover .corner-accent {
    opacity: 1;
  }

  .corner-accent.top-left {
    top: 0;
    left: 0;
    background: linear-gradient(135deg, var(--color-primary) 0%, transparent 60%);
    border-radius: 20px 0 0 0;
  }

  .corner-accent.bottom-right {
    bottom: 0;
    right: 0;
    background: linear-gradient(-45deg, var(--color-accent-2) 0%, transparent 60%);
    border-radius: 0 0 20px 0;
  }

  /* Badge */
  .project-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 6px 12px;
    border-radius: 100px;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .project-badge.live {
    background: linear-gradient(135deg, #22c55e, #16a34a);
    color: white;
  }

  .project-badge.oss {
    background: var(--gradient-primary);
    color: white;
  }

  .project-badge.featured {
    background: linear-gradient(135deg, #8b5cf6, #6366f1);
    color: white;
  }

  /* Header */
  .project-header {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 16px;
  }

  .project-icon {
    width: 52px;
    height: 52px;
    background: var(--bg-subtle);
    border: 2px solid var(--border-color);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    flex-shrink: 0;
    transition: all 0.4s ease;
  }

  .project-card:hover .project-icon {
    background: var(--gradient-primary);
    color: white;
    border-color: var(--color-primary);
    transform: rotate(-5deg) scale(1.05);
  }

  .project-title-row {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .project-title-row h3 {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
  }

  .project-arrow {
    color: var(--text-muted);
    transition: all 0.3s ease;
  }

  .project-card:hover .project-arrow {
    color: var(--color-primary);
    transform: translate(3px, -3px);
  }

  /* Description */
  .project-description {
    font-size: var(--text-sm);
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 16px;
    flex: 1;
  }

  /* Tech row */
  .tech-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
  }

  .tech-tag {
    padding: 5px 12px;
    background: var(--bg-subtle);
    border: 2px solid var(--border-color);
    border-radius: 100px;
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--text-secondary);
    transition: all 0.3s ease;
  }

  .project-card:hover .tech-tag {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  /* Stats row */
  .stats-row {
    display: flex;
    gap: 10px;
  }

  .stat-pill {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    background: var(--bg-subtle);
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  .project-card:hover .stat-pill {
    background: var(--bg-overlay);
  }

  .stat-value {
    font-family: var(--font-display);
    font-size: var(--text-sm);
    font-weight: 700;
    color: var(--color-primary);
  }

  .stat-key {
    font-size: 0.65rem;
    color: var(--text-muted);
    text-transform: capitalize;
  }

  /* RGB bar */
  .rgb-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-accent-1), var(--color-secondary));
    background-size: 200% 100%;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  .project-card:hover .rgb-bar {
    transform: scaleX(1);
    animation: rgb-shift 2s linear infinite;
  }

  @keyframes rgb-shift {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  /* GitHub CTA */
  .github-cta {
    background: var(--bg-elevated);
    border: 3px solid var(--border-color);
    border-radius: 20px;
    padding: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.4s;
  }

  .github-cta.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .github-cta:hover {
    border-color: var(--color-primary);
  }

  .cta-content {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .cta-icon {
    width: 60px;
    height: 60px;
    background: var(--bg-subtle);
    border: 2px solid var(--border-color);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-primary);
    transition: all 0.3s ease;
  }

  .github-cta:hover .cta-icon {
    background: var(--gradient-primary);
    color: white;
    border-color: var(--color-primary);
  }

  .cta-text h4 {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 4px 0;
  }

  .cta-text p {
    font-size: var(--text-sm);
    color: var(--text-muted);
    margin: 0;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 24px;
    background: var(--gradient-primary);
    color: white;
    border-radius: 12px;
    font-size: var(--text-sm);
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  .cta-button:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 var(--color-primary-dark);
  }

  .cta-button svg {
    transition: transform 0.3s ease;
  }

  .cta-button:hover svg {
    transform: translateX(4px);
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .projects {
      padding: 70px 0;
    }

    .container {
      padding: 0 1.5rem;
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
      margin-bottom: 30px;
    }

    .project-card {
      padding: 20px;
    }

    .project-icon {
      width: 46px;
      height: 46px;
    }

    .project-title-row h3 {
      font-size: var(--text-base);
    }

    .tech-row {
      gap: 6px;
    }

    .tech-tag {
      padding: 4px 10px;
      font-size: 0.65rem;
    }

    .stats-row {
      gap: 8px;
    }

    .stat-pill {
      padding: 6px 10px;
    }

    .github-cta {
      flex-direction: column;
      text-align: center;
      padding: 24px;
    }

    .cta-content {
      flex-direction: column;
    }

    .cta-button {
      width: 100%;
      justify-content: center;
    }
  }
</style>
