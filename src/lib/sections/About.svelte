<script lang="ts">
  import { onMount } from 'svelte';
  import { spiralReveal, setupScrollAnimation, isMobile } from '../utils/animations';

  onMount(() => {
    if (isMobile()) {
      setupScrollAnimation('#about', '#about .bento-card', spiralReveal, { delay: 50, staggerDelay: 60 });
    } else {
      spiralReveal('#about .bento-card', { delay: 100, staggerDelay: 70 });
    }
  });

  const highlights = [
    { value: '6+', label: 'Years Experience' },
    { value: '1000+', label: 'Concurrent Users' },
    { value: '60%', label: 'Workflow Automation' },
    { value: '3x', label: 'Speed Improvement' }
  ];

  const skills = [
    {
      category: 'Frontend',
      icon: '◈',
      items: ['TypeScript', 'React', 'Next.js', 'Svelte']
    },
    {
      category: 'Backend',
      icon: '◉',
      items: ['Node.js', 'NestJS', 'GraphQL', 'Microservices']
    },
    {
      category: 'Database',
      icon: '◎',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch']
    },
    {
      category: 'Cloud',
      icon: '◇',
      items: ['AWS S3', 'Docker', 'CI/CD', 'Kubernetes']
    }
  ];
</script>

<section id="about" class="about">
  <!-- Warm gradient background -->
  <div class="bg-gradient"></div>
  <div class="bg-blob blob-1"></div>
  <div class="bg-blob blob-2"></div>
  <div class="bg-grid"></div>

  <div class="container">
    <h2 class="section-title">About</h2>
    <div class="bento-grid">
      <!-- Main intro card - spans 2 columns -->
      <div class="bento-card intro-card glass">
        <div class="card-content">
          <h3>Senior Software Engineer</h3>
          <p>
            Building scalable systems and solving complex technical challenges.
            From real-time collaboration systems to automated document pipelines,
            I focus on delivering measurable results.
          </p>
          <p class="highlight-text">
            Strong mentoring background — helping developers grow and shipping quality code.
          </p>
        </div>
      </div>

      <!-- Stats cards -->
      {#each highlights as stat, i}
        <div class="bento-card stat-card glass" style="--delay: {i * 0.1}s">
          <span class="stat-value">{stat.value}</span>
          <span class="stat-label">{stat.label}</span>
        </div>
      {/each}

      <!-- Skills cards -->
      {#each skills as skillGroup, i}
        <div class="bento-card skill-card glass" style="--delay: {(i + 4) * 0.1}s">
          <div class="skill-header">
            <span class="skill-icon">{skillGroup.icon}</span>
            <h4>{skillGroup.category}</h4>
          </div>
          <div class="skill-items">
            {#each skillGroup.items as skill}
              <span class="skill-tag">{skill}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .about {
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
    background: radial-gradient(ellipse at 60% 30%, rgba(217, 119, 6, 0.06) 0%, transparent 50%),
                radial-gradient(ellipse at 20% 70%, rgba(184, 92, 56, 0.05) 0%, transparent 50%);
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
    background: var(--color-accent-2);
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
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-title {
    display: none;
  }

  .bento-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(120px, auto);
    gap: 1.25rem;
  }

  .bento-card {
    padding: 1.5rem;
    border-radius: 16px;
    border: 2px solid var(--border-color);
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    overflow: hidden;
  }

  /* Gradient border on hover like landings */
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

  /* Intro card - spans 2 columns, 2 rows */
  .intro-card {
    grid-column: span 2;
    grid-row: span 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 3px solid var(--color-primary);
  }

  .intro-card h3 {
    font-size: var(--text-xl);
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-family: var(--font-display);
    font-weight: 600;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .intro-card p {
    font-size: var(--text-base);
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .highlight-text {
    color: var(--color-primary) !important;
    font-weight: 500;
    -webkit-text-fill-color: var(--color-primary) !important;
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

  /* Skill cards */
  .skill-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .skill-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .skill-icon {
    font-size: var(--text-lg);
    color: var(--color-primary);
  }

  .skill-header h4 {
    font-size: var(--text-base);
    color: var(--text-primary);
    font-family: var(--font-display);
    font-weight: 600;
    margin: 0;
  }

  .skill-items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .skill-tag {
    padding: 0.375rem 0.75rem;
    border-radius: 100px;
    font-size: var(--text-xs);
    color: var(--text-secondary);
    background: var(--bg-subtle);
    border: 1px solid var(--border-color);
    transition: all 0.2s ease;
  }

  .skill-tag:hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
    background: rgba(217, 119, 6, 0.1);
    transform: translateY(-1px);
  }

  @media (max-width: 900px) {
    .about {
      height: auto !important;
      min-height: auto !important;
      max-height: none !important;
      padding: 2rem 1rem;
      overflow: visible;
    }

    .bento-grid {
      display: grid !important;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: auto;
      gap: 0.75rem;
      height: auto !important;
    }

    .bento-card {
      height: auto !important;
      min-height: auto !important;
    }

    .intro-card {
      grid-column: span 2;
    }
  }

  @media (max-width: 600px) {
    .about {
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
      gap: 0.6rem;
    }

    .bento-card {
      border-radius: 12px;
      padding: 0.875rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .bento-card:active {
      transform: scale(0.98);
    }

    .intro-card {
      grid-column: span 2;
      padding: 1.25rem;
      border: 2px solid transparent;
      background:
        linear-gradient(var(--glass-bg), var(--glass-bg)) padding-box,
        var(--gradient-primary) border-box;
    }

    .intro-card h3 {
      font-size: var(--text-base);
      margin-bottom: 0.5rem;
    }

    .intro-card p {
      font-size: var(--text-sm);
      margin-bottom: 0.5rem;
      line-height: 1.5;
    }

    .stat-card {
      padding: 0.875rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      min-height: auto;
    }

    .stat-value {
      font-size: var(--text-xl);
      margin-bottom: 0;
    }

    .stat-label {
      font-size: var(--text-xs);
      text-align: center;
      line-height: 1.2;
    }

    .skill-card {
      padding: 0.625rem;
      gap: 0.35rem;
      min-height: auto;
    }

    .skill-header {
      gap: 0.4rem;
    }

    .skill-header h4 {
      font-size: var(--text-xs);
    }

    .skill-icon {
      font-size: var(--text-sm);
    }

    .skill-items {
      gap: 0.2rem;
    }

    .skill-tag {
      padding: 0.15rem 0.35rem;
      font-size: 0.6rem;
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
