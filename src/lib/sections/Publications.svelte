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

    const section = document.getElementById('publications-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });

  const publications = [
    {
      title: 'Your Tech Stack Doesn\'t Matter',
      description: 'Thoughts on what really matters when building products',
      link: 'https://www.linkedin.com/posts/artur-arslanov_your-tech-stack-doesnt-matter-your-users-activity-7359454836905455616-AvJF',
      featured: true
    },
    {
      title: 'The Myth of the 10x Developer',
      description: 'What makes a developer truly effective',
      link: 'https://www.linkedin.com/posts/artur-arslanov_the-myth-of-the-10x-developer-met-a-10x-activity-7349791548181549056-WR5O'
    }
  ];

  const stats = [
    { value: '1M+', label: 'LinkedIn Views' },
    { value: '2+', label: 'Viral Posts' }
  ];
</script>

<section class="publications" id="publications-section">
  <div class="container">
    <!-- Section Header -->
    <div class="section-header" class:visible>
      <div class="section-badge">Writing</div>
      <h2>thoughts & insights</h2>
      <p>Sharing learnings from building products and leading teams</p>
    </div>

    <!-- Stats -->
    <div class="stats-row" class:visible>
      {#each stats as stat, i}
        <div class="stat-card" style="--delay: {i * 0.1}s">
          <span class="stat-value">{stat.value}</span>
          <span class="stat-label">{stat.label}</span>
        </div>
      {/each}
    </div>

    <!-- Publications -->
    <div class="publications-list" class:visible>
      {#each publications as pub, i}
        <a href={pub.link} target="_blank" rel="noopener noreferrer" class="pub-card" style="--delay: {i * 0.1}s">
          <div class="pub-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </div>
          <div class="pub-content">
            <h3>{pub.title}</h3>
            <p>{pub.description}</p>
          </div>
          <div class="pub-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7"/>
              <path d="M7 7h10v10"/>
            </svg>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .publications {
    padding: 120px 0;
    background: var(--bg-muted);
    position: relative;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
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
    display: inline-block;
    padding: 10px 20px;
    background: var(--bg-subtle);
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
    font-size: clamp(2.5rem, 6vw, 3.5rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 20px;
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
    gap: 24px;
    margin-bottom: 60px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.2s;
  }

  .stats-row.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .stats-row.visible .stat-card {
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--delay);
  }

  .stat-card {
    text-align: center;
    padding: 24px 40px;
    background: var(--bg-elevated);
    border: 3px solid var(--border-color);
    border-radius: 20px;
    box-shadow: var(--shadow-sm);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease;
  }

  .stat-card:hover {
    transform: translateY(-6px) rotate(-1deg);
    box-shadow: var(--shadow-md);
    border-color: var(--color-primary);
  }

  .stat-value {
    display: block;
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
  }

  /* Publications List */
  .publications-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    opacity: 0;
    transition: opacity 0.6s ease 0.3s;
  }

  .publications-list.visible {
    opacity: 1;
  }

  .publications-list.visible .pub-card {
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--delay);
  }

  .pub-card {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 28px;
    background: var(--bg-elevated);
    border: 3px solid var(--border-color);
    border-radius: 20px;
    text-decoration: none;
    color: inherit;
    box-shadow: var(--shadow-md);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
  }

  .pub-card::before {
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

  .pub-card:hover::before {
    transform: scaleX(1);
  }

  .pub-card:hover {
    transform: translateY(-8px) rotate(-0.5deg);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-primary);
  }

  .pub-icon {
    width: 56px;
    height: 56px;
    background: var(--bg-subtle);
    border: 3px solid var(--border-color);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--color-primary);
    box-shadow: var(--shadow-sm);
    transition: all 0.4s ease;
  }

  .pub-card:hover .pub-icon {
    background: var(--gradient-primary);
    color: white;
    transform: translateY(-4px) rotate(-5deg);
    box-shadow: var(--shadow-md);
    border-color: var(--color-primary);
  }

  .pub-content {
    flex: 1;
  }

  .pub-content h3 {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 6px;
  }

  .pub-content p {
    font-size: var(--text-sm);
    color: var(--text-muted);
  }

  .pub-arrow {
    color: var(--text-muted);
    transition: all 0.3s ease;
  }

  .pub-card:hover .pub-arrow {
    color: var(--color-primary);
    transform: translate(4px, -4px);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .publications {
      padding: 80px 0;
    }

    .container {
      padding: 0 1.5rem;
    }

    .section-header {
      margin-bottom: 40px;
    }

    .section-header h2 {
      font-size: 2rem;
    }

    .stats-row {
      flex-direction: row;
      gap: 16px;
      margin-bottom: 40px;
    }

    .stat-card {
      padding: 20px 28px;
    }

    .stat-value {
      font-size: var(--text-xl);
    }

    .publications-list {
      gap: 16px;
    }

    .pub-card {
      padding: 20px;
      gap: 16px;
    }

    .pub-icon {
      width: 48px;
      height: 48px;
    }

    .pub-content h3 {
      font-size: var(--text-base);
    }

    .pub-content p {
      font-size: var(--text-xs);
    }

    .pub-arrow svg {
      width: 20px;
      height: 20px;
    }
  }
</style>
