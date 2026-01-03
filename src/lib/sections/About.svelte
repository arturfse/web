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

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });

  const features = [
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
      title: 'Full-Stack Development',
      description: 'End-to-end solutions from React frontends to Node.js backends with PostgreSQL databases.'
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
      title: 'Performance Optimization',
      description: 'Achieving 3x speed improvements through caching, lazy loading, and efficient algorithms.'
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      title: 'Team Leadership',
      description: 'Mentoring developers, conducting code reviews, and building collaborative engineering culture.'
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>`,
      title: 'System Architecture',
      description: 'Designing scalable microservices handling 1000+ concurrent users with 99% uptime.'
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
      title: 'Workflow Automation',
      description: 'Reducing manual work by 60% through CI/CD pipelines and automated testing systems.'
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
      title: 'Cloud Infrastructure',
      description: 'AWS, Docker, and Kubernetes deployments with infrastructure as code practices.'
    }
  ];

  const techStack = [
    { name: 'TypeScript', category: 'Language' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Docker', category: 'DevOps' }
  ];
</script>

<section class="about" id="about-section">
  <div class="container">
    <!-- Section Header -->
    <div class="section-header" class:visible>
      <span class="section-badge">About Me</span>
      <h2>what I bring to the table</h2>
      <p>6+ years of building scalable systems and leading engineering teams</p>
    </div>

    <!-- Features Grid -->
    <div class="features-grid" class:visible>
      {#each features as feature, i}
        <div class="feature-card" style="--delay: {i * 0.1}s">
          <div class="feature-icon">
            {@html feature.icon}
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      {/each}
    </div>

    <!-- Tech Stack -->
    <div class="tech-section" class:visible>
      <h3 class="tech-title">Core Technologies</h3>
      <div class="tech-grid">
        {#each techStack as tech, i}
          <div class="tech-card" style="--delay: {i * 0.05}s">
            <span class="tech-name">{tech.name}</span>
            <span class="tech-category">{tech.category}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    padding: 100px 0;
    background: var(--bg-base);
    position: relative;
    overflow: hidden;
  }

  /* Subtle background */
  .about::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 60% 20%, rgba(217, 119, 6, 0.05) 0%, transparent 50%),
      radial-gradient(ellipse at 20% 80%, rgba(184, 92, 56, 0.04) 0%, transparent 50%);
    pointer-events: none;
  }

  .container {
    max-width: 1200px;
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

  /* Features Grid */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
    margin-bottom: 60px;
  }

  .features-grid.visible .feature-card {
    opacity: 1;
    transform: translateY(0);
  }

  .feature-card {
    background: var(--glass-bg);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 28px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
    transition-delay: var(--delay);
  }

  .feature-card::before {
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

  .feature-card:hover::before {
    transform: scaleX(1);
  }

  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg), var(--glow-primary);
    border-color: var(--color-primary);
  }

  .feature-icon {
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

  .feature-card:hover .feature-icon {
    background: var(--gradient-primary);
    color: white;
    transform: translateY(-4px) rotate(-3deg);
    box-shadow: 0 8px 20px rgba(217, 119, 6, 0.3);
  }

  .feature-card h3 {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 10px;
  }

  .feature-card p {
    font-size: var(--text-sm);
    color: var(--text-muted);
    line-height: 1.6;
  }

  /* Tech Section */
  .tech-section {
    text-align: center;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease 0.3s;
  }

  .tech-section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .tech-title {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 24px;
  }

  .tech-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }

  .tech-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 16px 24px;
    background: var(--glass-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
  }

  .tech-section.visible .tech-card {
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--delay);
  }

  .tech-card:hover {
    border-color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(217, 119, 6, 0.2);
  }

  .tech-name {
    font-family: var(--font-display);
    font-weight: 600;
    color: var(--text-primary);
    font-size: var(--text-base);
  }

  .tech-category {
    font-size: var(--text-xs);
    color: var(--color-primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Mobile */
  @media (max-width: 768px) {
    .about {
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

    .features-grid {
      grid-template-columns: 1fr;
      gap: 16px;
      margin-bottom: 40px;
    }

    .feature-card {
      padding: 20px;
    }

    .feature-icon {
      width: 48px;
      height: 48px;
      margin-bottom: 14px;
    }

    .tech-grid {
      gap: 8px;
    }

    .tech-card {
      padding: 12px 16px;
    }
  }
</style>
