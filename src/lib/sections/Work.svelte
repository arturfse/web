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
      number: '01',
      company: 'SalaryGuide',
      role: 'Senior Software Engineer',
      period: 'Current',
      description: 'Transparent salary data for paid media and SEO professionals. Leading frontend architecture and performance optimization.',
      highlights: ['React', 'TypeScript', 'Next.js'],
      isCurrent: true
    },
    {
      number: '02',
      company: 'Juro',
      role: 'Senior Software Engineer',
      period: '2023 - 2025',
      description: 'LegalTech contract automation platform. Processed 8000+ contracts monthly with complex workflow systems.',
      highlights: ['8000+ contracts/mo', 'Team Lead', 'System Design']
    },
    {
      number: '03',
      company: 'Ancor',
      role: 'Software Engineer',
      period: '2019 - 2023',
      description: 'Enterprise staffing platform for HR professionals. Built scalable solutions serving 1000+ concurrent users.',
      highlights: ['1000+ users', 'Full-Stack', 'PostgreSQL']
    }
  ];

  const stats = [
    { value: '6+', label: 'Years' },
    { value: '50+', label: 'Projects' },
    { value: '2', label: 'Mentored' },
    { value: '99%', label: 'Uptime' }
  ];
</script>

<section class="work" id="work-section">
  <div class="container">
    <!-- Section Header -->
    <div class="section-header" class:visible>
      <div class="section-badge">Experience</div>
      <h2>where I've worked</h2>
      <p>Building scalable products and leading engineering teams</p>
    </div>

    <!-- Stats Bar - like landing stats -->
    <div class="stats-bar" class:visible>
      {#each stats as stat, i}
        <div class="stat-item" style="--delay: {i * 0.1}s">
          <span class="stat-value">{stat.value}</span>
          <span class="stat-label">{stat.label}</span>
        </div>
      {/each}
    </div>

    <!-- Step Cards - like "how it works" -->
    <div class="steps-container" class:visible>
      {#each experiences as exp, i}
        <div class="step-card" style="--delay: {i * 0.15}s">
          <div class="step-number">{exp.number}</div>
          <div class="step-header">
            <h3>{exp.company}</h3>
            <span class="step-period" class:current={exp.isCurrent}>
              {#if exp.isCurrent}
                <span class="current-dot"></span>
              {/if}
              {exp.period}
            </span>
          </div>
          <span class="step-role">{exp.role}</span>
          <p>{exp.description}</p>
          <div class="step-tags">
            {#each exp.highlights as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
          {#if i < experiences.length - 1}
            <div class="step-connector">
              <span class="connector-line"></span>
              <span class="connector-arrow">→</span>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .work {
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

  /* Stats Bar - horizontal inline like landings */
  .stats-bar {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 50px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.2s;
    flex-wrap: wrap;
  }

  .stats-bar.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .stats-bar.visible .stat-item {
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--delay);
  }

  .stat-item {
    text-align: center;
    padding: 16px 24px;
    background: var(--bg-elevated);
    border: 3px solid var(--border-color);
    border-radius: 16px;
    box-shadow: var(--shadow-sm);
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .stat-item:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 var(--color-primary);
    border-color: var(--color-primary);
  }

  .stat-value {
    font-family: var(--font-display);
    font-size: var(--text-xl);
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
    font-weight: 600;
  }

  /* Steps Container - flow style */
  .steps-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    opacity: 0;
    transition: opacity 0.6s ease 0.3s;
  }

  .steps-container.visible {
    opacity: 1;
  }

  .steps-container.visible .step-card {
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--delay);
  }

  .step-card {
    background: var(--bg-elevated);
    border: 3px solid var(--border-color);
    border-radius: 20px;
    padding: 28px;
    position: relative;
    box-shadow: var(--shadow-md);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .step-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
    border-radius: 20px 20px 0 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  .step-card:hover::before {
    transform: scaleX(1);
  }

  .step-card:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 var(--color-primary);
    border-color: var(--color-primary);
  }

  .step-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: var(--gradient-primary);
    color: white;
    font-family: var(--font-display);
    font-size: var(--text-base);
    font-weight: 700;
    border-radius: 12px;
    margin-bottom: 20px;
    box-shadow: var(--shadow-sm);
    transition: all 0.4s ease;
  }

  .step-card:hover .step-number {
    transform: rotate(-5deg);
  }

  .step-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 8px;
  }

  .step-card h3 {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
  }

  .step-period {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--text-muted);
    background: var(--bg-subtle);
    padding: 5px 10px;
    border-radius: 100px;
    border: 2px solid var(--border-color);
    white-space: nowrap;
  }

  .step-period.current {
    border-color: var(--color-accent-2);
    color: var(--color-accent-2);
    background: rgba(52, 211, 153, 0.1);
  }

  .current-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--color-accent-2);
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
  }

  .step-role {
    display: inline-block;
    font-size: var(--text-sm);
    color: var(--color-primary);
    font-weight: 600;
    margin-bottom: 12px;
  }

  .step-card p {
    font-size: var(--text-sm);
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .step-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .tag {
    padding: 5px 12px;
    background: var(--bg-subtle);
    border: 2px solid var(--border-color);
    border-radius: 100px;
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--text-secondary);
    transition: all 0.3s ease;
  }

  .step-card:hover .tag {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  /* Step connector arrow */
  .step-connector {
    position: absolute;
    right: -22px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    display: none;
  }

  .connector-line {
    display: block;
    width: 20px;
    height: 2px;
    background: var(--border-color);
  }

  .connector-arrow {
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    color: var(--color-primary);
    font-weight: 700;
  }

  @media (min-width: 769px) {
    .step-connector {
      display: block;
    }
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .stats-bar {
      flex-wrap: wrap;
    }

    .steps-container {
      grid-template-columns: 1fr;
    }

    .step-connector {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .work {
      padding: 70px 0;
    }

    .container {
      padding: 0 1.5rem;
    }

    .section-header {
      margin-bottom: 30px;
    }

    .section-header h2 {
      font-size: 1.75rem;
    }

    .stats-bar {
      gap: 10px;
      margin-bottom: 30px;
    }

    .stat-item {
      padding: 12px 16px;
    }

    .stat-value {
      font-size: var(--text-lg);
    }

    .step-card {
      padding: 20px;
    }

    .step-number {
      width: 40px;
      height: 40px;
      font-size: var(--text-sm);
      margin-bottom: 16px;
    }

    .step-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
    }

    .step-card h3 {
      font-size: var(--text-base);
    }

    .step-tags {
      gap: 5px;
    }

    .tag {
      padding: 4px 8px;
      font-size: 0.65rem;
    }
  }
</style>
