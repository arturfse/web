<script lang="ts">
  import { onMount } from 'svelte';

  let visible = false;
  let scanActive = false;
  let scanProgress = 0;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          visible = true;
          // Start fingerprint scan after visible
          setTimeout(() => {
            scanActive = true;
            const interval = setInterval(() => {
              if (scanProgress < 100) {
                scanProgress += 1;
              } else {
                clearInterval(interval);
              }
            }, 40);
          }, 800);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });

  const skills = [
    { name: 'React', level: 95, color: '#61DAFB' },
    { name: 'TypeScript', level: 90, color: '#3178C6' },
    { name: 'Node.js', level: 88, color: '#339933' },
    { name: 'PostgreSQL', level: 85, color: '#336791' },
  ];

  const metrics = [
    { icon: '⚡', value: '< 100ms', label: 'Response Time' },
    { icon: '🛡️', value: 'A+', label: 'Security Grade' },
    { icon: '📊', value: '99.9%', label: 'Uptime SLA' },
  ];

  const process = [
    { step: '01', title: 'Discover', desc: 'Deep dive into requirements' },
    { step: '02', title: 'Design', desc: 'Architecture & planning' },
    { step: '03', title: 'Develop', desc: 'Clean, tested code' },
    { step: '04', title: 'Deploy', desc: 'CI/CD & monitoring' },
  ];
</script>

<section class="about" id="about-section">
  <div class="container">
    <!-- Section Header -->
    <div class="section-header" class:visible>
      <div class="section-badge">About</div>
      <h2>the craft behind the code</h2>
      <p>Engineering excellence meets pragmatic delivery</p>
    </div>

    <!-- Bento Grid - Mixed card sizes -->
    <div class="bento-grid" class:visible>
      <!-- Large: Fingerprint Scanner Card -->
      <div class="bento-card card-scanner" style="--delay: 0s">
        <div class="card-glow"></div>
        <div class="scanner-visual">
          <div class="fingerprint">
            <div class="fp-ring fp-1"></div>
            <div class="fp-ring fp-2"></div>
            <div class="fp-ring fp-3"></div>
            <div class="fp-ring fp-4"></div>
            {#if scanActive}
              <div class="scan-line" style="top: {scanProgress}%"></div>
            {/if}
          </div>
          <div class="scanner-data">
            <div class="data-label">Identity Verified</div>
            <div class="data-bar">
              <div class="bar-fill" style="width: {scanProgress}%"></div>
            </div>
            <div class="data-stats">
              <span class="stat-item">
                <span class="stat-dot"></span>
                Senior Engineer
              </span>
              <span class="stat-item">
                <span class="stat-dot green"></span>
                6+ Years
              </span>
            </div>
          </div>
        </div>
        <div class="card-content">
          <h3>Built Different</h3>
          <p>Passionate about clean architecture, performance optimization, and developer experience.</p>
        </div>
      </div>

      <!-- Medium: Skills Meter Card -->
      <div class="bento-card card-skills" style="--delay: 0.1s">
        <div class="skills-header">
          <span class="skills-icon">📊</span>
          <span class="skills-title">Core Stack</span>
        </div>
        <div class="skills-list">
          {#each skills as skill, i}
            <div class="skill-item" style="--delay: {i * 0.1}s">
              <div class="skill-info">
                <span class="skill-name">{skill.name}</span>
                <span class="skill-level">{skill.level}%</span>
              </div>
              <div class="skill-bar">
                <div
                  class="skill-fill"
                  class:animate={visible}
                  style="--level: {skill.level}%; --color: {skill.color}"
                ></div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Small: Metric Cards -->
      {#each metrics as metric, i}
        <div class="bento-card card-metric" style="--delay: {0.2 + i * 0.1}s">
          <span class="metric-icon">{metric.icon}</span>
          <span class="metric-value">{metric.value}</span>
          <span class="metric-label">{metric.label}</span>
        </div>
      {/each}

      <!-- Wide: Process Flow Card -->
      <div class="bento-card card-process" style="--delay: 0.5s">
        <div class="process-header">
          <span class="process-badge">Process</span>
          <h4>how I work</h4>
        </div>
        <div class="process-flow">
          {#each process as step, i}
            <div class="process-step">
              <div class="step-number">{step.step}</div>
              <div class="step-content">
                <span class="step-title">{step.title}</span>
                <span class="step-desc">{step.desc}</span>
              </div>
              {#if i < process.length - 1}
                <div class="step-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>

      <!-- Medium: Quote Card -->
      <div class="bento-card card-quote" style="--delay: 0.6s">
        <div class="quote-mark">"</div>
        <blockquote>
          Code is read more often than it's written. Write for the next developer.
        </blockquote>
        <div class="quote-author">
          <div class="author-avatar">A</div>
          <div class="author-info">
            <span class="author-name">Personal Philosophy</span>
            <span class="author-role">Clean Code Advocate</span>
          </div>
        </div>
      </div>

      <!-- Small: Status Card -->
      <div class="bento-card card-status" style="--delay: 0.7s">
        <div class="status-indicator">
          <span class="status-dot"></span>
          <span class="status-text">Systems Operational</span>
        </div>
        <div class="status-grid">
          <div class="status-item">
            <span class="item-label">API</span>
            <span class="item-value online">●</span>
          </div>
          <div class="status-item">
            <span class="item-label">DB</span>
            <span class="item-value online">●</span>
          </div>
          <div class="status-item">
            <span class="item-label">CDN</span>
            <span class="item-value online">●</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    padding: 100px 0;
    background: var(--bg-base);
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

  /* Bento Grid */
  .bento-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 16px;
    opacity: 0;
    transition: opacity 0.6s ease 0.2s;
  }

  .bento-grid.visible {
    opacity: 1;
  }

  .bento-grid.visible .bento-card {
    opacity: 1;
    transform: translateY(0);
  }

  /* Base Card */
  .bento-card {
    background: var(--bg-elevated);
    border: 3px solid var(--border-color);
    border-radius: 20px;
    padding: 24px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: var(--delay);
    position: relative;
    overflow: hidden;
  }

  .bento-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  .bento-card:hover::before {
    transform: scaleX(1);
  }

  .bento-card:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 var(--color-primary);
    border-color: var(--color-primary);
  }

  /* Card Glow */
  .card-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(217, 119, 6, 0.1) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  .bento-card:hover .card-glow {
    opacity: 1;
  }

  /* Scanner Card - Large */
  .card-scanner {
    grid-column: span 7;
    grid-row: span 2;
    display: flex;
    flex-direction: column;
  }

  .scanner-visual {
    display: flex;
    gap: 24px;
    align-items: center;
    margin-bottom: 20px;
  }

  .fingerprint {
    width: 100px;
    height: 100px;
    position: relative;
    flex-shrink: 0;
  }

  .fp-ring {
    position: absolute;
    border: 2px solid var(--border-color);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: border-color 0.3s ease;
  }

  .fp-1 { width: 100%; height: 100%; }
  .fp-2 { width: 75%; height: 75%; }
  .fp-3 { width: 50%; height: 50%; }
  .fp-4 { width: 25%; height: 25%; }

  .bento-card:hover .fp-ring {
    border-color: var(--color-primary);
    animation: fp-pulse 1.5s ease-in-out infinite;
  }

  @keyframes fp-pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  .scan-line {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--gradient-primary);
    box-shadow: 0 0 10px var(--color-primary);
    transition: top 0.04s linear;
  }

  .scanner-data {
    flex: 1;
  }

  .data-label {
    font-size: var(--text-sm);
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 10px;
  }

  .data-bar {
    height: 6px;
    background: var(--bg-subtle);
    border-radius: 100px;
    overflow: hidden;
    margin-bottom: 12px;
  }

  .bar-fill {
    height: 100%;
    background: var(--gradient-primary);
    border-radius: 100px;
    transition: width 0.1s linear;
  }

  .data-stats {
    display: flex;
    gap: 16px;
  }

  .stat-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: var(--text-xs);
    color: var(--text-muted);
  }

  .stat-dot {
    width: 6px;
    height: 6px;
    background: var(--color-primary);
    border-radius: 50%;
  }

  .stat-dot.green {
    background: #22c55e;
  }

  .card-content h3 {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 8px;
  }

  .card-content p {
    font-size: var(--text-sm);
    color: var(--text-muted);
    line-height: 1.6;
  }

  /* Skills Card */
  .card-skills {
    grid-column: span 5;
    grid-row: span 2;
  }

  .skills-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }

  .skills-icon {
    font-size: 1.25rem;
  }

  .skills-title {
    font-family: var(--font-display);
    font-size: var(--text-base);
    font-weight: 700;
    color: var(--text-primary);
  }

  .skills-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .skill-item {
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.4s ease;
    transition-delay: var(--delay);
  }

  .bento-grid.visible .skill-item {
    opacity: 1;
    transform: translateX(0);
  }

  .skill-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  .skill-name {
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--text-primary);
  }

  .skill-level {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-muted);
  }

  .skill-bar {
    height: 8px;
    background: var(--bg-subtle);
    border-radius: 100px;
    overflow: hidden;
    border: 1px solid var(--border-color);
  }

  .skill-fill {
    height: 100%;
    width: 0;
    background: var(--color);
    border-radius: 100px;
    transition: width 1s ease;
    transition-delay: 0.5s;
  }

  .skill-fill.animate {
    width: var(--level);
  }

  /* Metric Cards - Small */
  .card-metric {
    grid-column: span 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 8px;
    padding: 20px;
  }

  .metric-icon {
    font-size: 1.5rem;
    margin-bottom: 4px;
  }

  .metric-value {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .metric-label {
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Process Card - Wide */
  .card-process {
    grid-column: span 8;
  }

  .process-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }

  .process-badge {
    padding: 4px 10px;
    background: var(--bg-subtle);
    border: 2px solid var(--border-color);
    border-radius: 100px;
    font-size: 0.65rem;
    font-weight: 700;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .process-header h4 {
    font-family: var(--font-display);
    font-size: var(--text-base);
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
  }

  .process-flow {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .process-step {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
  }

  .step-number {
    width: 40px;
    height: 40px;
    background: var(--gradient-primary);
    color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-size: var(--text-sm);
    font-weight: 700;
    margin-bottom: 10px;
    transition: transform 0.3s ease;
  }

  .process-step:hover .step-number {
    transform: rotate(-5deg) scale(1.05);
  }

  .step-title {
    font-size: var(--text-sm);
    font-weight: 700;
    color: var(--text-primary);
    display: block;
    margin-bottom: 4px;
  }

  .step-desc {
    font-size: 0.7rem;
    color: var(--text-muted);
  }

  .step-arrow {
    position: absolute;
    right: -14px;
    top: 12px;
    color: var(--color-primary);
    opacity: 0.5;
    animation: arrow-bounce 2s ease-in-out infinite;
  }

  @keyframes arrow-bounce {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(4px); }
  }

  /* Quote Card */
  .card-quote {
    grid-column: span 4;
    display: flex;
    flex-direction: column;
  }

  .quote-mark {
    font-family: var(--font-display);
    font-size: 3rem;
    line-height: 1;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
  }

  blockquote {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: 1.6;
    font-style: italic;
    margin: 0 0 16px 0;
    flex: 1;
  }

  .quote-author {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .author-avatar {
    width: 36px;
    height: 36px;
    background: var(--gradient-primary);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: var(--text-sm);
  }

  .author-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .author-name {
    font-size: var(--text-xs);
    font-weight: 700;
    color: var(--text-primary);
  }

  .author-role {
    font-size: 0.65rem;
    color: var(--text-muted);
  }

  /* Status Card */
  .card-status {
    grid-column: span 4;
  }

  .status-indicator {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }

  .status-dot {
    width: 8px;
    height: 8px;
    background: #22c55e;
    border-radius: 50%;
    animation: status-pulse 2s ease-in-out infinite;
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
  }

  @keyframes status-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .status-text {
    font-size: var(--text-xs);
    font-weight: 600;
    color: #22c55e;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .status-grid {
    display: flex;
    gap: 12px;
  }

  .status-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 8px;
    background: var(--bg-subtle);
    border-radius: 8px;
  }

  .item-label {
    font-size: 0.65rem;
    color: var(--text-muted);
    text-transform: uppercase;
  }

  .item-value {
    font-size: var(--text-sm);
  }

  .item-value.online {
    color: #22c55e;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .bento-grid {
      grid-template-columns: repeat(6, 1fr);
    }

    .card-scanner { grid-column: span 6; }
    .card-skills { grid-column: span 6; }
    .card-metric { grid-column: span 2; }
    .card-process { grid-column: span 6; }
    .card-quote { grid-column: span 3; }
    .card-status { grid-column: span 3; }
  }

  @media (max-width: 768px) {
    .about {
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

    .bento-grid {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .card-scanner,
    .card-skills,
    .card-metric,
    .card-process,
    .card-quote,
    .card-status {
      grid-column: span 1;
    }

    .card-scanner {
      grid-row: span 1;
    }

    .scanner-visual {
      flex-direction: column;
      text-align: center;
    }

    .fingerprint {
      width: 80px;
      height: 80px;
    }

    .process-flow {
      flex-wrap: wrap;
      gap: 16px;
    }

    .process-step {
      flex: 0 0 calc(50% - 8px);
    }

    .step-arrow {
      display: none;
    }

    .card-metric {
      grid-column: span 1;
    }

    .bento-card {
      padding: 20px;
    }
  }
</style>
