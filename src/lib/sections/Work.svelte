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

    const section = document.getElementById('work-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });

  const experiences = [
    {
      company: 'SalaryGuide',
      role: 'Senior Software Engineer',
      period: 'Current',
      description: 'Transparent salary data for paid media and SEO professionals. Leading frontend architecture and performance optimization.',
      highlights: ['React', 'TypeScript', 'Next.js'],
      isCurrent: true
    },
    {
      company: 'Juro',
      role: 'Senior Software Engineer',
      period: '2023 - 2025',
      description: 'LegalTech contract automation platform. Processed 8000+ contracts monthly with complex workflow systems.',
      highlights: ['8000+ contracts/mo', 'Team Lead', 'System Design']
    },
    {
      company: 'Ancor',
      role: 'Software Engineer',
      period: '2019 - 2023',
      description: 'Enterprise staffing platform for HR professionals. Built scalable solutions serving 1000+ concurrent users.',
      highlights: ['1000+ users', 'Full-Stack', 'PostgreSQL']
    }
  ];

  const skills = [
    'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'GraphQL', 'Docker'
  ];

  const stats = [
    { value: '6+', label: 'Years Experience' },
    { value: '2', label: 'Devs Mentored' },
    { value: '99%', label: 'Uptime Achieved' }
  ];
</script>

<section class="work" id="work-section">
  <div class="container">
    <!-- Section Header -->
    <div class="section-header" class:visible>
      <span class="section-badge">Experience</span>
      <h2>where I've worked</h2>
      <p>Building scalable products and leading engineering teams</p>
    </div>

    <!-- Stats Row -->
    <div class="stats-row" class:visible>
      {#each stats as stat, i}
        <div class="stat-item" style="--delay: {i * 0.1}s">
          <span class="stat-value">{stat.value}</span>
          <span class="stat-label">{stat.label}</span>
        </div>
      {/each}
    </div>

    <!-- Timeline -->
    <div class="timeline" class:visible>
      {#each experiences as exp, i}
        <div class="timeline-item" style="--delay: {i * 0.15}s">
          <div class="timeline-marker">
            {#if exp.isCurrent}
              <span class="pulse"></span>
            {/if}
            <span class="dot"></span>
          </div>
          <div class="timeline-card">
            <div class="card-header">
              <div class="company-info">
                <h3>{exp.company}</h3>
                <span class="role">{exp.role}</span>
              </div>
              <span class="period" class:current={exp.isCurrent}>
                {#if exp.isCurrent}
                  <span class="current-dot"></span>
                {/if}
                {exp.period}
              </span>
            </div>
            <p class="description">{exp.description}</p>
            <div class="highlights">
              {#each exp.highlights as highlight}
                <span class="highlight-tag">{highlight}</span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Skills -->
    <div class="skills-section" class:visible>
      <h3 class="skills-title">Tech Stack</h3>
      <div class="skills-grid">
        {#each skills as skill, i}
          <span class="skill-tag" style="--delay: {i * 0.05}s">{skill}</span>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .work {
    padding: 100px 0;
    background: var(--bg-base);
    position: relative;
    overflow: hidden;
  }

  .work::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 80% 40%, rgba(217, 119, 6, 0.05) 0%, transparent 50%),
      radial-gradient(ellipse at 10% 60%, rgba(184, 92, 56, 0.04) 0%, transparent 50%);
    pointer-events: none;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }

  /* Section Header */
  .section-header {
    text-align: center;
    margin-bottom: 50px;
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

  /* Stats Row */
  .stats-row {
    display: flex;
    justify-content: center;
    gap: 48px;
    margin-bottom: 60px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.2s;
  }

  .stats-row.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .stats-row.visible .stat-item {
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--delay);
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease;
  }

  .stat-value {
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-label {
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Timeline */
  .timeline {
    position: relative;
    margin-bottom: 60px;
    opacity: 0;
    transition: opacity 0.6s ease 0.3s;
  }

  .timeline.visible {
    opacity: 1;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--border-color);
  }

  .timeline-item {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
    opacity: 0;
    transform: translateX(-20px);
    transition: all 0.6s ease;
  }

  .timeline.visible .timeline-item {
    opacity: 1;
    transform: translateX(0);
    transition-delay: var(--delay);
  }

  .timeline-marker {
    position: relative;
    width: 40px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    padding-top: 24px;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--gradient-primary);
    position: relative;
    z-index: 1;
  }

  .pulse {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--color-primary);
    opacity: 0.3;
    animation: pulse 2s ease-in-out infinite;
    top: 18px;
    left: 50%;
    transform: translateX(-50%);
  }

  @keyframes pulse {
    0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.3; }
    50% { transform: translateX(-50%) scale(1.5); opacity: 0; }
  }

  .timeline-card {
    flex: 1;
    background: var(--glass-bg);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 24px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .timeline-card::before {
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

  .timeline-card:hover::before {
    transform: scaleX(1);
  }

  .timeline-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg), var(--glow-primary);
    border-color: var(--color-primary);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
    gap: 16px;
  }

  .company-info h3 {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 4px;
  }

  .role {
    font-size: var(--text-sm);
    color: var(--color-primary);
    font-weight: 500;
  }

  .period {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: var(--text-sm);
    color: var(--text-muted);
    background: var(--bg-subtle);
    padding: 6px 12px;
    border-radius: 100px;
    border: 1px solid var(--border-color);
    white-space: nowrap;
  }

  .period.current {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  .current-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #22c55e;
    animation: blink 1.5s ease-in-out infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .description {
    font-size: var(--text-sm);
    color: var(--text-muted);
    line-height: 1.6;
    margin: 0 0 16px;
  }

  .highlights {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .highlight-tag {
    font-size: var(--text-xs);
    color: var(--text-secondary);
    background: var(--bg-subtle);
    padding: 4px 10px;
    border-radius: 100px;
    border: 1px solid var(--border-color);
    transition: all 0.2s ease;
  }

  .timeline-card:hover .highlight-tag {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  /* Skills Section */
  .skills-section {
    text-align: center;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease 0.4s;
  }

  .skills-section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .skills-title {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 20px;
  }

  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  .skill-tag {
    padding: 10px 20px;
    background: var(--glass-bg);
    border: 1px solid var(--border-color);
    border-radius: 100px;
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-primary);
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(15px);
  }

  .skills-section.visible .skill-tag {
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--delay);
  }

  .skill-tag:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(217, 119, 6, 0.2);
  }

  /* Mobile */
  @media (max-width: 768px) {
    .work {
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

    .stats-row {
      gap: 24px;
      margin-bottom: 40px;
    }

    .stat-value {
      font-size: var(--text-xl);
    }

    .timeline::before {
      left: 12px;
    }

    .timeline-marker {
      width: 24px;
      padding-top: 20px;
    }

    .dot {
      width: 10px;
      height: 10px;
    }

    .pulse {
      width: 20px;
      height: 20px;
      top: 15px;
    }

    .timeline-item {
      gap: 16px;
      margin-bottom: 16px;
    }

    .timeline-card {
      padding: 16px;
    }

    .card-header {
      flex-direction: column;
      gap: 8px;
    }

    .company-info h3 {
      font-size: var(--text-lg);
    }

    .period {
      font-size: var(--text-xs);
      padding: 4px 10px;
    }

    .description {
      font-size: var(--text-xs);
    }

    .highlights {
      gap: 6px;
    }

    .highlight-tag {
      font-size: 0.65rem;
      padding: 3px 8px;
    }

    .skills-grid {
      gap: 8px;
    }

    .skill-tag {
      padding: 8px 14px;
      font-size: var(--text-xs);
    }
  }
</style>
